# 🚀 QA Automation Engineer Portfolio Template

> **A professional, high-performance portfolio template designed specifically for QA Engineers.**  
> Featuring **macOS Desktop** design, Terminal Hero, and a **100% Automated Test Suite** ready to showcase your skills.

[![Deployed with](https://img.shields.io/badge/Deployed%20with-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://pages.github.com/)
[![Tested with](https://img.shields.io/badge/Tested%20with-Cypress-04C38E?style=for-the-badge&logo=cypress)](https://cypress.io)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions)](https://github.com/features/actions)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)]()

## ✨ Why This Template?

Most portfolio templates are just HTML/CSS. **This one is different.**
This template is built by a QA, for QAs. It comes pre-packaged with a complete **Cypress E2E Testing Framework**.

*   ✅ **Showcase Your Automation Skills**: The repository itself proves you can write clean, maintainable test code.
*   ✅ **CI/CD Ready**: Integrated with GitHub Actions. Every change runs the test suite automatically.
*   ✅ **Interactive OS Design**: Complete with Terminal, Finder, and VS Code-style windows.
*   ✅ **Easy to Customize**: No complex coding required. Just edit the content files.

---

## 🛠️ How to Use (For Non-Programmers)

You don't need to be a Fullstack Developer to use this. Just follow these steps:

### 1. Clone & Install
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
npm install
```

### 2. Customize Content
You only need to edit **2 files** to make this website yours:

#### 🟢 **Edit Profile, Experience & Education**
Open `index.html`. Search for these sections and replace the text with yours:
*   `<h1>YOUR NAME</h1>` (Hero Section)
*   `href="mailto:..."` (Contact Info)
*   `href="https://wa.me/..."` (WhatsApp)
*   `<section id="experience">` (Update your job history)
*   `<section id="education">` (Update your degrees/bootcamps)

#### 🟢 **Edit Projects Data**
Open `src/main.js`. You will find a `const projects = [...]` list.
Just change the values inside the quotes:
```javascript
{
  title: 'My Awesome Automation Project',
  description: 'I automated 100+ test cases using Selenium...',
  github: 'https://github.com/yourusername/project',
  tags: ['Selenium', 'Java', 'TestNG']
}
```

#### 🟢 **Update Profile Photo**
1.  Prepare your photo (square aspect ratio recommended).
2.  Rename it to `profile.jpg`.
3.  Replace the existing file at `public/images/profile.jpg`.
63.
64. #### 🟢 **Update Cover Letter**
65. 1.  Prepare your Cover Letter/CV in PDF format.
66. 2.  Rename it to `Cover_Letter_Albarokah.pdf`.
67. 3.  Replace the existing file at `public/files/Cover_Letter_Albarokah.pdf`.

### 3. Deploy 🚀
Push your changes to GitHub, and the CI/CD pipeline will automatically:
1.  Run the tests to ensure you didn't break anything.
2.  Deploy your new portfolio to GitHub Pages (after you configure Settings > Pages > Source to `gh-pages` branch).

---

## 🧪 Test Automation (The "Cool" Part)

This project includes **120+ Automated E2E Tests** covering:
*   Smoke Testing
*   Navigation & Routing
*   Responsive Design (Desktop, Tablet, Mobile)
*   Theme Toggle Functionality
*   Content Validation

**Run tests locally:**
```bash
# Run headless (fast)
npm run test:e2e

# Open Test Runner (visual)
npm run cypress:open
```

**Show this to recruiters!** It proves you practice what you preach.

---

## 🏗️ Project Structure

```
.
├── public/              # Static assets (images, icons)
│   └── images/          # PUT YOUR PHOTO HERE
├── src/
│   ├── main.js          # EDIT YOUR PROJECTS HERE
│   └── style.css        # Styling (Glassmorphism)
├── cypress/             # The Automation Suite
│   ├── e2e/             # Test Scripts
│   └── support/         # Page Object Models
├── index.html           # EDIT YOUR PROFILE INFO HERE
└── ...
```

---

## 🛡️ License

Free to use! Modify it, break it, fix it, and use it to land your dream QA job.
If you use this template, giving a ⭐ star to the repo would be awesome!

---

**Original Author**: Albarokah Rifansah Sutanto Putra  
**LinkedIn**: [Connect with me](https://www.linkedin.com/in/albarokahrifansahsutantoputra)
