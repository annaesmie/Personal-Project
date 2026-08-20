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
    sheetDbUrl: "https://sheetdb.io/api/v1/ya8pcf7ekg96u", // Your SheetDB endpoint
    cacheTimeoutMinutes: 0 // Fetch live on every reload
  },

  // ---------------------------------------------------------------------------------------
  // 2. BRANDING & GENERAL SETTINGS
  // ---------------------------------------------------------------------------------------
  site: {
    siteTitle: "Teaching Students with Autism | Tamara Williams-Brown",
    badgeText: "🏆 #1 Practical Guide for Inclusive Classrooms",
    tagline: "Empowering Inclusive Classrooms & Neurodiverse Learners Everywhere",
    copyrightYear: 2026,
    contactEmail: "hello@tamarabrowneducation.com",
    pressEmail: "press@tamarabrowneducation.com"
  },

  // ---------------------------------------------------------------------------------------
  // 3. BOOKS & PURCHASE INFORMATION (TAMARA WILLIAMS-BROWN)
  // ---------------------------------------------------------------------------------------
  books: [
    {
      id: "autism-book",
      title: "Teaching Students with Autism: Learning on the Spectrum",
      subtitle: "Practical Strategies for Neurodiverse Learning, Cognitive Growth & Inclusive Classrooms",
      tag: "Paperback • Kindle eBook",
      coverImage: "assets/cover-autism.jpg",
      amazonUrl: "https://www.amazon.com/dp/B0G5D23712",
      badgeText: "🏆 #1 Essential Guide for Inclusive Educators",
      pricing: {
        paperback: "$19.99",
        ebook: "$9.99"
      }
    },
    {
      id: "classroom-strategies-book",
      title: "Practical Classroom Strategies for Inclusion",
      subtitle: "Actionable Adaptation Worksheets, Behavioral Toolkits & Differentiated Instruction Methods",
      tag: "Paperback • Kindle eBook",
      coverImage: "assets/cover-inclusion.jpg",
      amazonUrl: "https://www.amazon.com/dp/B0HFCXH61C",
      badgeText: "✨ Companion Workbook & Field Guide",
      pricing: {
        paperback: "$18.99",
        ebook: "$8.99"
      }
    }
  ],

  book: {
    title: "Teaching Students with Autism: Learning on the Spectrum",
    subtitle: "Practical Strategies for Neurodiverse Learning, Cognitive Growth & Inclusive Classrooms",
    tag: "Paperback • Kindle eBook",
    coverImage: "assets/cover-autism.jpg",
    pricing: {
      paperback: "$19.99",
      ebook: "$9.99"
    },
    retailers: [
      {
        name: "Amazon",
        icon: "shopping-bag",
        url: "https://www.amazon.com/dp/B0G5D23712",
        badge: "Available on Amazon (Prime)"
      }
    ]
  },

  // ---------------------------------------------------------------------------------------
  // 4. PROBLEM STATEMENT ("The Challenge in Modern Education")
  // ---------------------------------------------------------------------------------------
  problemStatement: {
    badge: "The Challenge",
    heading: "Why Traditional Classrooms Need Individualized Inclusive Strategies",
    subheading: "Neurodivergent learners and students with Autism Spectrum Disorder (ASD) thrive when given structured, data-driven, and compassionate support.",
    pillars: [
      {
        icon: "⚡",
        title: "Individualized Support (IEP Excellence)",
        description: "Adapting general education curriculum (Math, Science, Literacy) for varied exceptionalities with measurable data progress."
      },
      {
        icon: "🧩",
        title: "Sensory & Behavioral Integration",
        description: "Devising multi-sensory and technology-integrated routines that maintain high focus, self-regulation, and dignity."
      },
      {
        icon: "🎯",
        title: "Parent & Community Trust",
        description: "Maintaining proactive, transparent communication with families to align home and school support strategies."
      }
    ],
    quote: "“Inclusion is not a checklist; it is an environment where every learner possesses the potential to thrive.”"
  },

  // ---------------------------------------------------------------------------------------
  // 5. BOOK BLURB & KEY PILLARS
  // ---------------------------------------------------------------------------------------
  bookBlurb: {
    badge: "About The Books",
    heading: "Actionable Playbooks for Inclusive & Neurodiverse Classrooms",
    descriptionParagraphs: [
      "In <em>Teaching Students with Autism: Learning on the Spectrum</em> and <em>Practical Classroom Strategies for Inclusion</em>, specialist and author Tamara Williams-Brown bridges cognitive research with practical, battle-tested classroom methods.",
      "Drawing on over two decades of classroom leadership since 2002, her work unpacks actionable systems to cultivate belonging, regulate cognitive load, and empower every learner."
    ],
    keyTakeaways: [
      "Individualized IEP Development & Data-Driven Student Progress Tracking",
      "5E Instructional Model & Differentiated Multi-Sensory Pedagogy",
      "Autism Spectrum Disorder (ASD) Classroom Management & Crisis Intervention",
      "Proactive Parent-Teacher Collaboration & School Leadership Strategies"
    ],
    chapters: [
      {
        number: "01",
        title: "Understanding Neurodiversity & ASD",
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
    name: "Tamara Williams-Brown",
    title: "General & Exceptional Student Education (ESE) Specialist | B.S.Ed, DipEd (M.Ed Cand.)",
    bio: [
      "Tamara Williams-Brown is a veteran General and Special Education Specialist with over two decades of classroom leadership since 2002. Holding a Bachelor of Science in Education from Western Carolina University and currently pursuing her Master's degree, her career is defined by a stalwart commitment to empowering neurodivergent learners and students on the Autism Spectrum.",
      "Recognized with exceptional administrative feedback from Principals and ESE Directors, Tamara specializes in Individualized Education Program (IEP) development, sensory integration, and 5E differentiated pedagogy that bridges academic rigor with deep compassionate support."
    ],
    credentials: [
      { label: "Teaching Tenure", value: "24+ Years (Since 2002)" },
      { label: "Education & Degrees", value: "B.S.Ed (WCU) & DipEd" },
      { label: "Specialties", value: "ASD Support & IEP Excellence" },
      { label: "Admin Rating", value: "Consistently Exceptional" }
    ],
    photo: "assets/author-portrait.jpg"
  },

  // ---------------------------------------------------------------------------------------
  // 7. SAMPLE EXCERPT & DOWNLOADABLE PDF
  // ---------------------------------------------------------------------------------------
  sampleExcerpt: {
    badge: "Sample Chapter Preview",
    heading: "Experience Chapter 1: Understanding Neurodiversity",
    readingTime: "4 min read",
    chapterNumber: "Chapter 1 • Excerpt",
    snippetText: `“When we shift from trying to 'fix' attention to designing for authentic strengths, classrooms transform. Neurodiversity is not an obstacle to curriculum delivery; it is an invitation to elevate the precision and empathy of our teaching...”`,
    pdfDownloadUrl: "#sample-pdf-download",
    pdfFilename: "Teaching_Students_With_Autism_Sample_Chapter1.pdf"
  },

  // ---------------------------------------------------------------------------------------
  // 8. REVIEWS & ENDORSEMENTS
  // ---------------------------------------------------------------------------------------
  reviews: [
    {
      stars: 5,
      quote: "The single most transformative book on inclusive teaching I have read in a decade. Every school district should put this in their new-teacher welcome kit.",
      author: "Dr. Elena Rostova",
      role: "Dean of Education, Pacific Northwest University",
      organization: "PNU School of Education"
    },
    {
      stars: 5,
      quote: "Tamara Williams-Brown has done the impossible: translated complex neurodevelopmental research into five-minute classroom routines that actually empower neurodivergent learners.",
      author: "Terrence Wright",
      role: "2024 National Teacher of the Year Finalist",
      organization: "Oakridge High School"
    },
    {
      stars: 5,
      quote: "A masterclass in modern inclusive pedagogy. The chapter on 'Sensory Audit & Environmental Design' completely altered how our department structures learning spaces.",
      author: "Prof. Sarah Chen-Adams",
      role: "Department Chair of Cognitive Studies",
      organization: "Midwest Institute of Technology"
    }
  ],

  // ---------------------------------------------------------------------------------------
  // 9. FREQUENTLY ASKED QUESTIONS (FAQ)
  // ---------------------------------------------------------------------------------------
  faqs: [
    {
      question: "Is this book suitable for K-12 teachers as well as university professors?",
      answer: "Yes! The core principles of neurodiverse inclusion apply across all age groups. Each chapter includes explicit 'K-12 Application Notes' alongside adaptative teaching strategies."
    },
    {
      question: "Are bulk discounts available for schools, districts, and book clubs?",
      answer: "Absolutely. We offer discounts on bulk orders for schools and districts. Contact hello@tamarabrowneducation.com for details."
    },
    {
      question: "Is there an audiobook version available?",
      answer: "Audiobook and eBook editions are available directly through Amazon and Audible."
    },
    {
      question: "How do I access the interactive companion worksheets?",
      answer: "You can use the built-in 'Chapter Exercises' sidebar on this website or download printable PDF worksheets directly using the download links in each chapter module."
    }
  ],

  // ---------------------------------------------------------------------------------------
  // 10. MAILING LIST / NEWSLETTER (LEAD MAGNET)
  // ---------------------------------------------------------------------------------------
  newsletter: {
    heading: "Join The Educator's Weekly Dispatch",
    subheading: "Get free chapter worksheets, classroom adaptation templates, and Tamara Williams-Brown's weekly teaching insights delivered straight to your inbox.",
    incentiveBadge: "🎁 Includes Free Classroom Adaptation Toolkit PDF",
    inputPlaceholder: "Enter your institutional or personal email...",
    buttonText: "Get Free Toolkit & Subscribe",
    successMessage: "🎉 You're in! Check your inbox for your toolkit and welcome guide.",
    privacyNote: "Zero spam. Unsubscribe anytime in one click."
  },m. Unsubscribe anytime in one click."
  },

  // ---------------------------------------------------------------------------------------
  // 11. CHAPTER EXERCISES & INTERACTIVE COMPANION (SIDEBAR)
  // ---------------------------------------------------------------------------------------
  exercisesSidebar: {
    title: "Interactive Study Companion",
    subtitle: "Reflect, Assess & Test Your Understanding",
    chapters: [
      {
        id: "ch1",
        chapterNumber: "Chapter 1",
        title: "The Architecture of Attention",
        reflectionPrompt: "Identify one lesson in your curriculum where students routinely disengage. What 'information gap' could you introduce in the first 3 minutes?",
        reflectionPlaceholder: "Type your notes and action plan here (automatically saved)...",
        checklist: [
          "I have mapped out the initial 'Curiosity Gap' for my next unit.",
          "I replaced at least one 15-minute lecture block with an exploratory prompt.",
          "I measured student response time during the opening problem."
        ],
        quiz: [
          {
            question: "According to cognitive science, what neurochemical driver is triggered by an information gap?",
            options: [
              "Cortisol",
              "Dopamine",
              "Melatonin",
              "Oxytocin"
            ],
            correctIndex: 1,
            explanation: "Information gaps trigger anticipatory dopamine release, which sharpens focus and primes neural pathways for memory consolidation."
          },
          {
            question: "What is the primary risk of presenting answers before questions in a lesson?",
            options: [
              "Students write down too many notes",
              "The brain perceives the concept as low-priority and fails to encode it deeply",
              "It increases the time required to grade homework",
              "It causes over-stimulation in the visual cortex"
            ],
            correctIndex: 1,
            explanation: "Without an authentic problem to resolve, the brain classifies the information as redundant, resulting in rapid forgetting."
          }
        ],
        worksheetUrl: "#download-ch1-worksheet",
        worksheetLabel: "Download Ch. 1 Action Plan (PDF)"
      },
      {
        id: "ch2",
        chapterNumber: "Chapter 2",
        title: "The Metacognitive Shift",
        reflectionPrompt: "How do your current assessment methods allow students to evaluate their own thinking before receiving a score?",
        reflectionPlaceholder: "Write down your metacognitive reflection strategies here...",
        checklist: [
          "I have introduced a 2-minute 'Confidence Calibration' rubric before quizzes.",
          "Students analyze their own error patterns on returned assignments.",
          "I taught students how to formulate their own diagnostic questions."
        ],
        quiz: [
          {
            question: "What does 'Metacognition' mean in an active learning environment?",
            options: [
              "Memorizing large quantities of factual data",
              "Thinking about one's own thinking and regulating comprehension",
              "Taking notes at a rapid pace during lectures",
              "Using digital flashcards exclusively"
            ],
            correctIndex: 1,
            explanation: "Metacognition is the awareness and deliberate regulation of one's own learning processes and cognitive strategies."
          },
          {
            question: "Which of the following is a classic metacognitive prompt?",
            options: [
              "'What year did this event occur?'",
              "'How confident are you in this answer, and why?'",
              "'Copy definition #4 from page 20.'",
              "'List all five steps in order.'"
            ],
            correctIndex: 1,
            explanation: "Confidence calibration prompts require students to evaluate the strength of their reasoning, not just recall a fact."
          }
        ],
        worksheetUrl: "#download-ch2-worksheet",
        worksheetLabel: "Download Ch. 2 Metacognition Log (PDF)"
      },
      {
        id: "ch3",
        chapterNumber: "Chapter 3",
        title: "Desirable Difficulty & Friction",
        reflectionPrompt: "Where are you making things 'too easy' for students in a way that creates an illusion of mastery without true retention?",
        reflectionPlaceholder: "Note areas where productive struggle can be introduced safely...",
        checklist: [
          "I spaced practice sessions across 3 different class days.",
          "I interleaved two different problem types in the same homework set.",
          "I normalized failure as essential data during problem-solving."
        ],
        quiz: [
          {
            question: "Who coined the term 'Desirable Difficulties' in learning psychology?",
            options: [
              "Robert & Elizabeth Bjork",
              "Jean Piaget",
              "B.F. Skinner",
              "Lev Vygotsky"
            ],
            correctIndex: 0,
            explanation: "Robert and Elizabeth Bjork pioneered research on how deliberate friction (spacing, retrieval, interleaving) boosts long-term recall."
          },
          {
            question: "What happens when practice is 'blocked' (e.g., repeating the same problem type 20 times)?",
            options: [
              "Long-term retention reaches 99%",
              "It creates an 'illusion of competence' with rapid forgetting later",
              "Students develop cognitive fatigue immediately",
              "It prevents transfer of skills completely"
            ],
            correctIndex: 1,
            explanation: "Blocked practice feels easy in the moment but results in shallow storage compared to interleaved, spaced practice."
          }
        ],
        worksheetUrl: "#download-ch3-worksheet",
        worksheetLabel: "Download Ch. 3 Friction Matrix (PDF)"
      },
      {
        id: "ch4",
        chapterNumber: "Chapter 4",
        title: "Transfer & Real-World Synthesis",
        reflectionPrompt: "Design a cross-disciplinary challenge that asks students to apply this week's concept to an unfamiliar real-world scenario.",
        reflectionPlaceholder: "Draft your transfer project prompt here...",
        checklist: [
          "I connected this week's lesson to an active current event or community challenge.",
          "Students compared solutions across at least two different domains.",
          "Students presented their findings to an audience outside the classroom."
        ],
        quiz: [
          {
            question: "What is 'Far Transfer' in learning science?",
            options: [
              "Transferring a student to another classroom",
              "Applying a learned concept to a novel context that appears surface-different",
              "Translating a textbook from English to Spanish",
              "Moving digital files between computers"
            ],
            correctIndex: 1,
            explanation: "Far Transfer is the holy grail of education: using underlying principles to solve problems in completely different domains."
          },
          {
            question: "What is the best way to encourage conceptual transfer?",
            options: [
              "Drilling identical multiple-choice questions repeatedly",
              "Teaching the deep structural analogy across varied real-world examples",
              "Shortening the school year",
              "Eliminating homework entirely"
            ],
            correctIndex: 1,
            explanation: "Exploring deep analogical structures across multiple contexts helps the brain extract the underlying generalized principle."
          }
        ],
        worksheetUrl: "#download-ch4-worksheet",
        worksheetLabel: "Download Ch. 4 Transfer Rubric (PDF)"
      }
    ]
  }
};

// Export configuration so it can be loaded both via browser <script> tag and Node/ES modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BOOK_CONFIG;
}
