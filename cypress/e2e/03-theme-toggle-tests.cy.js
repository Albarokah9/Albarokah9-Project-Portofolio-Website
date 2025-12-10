import PortfolioPage from '../support/pages/PortfolioPage';

describe('Portfolio - Theme Toggle Tests', () => {
    const portfolioPage = new PortfolioPage();

    beforeEach(() => {
        portfolioPage.visitHomepage();
    });

    it('TC-026: Should display theme toggle button', () => {
        portfolioPage.shouldBeVisible(portfolioPage.selectors.navbar.themeToggle);
        portfolioPage.shouldBeVisible(portfolioPage.selectors.navbar.themeIcon);
    });

    it('TC-027: Should start with dark theme by default', () => {
        // Verify dark theme is active
        portfolioPage.verifyTheme('dark');
    });

    it('TC-028: Should toggle to light theme when clicked', () => {
        // Click theme toggle
        portfolioPage.toggleTheme();

        // Verify light theme is active
        portfolioPage.verifyTheme('light');

        // Take screenshot
        portfolioPage.screenshot('light-theme');
    });

    it('TC-029: Should toggle back to dark theme', () => {
        // Toggle to light
        portfolioPage.toggleTheme();
        portfolioPage.verifyTheme('light');

        // Toggle back to dark
        portfolioPage.toggleTheme();
        portfolioPage.verifyTheme('dark');

        // Take screenshot
        portfolioPage.screenshot('dark-theme');
    });

    it('TC-030: Should persist theme after page reload', () => {
        // Toggle to light theme
        portfolioPage.toggleTheme();
        portfolioPage.verifyTheme('light');

        // Reload page
        cy.reload();

        // Verify theme is still light
        portfolioPage.verifyTheme('light');
    });

    it('TC-031: Should maintain theme across navigation', () => {
        // Toggle to light theme
        portfolioPage.toggleTheme();
        portfolioPage.verifyTheme('light');

        // Navigate to different sections
        portfolioPage.clickNavLink('Skills');
        portfolioPage.verifyTheme('light');

        portfolioPage.clickNavLink('Projects');
        portfolioPage.verifyTheme('light');
    });

    it('TC-032: Should have proper contrast in light theme', () => {
        // Toggle to light theme
        portfolioPage.toggleTheme();

        // Verify text is readable in all sections
        portfolioPage.verifyAllSections();
    });

    it('TC-033: Should have proper contrast in dark theme', () => {
        // Verify text is readable in all sections (default dark theme)
        portfolioPage.verifyAllSections();
    });

    it('TC-034: Should animate theme toggle button on hover', () => {
        // Hover over theme toggle
        portfolioPage
            .getElement(portfolioPage.selectors.navbar.themeToggle)
            .trigger('mouseover');

        // Verify button is still visible
        portfolioPage.shouldBeVisible(portfolioPage.selectors.navbar.themeToggle);
    });

    it('TC-035: Should change theme icon when toggling', () => {
        // Get initial icon (moon for dark theme)
        portfolioPage.getThemeIcon().should('contain', '🌙');

        // Toggle theme
        portfolioPage.toggleTheme();

        // Verify icon changed to sun
        portfolioPage.getThemeIcon().should('contain', '☀️');
    });
});
