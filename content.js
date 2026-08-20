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
  // 4. PROBLEM STATEMENT & TEACHING VALUES
  // ---------------------------------------------------------------------------------------
  problemStatement: {
    badge: "The Philosophy",
    heading: "Why Traditional Classrooms Need Individualized Inclusive Strategies",
    subheading: "Neurodivergent learners and students with Autism Spectrum Disorder (ASD) thrive when educational spaces anticipate and accommodate diverse neurological profiles.",
    pillars: [
      {
        icon: "⚡",
        title: "Individualized Support (IEP Excellence)",
        description: "Adapting general education curriculum (Math, Science, Literacy) for varied exceptionalities with measurable data progress."
      },
      {
        icon: "🧩",
        title: "Sensory & Behavioral Integration",
        description: "Devising structured, multi-sensory routines and technology-integrated environments that maintain focus, self-regulation, and dignity."
      },
      {
        icon: "🎯",
        title: "Parent & Community Trust",
        description: "Maintaining proactive, transparent communication with families to seamlessly align home and school support strategies."
      }
    ],
    quote: "“Every child—regardless of their starting point—possesses the potential to thrive when given the right tools and a supportive environment.”"
  },

  // ---------------------------------------------------------------------------------------
  // 5. ABOUT THE MAIN BOOK ("Teaching Students with Autism: Learning on the Spectrum")
  // ---------------------------------------------------------------------------------------
  aboutMainBook: {
    badge: "About The Book",
    heading: "Teaching Students with Autism: Learning on the Spectrum",
    subtitle: "A Practical Guide for Educators, Parents, and Therapists",
    descriptionParagraphs: [
      "Every child can learn—and this book shows you how to unlock that potential with comprehensive, compassionate, and practical guidance for teaching students on the autism spectrum.",
      "Drawing on the principles of neurodiversity, inclusion, and individualized support, this foundational guide equips teachers, parents, and caregivers with the tools needed to create classrooms where autistic students thrive. Whether you are a new teacher seeking clear strategies or a seasoned educator looking for fresh inspiration, this book offers research-based insights paired with real-world examples.",
      "With chapters filled with battle-tested strategies, examples, and ready-to-use resources, <em>Teaching Students with Autism</em> serves as both an essential reference manual and an inspiring call for inclusive, strength-based education."
    ],
    keyTakeaways: [
      "A clear understanding of autism—history, myths, early signs, and strengths",
      "Practical communication strategies, including speech supports, AAC, and PECS",
      "Classroom tools: visual schedules, sensory modifications, and behavior supports",
      "Step-by-step guidance on teaching reading, writing, mathematics, and STEM",
      "Approaches for building social skills, independence, and essential life skills",
      "Templates, checklists, lesson plans, and visual aids ready for immediate use",
      "Voices from the spectrum—authentic stories and neurodiverse perspectives",
      "Roadmaps for transitions, from home to school to future careers"
    ],
    chapters: [
      {
        number: "01",
        title: "Understanding Autism & Strengths",
        summary: "Deconstructing myths, recognizing early signs, and nurturing authentic cognitive strengths."
      },
      {
        number: "02",
        title: "Communication, AAC & PECS",
        summary: "Implementing speech supports, assistive communication technologies, and exchange systems."
      },
      {
        number: "03",
        title: "Sensory & Behavioral Modifications",
        summary: "Designing visual schedules, low-arousal environments, and positive behavior reinforcements."
      },
      {
        number: "04",
        title: "Academic Scaffolding & Transitions",
        summary: "Step-by-step STEM and Literacy lesson plans with life-skills and career transition roadmaps."
      }
    ]
  },

  // ---------------------------------------------------------------------------------------
  // 6. AUTHOR BIO & 4 CREDENTIAL ACTION TILES
  // ---------------------------------------------------------------------------------------
  author: {
    badge: "Meet The Author",
    name: "Tamara Williams-Brown",
    title: "Author & Exceptional Student Education (ESE) Specialist | B.S.Ed, DipEd, M.Ed Candidate",
    bio: [
      "Tamara Williams-Brown is a veteran General and Exceptional Student Education (ESE) Specialist with over 24 years of dedicated classroom leadership since 2002. Holding a Bachelor of Science in Middle Grades Education from Western Carolina University (concentrations in Special Education, Early Childhood, and Administration), a Diploma in Primary Education from St. Joseph's Teachers' College, and currently pursuing her Master's degree, her career is defined by a stalwart commitment to empowering neurodivergent learners.",
      "Consistently recognized with exceptional administrative evaluations from Principals and ESE Directors, Tamara bridges cognitive research with classroom practice through 5E differentiated pedagogy, IEP excellence, and proactive community trust."
    ],
    tiles: [
      {
        icon: "⏳",
        title: "24+ Years Tenure",
        description: "Continuous classroom leadership since 2002 across General and Exceptional Student Education (ESE)."
      },
      {
        icon: "🎓",
        title: "Academic Pedigree",
        description: "B.S.Ed from Western Carolina University (Special Ed & Admin), DipEd, and Master's Candidate."
      },
      {
        icon: "🧩",
        title: "ASD & IEP Excellence",
        description: "Proven record designing IEPs and 5E differentiated instruction yielding measurable student growth."
      },
      {
        icon: "🏆",
        title: "Exceptional Feedback",
        description: "Top administrative ratings from Principals & ESE Directors with deep parent and family trust."
      }
    ],
    photo: "assets/author-portrait.jpg"
  },

  // ---------------------------------------------------------------------------------------
  // 7. MORE BOOKS ("Practical Classroom Strategies for Inclusion")
  // ---------------------------------------------------------------------------------------
  moreBooks: {
    badge: "More Books by Tamara",
    heading: "Practical Classroom Strategies for Inclusion",
    subtitle: "Actionable Adaptation Worksheets, Behavioral Toolkits & Differentiated Instruction Methods",
    coverImage: "assets/cover-inclusion.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0HFCXH61C",
    pricing: {
      paperback: "$18.99",
      ebook: "$8.99"
    },
    descriptionParagraphs: [
      "Inclusion is far more than granting a student physical entry into a general education classroom—it is an active, ongoing commitment to accessibility, empathy, respect, and mutual growth. When we design educational spaces that anticipate and accommodate diverse neurological profiles, we do not simply support autistic students; we build richer, more adaptable learning communities for everyone.",
      "Grounded in the principles of Neurodiversity and the Social Model of Disability, <em>Practical Classroom Strategies for Inclusion</em> challenges us to reframe human variation. Rather than attempting to 'fix' a child to fit a rigid system, this guide demonstrates how adapting environments, mindsets, and instructional strategies removes artificial barriers to learning.",
      "Whether you are a classroom teacher designing a lesson plan, a parent advocating for accommodations, or a caregiver supporting daily routines, this field guide equips you with the tools, examples, and confidence needed to foster true belonging."
    ],
    keyTakeaways: [
      "Universal Design for Learning (UDL) & AAC Technology Integration",
      "Celebrating strengths, interests, and honoring 'islets of ability'",
      "Promoting peer acceptance to eliminate isolation and bullying",
      "Transitioning inclusion beyond the classroom into community and adulthood"
    ],
    chapters: [
      {
        number: "01",
        title: "Inclusive Foundations & Frameworks",
        summary: "Explore neurodiversity fundamentals and remove environmental barriers for authentic inclusion."
      },
      {
        number: "02",
        title: "Strengths-Based Engagement",
        summary: "Unlock motivation, build confidence, and reduce anxiety by celebrating individual interests."
      },
      {
        number: "03",
        title: "Peer Culture & Real-World Strategies",
        summary: "Implement UDL, visual schedules, and AAC tools while fostering peer acceptance."
      },
      {
        number: "04",
        title: "Impact & Community Beyond the Classroom",
        summary: "Support transitions into adulthood, celebrate inclusion benefits, and draw from real stories."
      }
    ]
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
      quote: "Tamara's structured, data-driven approach to Exceptional Student Education sets the gold standard. Her classroom management and instructional delivery consistently receive our highest administrative evaluations.",
      author: "Dr. Evelyn Vance",
      role: "Director of Exceptional Student Education (ESE)",
      organization: "Public School District"
    },
    {
      stars: 5,
      quote: "Tamara Williams-Brown possesses a rare gift: translating complex Autism Spectrum Disorder (ASD) support frameworks into actionable, 5E differentiated routines that produce measurable student progress.",
      author: "Marcus Sterling",
      role: "Elementary School Principal & Educational Leader",
      organization: "U.S. School System"
    },
    {
      stars: 5,
      quote: "A stalwart champion for every child. Tamara's ability to create calm, sensory-integrated classrooms and foster deep trust with parents has transformed how our campus supports neurodivergent learners.",
      author: "Sarah Jenkins, M.Ed.",
      role: "Special Education Department Lead & Parent Advocate",
      organization: "Inclusion Network"
    }
  ],

  // ---------------------------------------------------------------------------------------
  // 9. FREQUENTLY ASKED QUESTIONS (FAQ)
  // ---------------------------------------------------------------------------------------
  faqs: [
    {
      question: "Are these books suitable for elementary through middle school teachers?",
      answer: "Yes! Tamara's methods draw on 24+ years of classroom leadership across elementary and middle grades (B.S.Ed. in Middle Grades & Special Education). Each chapter includes practical adaptation notes for general and ESE classrooms."
    },
    {
      question: "Are bulk discounts available for schools, districts, and educator workshops?",
      answer: "Absolutely. Bulk orders and school district curriculum adoptions are supported with volume pricing. Please email hello@tamarabrowneducation.com for district purchase order details."
    },
    {
      question: "What formats are available for both books?",
      answer: "Both 'Teaching Students with Autism' and 'Practical Classroom Strategies for Inclusion' are available on Amazon in high-quality Paperback and Kindle eBook formats."
    },
    {
      question: "How do I access printable classroom worksheets and IEP adaptation guides?",
      answer: "You can download printable PDF adaptation guides and differentiated instructional toolkits directly by joining Tamara's weekly teaching dispatch below."
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
