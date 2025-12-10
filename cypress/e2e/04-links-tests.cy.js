import PortfolioPage from '../support/pages/PortfolioPage';

describe('Portfolio - External Links Tests', () => {
    const portfolioPage = new PortfolioPage();

    beforeEach(() => {
        portfolioPage.visitHomepage();
    });

    describe('Hero Section Links', () => {
        it('TC-036: Should have valid email link', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.hero.email)
                .should('have.attr', 'href')
                .and('include', 'mailto:albarokahrifansahsutantoputra@gmail.com');
        });

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
    });

    describe('Projects Section Links', () => {
        beforeEach(() => {
            portfolioPage.scrollToSection('projects');
        });

        it('TC-040: Should have GitHub links in project cards', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.projects.cards)
                .first()
                .find(portfolioPage.selectors.projects.link)
                .should('have.attr', 'href')
                .and('include', 'github.com');
        });

        it('TC-041: Should open project links in new tab', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.projects.cards)
                .first()
                .find(portfolioPage.selectors.projects.link)
                .should('have.attr', 'target', '_blank');
        });

        it('TC-042: Should have valid links for all projects', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.projects.cards)
                .each(($card) => {
                    cy.wrap($card)
                        .find(portfolioPage.selectors.projects.link)
                        .should('have.attr', 'href')
                        .and('not.be.empty');
                });
        });
    });

    describe('Certifications Section Links', () => {
        beforeEach(() => {
            portfolioPage.scrollToSection('certifications');
        });

        it('TC-043: Should have certificate view buttons', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.certifications.cards)
                .each(($card) => {
                    cy.wrap($card)
                        .find(portfolioPage.selectors.certifications.button)
                        .should('be.visible')
                        .and('contain', 'View Certificate');
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
            const navLinks = ['About', 'Experience', 'Education', 'Skills', 'Projects', 'Certifications', 'Contact'];

            navLinks.forEach((link) => {
                portfolioPage.clickNavLink(link);
                cy.url().should('include', `#${link.toLowerCase()}`);
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
