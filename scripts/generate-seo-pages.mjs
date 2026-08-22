import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const site = {
  origin: "https://drdurairajarjunan.com",
  name: "Dr. Durairaj Arjunan",
  phone: "+91 90412 50378",
  phoneHref: "tel:+919041250378",
  whatsappHref:
    "https://wa.me/919041250378?text=Hello%2C%20I%20would%20like%20to%20check%20appointment%20availability%20with%20Dr.%20Durairaj%20Arjunan%20at%20KMCH.",
  emailHref: "mailto:duraipgi@gmail.com",
  mapHref: "https://maps.app.goo.gl/kianTCpHuHG1sExS7",
  image: "https://drdurairajarjunan.com/assets/durairaj-photo.jpg",
  dateModified: "2026-08-22",
  homepageDateModified: "2026-08-22"
};

const carePages = [
  {
    slug: "obesity-weight-management-coimbatore",
    navTitle: "Obesity & Weight",
    eyebrow: "Care Area",
    title: "Obesity & Metabolic Syndrome",
    pageTitle: "Obesity Specialist and Weight Loss Doctor in Coimbatore",
    seoTitle: "Obesity Specialist & Weight Loss Doctor in Coimbatore",
    label: "Medical weight management for obesity, metabolic syndrome and related hormone concerns",
    meta:
      "Consult an obesity specialist and weight loss doctor at KMCH Coimbatore for medical weight management, metabolic syndrome and hormone evaluation.",
    intro: [
      "Dr. Durairaj Arjunan is a consultant endocrinologist at KMCH, Coimbatore, with a clinical and research focus that includes obesity, diabetes and metabolic health. He evaluates weight concerns in the context of the whole person, including blood glucose, thyroid function, PCOS, fatty liver disease, medicines and other factors that may affect weight.",
      "People looking for an obesity doctor, weight loss doctor, weight management specialist, bariatric physician or metabolic specialist in Coimbatore may be seeking medical, non-surgical care. Treatment recommendations depend on a clinical assessment; weight-loss medicines are not suitable for everyone and should be used only with medical supervision."
    ],
    aliases: [
      "obesity doctor in Coimbatore",
      "weight loss doctor in Coimbatore",
      "weight management specialist in Coimbatore",
      "metabolic specialist in Coimbatore"
    ],
    whenToConsult: [
      "Weight gain with diabetes, prediabetes, PCOS, fatty liver disease or high blood pressure",
      "Difficulty losing weight despite sustained nutrition and activity changes",
      "Concern that thyroid, cortisol or another hormone condition may be affecting weight",
      "Questions about whether prescription weight-management treatment is appropriate"
    ],
    approach: [
      "Medical history, weight trajectory and current medicine review",
      "Assessment for metabolic and endocrine contributors when clinically indicated",
      "Individualized nutrition, activity and behavior goals",
      "Discussion of evidence-based medicines, benefits, limitations and follow-up when appropriate"
    ],
    faqs: [
      {
        q: "Which doctor should I consult for obesity or difficult weight loss?",
        a: "An endocrinologist can assess obesity alongside diabetes, thyroid disease, PCOS and other metabolic or hormonal concerns. Some patients may also need coordinated support from a dietitian, psychologist, sleep specialist or bariatric surgeon."
      },
      {
        q: "Is an obesity specialist the same as a bariatric surgeon?",
        a: "No. An endocrinologist or obesity-medicine doctor provides medical, non-surgical assessment and treatment. A bariatric surgeon evaluates surgical weight-loss options. The appropriate route depends on your health, goals and clinical assessment."
      },
      {
        q: "Can I take semaglutide or tirzepatide for weight loss?",
        a: "These prescription medicines may be considered for some patients after a medical assessment. Suitability, side effects, contraindications, dose escalation and ongoing monitoring should be discussed with a qualified doctor."
      },
      {
        q: "Where can I consult a weight loss doctor at KMCH Coimbatore?",
        a: "Dr. Durairaj Arjunan consults at KMCH Main Center, 99 Avanashi Road, Coimbatore. Call +91 90412 50378 for current appointment availability."
      }
    ],
    sources: [
      {
        title: "Treatment for Overweight and Obesity",
        publisher: "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)",
        url: "https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity/treatment"
      }
    ],
    items: [
      "Lifestyle medicine",
      "Personalized Diet and Medical Nutrition Therapy",
      "Exercise program",
      "Diabetes remission assessment and support",
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
    priority: 1,
    navTitle: "Diabetes",
    eyebrow: "Care Area",
    title: "Diabetes",
    pageTitle: "Diabetes Specialist and Diabetologist in Coimbatore",
    seoTitle: "Diabetes Specialist in Coimbatore | Dr Durairaj Arjunan",
    label: "Diabetes specialist care for blood sugar, HbA1c, insulin, type 1, type 2, gestational and complex diabetes",
    meta:
      "Consult Dr. Durairaj Arjunan, diabetes specialist and endocrinologist at KMCH Coimbatore, for type 1, type 2, gestational and complex diabetes.",
    intro: [
      "Dr. Durairaj Arjunan is a consultant endocrinologist and diabetes specialist at KMCH, Coimbatore. His diabetes practice includes type 1 and type 2 diabetes, diabetes in pregnancy, young-onset diabetes and less common forms such as MODY, LADA, mitochondrial diabetes and lipodystrophy.",
      "Diabetes care may include reviewing fasting and post-meal glucose, HbA1c, medicines, insulin, low-glucose episodes, continuous glucose monitoring and risk factors for kidney, eye, nerve, foot and cardiovascular complications.",
      "Patients may search for a diabetes doctor, diabetic doctor, diabetologist, sugar doctor or sugar specialist. These terms commonly describe a clinician who manages diabetes and high blood glucose; an endocrinologist also has specialist training across the wider hormone system."
    ],
    aliases: [
      "diabetes doctor in Coimbatore",
      "diabetes specialist doctor in Coimbatore",
      "diabetic doctor in Coimbatore",
      "diabetologist in Coimbatore",
      "sugar doctor in Coimbatore",
      "sugar specialist in Coimbatore",
      "diabetes doctor near me",
      "diabetes doctor at KMCH Coimbatore"
    ],
    whenToConsult: [
      "Newly detected high fasting glucose, post-meal glucose or HbA1c",
      "Blood sugar that remains above target despite current treatment",
      "Repeated low blood sugar, insulin questions or glucose variability",
      "Diabetes during pregnancy or diabetes diagnosed at a young age",
      "Possible kidney, eye, nerve, foot or cardiovascular complications"
    ],
    approach: [
      "Clarify the type of diabetes and individual treatment targets",
      "Review glucose records, medicines, nutrition, activity and hypoglycemia risk",
      "Assess complication screening and relevant cardiovascular or kidney risk",
      "Create a follow-up plan that may include tablets, injections, insulin or glucose-monitoring technology"
    ],
    preparation: [
      "Recent fasting glucose, post-meal glucose, HbA1c, kidney, lipid and other available blood-test reports",
      "Current prescriptions, insulin names and doses, and any medicines or supplements taken",
      "Glucometer readings, glucose diary or continuous glucose-monitoring reports when available",
      "Notes about low-glucose episodes, symptoms, meal timing and previous hospital treatment",
      "Eye, kidney, nerve, foot, pregnancy or cardiovascular reports relevant to diabetes care"
    ],
    faqs: [
      {
        q: "What is the difference between a diabetologist and an endocrinologist?",
        a: "Both may treat diabetes. An endocrinologist has specialist training across diabetes and the wider hormone system, including thyroid, adrenal, pituitary, reproductive and metabolic disorders."
      },
      {
        q: "Is a sugar specialist the same as a diabetes specialist?",
        a: "Yes. “Sugar doctor” and “sugar specialist” are common informal search terms for a doctor who evaluates and treats diabetes and high blood glucose."
      },
      {
        q: "When should I see a diabetes specialist?",
        a: "Consider specialist review for uncertain diabetes type, difficult glucose control, repeated low glucose, pregnancy, insulin management, young-onset diabetes or possible complications. Urgent symptoms require prompt medical care."
      },
      {
        q: "What should I bring to a diabetes consultation?",
        a: "Bring recent glucose and HbA1c reports, your prescription and insulin list, glucometer or continuous glucose-monitoring records, and relevant eye, kidney, nerve, foot, pregnancy or cardiovascular reports. Do not change treatment or fast unless the clinic has instructed you to do so."
      },
      {
        q: "Can an endocrinologist review insulin and continuous glucose monitoring?",
        a: "Yes. A diabetes consultation may include review of insulin timing and doses, glucose patterns, low-glucose risk and data from a glucometer or continuous glucose monitor when available. Any treatment change must be individualized during a clinical consultation."
      },
      {
        q: "Where can I consult a diabetes specialist at KMCH Coimbatore?",
        a: "Dr. Durairaj Arjunan consults at KMCH Main Center, 99 Avanashi Road, Coimbatore. Call +91 90412 50378 for current appointment availability."
      }
    ],
    sources: [
      {
        title: "Diabetes Overview",
        publisher: "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)",
        url: "https://www.niddk.nih.gov/health-information/diabetes/overview"
      },
      {
        title: "Public Awareness Leaflets",
        publisher: "Research Society for the Study of Diabetes in India (RSSDI)",
        url: "https://www.rssdi.in/newwebsite/public-awareness-leaflets.php"
      },
      {
        title: "Standards of Care in Diabetes—2026",
        publisher: "American Diabetes Association",
        url: "https://professional.diabetes.org/standards-of-care"
      }
    ],
    items: [
      "Diabetes remission assessment and support",
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
    navTitle: "Adrenal & Parathyroid",
    eyebrow: "Care Area",
    title: "Adrenal and Parathyroid Disorders",
    pageTitle: "Adrenal and Parathyroid Disorders in Coimbatore",
    seoTitle: "Adrenal & Parathyroid Specialist Coimbatore | Dr Arjunan",
    label: "Cortisol, aldosterone, endocrine hypertension, calcium and parathyroid care",
    meta:
      "Consult an endocrinologist at KMCH Coimbatore for adrenal, cortisol, endocrine hypertension, calcium and parathyroid disorder evaluation.",
    intro: [
      "Adrenal and parathyroid disorders can affect blood pressure, potassium, cortisol, calcium and bone health. Dr. Durairaj Arjunan evaluates suspected endocrine hypertension, cortisol disorders, adrenal masses and parathyroid conditions at KMCH, Coimbatore."
    ],
    aliases: ["adrenal specialist in Coimbatore", "parathyroid specialist in Coimbatore", "hormone doctor in Coimbatore"],
    whenToConsult: [
      "Difficult-to-control blood pressure, especially with low potassium",
      "An adrenal nodule or mass found on imaging",
      "Unexplained high or low calcium",
      "Clinical concern for cortisol, aldosterone or parathyroid hormone excess or deficiency"
    ],
    approach: [
      "Review symptoms, medicines, imaging and prior hormone tests",
      "Plan confirmatory biochemical testing when clinically indicated",
      "Coordinate imaging, genetic evaluation or surgical opinion when appropriate"
    ],
    faqs: [
      {
        q: "Which doctor treats adrenal and parathyroid disorders?",
        a: "An endocrinologist evaluates hormone conditions involving the adrenal and parathyroid glands and coordinates additional imaging or surgical care when needed."
      },
      {
        q: "Can hormone disorders cause high blood pressure?",
        a: "Yes. Conditions involving aldosterone, cortisol or catecholamines can cause endocrine hypertension in some people. Testing should be guided by a clinical assessment."
      }
    ],
    sources: [
      {
        title: "Adrenal Insufficiency and Addison's Disease",
        publisher: "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)",
        url: "https://www.niddk.nih.gov/health-information/endocrine-diseases/adrenal-insufficiency-addisons-disease/definition-facts"
      },
      {
        title: "Primary Hyperparathyroidism",
        publisher: "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)",
        url: "https://www.niddk.nih.gov/health-information/endocrine-diseases/primary-hyperparathyroidism"
      }
    ],
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
    navTitle: "Thyroid",
    eyebrow: "Care Area",
    title: "Thyroid Disorders",
    pageTitle: "Thyroid Specialist and Thyroid Doctor in Coimbatore",
    seoTitle: "Thyroid Specialist in Coimbatore | Dr Durairaj Arjunan",
    label: "Endocrinology care for hypothyroidism, hyperthyroidism, thyroid nodules and thyroid cancer evaluation",
    meta:
      "Consult a thyroid specialist and endocrinologist at KMCH Coimbatore for hypothyroidism, hyperthyroidism, thyroid nodules and thyroid cancer evaluation.",
    intro: [
      "Dr. Durairaj Arjunan is a consultant endocrinologist at KMCH, Coimbatore, providing specialist evaluation for underactive and overactive thyroid, thyroid nodules, goitre and thyroid cancer-related endocrine care. Assessment is based on symptoms, examination, thyroid-function results and imaging when needed.",
      "Patients often search for a thyroid doctor, thyroid specialist, hormone doctor or endocrinologist in Coimbatore. Endocrinologists are physicians trained to diagnose and manage thyroid and other hormone disorders; thyroid surgery, when indicated, is performed by an appropriately qualified surgeon."
    ],
    aliases: [
      "thyroid doctor in Coimbatore",
      "thyroid specialist at KMCH Coimbatore",
      "endocrinologist for thyroid in Coimbatore",
      "hormone specialist in Coimbatore"
    ],
    whenToConsult: [
      "Abnormal TSH, T4 or T3 results",
      "Persistent symptoms with known hypothyroidism or hyperthyroidism",
      "A thyroid swelling, goitre or nodule",
      "Thyroid concerns during pregnancy or while planning pregnancy",
      "A second opinion about thyroid cancer-related hormone management"
    ],
    approach: [
      "Review symptoms, medicines, prior laboratory results and ultrasound findings",
      "Interpret thyroid tests in the context of age, pregnancy and other health conditions",
      "Plan additional antibody tests, ultrasound or needle sampling only when indicated",
      "Coordinate nuclear medicine or surgical review when appropriate"
    ],
    faqs: [
      {
        q: "Which doctor should I consult for thyroid problems?",
        a: "An endocrinologist is a hormone specialist who treats hypothyroidism, hyperthyroidism and many thyroid-nodule concerns. A surgeon or nuclear-medicine specialist may also be involved when clinically indicated."
      },
      {
        q: "Does every thyroid nodule need surgery?",
        a: "No. Evaluation usually considers ultrasound features, size, symptoms and sometimes needle-sampling results. Many nodules can be monitored, while others need additional treatment."
      },
      {
        q: "Can a thyroid disorder cause weight change?",
        a: "Both underactive and overactive thyroid can affect weight, but weight change has many possible causes. Thyroid tests and a clinical assessment help determine whether thyroid disease is contributing."
      },
      {
        q: "Where can I consult a thyroid specialist at KMCH Coimbatore?",
        a: "Dr. Durairaj Arjunan consults at KMCH Main Center, 99 Avanashi Road, Coimbatore. Call +91 90412 50378 for current appointment availability."
      }
    ],
    sources: [
      {
        title: "Hypothyroidism (Underactive Thyroid)",
        publisher: "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)",
        url: "https://www.niddk.nih.gov/health-information/endocrine-diseases/hypothyroidism"
      },
      {
        title: "Thyroid Nodules",
        publisher: "American Thyroid Association",
        url: "https://www.thyroid.org/thyroid-nodules/"
      }
    ],
    items: ["Hypothyroidism", "Hyperthyroidism", "Graves' disease", "Thyroid Nodules", "Goitre", "Thyroid Cancers"]
  },
  {
    slug: "pcos-pcod-pmos-endocrinologist-coimbatore",
    navTitle: "PCOS & Gonadal",
    eyebrow: "Care Area",
    title: "Testicular and Ovarian Disorders",
    pageTitle: "PCOS, PCOD, PMOS, Testicular and Ovarian Disorders in Coimbatore",
    seoTitle: "PCOS Specialist in Coimbatore | Dr Durairaj Arjunan",
    label: "PCOS/PCOD/PMOS and gonadal endocrine care",
    meta:
      "Consult a PCOS and hormone specialist at KMCH Coimbatore for PCOS/PCOD, insulin resistance and testicular or ovarian endocrine disorders.",
    intro: [
      "PCOS is a common hormone and metabolic condition that may involve irregular periods, excess androgen symptoms, insulin resistance, weight concerns and fertility questions. Endocrinology review can help assess the metabolic and hormonal picture alongside gynecology care when needed."
    ],
    aliases: ["PCOS specialist in Coimbatore", "PCOD doctor in Coimbatore", "hormone doctor for PCOS in Coimbatore"],
    whenToConsult: [
      "Irregular periods with acne, excess facial hair or weight concerns",
      "Possible insulin resistance, prediabetes or diabetes with PCOS",
      "Questions about a testicular, ovarian or sex-hormone disorder"
    ],
    approach: [
      "Clinical review and targeted hormone or metabolic tests when indicated",
      "Individualized discussion of lifestyle, medicines and long-term metabolic risk",
      "Coordination with gynecology, fertility or other specialists when appropriate"
    ],
    faqs: [
      {
        q: "Can an endocrinologist treat PCOS or PCOD?",
        a: "Yes. An endocrinologist can evaluate hormonal and metabolic aspects of PCOS, including androgen symptoms, insulin resistance and diabetes risk, and coordinate gynecology care when needed."
      },
      {
        q: "Are PCOS and PCOD the same?",
        a: "PCOS is the standard medical term. PCOD is commonly used in everyday conversation for a similar group of symptoms, but a clinician should confirm the diagnosis and exclude other causes."
      }
    ],
    sources: [
      {
        title: "Polycystic Ovary Syndrome",
        publisher: "World Health Organization",
        url: "https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome"
      }
    ],
    items: [
      "Polycystic Ovarian Syndrome (PCOS/PCOD/PMOS)",
      "Testicular and ovarian endocrine disorders"
    ]
  },
  {
    slug: "osteoporosis-metabolic-bone-disorders-coimbatore",
    navTitle: "Bone Health",
    eyebrow: "Care Area",
    title: "Metabolic Bone Disorders",
    pageTitle: "Metabolic Bone Disorders in Coimbatore",
    seoTitle: "Osteoporosis Specialist in Coimbatore | Dr Durairaj Arjunan",
    label: "Bone metabolism, osteoporosis and osteomalacia",
    meta:
      "Consult an osteoporosis and metabolic bone specialist at KMCH Coimbatore for fragility fractures, secondary osteoporosis and osteomalacia.",
    intro: [
      "Metabolic bone care includes osteoporosis and bone disease caused by hormones, medicines or mineral disorders. Dr. Durairaj Arjunan's academic work includes bone microarchitecture and osteoporosis across endocrine conditions."
    ],
    aliases: ["osteoporosis specialist in Coimbatore", "metabolic bone specialist in Coimbatore", "bone hormone doctor in Coimbatore"],
    whenToConsult: [
      "A fragility fracture or unexpectedly low bone density",
      "Osteoporosis related to menopause, steroids or an endocrine disorder",
      "Possible rickets, osteomalacia or abnormal calcium and phosphate results"
    ],
    approach: [
      "Review fracture history, medicines, diet, risk factors and bone-density results",
      "Assess secondary endocrine or metabolic causes when indicated",
      "Discuss individualized fracture-prevention and treatment options"
    ],
    faqs: [
      {
        q: "Which doctor treats osteoporosis caused by hormone problems?",
        a: "An endocrinologist can evaluate osteoporosis and metabolic bone disease, particularly when thyroid, parathyroid, adrenal, gonadal or medicine-related causes are possible."
      },
      {
        q: "Who should be evaluated after a fragility fracture?",
        a: "Adults with a fracture after a low-impact fall or minor injury may benefit from osteoporosis assessment. The timing and tests depend on age, fracture type and other risk factors."
      }
    ],
    sources: [
      {
        title: "Bone Health and Osteoporosis",
        publisher: "National Institute of Arthritis and Musculoskeletal and Skin Diseases (NIAMS)",
        url: "https://www.niams.nih.gov/health-topics/bone-health-and-osteoporosis"
      }
    ],
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
  navTitle: "Publications",
  eyebrow: "Research",
  title: "Publications, Academic Work, and Presentations",
  pageTitle: "Publications, Academic Work, and Presentations",
  seoTitle: "Dr Durairaj Arjunan Publications | Endocrinology Research",
  label: "Research spans diabetes, metabolic bone disease, thyroid and adrenal disease, endocrine oncology, and rare endocrine presentations.",
  meta:
    "Research and publications page for Dr. Durairaj Arjunan, consultant endocrinologist at KMCH, Coimbatore.",
  dateModified: "2026-08-22",
  items: [
    "30+ studies and publications listed in the August 2026 CV",
    "2026 research in Endocrine Oncology and the Indian Journal of Endocrinology and Metabolism",
    "NEJM first-author publication",
    "HR-pQCT bone microarchitecture research",
    "Google Scholar Profile",
    "Selected publications",
    "Ongoing work",
    "International presentations and 2026 national conference roles",
    "Scientific committee work",
    "Professional profile reconciled with the August 2026 curriculum vitae",
    "Academic talks"
  ]
};

const aiEndocrinologyPage = {
  slug: "ai-in-endocrinology",
  navTitle: "AI in Endocrinology",
  eyebrow: "Clinical AI",
  title: "AI in Endocrinology",
  pageTitle: "AI in Endocrinology",
  seoTitle: "AI in Endocrinology | Dr Durairaj Arjunan",
  label: "Clinician-led exploration of responsible artificial intelligence for endocrine care",
  meta:
    "Explore Dr. Durairaj Arjunan's interest in AI in endocrinology and the clinician-guided Neurabrix Bone Age Calculator workflow.",
  dateModified: "2026-08-22",
  items: []
};

const pages = [
  ...[...carePages].sort((a, b) => (b.priority || 0) - (a.priority || 0)),
  aiEndocrinologyPage,
  publicationPage
];

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
      return `<a href="../${page.slug}/"${current}>${escapeHtml(page.navTitle || page.title)}</a>`;
    })
    .join("\n");
}

function renderContent(page) {
  if (page.slug === "ai-in-endocrinology") {
    return `<article class="service-introduction ai-introduction">
        <p class="eyebrow">Clinician-led technology</p>
        <p>Artificial intelligence can support selected parts of endocrine assessment when it is used transparently, reviewed by a qualified clinician, and interpreted alongside the patient's history, examination, and investigations.</p>
        <p>This page presents Dr. Durairaj Arjunan's work and interest at the intersection of endocrinology and responsible clinical AI. The current featured application is a clinician-guided bone age workflow.</p>
      </article>
      <section class="bone-age-feature bone-age-page-feature" aria-labelledby="bone-age-heading">
        <div class="bone-age-feature-grid">
          <div class="bone-age-copy">
            <p class="eyebrow">Featured Clinical Decision-Support Tool</p>
            <h2 id="bone-age-heading">Neurabrix Bone Age Calculator</h2>
            <p>Bone age is an estimate of skeletal maturity based on a hand and wrist radiograph. Comparing skeletal age with chronological age can help clinicians assess whether a child's bones are maturing as expected.</p>
            <p>This comparison can add useful context when evaluating growth, pubertal timing, and endocrine conditions. The Neurabrix tool supports the review workflow with an age estimate, range, and reference images for clinician assessment.</p>
            <p class="bone-age-note">The result is decision support, not a diagnosis. It should be interpreted with the child's history, examination, and other investigations by an appropriately trained clinician.</p>
            <div class="actions">
              <a class="button button-primary" href="https://bone-age.neurabrix.co/" target="_blank" rel="noopener noreferrer">Open the Calculator on Neurabrix</a>
            </div>
          </div>
          <div class="bone-age-demo" aria-labelledby="bone-age-demo-heading">
            <div class="bone-age-demo-heading">
              <p class="eyebrow">Demo Video</p>
              <h3 id="bone-age-demo-heading">See the guided workflow</h3>
            </div>
            <video controls playsinline preload="metadata" poster="https://bone-age.neurabrix.co/manual/media/bone-age-calculator-clarity-preview.gif" aria-label="Guided Bone Age Calculator demo from radiograph upload to clinician review">
              <source src="https://bone-age.neurabrix.co/manual/media/bone-age-calculator-clarity-master-4k.mp4" type="video/mp4" />
              Your browser cannot play this video. <a href="https://bone-age.neurabrix.co/manual/">Watch the Bone Age Calculator demo on Neurabrix</a>.
            </video>
            <a class="bone-age-demo-link" href="https://bone-age.neurabrix.co/manual/" target="_blank" rel="noopener noreferrer">View the complete demo guide on Neurabrix <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
      <article class="info-block ai-principles">
        <h2>Responsible clinical use</h2>
        <ul class="clean-list">
          <li>Use AI output as supporting information, not as a standalone diagnosis.</li>
          <li>Review image quality, clinical context, and any uncertainty before acting.</li>
          <li>Protect patient privacy and use appropriate clinical governance.</li>
          <li>Seek specialist assessment when growth, puberty, or hormone concerns require evaluation.</li>
        </ul>
      </article>
      <article class="info-block ai-profile-context">
        <h2>Clinical context</h2>
        <p>Bone age assessment may form one part of a broader endocrine evaluation. The appropriate investigation and interpretation depend on the individual clinical question.</p>
        <p class="content-note">Clinical profile: Dr. Durairaj Arjunan, MBBS, MD Internal Medicine, DM Endocrinology. Page updated 2026-08-22. This general information is not a diagnosis or treatment plan.</p>
      </article>`;
  }

  const intro = page.intro
    ? `<article class="service-introduction">
        <p class="eyebrow">Specialist Care at KMCH Coimbatore</p>
        ${page.intro.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n")}
        <p class="search-language"><strong>Related patient searches:</strong> ${page.aliases
          .map((alias) => escapeHtml(alias))
          .join(" · ")}</p>
      </article>`
    : "";

  if (page.groups) {
    const groups = page.groups
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

    return `${intro}${groups}${renderPatientGuidance(page)}${renderPreparation(page)}${renderFaqs(page)}${renderSources(page)}`;
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

  const focusAreas = `
          <article class="info-block">
            <h2>Conditions and care areas</h2>
            <ul class="clean-list nested-clean-list">
              ${renderList(page.items)}
              ${nested}
            </ul>
          </article>`;

  return `${intro}${focusAreas}${renderPatientGuidance(page)}${renderPreparation(page)}${renderFaqs(page)}${renderSources(page)}`;
}

function renderPatientGuidance(page) {
  if (!page.whenToConsult || !page.approach) {
    return "";
  }

  return `
          <article class="info-block">
            <h2>When to consult</h2>
            <ul class="clean-list">
              ${renderList(page.whenToConsult)}
            </ul>
          </article>
          <article class="info-block">
            <h2>What specialist review may include</h2>
            <ul class="clean-list">
              ${renderList(page.approach)}
            </ul>
          </article>`;
}

function renderPreparation(page) {
  if (!page.preparation?.length) {
    return "";
  }

  return `
          <article class="info-block diabetes-preparation">
            <h2>What to bring to a diabetes consultation</h2>
            <ul class="clean-list">
              ${renderList(page.preparation)}
            </ul>
          </article>`;
}

function renderFaqs(page) {
  if (!page.faqs?.length) {
    return "";
  }

  return `
          <section class="faq-section" aria-labelledby="faq-heading">
            <p class="eyebrow">Patient Questions</p>
            <h2 id="faq-heading">Frequently asked questions</h2>
            <div class="faq-list">
              ${page.faqs
                .map(
                  (faq) => `<details class="faq-item">
                <summary>${escapeHtml(faq.q)}</summary>
                <p>${escapeHtml(faq.a)}</p>
              </details>`
                )
                .join("\n")}
            </div>
            <p class="medical-note">This page provides general information and does not replace an individual medical consultation. Seek urgent medical care for severe or rapidly worsening symptoms.</p>
          </section>`;
}

function renderSources(page) {
  if (!page.sources?.length) {
    return "";
  }

  return `
          <section class="source-section" aria-labelledby="source-heading">
            <p class="eyebrow">Trusted Sources</p>
            <h2 id="source-heading">Patient information references</h2>
            <ul class="source-list">
              ${page.sources
                .map(
                  (source) => `<li>
                <a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.title)}</a>
                <span>${escapeHtml(source.publisher)}</span>
              </li>`
                )
                .join("\n")}
            </ul>
            <p class="content-note">Clinical profile: Dr. Durairaj Arjunan, MBBS, MD Internal Medicine, DM Endocrinology. Page updated ${site.dateModified}. This general information is not a diagnosis or treatment plan.</p>
          </section>`;
}

function renderAppointmentGuide() {
  return `<section class="appointment-guide" aria-labelledby="prepare-heading">
        <div class="container">
          <div class="appointment-guide-heading">
            <div>
              <p class="eyebrow">Plan Your Visit</p>
              <h2 id="prepare-heading">Prepare for your endocrinology appointment</h2>
            </div>
            <p>Bringing a concise medical record can make the consultation more useful. Do not stop medicines or fast for tests unless the clinic has specifically instructed you to do so.</p>
          </div>
          <div class="appointment-guide-grid">
            <article>
              <h3>Bring with you</h3>
              <ul>
                <li>Current prescriptions and a complete medicine or supplement list</li>
                <li>Recent blood-test, scan, biopsy, discharge and referral reports</li>
                <li>Previous glucose, blood-pressure, weight or symptom records when relevant</li>
              </ul>
            </article>
            <article>
              <h3>Clinic details</h3>
              <p><strong>KMCH Main Center</strong><br />99, Avanashi Road, Coimbatore-641014.</p>
              <p>Tamil, English, Hindi, Punjabi and Bengali consultations are listed on the profile. Call or WhatsApp to confirm current availability.</p>
            </article>
          </div>
          <div class="appointment-guide-actions">
            <a class="button button-primary" href="${site.phoneHref}" data-conversion="click_call" data-placement="preparation">Call ${site.phone}</a>
            <a class="button button-whatsapp" href="${site.whatsappHref}" target="_blank" rel="noopener noreferrer" data-conversion="click_whatsapp" data-placement="preparation">WhatsApp for Appointment</a>
            <a class="button button-secondary" href="${site.mapHref}" target="_blank" rel="noopener noreferrer" data-conversion="click_directions" data-placement="preparation">Open KMCH Map</a>
          </div>
        </div>
      </section>`;
}

function renderJsonLd(page) {
  const url = `${site.origin}/${page.slug}/`;
  const graph = [
    {
      "@type": page.faqs ? "MedicalWebPage" : "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.pageTitle,
      description: page.meta,
      dateModified: page.dateModified || site.dateModified,
      isPartOf: { "@id": `${site.origin}/#website` },
      about: { "@id": `${site.origin}/#doctor` },
      primaryImageOfPage: { "@id": `${site.origin}/#photo` },
      breadcrumb: { "@id": `${url}#breadcrumb` },
      inLanguage: "en-IN",
      ...(page.sources?.length ? { citation: page.sources.map((source) => source.url) } : {}),
      ...(page.faqs ? { mainEntity: { "@id": `${url}#faq` } } : {})
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
    },
    ...(page.faqs
      ? [
          {
            "@type": "FAQPage",
            "@id": `${url}#faq`,
            mainEntity: page.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a
              }
            }))
          }
        ]
      : []),
    {
      "@type": "Physician",
      "@id": `${site.origin}/#doctor`,
      name: site.name,
      url: `${site.origin}/`,
      image: { "@id": `${site.origin}/#photo` },
      description: "Consultant endocrinologist at KMCH, Coimbatore, with MD Internal Medicine and DM Endocrinology training from PGIMER, Chandigarh.",
      telephone: "+919041250378",
      medicalSpecialty: "Endocrinology",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kovai Medical Center and Hospital, 99, Avanashi Road",
        addressLocality: "Coimbatore",
        postalCode: "641014",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN"
      },
      areaServed: { "@type": "City", name: "Coimbatore" },
      hasMap: site.mapHref,
      sameAs: [
        "https://www.linkedin.com/in/durairaj-arjunan-57b074155/",
        "https://scholar.google.com/citations?hl=en&user=qjhnmsIAAAAJ&view_op=list_works",
        "https://www.docindia.org/doctors/coimbatore/dr-durairaj-arjunan-endocrinology",
        "https://www.researchgate.net/profile/Durairaj-Arjunan"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${site.origin}/#website`,
      url: `${site.origin}/`,
      name: site.name,
      inLanguage: "en-IN"
    },
    {
      "@type": "ImageObject",
      "@id": `${site.origin}/#photo`,
      url: site.image,
      caption: "Dr. Durairaj Arjunan, consultant endocrinologist at KMCH, Coimbatore"
    }
  ];

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 8);
}

function renderPage(page) {
  const url = `${site.origin}/${page.slug}/`;
  const seoTitle = page.seoTitle || `${page.pageTitle} | Dr. Durairaj Arjunan`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(seoTitle)}</title>
    <meta name="description" content="${escapeHtml(page.meta)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${url}" />
    <meta property="og:title" content="${escapeHtml(seoTitle)}" />
    <meta property="og:description" content="${escapeHtml(page.meta)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${url}" />
    <meta property="og:site_name" content="${escapeHtml(site.name)}" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:image" content="${site.image}" />
    <meta property="og:image:alt" content="Dr. Durairaj Arjunan, endocrinologist at KMCH Coimbatore" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(seoTitle)}" />
    <meta name="twitter:image:alt" content="Dr. Durairaj Arjunan, endocrinologist at KMCH Coimbatore" />
    <meta name="twitter:description" content="${escapeHtml(page.meta)}" />
    <meta name="twitter:image" content="${site.image}" />
    <link rel="icon" href="../favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="../assets/styles.css?v=20260822-align" />
    <script src="../assets/conversion-events.js?v=20260815" defer></script>
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
          <a class="button button-primary button-compact quick-call-link" href="${site.phoneHref}" aria-label="${site.phone}" title="Call" data-conversion="click_call" data-placement="header">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M7.2 4.5 9.8 3.8l1.4 3.7-1.6 1.1c.9 1.8 2.4 3.3 4.2 4.2l1.1-1.6 3.7 1.4-.7 2.6c-.2.7-.9 1.2-1.6 1.1-6.3-.6-11.4-5.7-12-12-.1-.7.4-1.4 1.1-1.6Z" />
            </svg>
            <span>${site.phone}</span>
          </a>
          <a class="quick-icon-button quick-whatsapp-link" href="${site.whatsappHref}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp to check appointment availability" title="WhatsApp" data-conversion="click_whatsapp" data-placement="header">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M5.1 19 6.2 15.8A7.7 7.7 0 1 1 9 18.5L5.1 19Z" />
              <path d="M9.4 8.4c.2-.4.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.5.6c.6 1.1 1.5 2 2.7 2.6l.6-.7c.2-.2.5-.3.8-.1l1.5.7c.3.1.4.3.4.6v.4c0 .5-.2.8-.7 1-1.2.4-3.6-.3-5.5-2.2-1.9-1.9-2.6-4.1-2.2-5.1Z" />
            </svg>
            <span class="visually-hidden">WhatsApp</span>
          </a>
          <a class="quick-icon-button" href="${site.emailHref}" aria-label="Email" title="Email" data-conversion="click_email" data-placement="header">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4 6.5h16v11H4v-11Z" />
              <path d="m5.5 8 6.5 4.6L18.5 8" />
            </svg>
            <span class="visually-hidden">Email</span>
          </a>
          <a class="quick-icon-button" href="${site.mapHref}" target="_blank" rel="noopener noreferrer" aria-label="Open map" title="Map" data-conversion="click_directions" data-placement="header">
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
              <a class="button button-secondary" href="${site.phoneHref}" data-conversion="click_call" data-placement="service_hero">Call for an Appointment</a>
              <a class="button button-whatsapp" href="${site.whatsappHref}" target="_blank" rel="noopener noreferrer" data-conversion="click_whatsapp" data-placement="service_hero">WhatsApp for Appointment</a>
            </div>
          </div>
          <aside class="service-card">
            <p class="eyebrow">Clinic</p>
            <h2>KMCH Main Center</h2>
            <p>Kovai Medical Center and Hospital, 99, Avanashi Road, Coimbatore-641014.</p>
            <p class="service-card-note">Call or WhatsApp to confirm current consultation availability.</p>
            <div class="service-card-actions">
              <a class="button button-primary full-width" href="${site.phoneHref}" data-conversion="click_call" data-placement="clinic_card">Call ${site.phone}</a>
              <a class="button button-whatsapp full-width" href="${site.whatsappHref}" target="_blank" rel="noopener noreferrer" data-conversion="click_whatsapp" data-placement="clinic_card">WhatsApp for Appointment</a>
            </div>
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
      ${renderAppointmentGuide()}
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
    <div class="mobile-action" aria-label="Appointment actions">
      <a class="button button-primary" href="${site.phoneHref}" data-conversion="click_call" data-placement="mobile_sticky">Call</a>
      <a class="button button-whatsapp" href="${site.whatsappHref}" target="_blank" rel="noopener noreferrer" data-conversion="click_whatsapp" data-placement="mobile_sticky">WhatsApp</a>
    </div>
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
Featured clinical focus: Diabetes care, including type 1, type 2, gestational,
young-onset and complex diabetes.
Appointment phone: ${site.phone}
Email: duraipgi@gmail.com
Location: KMCH Main Center, Avanashi Road, Coimbatore-641014, India.

## Key Pages

- Homepage: ${site.origin}/
${pages.map((page) => `- ${page.pageTitle}: ${site.origin}/${page.slug}/`).join("\n")}
- Neurabrix Bone Age Calculator: https://bone-age.neurabrix.co/

## Page Scope

The website provides factual, patient-oriented information about Dr. Durairaj
Arjunan's endocrinology practice. Diabetes is the featured care area. Common
patient terms include endocrinologist, hormone specialist, diabetes specialist,
diabetes doctor, diabetic doctor, diabetologist, sugar doctor, sugar specialist,
thyroid specialist, obesity specialist, weight loss doctor, PCOS specialist, and
osteoporosis specialist in Coimbatore. These terms describe related clinical
search intent and are not claims of ranking or superiority.

The medical pages are general information, not individualized diagnosis or
emergency advice. Appointment availability should be confirmed by phone.

The homepage briefly introduces AI in endocrinology and links to the dedicated
AI in Endocrinology page. That page explains the clinical significance of bone
age assessment, includes a guided demonstration, and links to the Neurabrix
Bone Age Calculator. The calculator is decision support and requires
interpretation by an appropriately trained clinician.

The main profile provides Dr. Arjunan's current professional profile, including
training, experience, recognition, publications, academic talks, conference
roles, and scientific committee work. It does not provide a downloadable CV.
`;

writeFileSync(join(process.cwd(), "llms.txt"), llms);

const sitemapUrls = [
  ["", "1.0", site.homepageDateModified],
  ...pages.map((page) => [
    `${page.slug}/`,
    page.slug === "diabetes-specialist-coimbatore" ? "0.9" : ["publications", "ai-in-endocrinology"].includes(page.slug) ? "0.7" : "0.8",
    page.dateModified || site.dateModified
  ])
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    ([path, priority, lastmod]) => `  <url>
    <loc>${site.origin}/${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(process.cwd(), "sitemap.xml"), sitemap);

console.log(`Generated ${pages.length} sub pages, llms.txt, and sitemap.xml`);
