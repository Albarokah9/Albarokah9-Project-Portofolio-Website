import BasePage from './BasePage';

/**
 * PortfolioPage - Page Object untuk halaman portfolio
 * Extends BasePage untuk inherit common methods
 */
class PortfolioPage extends BasePage {
  // ==================== SELECTORS ====================

  // Navbar
  selectors = {
    navbar: {
      logo: '.logo',
      navLinks: '.nav-links',
      navLink: (text) => `.nav-links a[href="#${text.toLowerCase()}"]`,
      themeToggle: '#theme-toggle',
      themeIcon: '.theme-icon',
      mobileMenu: '#mobile-menu',
    },

    // Hero Section
    hero: {
      section: '#hero',
      name: '.user-name',
      subtitle: '.user-role',
      contactInfo: '.contact-row',
      email: '.contact-row a[href^="mailto"]',
      whatsapp: '.contact-row a[href^="https://wa.me"]',
      linkedinBtn: '.contact-row a[href*="linkedin"]',
      githubBtn: '.contact-row a[href*="github"]',
      coverLetterBtn: '.contact-row a[href*="Cover_Letter"]',
      profileImage: '.user-avatar',
    },

    // About Section
    about: {
      section: '#about',
      heading: '#about h2',
      content: '#about .terminal-body',
      strongText: '#about .syntax-type, #about .syntax-string', // Syntax highlighted text
    },

    // Experience Section
    experience: {
      section: '#experience',
      heading: '#experience h2',
      timeline: '.terminal-body',
      items: '.job-log',
      firstItem: '.job-log:first-child',
      title: '.job-log h3',
      company: '.job-log .syntax-text',
      date: '.job-log .syntax-string',
      responsibilities: '.term-list li',
    },

    // Education Section
    education: {
      section: '#education',
      heading: '#education h2',
      grid: '#education .terminal-body',
      items: '#education .syntax-keyword', // Folder names in tree
      icon: '#education .syntax-string', // File names
      title: '#education .syntax-string',
      institution: '#education .syntax-keyword', // Changed to keyword for folder names
    },

    // Skills Section
    skills: {
      section: '#skills',
      heading: '#skills h2',
      container: '.skills-grid-terminal',
      categories: '.json-skill-block',
      categoryTitle: '.syntax-keyword',
      tags: '.syntax-string', // Individual skills are strings in JSON
      firstCategory: '.json-skill-block:nth-child(1)',
    },

    // Projects Section
    projects: {
      section: '#projects',
      heading: '#projects h2',
      grid: '.project-grid',
      cards: '.project-card',
      firstCard: '.project-card:first',
      title: '.term-project-title', // Updated for terminal card
      description: '.output-content .term-project-desc',
      date: '.output-content div', // approximate, or use specific class if available
      tags: '.term-tag',
      links: '.project-links-terminal',
      link: 'a',
      githubLink: 'a[href*="github.com"]',
    },

    // Certifications Section
    certifications: {
      section: '#certifications',
      heading: '#certifications h2',
      grid: '.certifications-grid',
      cards: '.certifications-grid .project-card.terminal-card', // More specific selector
      firstCard: '.certifications-grid .project-card:first',
      icon: '.term-icon', // Might not exist, better check title
      title: '.term-project-title',
      issuer: '.term-project-desc',
      description: '.term-project-desc',
      button: '.term-link-small', // "Open_Certificate" link
    },

    // Contact Section
    contact: {
      section: '#contact',
      heading: '#contact h2',
      card: '.terminal-container',
      emailBtn: '#contact a[href^="mailto"]',
      socialLinks: '#contact .contact-actions a',
      githubLink: '#contact a[href*="github"]',
      linkedinLink: '#contact a[href*="linkedin"]',
    },

    // Footer
    footer: {
      element: 'footer',
      text: 'footer p',
    },
  };

  // ==================== ACTIONS ====================

  /**
   * Visit portfolio homepage
   */
  visitHomepage() {
    this.visit('/');
    this.waitForPageLoad();
    return this;
  }

  /**
   * Click navigation link
   * @param {string} linkText - Text of the nav link
   */
  clickNavLink(linkText) {
    cy.get(this.selectors.navbar.navLink(linkText)).click({ force: true });
    cy.wait(800); // Wait for smooth scroll animation
    return this;
  }

  /**
   * Toggle theme (dark/light)
   */
  toggleTheme() {
    this.click(this.selectors.navbar.themeToggle);
    cy.wait(500); // Wait for theme transition
    return this;
  }

  /**
   * Get current theme icon
   */
  getThemeIcon() {
    return this.getElement(this.selectors.navbar.themeIcon);
  }

  /**
   * Click mobile menu toggle
   */
  clickMobileMenu() {
    this.click(this.selectors.navbar.mobileMenu);
    return this;
  }

  /**
   * Scroll to section
   * @param {string} sectionId - Section ID (e.g., 'about', 'skills')
   */
  scrollToSection(sectionId) {
    this.scrollTo(`#${sectionId}`);
    cy.wait(600); // Wait for smooth scroll
    return this;
  }

  /**
   * Click hero LinkedIn button
   */
  clickHeroLinkedIn() {
    this.click(this.selectors.hero.linkedinBtn);
    return this;
  }

  /**
   * Click hero GitHub button
   */
  clickHeroGitHub() {
    this.click(this.selectors.hero.githubBtn);
    return this;
  }

  /**
   * Get project cards count
   */
  getProjectCardsCount() {
    return this.getElement(this.selectors.projects.cards);
  }

  /**
   * Click first project link
   */
  clickFirstProjectLink() {
    this.getElement(this.selectors.projects.firstCard)
      .find(this.selectors.projects.link)
      .first()
      .click();
    return this;
  }

  /**
   * Click first certification button
   */
  clickFirstCertButton() {
    this.getElement(this.selectors.certifications.firstCard)
      .find(this.selectors.certifications.button)
      .click();
    return this;
  }

  /**
   * Click contact email button
   */
  clickContactEmail() {
    this.click(this.selectors.contact.emailBtn);
    return this;
  }

  // ==================== ASSERTIONS ====================

  /**
   * Verify navbar is visible
   */
  verifyNavbarVisible() {
    this.shouldBeVisible(this.selectors.navbar.logo);
    this.shouldBeVisible(this.selectors.navbar.navLinks);
    this.shouldBeVisible(this.selectors.navbar.themeToggle);
    return this;
  }

  /**
   * Verify hero section content
   */
  verifyHeroSection() {
    this.shouldBeVisible(this.selectors.hero.section);
    this.shouldContainText(this.selectors.hero.name, 'Albarokah');
    this.shouldContainText(this.selectors.hero.subtitle, 'QA');
    // Email removed from Terminal Hero
    this.shouldBeVisible(this.selectors.hero.whatsapp);
    return this;
  }

  /**
   * Verify about section exists
   */
  verifyAboutSection() {
    this.shouldBeVisible(this.selectors.about.section);
    this.shouldContainText(this.selectors.about.heading, 'Professional Summary');
    this.shouldBeVisible(this.selectors.about.content);
    return this;
  }

  /**
   * Verify experience section
   */
  verifyExperienceSection() {
    this.shouldBeVisible(this.selectors.experience.section);
    this.shouldContainText(this.selectors.experience.heading, 'Professional Experience');
    this.getElement(this.selectors.experience.items).should('have.length.at.least', 1);
    return this;
  }

  /**
   * Verify education section
   */
  verifyEducationSection() {
    this.shouldBeVisible(this.selectors.education.section);
    this.shouldContainText(this.selectors.education.heading, 'Education');
    this.getElement(this.selectors.education.items).should('have.length.at.least', 1);
    return this;
  }

  /**
   * Verify skills section
   */
  verifySkillsSection() {
    this.shouldBeVisible(this.selectors.skills.section);
    this.shouldContainText(this.selectors.skills.heading, 'Skills');
    this.getElement(this.selectors.skills.categories).should('have.length.at.least', 1);
    this.getElement(this.selectors.skills.tags).should('have.length.at.least', 5);
    return this;
  }

  /**
   * Verify projects section
   */
  verifyProjectsSection() {
    this.shouldBeVisible(this.selectors.projects.section);
    this.shouldContainText(this.selectors.projects.heading, 'My Projects');
    this.getElement(this.selectors.projects.cards).should('have.length.at.least', 1);
    return this;
  }

  /**
   * Verify certifications section
   */
  verifyCertificationsSection() {
    this.shouldBeVisible(this.selectors.certifications.section);
    this.shouldContainText(this.selectors.certifications.heading, 'Certifications');
    this.getElement(this.selectors.certifications.cards).should('have.length.at.least', 1);
    return this;
  }

  /**
   * Verify contact section
   */
  verifyContactSection() {
    this.shouldBeVisible(this.selectors.contact.section);
    this.shouldContainText(this.selectors.contact.heading, 'Get In Touch');
    this.shouldBeVisible(this.selectors.contact.emailBtn);
    return this;
  }

  /**
   * Verify footer
   */
  verifyFooter() {
    this.shouldBeVisible(this.selectors.footer.element);
    this.shouldContainText(this.selectors.footer.text, '2025');
    return this;
  }

  /**
   * Verify all sections are present
   */
  verifyAllSections() {
    this.verifyHeroSection();
    this.verifyAboutSection();
    this.verifyExperienceSection();
    this.verifyEducationSection();
    this.verifySkillsSection();
    this.verifyProjectsSection();
    this.verifyCertificationsSection();
    this.verifyContactSection();
    this.verifyFooter();
    return this;
  }

  /**
   * Verify theme is applied
   * @param {string} theme - 'light' or 'dark'
   */
  verifyTheme(theme) {
    if (theme === 'light') {
      cy.get('html').should('have.attr', 'data-theme', 'light');
      this.getThemeIcon().should('contain', '☀️');
    } else {
      cy.get('html').should('not.have.attr', 'data-theme', 'light');
      this.getThemeIcon().should('contain', '🌙');
    }
    return this;
  }

  /**
   * Verify external link opens in new tab
   * @param {string} selector - Link selector
   * @param {string} expectedUrl - Expected URL pattern
   */
  verifyExternalLink(selector, expectedUrl) {
    this.getElement(selector)
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href')
      .and('include', expectedUrl);
    return this;
  }
}

export default PortfolioPage;
