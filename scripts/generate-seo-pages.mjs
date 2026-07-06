import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const site = {
  origin: "https://drdurairajarjunan.com",
  name: "Dr. Durairaj Arjunan",
  phone: "+91 90412 50378",
  phoneHref: "tel:+919041250378",
  whatsappHref: "https://wa.me/919041250378?text=schedule%20appointment",
  emailHref: "mailto:duraipgi@gmail.com",
  mapHref: "https://maps.app.goo.gl/kianTCpHuHG1sExS7",
  image: "https://drdurairajarjunan.com/assets/durairaj-photo.jpg",
  dateModified: "2026-07-06"
};

const carePages = [
  {
    slug: "obesity-weight-management-coimbatore",
    eyebrow: "Care Area",
    title: "Obesity & Metabolic Syndrome",
    pageTitle: "Obesity and Metabolic Syndrome in Coimbatore",
    label: "Lifestyle, nutrition, exercise, GLP-1/GIP therapy",
    meta:
      "Obesity and metabolic syndrome care-area page for Dr. Durairaj Arjunan, consultant endocrinologist at KMCH, Coimbatore.",
    items: [
      "Lifestyle medicine",
      "Personalized Diet and Medical Nutrition Therapy",
      "Exercise program",
      "Diabetes Reversal Program",
      "Weight Management",
      "Fatty liver disorder (MASLD)"
    ],
    nested: {
      title: "Weight Reduction Therapy",
      items: [
        "Semaglutide - GLP-1 Analogs (Ozempic, Wegovy)",
        "Tirzepatide (Mounjaro, Yurpeak)"
      ]
    }
  },
  {
    slug: "diabetes-specialist-coimbatore",
    eyebrow: "Care Area",
    title: "Diabetes",
    pageTitle: "Diabetes Care Area in Coimbatore",
    label: "Type 1, type 2, gestational and complex diabetes",
    meta:
      "Diabetes care-area page for Dr. Durairaj Arjunan, consultant endocrinologist at KMCH, Coimbatore.",
    items: [
      "Diabetes Reversal",
      "Type 1 Diabetes",
      "Type 2 Diabetes",
      "Gestational Diabetes",
      "Monogenic Diabetes",
      "MODY",
      "LADA",
      "Mitochondrial Diabetes",
      "Lipodystrophy"
    ]
  },
  {
    slug: "adrenal-parathyroid-disorders-coimbatore",
    eyebrow: "Care Area",
    title: "Adrenal and Parathyroid Disorders",
    pageTitle: "Adrenal and Parathyroid Disorders in Coimbatore",
    label: "Cortisol, aldosterone, endocrine hypertension, calcium and parathyroid care",
    meta:
      "Adrenal and parathyroid care-area page for Dr. Durairaj Arjunan, consultant endocrinologist at KMCH, Coimbatore.",
    groups: [
      {
        title: "Adrenal Disorders",
        items: [
          "Cushing Syndrome",
          "Primary Hyperaldosteronism",
          "Rare forms of endocrine hypertension",
          "Pheochromocytoma",
          "Congenital Adrenal Hyperplasia"
        ]
      },
      {
        title: "Parathyroid Disorders",
        items: ["Hyperparathyroidism", "Hypoparathyroidism"]
      }
    ]
  },
  {
    slug: "thyroid-specialist-coimbatore",
    eyebrow: "Care Area",
    title: "Thyroid Disorders",
    pageTitle: "Thyroid Disorders in Coimbatore",
    label: "Hyperthyroidism, hypothyroidism, nodules and cancers",
    meta:
      "Thyroid disorders care-area page for Dr. Durairaj Arjunan, consultant endocrinologist at KMCH, Coimbatore.",
    items: ["Hyper & Hypo Thyroidism", "Thyroid Nodules", "Thyroid Cancers"]
  },
  {
    slug: "pcos-pcod-pmos-endocrinologist-coimbatore",
    eyebrow: "Care Area",
    title: "Testicular and Ovarian Disorders",
    pageTitle: "PCOS, PCOD, PMOS, Testicular and Ovarian Disorders in Coimbatore",
    label: "PCOS/PCOD/PMOS and gonadal endocrine care",
    meta:
      "Testicular and ovarian disorders care-area page for Dr. Durairaj Arjunan, consultant endocrinologist at KMCH, Coimbatore.",
    items: [
      "Polycystic Ovarian Syndrome (PCOS/PCOD/PMOS)",
      "Testicular and ovarian endocrine disorders"
    ]
  },
  {
    slug: "osteoporosis-metabolic-bone-disorders-coimbatore",
    eyebrow: "Care Area",
    title: "Metabolic Bone Disorders",
    pageTitle: "Metabolic Bone Disorders in Coimbatore",
    label: "Bone metabolism, osteoporosis and osteomalacia",
    meta:
      "Metabolic bone disorders care-area page for Dr. Durairaj Arjunan, consultant endocrinologist at KMCH, Coimbatore.",
    items: [
      "Post-menopausal Osteoporosis",
      "Glucocorticoid-induced Osteoporosis",
      "Secondary Osteoporosis",
      "Rickets and Osteomalacia",
      "Rare metabolic bone disorders (MBD)"
    ]
  }
];

const publicationPage = {
  slug: "publications",
  eyebrow: "Research",
  title: "Publications, Academic Work, and Presentations",
  pageTitle: "Publications, Academic Work, and Presentations",
  label: "Research spans diabetes, metabolic bone disease, thyroid and adrenal disease, endocrine oncology, and rare endocrine presentations.",
  meta:
    "Research and publications page for Dr. Durairaj Arjunan, consultant endocrinologist at KMCH, Coimbatore.",
  items: [
    "30+ original studies and publications",
    "NEJM first-author publication",
    "HR-pQCT bone microarchitecture research",
    "Google Scholar Profile",
    "Selected publications",
    "Ongoing work",
    "International presentations",
    "Academic talks"
  ]
};

const pages = [...carePages, publicationPage];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderList(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n");
}

function renderPageNav(activeSlug) {
  return pages
    .map((page) => {
      const current = page.slug === activeSlug ? ' aria-current="page"' : "";
      return `<a href="../${page.slug}/"${current}>${escapeHtml(page.title)}</a>`;
    })
    .join("\n");
}

function renderContent(page) {
  if (page.groups) {
    return page.groups
      .map(
        (group) => `
          <article class="info-block">
            <h2>${escapeHtml(group.title)}</h2>
            <ul class="clean-list">
              ${renderList(group.items)}
            </ul>
          </article>`
      )
      .join("\n");
  }

  const nested = page.nested
    ? `
            <li>
              ${escapeHtml(page.nested.title)}
              <ul>
                ${renderList(page.nested.items)}
              </ul>
            </li>`
    : "";

  return `
          <article class="info-block">
            <h2>${escapeHtml(page.title)}</h2>
            <ul class="clean-list nested-clean-list">
              ${renderList(page.items)}
              ${nested}
            </ul>
          </article>`;
}

function renderJsonLd(page) {
  const url = `${site.origin}/${page.slug}/`;
  const graph = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.pageTitle,
      description: page.meta,
      dateModified: site.dateModified,
      isPartOf: { "@id": `${site.origin}/#website` },
      about: { "@id": `${site.origin}/#doctor` },
      primaryImageOfPage: { "@id": `${site.origin}/#photo` },
      breadcrumb: { "@id": `${url}#breadcrumb` },
      inLanguage: "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${site.origin}/`
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.pageTitle,
          item: url
        }
      ]
    }
  ];

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 8);
}

function renderPage(page) {
  const url = `${site.origin}/${page.slug}/`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(page.pageTitle)} | Dr. Durairaj Arjunan</title>
    <meta name="description" content="${escapeHtml(page.meta)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${url}" />
    <meta property="og:title" content="${escapeHtml(page.pageTitle)} | Dr. Durairaj Arjunan" />
    <meta property="og:description" content="${escapeHtml(page.meta)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${url}" />
    <meta property="og:site_name" content="${escapeHtml(site.name)}" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:image" content="${site.image}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(page.pageTitle)} | Dr. Durairaj Arjunan" />
    <meta name="twitter:description" content="${escapeHtml(page.meta)}" />
    <meta name="twitter:image" content="${site.image}" />
    <link rel="icon" href="../favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="../assets/styles.css?v=20260706-seo-pages" />
    <script type="application/ld+json">
      ${renderJsonLd(page)}
    </script>
  </head>
  <body class="service-page">
    <header class="site-header">
      <a class="brand" href="../" aria-label="Dr. Durairaj Arjunan home">
        <span class="brand-mark">DA</span>
        <span>Dr. Durairaj Arjunan</span>
      </a>
      <div class="header-actions" aria-label="Contact links">
        <div class="quick-contact-links" aria-label="Contact options">
          <a class="button button-primary button-compact quick-call-link" href="${site.phoneHref}" aria-label="${site.phone}" title="Call">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M7.2 4.5 9.8 3.8l1.4 3.7-1.6 1.1c.9 1.8 2.4 3.3 4.2 4.2l1.1-1.6 3.7 1.4-.7 2.6c-.2.7-.9 1.2-1.6 1.1-6.3-.6-11.4-5.7-12-12-.1-.7.4-1.4 1.1-1.6Z" />
            </svg>
            <span>${site.phone}</span>
          </a>
          <a class="quick-icon-button quick-whatsapp-link" href="${site.whatsappHref}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp schedule appointment" title="WhatsApp">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M5.1 19 6.2 15.8A7.7 7.7 0 1 1 9 18.5L5.1 19Z" />
              <path d="M9.4 8.4c.2-.4.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.5.6c.6 1.1 1.5 2 2.7 2.6l.6-.7c.2-.2.5-.3.8-.1l1.5.7c.3.1.4.3.4.6v.4c0 .5-.2.8-.7 1-1.2.4-3.6-.3-5.5-2.2-1.9-1.9-2.6-4.1-2.2-5.1Z" />
            </svg>
            <span class="visually-hidden">WhatsApp</span>
          </a>
          <a class="quick-icon-button" href="${site.emailHref}" aria-label="Email" title="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4 6.5h16v11H4v-11Z" />
              <path d="m5.5 8 6.5 4.6L18.5 8" />
            </svg>
            <span class="visually-hidden">Email</span>
          </a>
          <a class="quick-icon-button" href="${site.mapHref}" target="_blank" rel="noopener noreferrer" aria-label="Open map" title="Map">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11Z" />
              <circle cx="12" cy="10" r="2.1" />
            </svg>
            <span class="visually-hidden">Map</span>
          </a>
        </div>
      </div>
    </header>

    <main>
      <section class="service-hero">
        <div class="container service-hero-grid">
          <div>
            <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
            <h1>${escapeHtml(page.pageTitle)}</h1>
            <p class="lead">${escapeHtml(page.label)}</p>
            <div class="actions">
              <a class="button button-primary" href="../">Back to Main Profile</a>
              <a class="button button-secondary" href="${site.phoneHref}">Call for an Appointment</a>
            </div>
          </div>
          <aside class="service-card">
            <p class="eyebrow">Clinic</p>
            <h2>KMCH Main Center</h2>
            <p>Kovai Medical Center and Hospital, 99, Avanashi Road, Coimbatore-641014.</p>
            <a class="button button-primary full-width" href="${site.phoneHref}">Call ${site.phone}</a>
          </aside>
        </div>
      </section>

      <section class="container service-body">
        <nav class="service-topic-nav" aria-label="Sub pages">
          ${renderPageNav(page.slug)}
        </nav>
        <div class="service-content-grid">
          ${renderContent(page)}
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer-inner">
        <span>Dr. Durairaj Arjunan</span>
        <span>
          <a href="../">Home</a> ·
          <a href="../#appointment">Appointments</a> ·
          <a href="../#publications">Publications</a>
        </span>
      </div>
    </footer>
  </body>
</html>
`;
}

for (const page of pages) {
  const dir = join(process.cwd(), page.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), renderPage(page));
}

const llms = `# Dr. Durairaj Arjunan

Website: ${site.origin}/
Primary profile: Consultant Endocrinologist at KMCH, Coimbatore.
Appointment phone: ${site.phone}
Email: duraipgi@gmail.com
Location: KMCH Main Center, Avanashi Road, Coimbatore-641014, India.

## Key Pages

- Homepage: ${site.origin}/
${pages.map((page) => `- ${page.pageTitle}: ${site.origin}/${page.slug}/`).join("\n")}

## Page Scope

The subpages organize content already present on the main profile page.
`;

writeFileSync(join(process.cwd(), "llms.txt"), llms);

const sitemapUrls = [
  ["", "1.0"],
  ...pages.map((page) => [`${page.slug}/`, page.slug === "publications" ? "0.7" : "0.8"])
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    ([path, priority]) => `  <url>
    <loc>${site.origin}/${path}</loc>
    <lastmod>${site.dateModified}</lastmod>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(process.cwd(), "sitemap.xml"), sitemap);

console.log(`Generated ${pages.length} sub pages, llms.txt, and sitemap.xml`);
