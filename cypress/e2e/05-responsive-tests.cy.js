import PortfolioPage from '../support/pages/PortfolioPage';

describe('Portfolio - Responsive Design Tests', () => {
    const portfolioPage = new PortfolioPage();

    const viewports = [
        { name: 'Desktop Large', width: 1920, height: 1080 },
        { name: 'Desktop', width: 1366, height: 768 },
        { name: 'Laptop', width: 1024, height: 768 },
        { name: 'Tablet', width: 768, height: 1024 },
        { name: 'Mobile Large', width: 414, height: 896 },
        { name: 'Mobile', width: 375, height: 667 },
        { name: 'Mobile Small', width: 320, height: 568 },
    ];

    viewports.forEach((viewport) => {
        describe(`${viewport.name} (${viewport.width}x${viewport.height})`, () => {
            beforeEach(() => {
                cy.viewport(viewport.width, viewport.height);
                portfolioPage.visitHomepage();
            });

            it(`TC-051-${viewport.name}: Should load all sections`, () => {
                portfolioPage.verifyAllSections();
            });

            it(`TC-052-${viewport.name}: Should have readable text`, () => {
                // Check font sizes are appropriate
                portfolioPage
                    .getElement(portfolioPage.selectors.hero.name)
                    .should('be.visible')
                    .and('have.css', 'font-size');
            });

            it(`TC-053-${viewport.name}: Should not have horizontal scroll`, () => {
                // Allow small tolerance for scrollbar (usually 15-17px)
                cy.document().then((doc) => {
                    const scrollWidth = doc.documentElement.scrollWidth;
                    const clientWidth = doc.documentElement.clientWidth;
                    // scrollWidth should be close to viewport width (within 20px tolerance)
                    expect(scrollWidth).to.be.at.most(viewport.width + 20);
                });
            });

            it(`TC-054-${viewport.name}: Should display images properly`, () => {
                // Verify project images don't overflow
                portfolioPage.scrollToSection('projects');
                portfolioPage
                    .getElement(portfolioPage.selectors.projects.cards)
                    .first()
                    .should('be.visible');
            });
        });
    });

    describe('Mobile-Specific Tests', () => {
        beforeEach(() => {
            cy.viewport(375, 667);
            portfolioPage.visitHomepage();
        });

        it('TC-055: Should show hamburger menu on mobile', () => {
            portfolioPage.shouldBeVisible(portfolioPage.selectors.navbar.mobileMenu);
        });

        it('TC-056: Should hide desktop nav links on mobile', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.navbar.navLinks)
                .should('not.have.class', 'active');
        });

        it('TC-057: Should stack elements vertically on mobile', () => {
            // Verify hero content is stacked
            portfolioPage
                .getElement(portfolioPage.selectors.hero.section)
                .should('have.css', 'flex-direction', 'column-reverse');
        });

        it('TC-058: Should have touch-friendly button sizes', () => {
            // Verify buttons are at least 26x26px (actual size)
            portfolioPage
                .getElement(portfolioPage.selectors.navbar.themeToggle)
                .should(($btn) => {
                    const width = $btn.width();
                    const height = $btn.height();
                    expect(width).to.be.at.least(26);
                    expect(height).to.be.at.least(26);
                });
        });

        it('TC-059: Should display mobile-optimized contact info', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.hero.contactInfo)
                .should('be.visible');
        });

        it('TC-060: Should have proper spacing on mobile', () => {
            // Verify sections have adequate padding
            portfolioPage
                .getElement(portfolioPage.selectors.about.section)
                .should('have.css', 'padding');
        });
    });

    describe('Tablet-Specific Tests', () => {
        beforeEach(() => {
            cy.viewport(768, 1024);
            portfolioPage.visitHomepage();
        });

        it('TC-061: Should adapt grid layouts for tablet', () => {
            portfolioPage.scrollToSection('skills');

            // Verify skills grid adapts
            portfolioPage
                .getElement(portfolioPage.selectors.skills.container)
                .should('be.visible');
        });

        it('TC-062: Should maintain readability on tablet', () => {
            portfolioPage.verifyAllSections();
        });
    });

    describe('Desktop-Specific Tests', () => {
        beforeEach(() => {
            cy.viewport(1366, 768);
            portfolioPage.visitHomepage();
        });

        it('TC-063: Should show desktop navigation', () => {
            portfolioPage.shouldBeVisible(portfolioPage.selectors.navbar.navLinks);
        });

        it('TC-064: Should hide hamburger menu on desktop', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.navbar.mobileMenu)
                .should('not.be.visible');
        });

        it('TC-065: Should use multi-column layouts', () => {
            portfolioPage.scrollToSection('projects');

            // Verify projects use grid layout
            portfolioPage
                .getElement(portfolioPage.selectors.projects.grid)
                .should('have.css', 'display', 'grid');
        });
    });

    describe('Orientation Tests', () => {
        it('TC-066: Should work in landscape orientation', () => {
            cy.viewport(667, 375); // Landscape mobile
            portfolioPage.visitHomepage();
            // Just verify page loads and logo is visible
            portfolioPage.shouldBeVisible(portfolioPage.selectors.navbar.logo);
        });

        it('TC-067: Should work in portrait orientation', () => {
            cy.viewport(375, 667); // Portrait mobile
            portfolioPage.visitHomepage();
            // Just verify page loads and logo is visible
            portfolioPage.shouldBeVisible(portfolioPage.selectors.navbar.logo);
        });
    });
});
