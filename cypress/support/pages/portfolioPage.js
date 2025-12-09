// ===== SELECTORS =====
const SELECTORS = {
  // Navigation
  NAV: 'nav',
  NAV_LINKS: '.nav-links',
  NAV_LINK: (section) => `a[href="#${section}"]`,
  MOBILE_MENU_BTN: '#mobile-menu',

  // Projects
  PROJECT_CARDS: '.project-card',
  PROJECT_IMAGE: '.project-image',
  PROJECT_TITLE: '.project-title',
  PROJECT_DESC: '.project-desc',
  PROJECT_DATE: '.project-date',
  PROJECT_TAGS: '.project-tags .tag',

  // External Links
  GITHUB_LINK: 'a[href*="github.com"]',
  DOCS_LINK: 'a[href*="docs.google.com/document"]',
  SPREADSHEET_LINK: 'a[href*="docs.google.com/spreadsheets"]',
  DEMO_LINK: 'a:contains("Watch Demo Video")',

  // Theme
  THEME_TOGGLE: '#theme-toggle',
  THEME_ICON: '.theme-icon',
  HTML: 'html',

  // Sections
  SECTION: (id) => `#${id}`,
};

// ===== PAGE OBJECT =====
class PortfolioPage {
  // Navigation
  getNavLink(section) {
    return cy.get(SELECTORS.NAV_LINK(section));
  }

  getNavMenu() {
    return cy.get(SELECTORS.NAV_LINKS);
  }

  getMobileMenuButton() {
    return cy.get(SELECTORS.MOBILE_MENU_BTN);
  }

  // Projects
  getProjectCards() {
    return cy.get(SELECTORS.PROJECT_CARDS);
  }

  getProjectCard(index) {
    return this.getProjectCards().eq(index);
  }

  getProjectImage() {
    return cy.get(SELECTORS.PROJECT_IMAGE);
  }

  getProjectTitle() {
    return cy.get(SELECTORS.PROJECT_TITLE);
  }

  getProjectDescription() {
    return cy.get(SELECTORS.PROJECT_DESC);
  }

  getProjectDate() {
    return cy.get(SELECTORS.PROJECT_DATE);
  }

  getProjectTags() {
    return cy.get(SELECTORS.PROJECT_TAGS);
  }

  getGitHubLink(cardIndex = 0) {
    return this.getProjectCard(cardIndex).find(SELECTORS.GITHUB_LINK);
  }

  getGoogleDocsLink(cardIndex) {
    return this.getProjectCard(cardIndex).find(SELECTORS.DOCS_LINK);
  }

  getSpreadsheetLink(cardIndex) {
    return this.getProjectCard(cardIndex).find(SELECTORS.SPREADSHEET_LINK);
  }

  getDemoLink(cardIndex) {
    return this.getProjectCard(cardIndex).contains('Watch Demo Video');
  }

  // Theme
  getThemeToggle() {
    return cy.get(SELECTORS.THEME_TOGGLE);
  }

  getThemeIcon() {
    return cy.get(SELECTORS.THEME_ICON);
  }

  getHtmlElement() {
    return cy.get(SELECTORS.HTML);
  }

  // Sections
  getSection(sectionId) {
    return cy.get(SELECTORS.SECTION(sectionId));
  }

  // ===== ACTIONS =====
  visit() {
    cy.visit('http://localhost:5173/');
  }

  navigateToSection(section) {
    this.getNavLink(section).click({ force: true });
    cy.wait(300);
  }

  toggleTheme() {
    this.getThemeToggle().click();
  }

  toggleMobileMenu() {
    this.getMobileMenuButton().click();
  }

  clickNavLink(index = 0) {
    cy.get(SELECTORS.NAV_LINKS).find('a').eq(index).click({ force: true });
  }

  // ===== ASSERTIONS =====
  verifyProjectCardCount(count) {
    this.getProjectCards().should('have.length', count);
  }

  verifyTheme(theme) {
    this.getHtmlElement().should('have.attr', 'data-theme', theme);
  }

  verifyThemeIcon(icon) {
    this.getThemeIcon().should('contain', icon);
  }

  verifyNavMenuActive() {
    this.getNavMenu().should('have.class', 'active');
  }

  verifyNavMenuInactive() {
    this.getNavMenu().should('not.have.class', 'active');
  }

  verifyExternalLink(link, expectedUrl) {
    link
      .should('have.attr', 'href')
      .and('include', expectedUrl);
    link.should('have.attr', 'target', '_blank');
  }

  verifySectionVisible(sectionId) {
    this.getSection(sectionId).should('be.visible');
  }
}
// Page Object instance
export default new PortfolioPage();
