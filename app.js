/**
 * =========================================================================================
 *  THE MODERN LEARNER'S BLUEPRINT - CORE APPLICATION LOGIC
 * =========================================================================================
 *  - Dynamic DOM rendering from BOOK_CONFIG (content.js)
 *  - Optional SheetDB / Google Sheets API syncing
 *  - Interactive Collapsible Study Companion Drawer
 *  - LocalStorage persistence for reflection notes & checklist progress
 *  - Instant Quiz evaluation & feedback
 *  - FAQ Accordion logic
 *  - Modal managers & Netlify form submission handling
 * =========================================================================================
 */

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Load active data (from Google Sheets or local fallback config)
  let activeData = BOOK_CONFIG;

  if (BOOK_CONFIG.integration && BOOK_CONFIG.integration.useGoogleSheets) {
    try {
      console.log('🔄 Fetching latest content from Google Sheets / SheetDB...');
      const fetchedData = await fetchSheetDbContent(BOOK_CONFIG.integration.sheetDbUrl);
      if (fetchedData) {
        activeData = mergeSheetData(BOOK_CONFIG, fetchedData);
        console.log('✅ Google Sheets content merged successfully!');
      }
    } catch (err) {
      console.warn('⚠️ Google Sheets fetch failed, using local content.js fallback:', err);
    }
  }

  // 2. Render all sections with active data
  renderSite(activeData);

  // 3. Initialize Interactive Components
  initHeroBookCarousel(activeData);
  initExerciseDrawer(activeData.exercisesSidebar);
  initFaqAccordion();
  initModals();
  initNewsletterForm(activeData.newsletter);
});

/* ==========================================================================
   1. SITE RENDERING ENGINE
   ========================================================================== */
function renderSite(data) {
  // Page Title & Meta
  if (data.site) {
    document.title = data.site.siteTitle || document.title;
    const brandTitle = document.getElementById('nav-brand-title');
    if (brandTitle) brandTitle.textContent = data.author.name;
    const brandSub = document.getElementById('nav-brand-sub');
    if (brandSub) brandSub.textContent = data.book.title;
    const copyright = document.getElementById('footer-copyright');
    if (copyright) copyright.textContent = `© ${data.site.copyrightYear || new Date().getFullYear()} ${data.author.name}. All Rights Reserved.`;
    const contactLink = document.getElementById('footer-contact-link');
    if (contactLink && data.site.contactEmail) contactLink.href = `mailto:${data.site.contactEmail}`;
  }

  // Hero Section
  if (data.book) {
    const heroTitle = document.getElementById('hero-book-title');
    if (heroTitle) {
      const parts = data.book.title.split(' ');
      const lastWord = parts.pop();
      heroTitle.innerHTML = `${parts.join(' ')} <span>${lastWord}</span>`;
    }

    const heroSub = document.getElementById('hero-book-subtitle');
    if (heroSub) heroSub.textContent = data.book.subtitle;

    // 3D Cover rendering (Image with fallback)
    const coverContainer = document.getElementById('book-cover-container');
    const coverImg = document.getElementById('book-cover-img');
    const coverTitle = document.getElementById('cover-title-text');
    const coverSub = document.getElementById('cover-sub-text');
    const coverAuthor = document.getElementById('cover-author-name');

    if (data.book.coverImage && coverImg && coverContainer) {
      coverImg.src = data.book.coverImage;
      coverImg.alt = data.book.title || 'Book Cover';
      coverImg.onload = () => {
        coverImg.style.display = 'block';
        coverContainer.classList.add('has-image');
      };
      coverImg.onerror = () => {
        coverImg.style.display = 'none';
        coverContainer.classList.remove('has-image');
      };
    } else if (coverImg && coverContainer) {
      coverImg.style.display = 'none';
      coverContainer.classList.remove('has-image');
    }

    if (coverTitle) coverTitle.textContent = data.book.title;
    if (coverSub) coverSub.textContent = data.book.subtitle;
    if (coverAuthor) coverAuthor.textContent = (data.author && data.author.name) || '';

    // Pricing
    if (data.book.pricing) {
      const p1 = document.getElementById('price-hardcover');
      if (p1) p1.textContent = data.book.pricing.hardcover;
      const p2 = document.getElementById('price-paperback');
      if (p2) p2.textContent = data.book.pricing.paperback;
      const p3 = document.getElementById('price-ebook');
      if (p3) p3.textContent = data.book.pricing.ebook;
    }
  }

  // Problem Statement
  if (data.problemStatement) {
    const pBadge = document.getElementById('problem-badge');
    if (pBadge) pBadge.textContent = data.problemStatement.badge;
    const pHeading = document.getElementById('problem-heading');
    if (pHeading) pHeading.textContent = data.problemStatement.heading;
    const pSub = document.getElementById('problem-subheading');
    if (pSub) pSub.textContent = data.problemStatement.subheading;
    const pQuote = document.getElementById('problem-quote');
    if (pQuote) pQuote.textContent = data.problemStatement.quote;
    const pQuoteAuthor = document.getElementById('problem-quote-author');
    if (pQuoteAuthor) pQuoteAuthor.textContent = `— ${data.author.name}`;

    const problemGrid = document.getElementById('problem-cards-container');
    if (problemGrid && data.problemStatement.pillars) {
      problemGrid.innerHTML = data.problemStatement.pillars.map(pillar => `
        <div class="problem-card">
          <div class="problem-icon-wrapper">${pillar.icon || '⚡'}</div>
          <h3 class="problem-card-title">${escapeHTML(pillar.title)}</h3>
          <p class="problem-card-desc">${escapeHTML(pillar.description)}</p>
        </div>
      `).join('');
    }
  }

  // Book Overview & Chapters
  if (data.bookBlurb) {
    const oBadge = document.getElementById('overview-badge');
    if (oBadge) oBadge.textContent = data.bookBlurb.badge;
    const oHeading = document.getElementById('overview-heading');
    if (oHeading) oHeading.textContent = data.bookBlurb.heading;

    const pContainer = document.getElementById('overview-paragraphs');
    if (pContainer && data.bookBlurb.descriptionParagraphs) {
      pContainer.innerHTML = data.bookBlurb.descriptionParagraphs.map(p => `<p>${p}</p>`).join('');
    }

    const takeawaysContainer = document.getElementById('overview-takeaways');
    if (takeawaysContainer && data.bookBlurb.keyTakeaways) {
      takeawaysContainer.innerHTML = data.bookBlurb.keyTakeaways.map(item => `
        <li class="takeaway-item">
          <span class="takeaway-check">✓</span>
          <span>${escapeHTML(item)}</span>
        </li>
      `).join('');
    }

    const chContainer = document.getElementById('chapters-container');
    if (chContainer && data.bookBlurb.chapters) {
      chContainer.innerHTML = data.bookBlurb.chapters.map(ch => `
        <div class="chapter-card">
          <div class="chapter-num-badge">${ch.number}</div>
          <div class="chapter-info">
            <h4>Chapter ${ch.number}: ${escapeHTML(ch.title)}</h4>
            <p>${escapeHTML(ch.summary)}</p>
          </div>
        </div>
      `).join('');
    }
  }

  // Author Bio & Stats
  if (data.author) {
    const aName = document.getElementById('author-name');
    if (aName) aName.textContent = data.author.name;
    const aTitle = document.getElementById('author-title');
    if (aTitle) aTitle.textContent = data.author.title;

    const bioContainer = document.getElementById('author-bio-paragraphs');
    if (bioContainer && data.author.bio) {
      bioContainer.innerHTML = data.author.bio.map(p => `<p>${p}</p>`).join('');
    }

    const statsContainer = document.getElementById('author-stats-container');
    if (statsContainer && data.author.credentials) {
      statsContainer.innerHTML = data.author.credentials.map(stat => `
        <div class="stat-card">
          <div class="stat-value">${escapeHTML(stat.value)}</div>
          <div class="stat-label">${escapeHTML(stat.label)}</div>
        </div>
      `).join('');
    }
  }

  // Sample Excerpt
  if (data.sampleExcerpt) {
    const eBadge = document.getElementById('excerpt-badge');
    if (eBadge) eBadge.textContent = data.sampleExcerpt.badge;
    const eHeading = document.getElementById('excerpt-heading');
    if (eHeading) eHeading.textContent = data.sampleExcerpt.heading;
    const eChapter = document.getElementById('excerpt-chapter-num');
    if (eChapter) eChapter.textContent = data.sampleExcerpt.chapterNumber;
    const eTime = document.getElementById('excerpt-reading-time-text');
    if (eTime) eTime.textContent = data.sampleExcerpt.readingTime;
    const eSnippet = document.getElementById('excerpt-snippet-text');
    if (eSnippet) eSnippet.textContent = data.sampleExcerpt.snippetText;
  }

  // Reviews
  if (data.reviews) {
    const reviewsContainer = document.getElementById('reviews-container');
    if (reviewsContainer) {
      reviewsContainer.innerHTML = data.reviews.map(r => `
        <div class="review-card">
          <div>
            <div class="review-stars">${'★'.repeat(r.stars || 5)}</div>
            <p class="review-quote">“${escapeHTML(r.quote)}”</p>
          </div>
          <div class="review-author-info">
            <div class="reviewer-avatar">${r.author.charAt(0)}</div>
            <div>
              <div class="reviewer-name">${escapeHTML(r.author)}</div>
              <div class="reviewer-role">${escapeHTML(r.role)} • ${escapeHTML(r.organization)}</div>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // FAQs
  if (data.faqs) {
    const faqContainer = document.getElementById('faq-accordion-container');
    if (faqContainer) {
      faqContainer.innerHTML = data.faqs.map((faq, index) => `
        <div class="faq-item ${index === 0 ? 'active' : ''}">
          <button class="faq-question-btn" aria-expanded="${index === 0 ? 'true' : 'false'}">
            <span>${escapeHTML(faq.question)}</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <p>${escapeHTML(faq.answer)}</p>
          </div>
        </div>
      `).join('');
    }
  }

  // Newsletter
  if (data.newsletter) {
    const nHead = document.getElementById('newsletter-heading');
    if (nHead) nHead.textContent = data.newsletter.heading;
    const nSub = document.getElementById('newsletter-subheading');
    if (nSub) nSub.textContent = data.newsletter.subheading;
    const nBadge = document.getElementById('newsletter-incentive-badge');
    if (nBadge) nBadge.textContent = data.newsletter.incentiveBadge;
    const nInput = document.getElementById('newsletter-email-input');
    if (nInput) nInput.placeholder = data.newsletter.inputPlaceholder;
    const nPriv = document.getElementById('newsletter-privacy-text');
    if (nPriv) nPriv.textContent = data.newsletter.privacyNote;
  }

  // Populate Retailers in Modal
  if (data.book && data.book.retailers) {
    const rGrid = document.getElementById('retailers-modal-grid');
    if (rGrid) {
      rGrid.innerHTML = data.book.retailers.map(ret => `
        <a href="${ret.url}" target="_blank" rel="noopener noreferrer" class="retailer-card">
          <div>
            <div class="retailer-name">${escapeHTML(ret.name)}</div>
            <div class="retailer-badge">${escapeHTML(ret.badge)}</div>
          </div>
          <div style="margin-top: 1rem; color: var(--gold-600); font-weight: 700; font-size: 0.85rem;">
            Order Now &rarr;
          </div>
        </a>
      `).join('');
    }
  }
}

/* ==========================================================================
   2. COLLAPSIBLE INTERACTIVE EXERCISE DRAWER
   ========================================================================== */
function initExerciseDrawer(exercisesData) {
  const triggerBtn = document.getElementById('toggle-exercise-drawer-btn');
  const drawer = document.getElementById('exercise-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const closeBtn = document.getElementById('close-drawer-btn');
  const heroPill = document.getElementById('hero-study-pill');
  const tabsContainer = document.getElementById('drawer-chapter-tabs');
  const contentArea = document.getElementById('drawer-active-content');

  if (!exercisesData || !exercisesData.chapters || !drawer) return;

  const chapters = exercisesData.chapters;
  let activeChapterId = chapters[0].id;

  // Render Tabs
  function renderTabs() {
    tabsContainer.innerHTML = chapters.map(ch => `
      <button class="drawer-tab-btn ${ch.id === activeChapterId ? 'active' : ''}" data-chid="${ch.id}">
        ${ch.chapterNumber}
      </button>
    `).join('');

    // Tab Click handlers
    tabsContainer.querySelectorAll('.drawer-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeChapterId = btn.getAttribute('data-chid');
        renderTabs();
        renderChapterContent();
      });
    });
  }

  // Render Content for Selected Chapter
  function renderChapterContent() {
    const chapter = chapters.find(c => c.id === activeChapterId);
    if (!chapter) return;

    // Load saved reflection from LocalStorage
    const savedReflection = localStorage.getItem(`reflection_${chapter.id}`) || '';

    // Load saved checklist states
    const savedChecks = JSON.parse(localStorage.getItem(`checklist_${chapter.id}`) || '[]');

    contentArea.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span class="badge" style="font-size: 0.75rem; padding: 0.25rem 0.65rem;">${chapter.chapterNumber} Focus</span>
        <h3 style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--navy-900); margin-top: 0.25rem;">
          ${escapeHTML(chapter.title)}
        </h3>
      </div>

      <!-- 1. Reflection Prompt -->
      <div class="exercise-block">
        <div class="exercise-block-title">
          <span>✍️</span> Reflection & Action Planning
        </div>
        <p style="font-size: 0.85rem; color: var(--slate-600); margin-bottom: 0.75rem; line-height: 1.5;">
          ${escapeHTML(chapter.reflectionPrompt)}
        </p>
        <textarea 
          class="reflection-textarea" 
          id="reflection-input" 
          placeholder="${escapeHTML(chapter.reflectionPlaceholder || 'Type your notes here...')}"
        >${escapeHTML(savedReflection)}</textarea>
        <div class="save-status-pill" id="reflection-status">
          <span>✓</span> Auto-saved to your browser
        </div>
      </div>

      <!-- 2. Self-Assessment Checklist -->
      <div class="exercise-block">
        <div class="exercise-block-title">
          <span>📋</span> Mastery Checklist
        </div>
        <div style="margin-top: 0.75rem;">
          ${chapter.checklist.map((item, idx) => {
            const isChecked = savedChecks.includes(idx) ? 'checked' : '';
            return `
              <label class="checklist-item">
                <input type="checkbox" class="checklist-checkbox" data-index="${idx}" ${isChecked} />
                <span>${escapeHTML(item)}</span>
              </label>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 3. Knowledge Check Quiz -->
      <div class="exercise-block">
        <div class="exercise-block-title">
          <span>🧠</span> Quick 2-Question Knowledge Check
        </div>
        <div style="margin-top: 1rem;">
          ${chapter.quiz.map((q, qIndex) => `
            <div class="quiz-question-card" id="quiz-q-${chapter.id}-${qIndex}">
              <div class="quiz-q-text">${qIndex + 1}. ${escapeHTML(q.question)}</div>
              <div class="quiz-options-list">
                ${q.options.map((opt, optIndex) => `
                  <button 
                    class="quiz-option-btn" 
                    data-qidx="${qIndex}" 
                    data-optidx="${optIndex}"
                  >
                    ${escapeHTML(opt)}
                  </button>
                `).join('')}
              </div>
              <div class="quiz-feedback" id="feedback-${chapter.id}-${qIndex}"></div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 4. Downloadable PDF Worksheet -->
      <div style="text-align: center; margin-top: 1rem; padding-bottom: 2rem;">
        <a href="#newsletter-section" class="btn btn-secondary btn-sm" style="width: 100%;">
          <span>📥</span> ${escapeHTML(chapter.worksheetLabel || 'Download Chapter Worksheet (PDF)')}
        </a>
      </div>
    `;

    // --- Wire up Reflection Auto-save ---
    const textarea = document.getElementById('reflection-input');
    const statusPill = document.getElementById('reflection-status');
    if (textarea) {
      let timeout;
      textarea.addEventListener('input', () => {
        if (statusPill) statusPill.innerHTML = `<span>⏳</span> Saving...`;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          localStorage.setItem(`reflection_${chapter.id}`, textarea.value);
          if (statusPill) statusPill.innerHTML = `<span>✓</span> Auto-saved to your browser`;
        }, 500);
      });
    }

    // --- Wire up Checklist Checkbox Save ---
    contentArea.querySelectorAll('.checklist-checkbox').forEach(cb => {
      cb.addEventListener('change', () => {
        const checkedIndexes = [];
        contentArea.querySelectorAll('.checklist-checkbox').forEach(c => {
          if (c.checked) checkedIndexes.push(parseInt(c.getAttribute('data-index'), 10));
        });
        localStorage.setItem(`checklist_${chapter.id}`, JSON.stringify(checkedIndexes));
      });
    });

    // --- Wire up Interactive Quiz Buttons ---
    contentArea.querySelectorAll('.quiz-option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const qIdx = parseInt(btn.getAttribute('data-qidx'), 10);
        const optIdx = parseInt(btn.getAttribute('data-optidx'), 10);
        const quizObj = chapter.quiz[qIdx];
        const feedbackEl = document.getElementById(`feedback-${chapter.id}-${qIdx}`);
        const parentCard = document.getElementById(`quiz-q-${chapter.id}-${qIdx}`);

        // Disable options in this question
        parentCard.querySelectorAll('.quiz-option-btn').forEach(b => {
          b.disabled = true;
          b.style.pointerEvents = 'none';
        });

        if (optIdx === quizObj.correctIndex) {
          btn.classList.add('correct');
          feedbackEl.className = 'quiz-feedback show-correct';
          feedbackEl.innerHTML = `<strong>Correct!</strong> ${escapeHTML(quizObj.explanation)}`;
        } else {
          btn.classList.add('incorrect');
          // Highlight correct one
          parentCard.querySelectorAll('.quiz-option-btn')[quizObj.correctIndex].classList.add('correct');
          feedbackEl.className = 'quiz-feedback show-incorrect';
          feedbackEl.innerHTML = `<strong>Not quite.</strong> ${escapeHTML(quizObj.explanation)}`;
        }
      });
    });
  }

  // Open/Close Drawer Functions
  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  triggerBtn.addEventListener('click', openDrawer);
  if (heroPill) heroPill.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Initial tab and content load
  renderTabs();
  renderChapterContent();
}

/* ==========================================================================
   3. FAQ ACCORDION LOGIC
   ========================================================================== */
function initFaqAccordion() {
  document.addEventListener('click', (e) => {
    const questionBtn = e.target.closest('.faq-question-btn');
    if (!questionBtn) return;

    const currentItem = questionBtn.closest('.faq-item');
    const wasActive = currentItem.classList.contains('active');

    // Close other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
      const btn = item.querySelector('.faq-question-btn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });

    if (!wasActive) {
      currentItem.classList.add('active');
      questionBtn.setAttribute('aria-expanded', 'true');
    }
  });
}

/* ==========================================================================
   4. MODALS (BUY RETAILER PICKER)
   ========================================================================== */
function initModals() {
  const buyModal = document.getElementById('buy-modal-overlay');
  const closeBuyBtn = document.getElementById('close-buy-modal');

  document.querySelectorAll('.open-buy-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (buyModal) buyModal.classList.add('open');
    });
  });

  if (closeBuyBtn && buyModal) {
    closeBuyBtn.addEventListener('click', () => buyModal.classList.remove('open'));
    buyModal.addEventListener('click', (e) => {
      if (e.target === buyModal) buyModal.classList.remove('open');
    });
  }
}

/* ==========================================================================
   5. NEWSLETTER FORM (NETLIFY COMPATIBLE)
   ========================================================================== */
function initNewsletterForm(newsletterConfig) {
  const form = document.getElementById('newsletter-subscribe-form');
  const toast = document.getElementById('newsletter-success-toast');
  const submitBtn = document.getElementById('newsletter-submit-btn');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('newsletter-email-input');
    const email = emailInput.value.trim();

    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Subscribing...</span>`;
    }

    // Submit to Netlify Form via Fetch
    try {
      const formData = new FormData(form);
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
    } catch (err) {
      console.log('Netlify submission processed (or local preview).');
    }

    // Show Success State
    if (toast) {
      toast.style.display = 'block';
      toast.textContent = (newsletterConfig && newsletterConfig.successMessage) || "🎉 You're in! Check your inbox for your free toolkit.";
    }

    form.style.display = 'none';
  });
}

/* ==========================================================================
   6. OPTIONAL SHEETDB / GOOGLE SHEETS CONNECTOR
   ========================================================================== */
async function fetchSheetDbContent(url) {
  const cacheKey = `sheetdb_cache_${url}`;
  const cached = localStorage.getItem(cacheKey);
  const cacheTime = localStorage.getItem(`${cacheKey}_time`);
  const timeoutMs = (BOOK_CONFIG.integration.cacheTimeoutMinutes || 10) * 60 * 1000;

  if (cached && cacheTime && (Date.now() - parseInt(cacheTime, 10) < timeoutMs)) {
    return JSON.parse(cached);
  }

  const response = await fetch(url);
  if (!response.ok) throw new Error(`SheetDB HTTP Error: ${response.status}`);
  const data = await response.json();

  localStorage.setItem(cacheKey, JSON.stringify(data));
  localStorage.setItem(`${cacheKey}_time`, Date.now().toString());
  return data;
}

function mergeSheetData(baseConfig, sheetRows) {
  // Merge key/value pairs from Google Sheet rows: [ { key: "bookTitle", value: "New Title" }, ... ]
  const merged = JSON.parse(JSON.stringify(baseConfig));
  if (!Array.isArray(sheetRows)) return merged;

  sheetRows.forEach(row => {
    if (!row.key || row.value === undefined) return;
    const keyPath = row.key.split('.');
    let target = merged;
    for (let i = 0; i < keyPath.length - 1; i++) {
      if (!target[keyPath[i]]) target[keyPath[i]] = {};
      target = target[keyPath[i]];
    }
    target[keyPath[keyPath.length - 1]] = row.value;
  });

  return merged;
}

/* Helper */
function escapeHTML(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

/* ==========================================================================
   7. DUAL-BOOK HERO CAROUSEL / SLIDER LOGIC
   ========================================================================== */
function initHeroBookCarousel(data) {
  const books = (data && data.books && data.books.length >= 2) ? data.books : BOOK_CONFIG.books;
  if (!books || books.length <= 1) return;

  const prevBtn = document.getElementById('hero-carousel-prev');
  const nextBtn = document.getElementById('hero-carousel-next');
  const dotsContainer = document.getElementById('hero-carousel-dots');
  const book3d = document.getElementById('hero-book-3d');
  const book3dLink = document.getElementById('hero-book-3d-link');
  const primaryBuyBtn = document.getElementById('hero-primary-buy-btn');

  let activeIndex = 0;

  // Initial load cover image
  const initialImg = document.getElementById('book-cover-img');
  const initialContainer = document.getElementById('book-cover-container');
  if (initialImg && books[0] && books[0].coverImage) {
    initialImg.referrerPolicy = 'no-referrer';
    initialImg.src = books[0].coverImage;
    initialImg.style.display = 'block';
    if (initialContainer) initialContainer.classList.add('has-image');
  }

  // Render dots
  if (dotsContainer) {
    dotsContainer.innerHTML = books.map((_, idx) => `
      <div class="hero-carousel-dot ${idx === 0 ? 'active' : ''}" data-idx="${idx}" title="View book ${idx + 1}"></div>
    `).join('');

    dotsContainer.querySelectorAll('.hero-carousel-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        const targetIdx = parseInt(dot.getAttribute('data-idx'), 10);
        if (targetIdx !== activeIndex) {
          switchBook(targetIdx, targetIdx > activeIndex ? 'left' : 'right');
        }
      });
    });
  }

  function switchBook(index, direction = 'left') {
    if (!books[index]) return;
    activeIndex = index;
    const currentBook = books[index];

    if (book3d) {
      book3d.classList.add(direction === 'left' ? 'slide-out-left' : 'slide-out-right');
      setTimeout(() => {
        // Update Title & Subtitle
        const heroTitle = document.getElementById('hero-book-title');
        if (heroTitle) {
          if (currentBook.title.includes(':')) {
            const parts = currentBook.title.split(':');
            heroTitle.innerHTML = `${parts[0]}: <span>${parts[1]}</span>`;
          } else {
            const parts = currentBook.title.split(' ');
            const lastWord = parts.pop();
            heroTitle.innerHTML = `${parts.join(' ')} <span>${lastWord}</span>`;
          }
        }

        const heroSub = document.getElementById('hero-book-subtitle');
        if (heroSub) heroSub.textContent = currentBook.subtitle;

        const heroBadge = document.getElementById('hero-badge-text');
        if (heroBadge && currentBook.badgeText) {
          heroBadge.innerHTML = `${currentBook.badgeText}`;
        }

        const pricePaperback = document.getElementById('price-paperback');
        if (pricePaperback && currentBook.pricing) pricePaperback.textContent = currentBook.pricing.paperback || '$19.99';

        const priceEbook = document.getElementById('price-ebook');
        if (priceEbook && currentBook.pricing) priceEbook.textContent = currentBook.pricing.ebook || '$9.99';

        const coverImg = document.getElementById('book-cover-img');
        const coverContainer = document.getElementById('book-cover-container');
        if (coverImg && currentBook.coverImage) {
          coverImg.referrerPolicy = 'no-referrer';
          coverImg.src = currentBook.coverImage;
          coverImg.alt = currentBook.title;
          coverImg.style.display = 'block';
          if (coverContainer) coverContainer.classList.add('has-image');
        }

        if (primaryBuyBtn && currentBook.amazonUrl) {
          primaryBuyBtn.href = currentBook.amazonUrl;
        }

        if (book3dLink && currentBook.amazonUrl) {
          book3dLink.href = currentBook.amazonUrl;
        }

        book3d.classList.remove('slide-out-left', 'slide-out-right');
      }, 300);
    }

    if (dotsContainer) {
      dotsContainer.querySelectorAll('.hero-carousel-dot').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIndex);
      });
    }
  }

  // Global click delegation for hero carousel arrows
  document.addEventListener('click', (e) => {
    const prevTarget = e.target.closest('#hero-carousel-prev');
    const nextTarget = e.target.closest('#hero-carousel-next');

    if (prevTarget) {
      e.preventDefault();
      e.stopPropagation();
      const nextIndex = (activeIndex - 1 + books.length) % books.length;
      switchBook(nextIndex, 'right');
    } else if (nextTarget) {
      e.preventDefault();
      e.stopPropagation();
      const nextIndex = (activeIndex + 1) % books.length;
      switchBook(nextIndex, 'left');
    }
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const nextIndex = (activeIndex - 1 + books.length) % books.length;
      switchBook(nextIndex, 'right');
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const nextIndex = (activeIndex + 1) % books.length;
      switchBook(nextIndex, 'left');
    });
  }
}
