import PortfolioPage from '../support/pages/PortfolioPage';

describe('Portfolio - Navigation Tests', () => {
    const portfolioPage = new PortfolioPage();

    beforeEach(() => {
        portfolioPage.visitHomepage();
    });

    describe('Desktop Navigation', () => {
        it('TC-013: Should navigate to About section via nav link', () => {
            portfolioPage.clickNavLink('About');

            // Verify section is visible (more reliable than URL hash)
            portfolioPage.shouldBeVisible(portfolioPage.selectors.about.section);
        });

        it('TC-014: Should navigate to Experience section via nav link', () => {
            portfolioPage.clickNavLink('Experience');
            portfolioPage.shouldBeVisible(portfolioPage.selectors.experience.section);
        });

        it('TC-015: Should navigate to Education section via nav link', () => {
            portfolioPage.clickNavLink('Education');
            portfolioPage.shouldBeVisible(portfolioPage.selectors.education.section);
        });

        it('TC-016: Should navigate to Skills section via nav link', () => {
            portfolioPage.clickNavLink('Skills');
            portfolioPage.shouldBeVisible(portfolioPage.selectors.skills.section);
        });

        it('TC-017: Should navigate to Projects section via nav link', () => {
            portfolioPage.clickNavLink('Projects');
            portfolioPage.shouldBeVisible(portfolioPage.selectors.projects.section);
        });

        it('TC-018: Should navigate to Certifications section via nav link', () => {
            portfolioPage.clickNavLink('Certifications');
            portfolioPage.shouldBeVisible(portfolioPage.selectors.certifications.section);
        });

        it('TC-019: Should navigate to Contact section via nav link', () => {
            portfolioPage.clickNavLink('Contact');
            portfolioPage.shouldBeVisible(portfolioPage.selectors.contact.section);
        });

        it('TC-020: Should navigate through all sections sequentially', () => {
            const sections = [
                { name: 'About', selector: portfolioPage.selectors.about.section },
                { name: 'Experience', selector: portfolioPage.selectors.experience.section },
                { name: 'Education', selector: portfolioPage.selectors.education.section },
                { name: 'Skills', selector: portfolioPage.selectors.skills.section },
                { name: 'Projects', selector: portfolioPage.selectors.projects.section },
                { name: 'Certifications', selector: portfolioPage.selectors.certifications.section },
                { name: 'Contact', selector: portfolioPage.selectors.contact.section }
            ];

            sections.forEach((section) => {
                portfolioPage.clickNavLink(section.name);
                portfolioPage.shouldBeVisible(section.selector);
            });
        });
    });

    describe('Mobile Navigation', () => {
        beforeEach(() => {
            // Set mobile viewport
            cy.viewport(375, 667);
        });

        it('TC-021: Should show hamburger menu on mobile', () => {
            portfolioPage.shouldBeVisible(portfolioPage.selectors.navbar.mobileMenu);
        });

        it('TC-022: Should toggle mobile menu when clicked', () => {
            // Click mobile menu
            portfolioPage.clickMobileMenu();

            // Verify nav links are visible
            portfolioPage
                .getElement(portfolioPage.selectors.navbar.navLinks)
                .should('have.class', 'active');

            // Click again to close
            portfolioPage.clickMobileMenu();

            // Verify nav links are hidden
            portfolioPage
                .getElement(portfolioPage.selectors.navbar.navLinks)
                .should('not.have.class', 'active');
        });

        it('TC-023: Should navigate to sections via mobile menu', () => {
            // Open mobile menu
            portfolioPage.clickMobileMenu();

            // Click About link
            portfolioPage.clickNavLink('About');

            // Verify section is visible
            portfolioPage.shouldBeVisible(portfolioPage.selectors.about.section);
        });
    });

    describe('Scroll Navigation', () => {
        it('TC-024: Should scroll to section when clicking nav link', () => {
            portfolioPage.clickNavLink('Skills');

            // Verify Skills section is in viewport
            portfolioPage
                .getElement(portfolioPage.selectors.skills.section)
                .should('be.visible');
        });

        it('TC-025: Should maintain navbar visibility while scrolling', () => {
            // Scroll to bottom
            portfolioPage.scrollToSection('contact');

            // Verify navbar is still visible (sticky)
            portfolioPage.shouldBeVisible(portfolioPage.selectors.navbar.logo);
        });
    });
});
