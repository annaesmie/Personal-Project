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
    useGoogleSheets: true, // Turn this to true
    sheetDbUrl: "https://sheetdb.io/api/v1/ya8pcf7ekg96u", // Paste your SheetDB link here
    cacheTimeoutMinutes: 0
  },

  // ---------------------------------------------------------------------------------------
  // 2. BRANDING & GENERAL SETTINGS
  // ---------------------------------------------------------------------------------------
  site: {
    siteTitle: "The Modern Learner's Blueprint | Dr. Marcus Vance",
    badgeText: "🔥 #1 New Release in Pedagogical Science",
    tagline: "Empowering Educators & Inspiring Lifelong Mastery",
    copyrightYear: 2026,
    contactEmail: "contact@marcusvanceeducation.com",
    pressEmail: "press@marcusvanceeducation.com"
  },

  // ---------------------------------------------------------------------------------------
  // 3. BOOK DETAILS & PURCHASE INFORMATION
  // ---------------------------------------------------------------------------------------
  book: {
    title: "The Modern Learner's Blueprint",
    subtitle: "Transforming Classroom Engagement, Cognitive Retention & Critical Inquiry in the Digital Age",
    tag: "Hardcover • Paperback • eBook • Audiobook",
    coverImage: "assets/book-cover.png", // Path to book cover or let CSS render 3D cover
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
    heading: "Why Traditional Classrooms Are Falling Behind the Modern Mind",
    subheading: "Students are flooded with stimulation outside school, yet subjected to passive lecture models inside. The result? Record disengagement and cognitive fatigue.",
    pillars: [
      {
        icon: "⚡",
        title: "The Attention Fragmentation Crisis",
        description: "Modern learners switch tasks every 47 seconds. Traditional monologue teaching fails to hold cognitive bandwidth."
      },
      {
        icon: "🧩",
        title: "Passive Ingestion vs. Active Construction",
        description: "Rote memorization yields less than 20% 30-day retention. Learners need exploratory frameworks, not passive slides."
      },
      {
        icon: "🎯",
        title: "The Transfer Dilemma",
        description: "Students ace standardized tests yet struggle to apply conceptual reasoning in novel, real-world contexts."
      }
    ],
    quote: "“We do not have an attention span crisis in youth—we have a relevance crisis in our curriculum.”"
  },

  // ---------------------------------------------------------------------------------------
  // 5. BOOK BLURB & KEY PILLARS
  // ---------------------------------------------------------------------------------------
  bookBlurb: {
    badge: "About The Book",
    heading: "A Scientific & Actionable Playbook for 21st-Century Learning",
    descriptionParagraphs: [
      "In <em>The Modern Learner's Blueprint</em>, renowned cognitive researcher and educator Dr. Marcus Vance bridges cutting-edge neuroscience with practical, battle-tested classroom methods.",
      "Whether you teach elementary students, lecture in higher education, or lead instructional design, this guide unpacks actionable systems to spark relentless curiosity, deepen comprehension, and build metacognitive autonomy."
    ],
    keyTakeaways: [
      "The 4-stage Cognitive Arc: Hook, Explore, Consolidate, Transfer",
      "How to design low-stakes micro-challenges that trigger dopamine-driven focus",
      "Scaffolding self-regulated learning so students take ownership of inquiry",
      "Frameworks for balancing digital tools with deep, deliberate reading"
    ],
    chapters: [
      {
        number: "01",
        title: "Rewiring the Learning Loop",
        summary: "Why passive listening fails and how dopamine-gated attention triggers true retention."
      },
      {
        number: "02",
        title: "The Metacognitive Shift",
        summary: "Teaching students how they think, diagnosing blind spots, and self-directed mastery."
      },
      {
        number: "03",
        title: "Designing Friction & Desirable Difficulty",
        summary: "Why productive struggle creates lasting neural connections and how to scaffold it."
      },
      {
        number: "04",
        title: "Transfer & Real-World Application",
        summary: "Moving beyond rote recall to synthetic problem-solving across disciplines."
      }
    ]
  },

  // ---------------------------------------------------------------------------------------
  // 6. AUTHOR BIO & CREDENTIALS
  // ---------------------------------------------------------------------------------------
  author: {
    badge: "Meet The Author",
    name: "Dr. Marcus Vance",
    title: "Cognitive Scientist, Educator & Keynote Speaker",
    bio: [
      "Dr. Marcus Vance has spent over two decades researching the intersection of cognitive neuroscience, learning psychology, and classroom instructional design.",
      "Formerly the Director of Pedagogical Innovation at the Global Learning Institute, he has advised over 150 school districts, universities, and EdTech pioneers worldwide. His research has been featured in the <em>Journal of Educational Psychology</em>, <em>Harvard Ed Magazine</em>, and <em>Wired</em>.",
    ],
    credentials: [
      { label: "Classrooms Impacted", value: "25,000+" },
      { label: "Research Citations", value: "3,400+" },
      { label: "Keynote Speeches", value: "120+ Global Events" },
      { label: "Years in Pedagogy", value: "22 Years" },
    ],
    photo: "assets/author-portrait.jpg"
  },

  // ---------------------------------------------------------------------------------------
  // 7. SAMPLE EXCERPT & DOWNLOADABLE PDF
  // ---------------------------------------------------------------------------------------
  sampleExcerpt: {
    badge: "Sample Chapter Preview",
    heading: "Experience Chapter 1: The Architecture of Attention",
    readingTime: "5 min read",
    chapterNumber: "Chapter 1 • Excerpt",
    snippetText: `“Consider the last time a student truly lost track of time in your classroom. It was not during a presentation of neatly formatted bullet points. It happened when they were confronted with an authentic puzzle—a tension between what they expected and what actually occurred.

Curiosity is not a personality trait; it is a neurochemical response to an information gap. When we present answers before students have felt the itch of the question, we rob the brain of its natural engine for retention...”`,
    pdfDownloadUrl: "#sample-pdf-download",
    pdfFilename: "Modern_Learners_Blueprint_Sample_Chapter1.pdf"
  },

  // ---------------------------------------------------------------------------------------
  // 8. REVIEWS & ENDORSEMENTS
  // ---------------------------------------------------------------------------------------
  reviews: [
    {
      stars: 5,
      quote: "The single most transformative book on teaching I have read in a decade. Every school district should put this in their new-teacher welcome kit.",
      author: "Dr. Elena Rostova",
      role: "Dean of Education, Pacific Northwest University",
      organization: "PNU School of Education"
    },
    {
      stars: 5,
      quote: "Marcus Vance has done the impossible: translated complex cognitive science into five-minute classroom routines that actually double student participation.",
      author: "Terrence Wright",
      role: "2024 National Teacher of the Year Finalist",
      organization: "Oakridge High School"
    },
    {
      stars: 5,
      quote: "A masterclass in modern pedagogy. The chapter on 'Desirable Difficulty' completely altered how our department designs exams.",
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
      answer: "Yes! The core principles of cognitive retention and curiosity architecture apply across all age groups. Each chapter includes explicit 'K-12 Application Notes' alongside 'Higher Education & Corporate Learning' adaptations."
    },
    {
      question: "Are bulk discounts available for schools, districts, and book clubs?",
      answer: "Absolutely. We offer 30% to 50% discounts on orders of 15 copies or more, along with complimentary bulk digital companion worksheets. Contact bulk@marcusvanceeducation.com for an invoice."
    },
    {
      question: "Is there an audiobook version available?",
      answer: "Yes, the audiobook is narrated directly by Dr. Marcus Vance and includes downloadable PDF companion graphs. Available on Audible, Apple Books, and Spotify Audiobooks."
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
    subheading: "Get free chapter worksheets, classroom discussion templates, and Dr. Vance's weekly 3-minute pedagogical insight delivered every Tuesday.",
    incentiveBadge: "🎁 Includes Free 18-Page Lesson Planning PDF Template",
    inputPlaceholder: "Enter your institutional or personal email...",
    buttonText: "Get Free Toolkit & Subscribe",
    successMessage: "🎉 You're in! Check your inbox for your 18-page toolkit and welcome guide.",
    privacyNote: "Zero spam. Unsubscribe anytime in one click."
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
