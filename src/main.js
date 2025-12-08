import './style.css'

const projects = [
  {
    title: 'Performance Test & Load Testing - Bobobobo.com',
    date: 'June 2025',
    description: 'Performed comprehensive performance testing for the bobobobo.com website using JMeter, analyzing key metrics to ensure optimal website responsiveness and stability.',
    image: 'https://placehold.co/600x400/1a1a2e/00f2ea?text=JMeter+Performance',
    link: 'https://github.com/Albarokah9/Project_performance_test_jmeter',
    tags: ['JMeter', 'Performance Testing', 'Load Testing']
  },
  {
    title: 'Automation Testing - Soapleasure.com',
    date: 'May 2025',
    description: 'Performed comprehensive End-to-End (E2E) automation testing for Soapleasure.com using Cypress, covering core functionalities such as Register, Login, Logout, Forgot Password, and Checkout, while leveraging Cypress Mochawesome Reporter for detailed reporting and ClickUp for efficient test case management.',
    image: 'https://placehold.co/600x400/1a1a2e/00f2ea?text=Cypress+E2E',
    link: 'https://github.com/Albarokah9/Project_Portofolio_e2e_cypress_soapleasure',
    tags: ['Cypress', 'E2E Testing', 'Mochawesome']
  },
  {
    title: 'Automation Testing Katalon Studio - Tokopedia.com',
    date: 'May 2025',
    description: 'Performed comprehensive mobile automation testing for the Traveloka Android application using Katalon Studio, covering core functionalities such as Register, Login, Search Flight, and Search Hotel, with efficient test case management via ClickUp.',
    image: 'https://placehold.co/600x400/1a1a2e/00f2ea?text=Katalon+Web',
    link: 'https://github.com/Albarokah9/Project_katalon_E2E_Tokopedia',
    tags: ['Katalon Studio', 'Web Automation', 'E2E']
  },
  {
    title: 'Mobile Testing Katalon Studio - Traveloka Mobile Android',
    date: 'May 2025',
    description: 'Performed comprehensive mobile automation testing for the Traveloka Android application using Katalon Studio, covering core functionalities such as Register, Login, Search Flight, and Search Hotel, with efficient test case management via ClickUp.',
    image: 'https://placehold.co/600x400/1a1a2e/00f2ea?text=Mobile+Testing',
    link: 'https://github.com/Albarokah9/Project_katalon_Traveloka_Mobile',
    tags: ['Katalon Studio', 'Mobile Testing', 'Android']
  },
  {
    title: 'Automation Testing - BDD Cucumber Cypress',
    date: 'April 2025',
    description: 'Developed and executed End-to-End (E2E) automation test suites using Cypress and Cucumber BDD for Zero WebApp Security and Saucedemo. Focused on critical paths including user login (valid/invalid) and search functionalities. Generated detailed reports using Cypress Mochawesome Reporter to track test execution and results effectively.',
    image: 'https://placehold.co/600x400/1a1a2e/00f2ea?text=BDD+Cucumber',
    link: 'https://github.com/Albarokah9/BDD',
    tags: ['Cypress', 'BDD', 'Cucumber', 'Mochawesome']
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
        <a href="${project.link}" target="_blank" class="btn secondary" style="padding: 8px 16px; font-size: 0.9rem;">View on GitHub</a>
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
