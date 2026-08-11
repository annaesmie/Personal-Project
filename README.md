# 📚 Single-Author Education Book Landing Page & Study Companion

A modern, high-converting single-book landing page and interactive study companion template built for educational authors, researchers, and educators.

---

## 🌟 Key Features

1. **Top-Funnel Conversion (Hero CTA):** Sticky navigation bar with top "Buy the Book" button and 3D perspective book cover mockup.
2. **Pedagogical Structure:** Problem Statement ("The Challenge in Modern Education"), Book Overview, Author Bio with stats, Sample Chapter Excerpt (with free PDF download), Reader Reviews, and FAQ Accordion.
3. **Interactive Study Companion (Collapsible Drawer):**
   - Reflection prompts with automatic `localStorage` auto-saving.
   - Self-assessment checkboxes with persistent state.
   - 2-question interactive knowledge check quiz with instant explanations and visual feedback.
   - Downloadable worksheet links.
4. **Non-Technical Friendly (`content.js`):** Edit all text, prices, reviews, and exercises in one simple configuration file without touching HTML.
5. **Google Sheets / SheetDB Ready:** Connect directly to a live Google Sheet to update book details, reviews, and pricing in real time without writing code.
6. **Netlify Forms Built-In:** The footer newsletter form automatically captures email leads in Netlify without needing a custom backend server.

---

## 📁 Repository Structure

```
├── index.html       # Semantic HTML5 layout with accessible landmarks & SEO tags
├── style.css        # Vanilla CSS design system (Navy/Slate/Gold, 3D Book, Animations)
├── content.js       # Master configuration file (edit text here!)
├── app.js           # Interactive logic (Dynamic renderer, Drawer, Quizzes, LocalStorage)
├── netlify.toml     # Netlify build and security header configuration
└── README.md        # This guide
```

---

## ✏️ Method 1: Editing Content Locally (Without Coding)

All the text on the website lives inside **`content.js`**.

1. Open `content.js` using any text editor (Notepad, VS Code, TextEdit).
2. Look for the section you want to change (e.g., `book`, `author`, `reviews`, `faqs`, `exercisesSidebar`).
3. Replace the text inside the quotation marks `"..."`:
   ```javascript
   book: {
     title: "Your Book Title Here",
     subtitle: "Your Subtitle Here",
     pricing: {
       hardcover: "$29.99",
       paperback: "$19.99",
       ebook: "$9.99"
     }
   }
   ```
4. Save the file. When you push to GitHub, Netlify updates the live site in seconds!

---

## 📊 Method 2: Connecting to Google Sheets (Via SheetDB)

If you prefer editing content inside a Google Sheet instead of code:

### Step 1: Create a Google Sheet
Create a new Google Sheet with two columns: `key` and `value`.
| key | value |
| :--- | :--- |
| `book.title` | The Modern Learner's Blueprint |
| `book.subtitle` | Transforming Classroom Engagement in the Digital Age |
| `author.name` | Dr. Marcus Vance |
| `book.pricing.hardcover` | $27.99 |
| `newsletter.heading` | Join Our Educator Community |

### Step 2: Get your API URL from SheetDB
1. Go to [SheetDB.io](https://sheetdb.io) (Free).
2. Click **Create New API** and paste the shareable link of your Google Sheet.
3. Copy your API endpoint URL (e.g. `https://sheetdb.io/api/v1/a1b2c3d4e5f6`).

### Step 3: Enable Google Sheets in `content.js`
Open `content.js` and update the `integration` block:
```javascript
integration: {
  useGoogleSheets: true,
  sheetDbUrl: "https://sheetdb.io/api/v1/YOUR_SHEETDB_API_ID_HERE",
  cacheTimeoutMinutes: 10
}
```
*That's it!* Any time you change a cell in Google Sheets, the website updates automatically.

---

## 🚀 How to Deploy to Netlify via GitHub

### What to Add to your GitHub Repository:
Push all the files in this directory to your GitHub repository:
- `index.html`
- `style.css`
- `content.js`
- `app.js`
- `netlify.toml`
- `README.md`

### Step-by-Step Netlify Setup:
1. Log in to [Netlify](https://www.netlify.com).
2. Click **"Add new site"** > **"Import an existing project"**.
3. Choose **GitHub** and authorize Netlify to access your repository.
4. Select your book repository.
5. In the Build settings:
   - **Branch to deploy:** `main`
   - **Base directory:** *(leave blank)*
   - **Build command:** *(leave blank)*
   - **Publish directory:** `.` (or leave blank)
6. Click **"Deploy site"**.

### Collecting Newsletter Leads on Netlify:
The newsletter form is already pre-configured with `data-netlify="true"`.
* When visitors enter their email in the footer, Netlify captures it automatically.
* In your Netlify dashboard, go to **Forms** > **Active forms** > **newsletter** to view or export all collected emails to CSV or integrate them with Mailchimp/Zapier.

---

## 💻 Local Testing
To preview the website on your computer:
1. Simply double-click `index.html` to open it in your browser.
2. Or use VS Code's **Live Server** extension.
