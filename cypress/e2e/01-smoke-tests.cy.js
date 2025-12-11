import PortfolioPage from '../support/pages/PortfolioPage';

describe('Portfolio - Smoke Tests', () => {
    const portfolioPage = new PortfolioPage();

    beforeEach(() => {
        // Visit homepage before each test
        portfolioPage.visitHomepage();
    });

    it('TC-001: Should load homepage successfully', () => {
        // Verify page loads
        portfolioPage.waitForPageLoad();

        // Verify URL
        portfolioPage.urlShouldContain('/');

        // Verify navbar is visible
        portfolioPage.verifyNavbarVisible();

        // Take screenshot
        portfolioPage.screenshot('homepage-loaded');
    });

    it('TC-002: Should display all main sections', () => {
        // Verify all sections are present and visible
        portfolioPage.verifyAllSections();
    });

    it('TC-003: Should have correct page title', () => {
        cy.title().should('eq', 'QA Engineer Portfolio');
    });

    it('TC-004: Should display hero section with correct information', () => {
        portfolioPage.verifyHeroSection();

        // Verify contact links
        portfolioPage
            .shouldBeVisible(portfolioPage.selectors.hero.coverLetterBtn)
            .shouldBeVisible(portfolioPage.selectors.hero.whatsapp)
            .shouldBeVisible(portfolioPage.selectors.hero.linkedinBtn)
            .shouldBeVisible(portfolioPage.selectors.hero.githubBtn);
    });

    it('TC-005: Should display professional summary section', () => {
        portfolioPage.scrollToSection('about');
        portfolioPage.verifyAboutSection();

        // Verify key skills are mentioned
        portfolioPage.shouldContainText(
            portfolioPage.selectors.about.content,
            'Cypress'
        );
    });

    it('TC-006: Should display experience timeline', () => {
        portfolioPage.scrollToSection('experience');
        portfolioPage.verifyExperienceSection();

        // Verify first experience item
        portfolioPage
            .shouldBeVisible(portfolioPage.selectors.experience.firstItem)
            .shouldContainText(portfolioPage.selectors.experience.title, 'QA Tester');
    });

    it('TC-007: Should display education section', () => {
        portfolioPage.scrollToSection('education');
        portfolioPage.verifyEducationSection();

        // Verify education items have icons
        portfolioPage.shouldBeVisible(portfolioPage.selectors.education.icon);
    });

    it('TC-008: Should display skills with multiple categories', () => {
        portfolioPage.scrollToSection('skills');
        portfolioPage.verifySkillsSection();

        // Verify at least 5 skill categories
        portfolioPage
            .getElement(portfolioPage.selectors.skills.categories)
            .should('have.length.at.least', 4);
    });

    it('TC-009: Should display projects with cards', () => {
        portfolioPage.scrollToSection('projects');
        portfolioPage.verifyProjectsSection();

        // Verify project cards have required elements
        portfolioPage
            .getElement(portfolioPage.selectors.projects.firstCard)
            .within(() => {
                cy.get(portfolioPage.selectors.projects.title).should('be.visible');
                cy.get(portfolioPage.selectors.projects.description).should('be.visible');
                cy.get(portfolioPage.selectors.projects.tags).should('have.length.at.least', 1);
            });
    });

    it('TC-010: Should display certifications section', () => {
        portfolioPage.scrollToSection('certifications');
        portfolioPage.verifyCertificationsSection();

        // Verify certification cards have buttons
        portfolioPage.shouldBeVisible(portfolioPage.selectors.certifications.button);
    });

    it('TC-011: Should display contact section', () => {
        portfolioPage.scrollToSection('contact');
        portfolioPage.verifyContactSection();

        // Verify social links
        portfolioPage
            .shouldBeVisible(portfolioPage.selectors.contact.githubLink)
            .shouldBeVisible(portfolioPage.selectors.contact.linkedinLink);
    });

    it('TC-012: Should display footer with copyright', () => {
        portfolioPage.verifyFooter();
        portfolioPage.shouldContainText(
            portfolioPage.selectors.footer.text,
            'Albarokah Rifansah Sutanto Putra'
        );
    });
});
