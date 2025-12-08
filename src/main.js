import './style.css'

const projects = [
  {
    title: 'Performance Test & Load Testing - Bobobobo.com',
    date: 'June 2025',
    description: 'Performed comprehensive performance testing for the bobobobo.com website using JMeter, analyzing key metrics to ensure optimal website responsiveness and stability.',
    image: 'https://placehold.co/600x400/1a1a2e/00f2ea?text=JMeter+Performance',
    github: 'https://github.com/Albarokah9/Project_performance_test_jmeter', // HANYA LINK GITHUB
    docs: '', 
    spreadsheet: '',
    tags: ['JMeter', 'Performance Testing', 'Load Testing']
  },
  {
    title: 'Automation Testing - Soapleasure.com',
    date: 'May 2025',
    description: 'Performed comprehensive End-to-End (E2E) automation testing for Soapleasure.com using Cypress, covering core functionalities such as Register, Login, Logout, Forgot Password, and Checkout, while leveraging Cypress Mochawesome Reporter for detailed reporting and ClickUp for efficient test case management.',
    image: 'https://placehold.co/600x400/1a1a2e/00f2ea?text=Cypress+E2E',
    github: 'https://github.com/Albarokah9/Project_Portofolio_e2e_cypress_soapleasure',
    docs: '',
    spreadsheet: '',
    tags: ['Cypress', 'E2E Testing', 'Mochawesome']
  },
  {
    title: 'Automation Testing Katalon Studio - Tokopedia.com',
    date: 'May 2025',
    description: 'Performed comprehensive mobile automation testing for the Traveloka Android application using Katalon Studio, covering core functionalities such as Register, Login, Search Flight, and Search Hotel, with efficient test case management via ClickUp.',
    image: 'https://placehold.co/600x400/1a1a2e/00f2ea?text=Katalon+Web',
    github: 'https://github.com/Albarokah9/Project_katalon_E2E_Tokopedia',
    docs: '',
    spreadsheet: '',
    tags: ['Katalon Studio', 'Web Automation', 'E2E']
  },
  {
    title: 'Mobile Testing Katalon Studio - Traveloka Mobile Android',
    date: 'May 2025',
    description: 'Performed comprehensive mobile automation testing for the Traveloka Android application using Katalon Studio, covering core functionalities such as Register, Login, Search Flight, and Search Hotel, with efficient test case management via ClickUp.',
    image: 'https://placehold.co/600x400/1a1a2e/00f2ea?text=Mobile+Testing',
    github: 'https://github.com/Albarokah9/Project_katalon_Traveloka_Mobile',
    docs: '',
    spreadsheet: '',
    tags: ['Katalon Studio', 'Mobile Testing', 'Android']
  },
  {
    title: 'Automation Testing - BDD Cucumber Cypress',
    date: 'April 2025',
    description: 'Developed and executed End-to-End (E2E) automation test suites using Cypress and Cucumber BDD for Zero WebApp Security and Saucedemo. Focused on critical paths including user login (valid/invalid) and search functionalities. Generated detailed reports using Cypress Mochawesome Reporter to track test execution and results effectively.',
    image: 'https://placehold.co/600x400/1a1a2e/00f2ea?text=BDD+Cucumber',
    github: 'https://github.com/Albarokah9/BDD',
    docs: '',
    spreadsheet: '',
    tags: ['Cypress', 'BDD', 'Cucumber', 'Mochawesome']
  },
  {
    title: 'End-to-end (E2E) Testing Automation with Cypress & Qase.io',
    date: 'Agustus 2025',
    description: 'Automated end-to-end testing project using Cypress integrated with Qase.io TestOps for test management, reporting, and tracking.',
    image: 'https://placehold.co/600x400/1a1a2e/00f2ea?text=Cypress+Qase.io',
    github: 'https://github.com/Albarokah9/Cypress_qase.io',
    docs: '',
    spreadsheet: '',
    tags: ['Cypress', 'Qase.io', 'E2E Testing']
  },
  {
    title: 'Manual Testing - saucedemo.com',
    date: 'Juli 2025',
    description: 'Performed manual testing on www.saucedemo.com to verify core functionalities including Valid Login, Invalid Login, Add to Cart, Checkout, and Logout. Utilized Qase.io for test case management, with results documented in both HTML and XLSX formats. All 5 out of 5 test cases successfully passed.',
    image: 'https://placehold.co/600x400/1a1a2e/00f2ea?text=Manual+Testing',
    github: 'https://github.com/Albarokah9/Manual-Testing-Saucedemo',
    docs: '',
    spreadsheet: '',
    tags: ['Manual Testing', 'Qase.io']
  },
  {
    title: 'Manual Testing - OrangeHRM Website',
    date: 'Juli 2025',
    description: 'Performed manual testing on the OrangeHRM website to ensure the reliability of the Login, Logout, Forgot Password, and Change Password features. Out of a total of 9 test cases, all were successfully Passed (100%), covering both positive and negative scenarios. The results confirmed that the system provides secure authentication, proper error handling, and a consistent, reliable user experience.',
    image: 'https://placehold.co/600x400/1a1a2e/00f2ea?text=Manual+Testing',
    github: '',
    docs: '',
    spreadsheet: 'https://docs.google.com/spreadsheets/d/17UIqMKB-7DH3AHa4Nqn7NADEwpFZy_tz2NbMzWuq7Jk/edit?usp=sharing', // Link Spreadsheet
    tags: ['Manual Testing', 'Qase.io']
  },
  {
    title: 'TEST PLAN - Nutapos Web Application (Search & Discount Module)',
    date: 'September 2025',
    description: 'Prepared a comprehensive Test Plan and Test Cases for the Nutapos Web Application, specifically focusing on the Discount (Diskon) Module. The objective was to validate critical functionalities such as outlet search, discount search, and CRUD operations (Add, Edit, Delete Discounts) with proper validation and error handling, based on the UI/UX design provided in Figma.',
    image: 'https://placehold.co/600x400/1a1a2e/00f2ea?text=Test+Plan',
    github: '',
    docs: 'https://docs.google.com/document/d/1l66-Xyoqsr--m00lVzUl-JqKvOA8mmY1V9zwLIOCBVs/edit?usp=sharing', // Link Google Docs
    spreadsheet: '',
    tags: ['Test Plan', 'Nutapos']
  },
  {
    title: 'Test Cases  - Nutapos Web Application (Search & Discount Module)',
    date: 'September 2025',
    description: 'Created a set of 15 manual test cases to validate the Search & Discount module of Nutapos Web Application. The scope included outlet search, discount search, add/edit/delete discounts, and input validation. Test cases were designed based on functional requirements and UI flows provided in a Figma prototype.',
    image: 'https://placehold.co/600x400/1a1a2e/00f2ea?text=Test+Cases',
    github: '',
    docs: '',
    spreadsheet: 'https://docs.google.com/spreadsheets/d/1J8kQ_cC-qyN2Pw78P6o53km7jQnfCcU0Yb36KhSgmvs/edit?usp=sharing', // Link Spreadsheet
    tags: ['Test Cases', 'Nutapos']
  }
];

const renderProjects = () => {
  const projectList = document.querySelector('#project-list');
  if (!projectList) return;

  projectList.innerHTML = projects.map(project => `
    <div class="project-card">
      <img src="${project.image}" alt="${project.title}" class="project-image" />
      <div class="project-content">
        <div class="project-date">${project.date}</div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        
        <div class="project-links">
          
          ${project.github ? `<a href="${project.github}" target="_blank" class="btn secondary" style="padding: 8px 16px; font-size: 0.9rem; margin-right: 10px;">View on GitHub</a>` : ''}

          ${project.docs ? `<a href="${project.docs}" target="_blank" class="btn secondary" style="padding: 8px 16px; font-size: 0.9rem; margin-right: 10px;">View on Google Docs</a>` : ''}
          
          ${project.spreadsheet ? `<a href="${project.spreadsheet}" target="_blank" class="btn secondary" style="padding: 8px 16px; font-size: 0.9rem; margin-right: 10px;">View on Spreadsheet</a>` : ''}
        
        </div>
        </div>
    </div>
  `).join('');
};

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();

  // Mobile menu toggle
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.querySelector('.theme-icon');
  const htmlElement = document.documentElement;

  // Check for saved theme preference or default to 'dark'
  const currentTheme = localStorage.getItem('theme') || 'dark';
  htmlElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
  }

  // Smooth scroll for anchor links (if CSS scroll-behavior is not enough or supported)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
