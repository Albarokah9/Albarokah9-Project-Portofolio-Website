import PortfolioPage from '../support/pages/PortfolioPage';

describe('Portfolio - External Links Tests', () => {
    const portfolioPage = new PortfolioPage();

    beforeEach(() => {
        portfolioPage.visitHomepage();
    });

    describe('Hero Section Links', () => {
        // TC-036: Email link removed from Hero (moved to Contact section)

        it('TC-037: Should have valid WhatsApp link', () => {
            portfolioPage.verifyExternalLink(
                portfolioPage.selectors.hero.whatsapp,
                'wa.me/6289611515526'
            );
        });

        it('TC-038: Should have valid LinkedIn link in hero', () => {
            portfolioPage.verifyExternalLink(
                portfolioPage.selectors.hero.linkedinBtn,
                'linkedin.com/in/albarokahrifansahsutantoputra'
            );
        });

        it('TC-039: Should have valid GitHub link in hero', () => {
            portfolioPage.verifyExternalLink(
                portfolioPage.selectors.hero.githubBtn,
                'github.com/Albarokah9'
            );
        });

        it('TC-039a: Should have valid Cover Letter link in hero', () => {
            portfolioPage.verifyExternalLink(
                portfolioPage.selectors.hero.coverLetterBtn,
                'files/Cover_Letter.pdf'
            );
        });
    });

    describe('Projects Section Links', () => {
        beforeEach(() => {
            portfolioPage.scrollToSection('projects');
        });

        it('TC-040: Should have GitHub links in project cards', () => {
            // Check that projects with GitHub links have valid URLs
            portfolioPage
                .getElement(portfolioPage.selectors.projects.cards)
                .then(($cards) => {
                    // Count cards with GitHub links
                    const cardsWithGitHub = $cards.filter((i, card) => {
                        return Cypress.$(card).find('a[href*="github.com"]').length > 0;
                    });

                    // Verify at least some projects have GitHub links
                    expect(cardsWithGitHub.length).to.be.greaterThan(0);

                    // Verify each GitHub link is valid
                    cy.wrap(cardsWithGitHub).each(($card) => {
                        cy.wrap($card)
                            .find('a[href*="github.com"]')
                            .should('have.attr', 'href')
                            .and('include', 'github.com');
                    });
                });
        });

        it('TC-041: Should open project links in new tab', () => {
            // Find all GitHub links and verify they open in new tab
            portfolioPage
                .getElement(portfolioPage.selectors.projects.cards)
                .find('a[href*="github.com"]')
                .should('have.length.at.least', 1)
                .each(($link) => {
                    cy.wrap($link).should('have.attr', 'target', '_blank');
                });
        });

        it('TC-042: Should have valid links for all projects', () => {
            // Verify each project card has at least one link
            portfolioPage
                .getElement(portfolioPage.selectors.projects.cards)
                .each(($card) => {
                    cy.wrap($card)
                        .find('.project-links-terminal a') // Updated selector for terminal cards
                        .should('have.length.at.least', 1)
                        .each(($link) => {
                            cy.wrap($link)
                                .should('have.attr', 'href')
                                .and('not.be.empty');
                        });
                });
        });
    });

    describe('Certifications Section Links', () => {
        beforeEach(() => {
            portfolioPage.scrollToSection('certifications');
        });

        it('TC-043: Should have certificate view buttons', () => {
            // Check that at least one certificate card has a view button
            portfolioPage
                .getElement(portfolioPage.selectors.certifications.cards)
                .then(($cards) => {
                    const cardsWithButtons = $cards.filter((i, card) => {
                        return Cypress.$(card).find(portfolioPage.selectors.certifications.button).length > 0;
                    });

                    // Verify at least some certificates have buttons
                    expect(cardsWithButtons.length).to.be.greaterThan(0);

                    // Verify each button contains "Certificate" text
                    cy.wrap(cardsWithButtons).each(($card) => {
                        cy.wrap($card)
                            .find(portfolioPage.selectors.certifications.button)
                            .should('be.visible')
                            .and('contain.text', 'Certificate');
                    });
                });
        });

        it('TC-044: Should open certificates in new tab', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.certifications.cards)
                .first()
                .find(portfolioPage.selectors.certifications.button)
                .should('have.attr', 'target', '_blank');
        });

        it('TC-045: Should have valid certificate URLs', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.certifications.cards)
                .first()
                .find(portfolioPage.selectors.certifications.button)
                .should('have.attr', 'href')
                .and('not.be.empty');
        });
    });

    describe('Contact Section Links', () => {
        beforeEach(() => {
            portfolioPage.scrollToSection('contact');
        });

        it('TC-046: Should have email button with mailto link', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.contact.emailBtn)
                .should('have.attr', 'href')
                .and('include', 'mailto:albarokahrifansahsutantoputra@gmail.com');
        });

        it('TC-047: Should have GitHub link in contact section', () => {
            portfolioPage.verifyExternalLink(
                portfolioPage.selectors.contact.githubLink,
                'github.com/Albarokah9'
            );
        });

        it('TC-048: Should have LinkedIn link in contact section', () => {
            portfolioPage.verifyExternalLink(
                portfolioPage.selectors.contact.linkedinLink,
                'linkedin.com/in/albarokahrifansahsutantoputra'
            );
        });
    });

    describe('Link Accessibility', () => {
        it('TC-049: Should not have broken internal links', () => {
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

        it('TC-050: Should have descriptive link text (no "click here")', () => {
            // Check all links have meaningful text
            cy.get('a').each(($link) => {
                const text = $link.text().toLowerCase();
                expect(text).not.to.equal('click here');
                expect(text).not.to.equal('here');
            });
        });
    });
});
