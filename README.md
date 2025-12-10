# 📚 QA Engineer Portfolio Website

Portfolio website showcasing my projects, skills, and certifications as a Quality Assurance Engineer.

## 🚀 Live Demo

**Visit the live portfolio**: [https://albarokah9.github.io/Albarokah9-Project-Portofolio-Website/](https://albarokah9.github.io/Albarokah9-Project-Portofolio-Website/)

---

## 🎯 Project Overview

**Tech Stack**: Vite + Vanilla JavaScript + CSS3  
**Testing**: Cypress E2E Testing  
**Deployment**: GitHub Pages (Free & Auto-deploy)  
**Design**: Glassmorphism with dark/light theme toggle

---

## 🏗️ Project Structure

```
Project-Portofolio-Website/
├── .github/
│   └── workflows/
│       ├── pages.yml           # GitHub Pages deployment workflow
│       └── ci-e2e.yml          # CI/CD untuk Cypress E2E testing
├── cypress/
│   ├── e2e/
│   │   └── home.cy.js         # Sample Cypress test
│   └── cypress.config.js       # Cypress configuration
├── public/
│   └── vite.svg               # Favicon
├── src/
│   ├── main.js                # JavaScript logic (projects data, menu toggle)
│   └── style.css              # Styling dengan glassmorphism design
├── index.html                 # Main HTML file
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite configuration (base path)
└── README.md                  # This file
```

---

## 📄 Portfolio Sections

### ✅ **Hero Section**
- Full name & professional title
- Contact information (Email, WhatsApp, Location)
- Social links (LinkedIn, GitHub)

### ✅ **Professional Summary**
- Current role at Horus Technology
- Technical expertise (Cypress, Katalon Studio, Postman, JMeter)
- Testing methodologies (Manual, Automation, Performance, API, Mobile)

### ✅ **Professional Experience**
- **Horus Technology** - QA Tester Intern (Oct 2025 - Present)
- **PT Biznet** - Fiber Optic Technician (March 2023 - June 2024)

### ✅ **Education**
- Bootcamp QA Engineer (Eduwork.id - 2025)
- Computer Network Engineering (SMK Geo Informatika - 2022)

### ✅ **Skills & Expertise** (6 Categories)
1. **Manual Testing** - Test Case Writing, Bug Reporting, UAT, etc.
2. **Automation Testing** - Cypress, Katalon Studio, BDD Cucumber
3. **Tools & Platforms** - ClickUp, Qase.io, Git, Mochawesome, Allure
4. **API & Performance Testing** - Postman, JMeter, REST API
5. **Database & Methodology** - MySQL, Agile, Scrum, SDLC, STLC
6. **Soft Skills** - Leadership, Problem Solving, Communication, etc.

### ✅ **Projects** (5 Automation Projects)
1. **Performance Test & Load Testing** - Bobobobo.com (JMeter)
2. **Automation Testing** - Soapleasure.com (Cypress)
3. **Automation Testing Katalon Studio** - Tokopedia.com
4. **Mobile Testing Katalon Studio** - Traveloka Mobile Android
5. **Automation Testing - BDD Cucumber** Cypress

*Each project includes: Date, Description, Tech Tags, and GitHub Link*

### ✅ **Certifications** (4 Professional Certificates)
1. QA Effective Testing Strategies (Eduwork.id) ✅ [View Certificate]
2. Technical Workshop & QA Session (HACKTIV8) ✅ [View Certificate]
3. REST API with Mongoose & Express JS (Udemy) ✅ [View Certificate]
4. Postman API Fundamentals Student Expert (Postman) ✅ [View Certificate]

---

## 🎨 Design Features

- **Glassmorphism UI** with blur effects
- **Dark/Light Theme Toggle** ✨ - Seamless switching with optimized contrast
- **Premium color schemes**:
  - Dark Mode: Cyan & pink accents on dark background
  - Light Mode: Blue & red accents with high contrast text
- **Smooth animations** on hover & scroll
- **Fully responsive** (Desktop, Tablet, Mobile)
- **Hamburger menu** for mobile navigation
- **Interactive elements** (WhatsApp link, certificate buttons)
- **Optimized readability** - All text readable in both themes

---

## 🧪 Testing with Cypress

This portfolio includes Cypress for E2E testing.

### **Run Tests**

```bash
# Open Cypress Test Runner (GUI)
npm run cy:open

# Run tests in headless mode
npm test
```

### **Sample Test** (`cypress/e2e/home.cy.js`)
```javascript
describe('Portfolio Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.contains('Project Portfolio');
    cy.contains('ALBAROKAH RIFANSAH');
    cy.get('.project-card').should('have.length.at.least', 1);
  });
});
```

### **Add More Tests**
Create new test files in `cypress/e2e/` folder:
```bash
cypress/e2e/navigation.cy.js
cypress/e2e/responsive.cy.js
cypress/e2e/links.cy.js
```

---

## 🚀 Local Development

### **1. Clone Repository**
```bash
git clone https://github.com/Albarokah9/Albarokah9-Project-Portofolio-Website.git
cd Albarokah9-Project-Portofolio-Website
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Run Development Server**
```bash
npm run dev
```
Open browser at `http://localhost:5173`

### **4. Build for Production**
```bash
npm run build
```
Production files will be in `dist/` folder.

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Vite) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run cy:open` | Open Cypress Test Runner (GUI) |
| `npm test` | Run Cypress tests (headless) |

---

## 🔄 How to Update Portfolio

### **Update Content**
1. Edit `index.html` for structure changes
2. Edit `src/main.js` for projects data
3. Edit `src/style.css` for styling

### **Test Locally**
```bash
npm run dev
# Visit http://localhost:5173
```

### **Deploy to Production**
```bash
git add .
git commit -m "Update portfolio content"
git push
```
**Auto-deploy in 1-2 minutes via GitHub Actions!** ✅

---

## 🌐 Deployment (GitHub Pages)

### **How It Works**
1. Push code to `main` branch
2. GitHub Actions workflow (`.github/workflows/pages.yml`) triggers
3. Workflow runs:
   - ✅ Install dependencies (`npm ci`)
   - ✅ Fix Rollup dependencies (Linux workaround)
   - ✅ Build project (`npm run build`)
   - ✅ Deploy `dist/` folder to GitHub Pages
4. Live in 1-2 minutes at: https://albarokah9.github.io/Albarokah9-Project-Portofolio-Website/

### **CI/CD Testing**
- Automated E2E tests run on every push to `main` or `develop`
- Cypress tests verify portfolio functionality
- Screenshots & videos saved as artifacts on test failure

### **Workflow Files**

**Deployment** (`.github/workflows/pages.yml`):
```yaml
- Trigger: Push to main branch
- Steps:
  1. Checkout code
  2. Setup Node.js 20
  3. Install dependencies (npm ci)
  4. Fix Rollup optional dependencies
  5. Build with Vite
  6. Upload dist folder
  7. Deploy to GitHub Pages
```

**CI/CD Testing** (`.github/workflows/ci-e2e.yml`):
```yaml
- Trigger: Push/PR to main or develop
- Steps:
  1. Checkout code
  2. Setup Node.js 20
  3. Install dependencies
  4. Build & serve preview
  5. Run Cypress E2E tests
  6. Upload screenshots/videos on failure
```

---

## 🐛 Troubleshooting

### **404 Error on GitHub Pages**
**Penyebab**: Workflow tidak build Vite dengan benar  
**Solusi**: 
- Pastikan workflow punya step `npm run build`
- Upload folder `./dist` bukan root folder
- Check GitHub Actions logs untuk error details

### **Styling Tidak Muncul**
**Penyebab**: Base path salah di `vite.config.js`  
**Solusi**: Set `base: './'` untuk relative paths

### **Cypress Test Gagal**
**Penyebab**: Dev server tidak running  
**Solusi**: 
```bash
# Terminal 1: Run dev server
npm run dev

# Terminal 2: Run Cypress
npm run cy:open
```

### **Hamburger Menu Tidak Berfungsi (Mobile)**
**Penyebab**: JavaScript tidak load  
**Solusi**: 
- Buka browser console (F12)
- Pastikan `src/main.js` ter-load tanpa error
- Check event listeners di mobile menu

---

## 🛠️ Tech Stack Details

### **Frontend**
- **Vite 7.2.4** - Fast build tool & dev server
- **Vanilla JavaScript** - No framework overhead
- **CSS3** - Custom styling with CSS variables
- **Google Fonts** - Outfit font family

### **Testing**
- **Cypress 15.7.1** - E2E testing framework

### **Deployment**
- **GitHub Pages** - Free static hosting
- **GitHub Actions** - CI/CD automation

---

## 📧 Contact

- **Email**: [albarokahrifansahsutantoputra@gmail.com](mailto:albarokahrifansahsutantoputra@gmail.com)
- **WhatsApp**: [+6289611515526](https://wa.me/6289611515526)
- **LinkedIn**: [linkedin.com/in/albarokahrifansahsutantoputra](https://www.linkedin.com/in/albarokahrifansahsutantoputra)
- **GitHub**: [github.com/Albarokah9](https://github.com/Albarokah9)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🎯 Future Enhancements (Roadmap)

### ✅ **Completed**
- [x] Add dark/light theme toggle with optimized contrast
- [x] Implement CI/CD with GitHub Actions
- [x] Add Cypress E2E testing with artifact uploads

### 🚧 **Planned**
- [ ] Add more Cypress E2E tests (navigation, forms, responsive)
- [ ] Implement Google Analytics for visitor tracking
- [ ] Create custom 404 page
- [ ] Add blog section for QA articles
- [ ] Implement contact form with backend
- [ ] Add project demo videos/GIFs
- [ ] SEO optimization (sitemap, meta tags)
- [ ] Performance optimization (lazy loading, code splitting)
- [ ] Custom domain setup

---

**Built with ❤️ by Albarokah Rifansah Sutanto Putra**  
**Last Updated**: December 10, 2025  
**Version**: 1.1.0  
**Status**: ✅ Live & Production Ready
