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
      navLink: (text) => `.nav-links a:contains("${text}")`,
      themeToggle: '#theme-toggle',
      themeIcon: '.theme-icon',
      mobileMenu: '#mobile-menu',
    },

    // Hero Section
    hero: {
      section: '#hero',
      name: '.hero-content h1',
      subtitle: '.subtitle',
      contactInfo: '.contact-info',
      email: '.contact-info a[href^="mailto"]',
      whatsapp: '.contact-info a[href^="https://wa.me"]',
      linkedinBtn: '.social-links-hero a[href*="linkedin"]',
      githubBtn: '.social-links-hero a[href*="github"]',
    },

    // About Section
    about: {
      section: '#about',
      heading: '#about h2',
      content: '#about .glass-card',
      strongText: '#about strong',
    },

    // Experience Section
    experience: {
      section: '#experience',
      heading: '#experience h2',
      timeline: '.experience-timeline',
      items: '.experience-item',
      firstItem: '.experience-item:first',
      title: '.exp-title',
      company: '.exp-company',
      date: '.exp-date',
      responsibilities: '.exp-responsibilities li',
    },

    // Education Section
    education: {
      section: '#education',
      heading: '#education h2',
      grid: '.education-grid',
      items: '.education-item',
      icon: '.edu-icon',
      title: '.edu-title',
      institution: '.edu-institution',
    },

    // Skills Section
    skills: {
      section: '#skills',
      heading: '#skills h2',
      container: '.skills-container',
      categories: '.skill-category',
      categoryTitle: '.skill-category-title',
      tags: '.skill-tag',
      firstCategory: '.skill-category:first',
    },

    // Projects Section
    projects: {
      section: '#projects',
      heading: '#projects h2',
      grid: '.project-grid',
      cards: '.project-card',
      firstCard: '.project-card:first',
      title: '.project-title',
      description: '.project-desc',
      date: '.project-date',
      tags: '.tag',
      link: '.project-link',
    },

    // Certifications Section
    certifications: {
      section: '#certifications',
      heading: '#certifications h2',
      grid: '.certifications-grid',
      cards: '.cert-card',
      firstCard: '.cert-card:first',
      icon: '.cert-icon',
      title: '.cert-title',
      issuer: '.cert-issuer',
      description: '.cert-desc',
      button: '.cert-btn',
    },

    // Contact Section
    contact: {
      section: '#contact',
      heading: '#contact h2',
      card: '.contact-card',
      emailBtn: '.contact-card .btn.primary',
      socialLinks: '.social-links a',
      githubLink: '.social-links a[href*="github"]',
      linkedinLink: '.social-links a[href*="linkedin"]',
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
    this.click(this.selectors.navbar.navLink(linkText));
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
    cy.wait(300); // Wait for smooth scroll
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
    this.shouldContainText(this.selectors.hero.name, 'ALBAROKAH');
    this.shouldContainText(this.selectors.hero.subtitle, 'Quality Assurance');
    this.shouldBeVisible(this.selectors.hero.email);
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
