/**
 * =========================================================================================
 *  BOOK LANDING PAGE & STUDY COMPANION - CONTENT CONFIGURATION
 * =========================================================================================
 * 
 *  WELCOME! You can customize this entire website without touching any HTML or CSS.
 *  Simply edit the text between the quotation marks ("...") below.
 * 
 *  TIP: If you want to connect this to a Google Sheet via SheetDB:
 *       1. Change `useGoogleSheets` to `true`
 *       2. Paste your SheetDB API URL in `sheetDbUrl`
 * =========================================================================================
 */

const BOOK_CONFIG = {
  // ---------------------------------------------------------------------------------------
  // 1. GOOGLE SHEETS / SHEETDB INTEGRATION
  // ---------------------------------------------------------------------------------------
  integration: {
    useGoogleSheets: true, // Set to true to load dynamic content from Google Sheets
    sheetDbUrl: "https://sheetdb.io/api/v1/ya8pcf7ekg96u", // Your live SheetDB endpoint
    cacheTimeoutMinutes: 0 // Fetch live on every reload
  },

  // ---------------------------------------------------------------------------------------
  // 2. BRANDING & GENERAL SETTINGS (Fallbacks if not overridden in Sheet)
  // ---------------------------------------------------------------------------------------
  site: {
    siteTitle: "Autism: A Modern Educator's Guide | Tamara Brown",
    badgeText: "🏆 Winner of the 2026 Award",
    tagline: "Empowering Inclusive Classrooms Everywhere",
    copyrightYear: 2026,
    contactEmail: "hello@tamarabrowneducation.com",
    pressEmail: "press@tamarabrowneducation.com"
  },

  // ---------------------------------------------------------------------------------------
  // 3. BOOK DETAILS & PURCHASE INFORMATION
  // ---------------------------------------------------------------------------------------
  book: {
    title: "Autism Book",
    subtitle: "Practical Strategies for Neurodiverse Learning & Cognitive Growth",
    tag: "Hardcover • Paperback • eBook • Audiobook",
    coverImage: "assets/book-cover.png",
    pricing: {
      hardcover: "$27.99",
      paperback: "$19.99",
      ebook: "$9.99"
    },
    retailers: [
      {
        name: "Amazon",
        icon: "shopping-bag",
        url: "https://amazon.com",
        badge: "Fast Prime Delivery"
      },
      {
        name: "Barnes & Noble",
        icon: "book",
        url: "https://barnesandnoble.com",
        badge: "Member Discount"
      },
      {
        name: "Bookshop.org",
        icon: "heart",
        url: "https://bookshop.org",
        badge: "Supports Local Bookstores"
      },
      {
        name: "Direct Signed Copy",
        icon: "award",
        url: "#buy-direct",
        badge: "Includes Author Note"
      }
    ]
  },

  // ---------------------------------------------------------------------------------------
  // 4. PROBLEM STATEMENT ("The Challenge in Modern Education")
  // ---------------------------------------------------------------------------------------
  problemStatement: {
    badge: "The Challenge",
    heading: "Bridging the Gap in Neurodiverse Classrooms",
    subheading: "Traditional curricula often miss the unique strengths of neurodiverse learners.",
    pillars: [
      {
        icon: "⚡",
        title: "Sensory & Cognitive Load",
        description: "Standard classroom environments can trigger sensory overload, impacting cognitive processing and student engagement."
      },
      {
        icon: "🧩",
        title: "Rigid Learning Frameworks",
        description: "One-size-fits-all instruction overlooks dynamic strengths in pattern recognition, deep focus, and specialized inquiry."
      },
      {
        icon: "🎯",
        title: "The Inclusion Gap",
        description: "Educators need actionable, strength-based scaffolds rather than deficit-focused compliance models."
      }
    ],
    quote: "“Inclusion is not a checklist; it is an environment where every learner thrives.”"
  },

  // ---------------------------------------------------------------------------------------
  // 5. BOOK BLURB & KEY PILLARS
  // ---------------------------------------------------------------------------------------
  bookBlurb: {
    badge: "About The Book",
    heading: "A Compassionate & Actionable Guide for Inclusive Classrooms",
    descriptionParagraphs: [
      "In <em>Autism: Practical Strategies for Neurodiverse Learning & Cognitive Growth</em>, specialist and author Tamara Brown bridges cognitive research with practical, real-world classroom methods.",
      "Whether you teach elementary students, lecture in higher education, or design instructional accommodations, this guide unpacks actionable systems to cultivate belonging, deepen comprehension, and empower every learner."
    ],
    keyTakeaways: [
      "Strength-based scaffolding models for neurodiverse learners",
      "Strategies for regulating sensory environments and reducing cognitive fatigue",
      "Designing individualized communication channels and flexible pacing",
      "Practical collaboration frameworks for teachers, parents, and specialists"
    ],
    chapters: [
      {
        number: "01",
        title: "Understanding Neurodiversity",
        summary: "Moving beyond deficit models to embrace authentic neurodiverse strengths."
      },
      {
        number: "02",
        title: "Sensory & Environmental Design",
        summary: "Crafting calming, predictable classroom spaces that foster focus."
      },
      {
        number: "03",
        title: "Executive Function & Scaffolding",
        summary: "Visual structures, routine maps, and self-regulation toolkits."
      },
      {
        number: "04",
        title: "Fostering Social Belonging & Advocacy",
        summary: "Building empathetic peer cultures and supporting student self-advocacy."
      }
    ]
  },

  // ---------------------------------------------------------------------------------------
  // 6. AUTHOR BIO & CREDENTIALS
  // ---------------------------------------------------------------------------------------
  author: {
    badge: "Meet The Author",
    name: "Tamara Brown",
    title: "Specialist in Neurodiverse Education & Author",
    bio: [
      "Tamara Brown is an educator, speaker, and neurodiversity specialist dedicated to transforming inclusive classroom practices.",
      "With years of hands-on experience coaching teachers and supporting neurodivergent students, her work centers on practical, dignity-first instructional adaptations."
    ],
    credentials: [
      { value: "1,200+", label: "Educators Trained" },
      { value: "15+", label: "Years Experience" },
      { value: "85+", label: "Keynotes & Workshops" },
      { value: "4.9/5", label: "Educator Rating" }
    ],
    photo: "assets/author-portrait.jpg"
  },

  // ---------------------------------------------------------------------------------------
  // 7. SAMPLE EXCERPT / CHAPTER PREVIEW
  // ---------------------------------------------------------------------------------------
  sampleExcerpt: {
    badge: "Free Preview",
    heading: "Experience Chapter 1: Understanding Neurodiversity",
    chapterNumber: "01",
    readingTime: "4 min read",
    snippetText: "“When we shift from trying to 'fix' attention to designing for authentic strengths, classrooms transform. Neurodiversity is not an obstacle to curriculum delivery; it is an invitation to elevate the precision and empathy of our teaching.”",
    pdfDownloadUrl: "#sample-pdf-download",
    pdfFilename: "Autism_Sample_Chapter1.pdf"
  },

  // ---------------------------------------------------------------------------------------
  // 8. SOCIAL PROOF & REVIEWS
  // ---------------------------------------------------------------------------------------
  reviews: [
    {
      stars: 5,
      quote: "This book changed the way I structure my entire school day. A compassionate, practical masterpiece for every modern teacher.",
      author: "Sarah Jenkins",
      role: "Lead Instructional Coach",
      organization: "Metro Public Schools"
    },
    {
      stars: 5,
      quote: "Finally, a guide that balances neurodevelopmental science with actual, implementable classroom routines.",
      author: "David Ross, Ed.D.",
      role: "Director of Special Education",
      organization: "Lincoln Academy"
    },
    {
      stars: 5,
      quote: "Essential reading for pre-service and veteran educators alike. Clear, respectful, and empowering.",
      author: "Elena Rostova",
      role: "Department Chair",
      organization: "Center for Inclusive Pedagogy"
    }
  ],

  // ---------------------------------------------------------------------------------------
  // 9. FREQUENTLY ASKED QUESTIONS (FAQ)
  // ---------------------------------------------------------------------------------------
  faqs: [
    {
      question: "Is this book suitable for general education teachers?",
      answer: "Yes! While it covers neurodiverse learning, every framework is designed for general education teachers to implement immediately in mixed-ability classrooms."
    },
    {
      question: "Do you offer bulk discounts for school districts or departments?",
      answer: "Yes. For orders of 10 or more copies, contact our outreach team via the contact link below for educational licensing and district pricing."
    },
    {
      question: "Are printable classroom worksheets included?",
      answer: "Yes, readers get full access to the downloadable digital companion kit containing graphic organizers, sensory audits, and lesson adaptation templates."
    },
    {
      question: "Can I book Tamara Brown for professional development or keynotes?",
      answer: "Absolutely. Send an inquiry through the contact email in the footer with your proposed dates and school district details."
    }
  ],

  // ---------------------------------------------------------------------------------------
  // 10. LEAD CAPTURE / NEWSLETTER
  // ---------------------------------------------------------------------------------------
  newsletter: {
    heading: "Join the Inclusive Educators Dispatch",
    subheading: "Get weekly lesson plans, discussion templates, and teaching insights.",
    incentiveBadge: "🎁 Includes Free Classroom Adaptation Toolkit",
    inputPlaceholder: "Enter your educator email address...",
    buttonText: "Subscribe Free",
    privacyNote: "🔒 No spam, ever. Unsubscribe with 1-click anytime.",
    successMessage: "🎉 You're in! Check your inbox for your free toolkit."
  },

  // ---------------------------------------------------------------------------------------
  // 11. INTERACTIVE STUDY COMPANION (DRAWER)
  // ---------------------------------------------------------------------------------------
  exercisesSidebar: {
    chapters: [
      {
        id: "ch1",
        chapterNumber: "Chapter 1",
        title: "Understanding Neurodiversity",
        reflectionPrompt: "Identify one lesson plan from this week. How can you redesign it to leverage diverse student processing styles?",
        reflectionPlaceholder: "Draft your lesson adaptation reflection here...",
        checklist: [
          "I audited my lesson for multi-modal presentation options (visual, auditory, kinesthetic).",
          "I created clear visual agendas for classroom transitions.",
          "I offered choice in how students demonstrate concept mastery."
        ],
        quiz: [
          {
            question: "What is the core principle of neurodiversity-affirming education?",
            options: [
              "Standardizing all assessments to one format",
              "Recognizing neurological differences as natural human variations with unique strengths",
              "Separating all students by learning speed",
              "Relying exclusively on lecture-based teaching"
            ],
            correctIndex: 1,
            explanation: "Neurodiversity-affirming teaching values differences as natural variations and creates environments where all processing styles thrive."
          },
          {
            question: "How can visual schedules support executive functioning?",
            options: [
              "They increase test scores automatically without teacher input",
              "They reduce cognitive anxiety by providing predictable task sequencing",
              "They replace the need for lesson plans",
              "They are only useful for younger elementary students"
            ],
            correctIndex: 1,
            explanation: "Visual schedules lower executive function demand by making upcoming transitions and expectations clear and predictable."
          }
        ],
        worksheetUrl: "#download-ch1-worksheet",
        worksheetLabel: "Download Ch. 1 Reflection Guide (PDF)"
      },
      {
        id: "ch2",
        chapterNumber: "Chapter 2",
        title: "Sensory & Environmental Design",
        reflectionPrompt: "Conduct a 5-minute sensory audit of your classroom space. What ambient noise or lighting changes can you make today?",
        reflectionPlaceholder: "Write down 2 physical environment adjustments...",
        checklist: [
          "I established a quiet regulation corner with sensory tools.",
          "I dimmed harsh overhead fluorescent lighting where possible.",
          "I provided alternative seating options for active focus."
        ],
        quiz: [
          {
            question: "What is sensory overload in a learning environment?",
            options: [
              "When a student is bored by repetitive material",
              "When sensory inputs exceed the nervous system's ability to process and regulate",
              "When classroom technology stops working",
              "When an assignment has too many words"
            ],
            correctIndex: 1,
            explanation: "Sensory overload occurs when environmental stimuli overwhelm the nervous system, impairing focus and emotional regulation."
          },
          {
            question: "What is a practical way to offer sensory regulation in class?",
            options: [
              "Designating a calm, low-stimulation break zone with clear guidelines",
              "Eliminating all classroom visuals and posters",
              "Requiring students to stay in one seat for the entire day",
              "Playing loud music during silent reading"
            ],
            correctIndex: 0,
            explanation: "A designated calm corner allows students to self-regulate proactively before stress escalates."
          }
        ],
        worksheetUrl: "#download-ch2-worksheet",
        worksheetLabel: "Download Ch. 2 Sensory Audit Matrix (PDF)"
      },
      {
        id: "ch3",
        chapterNumber: "Chapter 3",
        title: "Executive Function & Scaffolding",
        reflectionPrompt: "Choose a multi-step project you assign. How can you break it down into explicit visual micro-deadlines?",
        reflectionPlaceholder: "Outline your project scaffolding steps here...",
        checklist: [
          "I created step-by-step checklists for multi-part assignments.",
          "I taught explicit time-estimation techniques before work periods.",
          "I provided exemplar models for completed projects."
        ],
        quiz: [
          {
            question: "Why is chunking assignments helpful for executive function support?",
            options: [
              "It makes grading take longer",
              "It prevents cognitive overwhelm and establishes achievable milestones",
              "It eliminates the need for deadlines",
              "It reduces the total amount of content learned"
            ],
            correctIndex: 1,
            explanation: "Chunking breaks large, intimidating projects into manageable steps, supporting working memory and planning."
          },
          {
            question: "What role do visual timers play in classroom pacing?",
            options: [
              "They cause unnecessary stress for all students",
              "They make the passage of time concrete and visual",
              "They should only be used during final exams",
              "They replace verbal instructions entirely"
            ],
            correctIndex: 1,
            explanation: "Visual timers make abstract time tangible, helping students pace themselves and transition smoothly."
          }
        ],
        worksheetUrl: "#download-ch3-worksheet",
        worksheetLabel: "Download Ch. 3 Scaffolding Guide (PDF)"
      },
      {
        id: "ch4",
        chapterNumber: "Chapter 4",
        title: "Fostering Social Belonging & Advocacy",
        reflectionPrompt: "How do you currently invite students to share how they learn best? Draft a quick beginning-of-term self-advocacy prompt.",
        reflectionPlaceholder: "Draft your student self-advocacy check-in...",
        checklist: [
          "I created a private channel for students to request accommodations.",
          "I facilitated classroom discussions on respecting neurodivergent peers.",
          "I coached students on framing their learning strengths and needs."
        ],
        quiz: [
          {
            question: "What is student self-advocacy in education?",
            options: [
              "Students grading their own standardized tests",
              "Students understanding their learning needs and communicating them effectively",
              "Students choosing never to do group assignments",
              "Students writing their own school policies"
            ],
            correctIndex: 1,
            explanation: "Self-advocacy empowers students to understand their unique needs, strengths, and necessary supports."
          },
          {
            question: "How can educators foster inclusive peer cultures?",
            options: [
              "By ignoring differences and treating everyone identically",
              "By modeling empathy and celebrating diverse problem-solving approaches",
              "By creating competitive classroom rankings",
              "By eliminating all group projects"
            ],
            correctIndex: 1,
            explanation: "Modeling empathy and valuing diverse perspectives creates a classroom culture of psychological safety."
          }
        ],
        worksheetUrl: "#download-ch4-worksheet",
        worksheetLabel: "Download Ch. 4 Advocacy Rubric (PDF)"
      }
    ]
  }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BOOK_CONFIG;
}
