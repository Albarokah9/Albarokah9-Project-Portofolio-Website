import './style.css'
import './terminal-ui.css'
import './macos-theme.css'

import { projects } from './data/projects.js'

const renderProjects = () => {
  const projectList = document.querySelector('#project-list');
  if (!projectList) return;

  projectList.innerHTML = projects.map((project, index) => `
    <div class="project-card terminal-card reveal" style="transition-delay: ${index * 100}ms">
      
      <div class="terminal-header-small">
        <div class="term-dots">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
        </div>
        <div class="term-title-small">root@portfolio: ~/${project.title.substring(0, 15).replace(/\s+/g, '_').toLowerCase()}...</div>
      </div>

      <div class="terminal-body-small">
        
        <div class="cmd-line">
           <span class="prompt">➜</span> <span class="path">~/projects</span> <span class="cmd">view_info --target "${project.title.substring(0, 10)}..."</span>
        </div>

        <div class="terminal-img-container">
           <img src="${project.image}" alt="${project.title}" class="terminal-project-image" />
        </div>

        <div class="output-content">
          <div class="term-project-title"># ${project.title}</div>
          <div class="term-project-desc" style="color: #6a9955; margin-bottom: 5px;">// ${project.date}</div>
          <p class="term-project-desc" style="margin-bottom: 15px;">/* ${project.description} */</p>
          
          <div class="term-tags-line">
             <span class="path">topics:</span> [ ${project.tags.map(tag => `<span class="term-tag">"${tag}"</span>`).join(', ')} ]
          </div>
        </div>

        <div class="cmd-line" style="margin-top: auto; padding-top: 15px;">
           <span class="prompt">➜</span> <span class="cmd">./execute_action.sh</span>
        </div>

        <div class="project-links-terminal">
          ${project.demo ? `<a href="${project.demo}" target="_blank" class="term-link-small">[ ▶ Run_Demo ]</a>` : ''}
          ${project.github ? `<a href="${project.github}" target="_blank" class="term-link-small">[ < > Source_Code ]</a>` : ''}
          ${project.docs ? `<a href="${project.docs}" target="_blank" class="term-link-small">[ 📄 Read_Docs ]</a>` : ''}
          ${project.spreadsheet ? `<a href="${project.spreadsheet}" target="_blank" class="term-link-small">[ 📊 Open_Sheet ]</a>` : ''}
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

  // SCROLL ANIMATION OBSERVER
  const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  // Target elements to animate
  const animatedElements = document.querySelectorAll('.bento-item, .project-card, .section-title, .experience-item, .education-item, .cert-card, .skill-category');

  // Add base reveal class if not present
  animatedElements.forEach(el => {
    el.classList.add('reveal');
    textObserver.observe(el);
  });
});
