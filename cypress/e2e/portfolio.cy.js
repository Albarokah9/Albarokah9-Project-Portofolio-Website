import portfolioPage from '../support/pages/portfolioPage';

describe('QA Portfolio Website - E2E Test Suite', () => {
  
  // Load page before EACH test
  beforeEach(() => {
    portfolioPage.visit();
  });

  // TC-001
  it('TC-001: User dapat navigate ke section About menggunakan nav link', () => {
    portfolioPage.navigateToSection('about');
    portfolioPage.verifySectionVisible('about');
  });

  // TC-002
  it('TC-002: User dapat navigate ke section Projects', () => {
    portfolioPage.navigateToSection('projects');
    portfolioPage.verifySectionVisible('projects');
  });

  // TC-003
  it('TC-003: User dapat navigate ke section Contact', () => {
    portfolioPage.navigateToSection('contact');
    portfolioPage.verifySectionVisible('contact');
  });

  // TC-004
  it('TC-004: Semua 10 project cards ditampilkan dengan benar', () => {
    portfolioPage.verifyProjectCardCount(10);
    
    portfolioPage.getProjectCards().each((card) => {
      cy.wrap(card).within(() => {
        portfolioPage.getProjectImage().should('exist');
        portfolioPage.getProjectTitle().should('exist');
        portfolioPage.getProjectDescription().should('exist');
        portfolioPage.getProjectDate().should('exist');
        portfolioPage.getProjectTags().should('exist');
      });
    });
  });

  // TC-005
  it('TC-005: Demo button hanya muncul untuk project dengan demo link', () => {
    portfolioPage.getDemoLink(1).should('exist');
    
    cy.get('.project-card').eq(0).within(() => {
      cy.contains('a', 'Watch Demo Video').should('not.exist');
    });
  });

  // TC-006
  it('TC-006: GitHub link berfungsi dan membuka tab baru', () => {
    portfolioPage.getGitHubLink(0)
      .should('have.attr', 'href')
      .and('include', 'github.com');
    portfolioPage.getGitHubLink(0)
      .should('have.attr', 'target', '_blank');
  });

  // TC-007
  it('TC-007: Google Docs link berfungsi dengan benar', () => {
    cy.get('.project-card').each((card) => {
      const $docsLink = card.find('a[href*="docs.google.com/document"]');
      if ($docsLink.length > 0) {
        cy.wrap($docsLink)
          .should('have.attr', 'target', '_blank')
          .and('have.attr', 'href')
          .and('include', 'docs.google.com');
      }
    });
  });

  // TC-008
  it('TC-008: Spreadsheet link berfungsi dengan benar', () => {
    cy.get('.project-card').each((card) => {
      const $spreadsheetLink = card.find('a[href*="docs.google.com/spreadsheets"]');
      if ($spreadsheetLink.length > 0) {
        cy.wrap($spreadsheetLink)
          .should('have.attr', 'target', '_blank')
          .and('have.attr', 'href')
          .and('include', 'docs.google.com/spreadsheets');
      }
    });
  });

  // TC-009
  it('TC-009: User dapat toggle theme dari dark ke light mode', () => {
    portfolioPage.verifyTheme('dark');
    portfolioPage.toggleTheme();
    portfolioPage.verifyTheme('light');
    portfolioPage.verifyThemeIcon('☀️');
  });

  // TC-010
  it('TC-010: User dapat toggle theme dari light ke dark mode', () => {
    portfolioPage.toggleTheme();
    portfolioPage.verifyTheme('light');
    
    portfolioPage.toggleTheme();
    portfolioPage.verifyTheme('dark');
    portfolioPage.verifyThemeIcon('🌙');
  });

  // TC-011
  it('TC-011: Theme setting persists setelah page reload', () => {
    portfolioPage.toggleTheme();
    portfolioPage.verifyTheme('light');
    
    cy.reload();
    portfolioPage.verifyTheme('light');
  });

  // TC-012
  it('TC-012: Mobile menu toggle berfungsi pada viewport kecil', () => {
    cy.viewport('iphone-x');
    portfolioPage.visit();
    
    portfolioPage.getMobileMenuButton().should('be.visible');
    portfolioPage.verifyNavMenuInactive();
    
    portfolioPage.toggleMobileMenu();
    portfolioPage.verifyNavMenuActive();
  });

  // TC-013
  it('TC-013: Mobile menu menutup saat nav link diklik', () => {
    cy.viewport('iphone-x');
    portfolioPage.visit();
    
    portfolioPage.toggleMobileMenu();
    portfolioPage.verifyNavMenuActive();
    
    portfolioPage.clickNavLink(0);
    portfolioPage.verifyNavMenuInactive();
  });

  // TC-014
  it('TC-014: Semua tags ditampilkan dengan benar pada setiap project', () => {
    portfolioPage.getProjectCards().each((card) => {
      cy.wrap(card).within(() => {
        portfolioPage.getProjectTags().should('have.length.greaterThan', 0);
        portfolioPage.getProjectTags().each((tag) => {
          cy.wrap(tag).should('be.visible');
        });
      });
    });
  });

  // TC-015
  it('TC-015: Layout responsive di desktop (1920px)', () => {
    cy.viewport(1920, 1080);
    portfolioPage.visit();
    
    portfolioPage.verifyProjectCardCount(10);
    cy.get('body').should('not.have.css', 'overflow-x', 'auto');
  });

  // TC-016
  it('TC-016: Layout responsive di tablet (768px)', () => {
    cy.viewport('ipad-2');
    portfolioPage.visit();
    
    portfolioPage.verifyProjectCardCount(10);
    cy.get('body').should('not.have.css', 'overflow-x', 'auto');
  });

  // TC-017
  it('TC-017: Layout responsive di mobile (375px)', () => {
    cy.viewport('iphone-8');
    portfolioPage.visit();
    
    portfolioPage.verifyProjectCardCount(10);
    cy.get('body').should('not.have.css', 'overflow-x', 'auto');
  });

  // TC-018
  it('TC-018: Anchor links melakukan scroll ke section yang tepat', () => {
    portfolioPage.getNavLink('projects').click({ force: true });
    cy.wait(300);
    
    portfolioPage.verifySectionVisible('projects');
    portfolioPage.getProjectCard(0).should('be.visible');
  });

  // TC-019
  it('TC-019: Setiap project card memiliki semua field yang dibutuhkan', () => {
    portfolioPage.getProjectCards().each((card) => {
      cy.wrap(card).within(() => {
        portfolioPage.getProjectImage().should('exist');
        portfolioPage.getProjectDate().should('exist').and('not.be.empty');
        portfolioPage.getProjectTitle().should('exist').and('not.be.empty');
        portfolioPage.getProjectDescription().should('exist').and('not.be.empty');
        portfolioPage.getProjectTags().should('have.length.greaterThan', 0);
      });
    });
  });

  // TC-020
  it('TC-020: Navigation menu dapat diakses dari semua halaman', () => {
    cy.get('nav').should('be.visible');
    portfolioPage.getNavMenu().should('exist');
    
    cy.get('.nav-links a').should('have.length.greaterThan', 0);
    cy.get('.nav-links a').each((link) => {
      cy.wrap(link).should('be.visible');
    });
  });
});
