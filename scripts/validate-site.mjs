import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const root = process.cwd();
const pagePaths = [
  "index.html",
  "obesity-weight-management-coimbatore/index.html",
  "diabetes-specialist-coimbatore/index.html",
  "adrenal-parathyroid-disorders-coimbatore/index.html",
  "thyroid-specialist-coimbatore/index.html",
  "pcos-pcod-pmos-endocrinologist-coimbatore/index.html",
  "osteoporosis-metabolic-bone-disorders-coimbatore/index.html",
  "publications/index.html",
  "ai-in-endocrinology/index.html"
];

const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

for (const pagePath of pagePaths) {
  const absolutePath = join(root, pagePath);
  const html = readFileSync(absolutePath, "utf8");
  const label = pagePath;
  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1].replaceAll("&amp;", "&") || "";
  const description = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i)?.[1] || "";
  const h1Count = (html.match(/<h1(?:\s|>)/g) || []).length;

  check(title.length > 0 && title.length <= 60, `${label}: title length ${title.length}`);
  check(description.length > 0 && description.length <= 160, `${label}: description length ${description.length}`);
  check(h1Count === 1, `${label}: expected one H1, found ${h1Count}`);
  check(html.includes("conversion-events.js"), `${label}: missing conversion event script`);
  check(html.includes('data-conversion="click_call"'), `${label}: missing tracked call action`);
  check(html.includes('data-conversion="click_whatsapp"'), `${label}: missing tracked WhatsApp action`);
  check(html.includes('class="appointment-guide"'), `${label}: missing appointment preparation section`);
  check(html.includes('class="mobile-action"'), `${label}: missing mobile appointment actions`);

  for (const tag of html.matchAll(/<a\b[^>]*href="(?:tel:|https:\/\/wa\.me\/)[^"]+"[^>]*>/g)) {
    check(tag[0].includes("data-conversion="), `${label}: untracked appointment link ${tag[0]}`);
  }

  if (!["index.html", "publications/index.html", "ai-in-endocrinology/index.html"].includes(pagePath)) {
    check(html.includes('class="source-section"'), `${label}: missing authoritative sources`);
  }

  if (!["index.html", "publications/index.html"].includes(pagePath)) {
    check(html.includes('class="content-note"'), `${label}: missing clinical profile/update note`);
  }

  for (const script of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(script[1]);
    } catch (error) {
      failures.push(`${label}: invalid JSON-LD (${error.message})`);
    }
  }

  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const reference = match[1].split("?")[0].split("#")[0];
    if (!reference || /^(?:https?:|mailto:|tel:|data:)/.test(reference)) continue;
    const target = resolve(dirname(absolutePath), reference);
    check(existsSync(target), `${label}: missing local reference ${match[1]}`);
  }

  for (const image of html.matchAll(/<img\b[^>]*>/g)) {
    check(/\balt="[^"]*"/.test(image[0]), `${label}: image without alt text`);
  }
}

check(existsSync(join(root, "assets/conversion-events.js")), "missing conversion event module");

const homepage = readFileSync(join(root, "index.html"), "utf8");
const aiPage = readFileSync(join(root, "ai-in-endocrinology/index.html"), "utf8");
const diabetesPage = readFileSync(join(root, "diabetes-specialist-coimbatore/index.html"), "utf8");
const sitemap = readFileSync(join(root, "sitemap.xml"), "utf8");
const llms = readFileSync(join(root, "llms.txt"), "utf8");
const styles = readFileSync(join(root, "assets/styles.css"), "utf8");

check(homepage.includes('class="diabetes-feature"'), "homepage: missing featured diabetes pathway");
check(
  homepage.includes('class="ai-profile-mention"') && homepage.includes('href="ai-in-endocrinology/"'),
  "homepage: missing concise AI in Endocrinology mention"
);
const homepageStoryMarkers = [
  'class="hero-section"',
  'class="trust-strip"',
  'id="about"',
  'class="diabetes-feature"',
  'id="care"',
  'id="credentials"',
  'id="research"',
  'class="ai-profile-mention"',
  'id="prepare"'
];
for (let index = 1; index < homepageStoryMarkers.length; index += 1) {
  check(
    homepage.indexOf(homepageStoryMarkers[index - 1]) < homepage.indexOf(homepageStoryMarkers[index]),
    `homepage: story order is incorrect around ${homepageStoryMarkers[index]}`
  );
}
check(
  styles.includes("text-align: justify") && styles.includes("text-align-last: left") && styles.includes("hyphens: auto"),
  "styles: missing controlled narrative text alignment"
);
check(
  !homepage.includes('id="bone-age-tool"') && !homepage.includes("bone-age-calculator-clarity-master-4k.mp4"),
  "homepage: full Bone Age Calculator tool should be on its dedicated page"
);
check(
  !homepage.includes('href="https://bone-age.neurabrix.co/"'),
  "homepage: should link to the AI profile page instead of directly to the calculator"
);
check(
  aiPage.includes('class="bone-age-feature bone-age-page-feature"') &&
    aiPage.includes('href="https://bone-age.neurabrix.co/"'),
  "AI in Endocrinology page: missing Bone Age Calculator feature"
);
check(
  aiPage.includes("bone-age-calculator-clarity-master-4k.mp4"),
  "AI in Endocrinology page: missing Bone Age Calculator demo video"
);
check(
  aiPage.includes("decision support, not a diagnosis"),
  "AI in Endocrinology page: missing clinical-use warning"
);
check(
  homepage.includes('href="diabetes-specialist-coimbatore/"'),
  "homepage: missing direct diabetes-page link"
);
for (const patientTerm of ["diabetes doctor", "diabetic doctor", "diabetologist", "sugar specialist"]) {
  check(diabetesPage.toLowerCase().includes(patientTerm), `diabetes page: missing patient term ${patientTerm}`);
}
check(diabetesPage.includes("Research Society for the Study of Diabetes in India"), "diabetes page: missing RSSDI source");
check(diabetesPage.includes("American Diabetes Association"), "diabetes page: missing ADA source");
check(
  sitemap.indexOf("diabetes-specialist-coimbatore") < sitemap.indexOf("obesity-weight-management-coimbatore"),
  "sitemap: diabetes page should lead service pages"
);
check(llms.includes("Diabetes is the featured care area"), "llms.txt: missing diabetes priority context");
check(!homepage.includes("Dr_Durairaj_Arjunan_CV_2026_Aug.pdf"), "homepage: downloadable CV should be removed");
check(!existsSync(join(root, "assets/Dr_Durairaj_Arjunan_CV_2026_Aug.pdf")), "downloadable CV asset should be removed");
check(homepage.includes("ITSCON, Chennai"), "homepage: missing 2026 ITSCON roles");
check(homepage.includes("Scientific committees"), "homepage: missing scientific committee work");
for (const professionalDetail of [
  "Dr. Sathinath Mukhopadhyay",
  "Sheshnag Base Camp",
  "12,800 feet",
  "INI-SS AIIMS Merit List",
  "INI-SS Common Merit List",
  "poster display and presentation",
  "Great PGI Quiz",
  "North Zone Hematology Quiz",
  "25th Tamil Nadu State Paediatrics Quiz",
  "First Merit Certificate in Ophthalmology"
]) {
  check(homepage.includes(professionalDetail), `homepage: missing CV-backed professional detail ${professionalDetail}`);
}
for (const doi of [
  "10.1530/eo-25-0100",
  "10.4103/ijem.ijem_45_26",
  "10.1007/s12288-025-02179-5",
  "10.4103/ijemcr.ijemcr_45_25"
]) {
  check(homepage.includes(doi), `homepage: missing recent publication DOI ${doi}`);
}
check(!homepage.includes("9626680378"), "homepage: personal CV phone should not replace clinic appointment details");
for (const privateDetail of ["Subasri", "Native: Kangayam"]) {
  check(!homepage.includes(privateDetail), `homepage: private CV detail should not be published (${privateDetail})`);
}
const publicationBlock = homepage.match(/<ol class="publication-list">([\s\S]*?)<\/ol>/)?.[1] || "";
const publicationCount = (publicationBlock.match(/<li>/g) || []).length;
check(publicationCount === 32, `homepage: expected 32 non-duplicate CV publication records, found ${publicationCount}`);
const academicTalkBlock = homepage.match(/<summary>Academic talks<\/summary>[\s\S]*?<tbody>([\s\S]*?)<\/tbody>/)?.[1] || "";
const academicTalkCount = (academicTalkBlock.match(/<tr>/g) || []).length;
check(academicTalkCount === 30, `homepage: expected all 30 CV academic talks, found ${academicTalkCount}`);
check(llms.includes("does not provide a downloadable CV"), "llms.txt: missing downloadable-CV removal context");
check(llms.includes("dedicated\nAI in Endocrinology page"), "llms.txt: missing AI page context");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Validated ${pagePaths.length} pages: SEO metadata, JSON-LD, local references, conversion actions, appointment guidance and sources.`);
