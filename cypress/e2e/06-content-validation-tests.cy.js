import PortfolioPage from '../support/pages/PortfolioPage';

describe('Portfolio - Content Validation Tests', () => {
    const portfolioPage = new PortfolioPage();

    beforeEach(() => {
        portfolioPage.visitHomepage();
    });

    describe('Hero Section Content', () => {
        it('TC-068: Should display correct name', () => {
            portfolioPage.shouldContainText(
                portfolioPage.selectors.hero.name,
                'ALBAROKAH RIFANSAH'
            );
            portfolioPage.shouldContainText(
                portfolioPage.selectors.hero.name,
                'SUTANTO PUTRA'
            );
        });

        it('TC-069: Should display correct job title', () => {
            portfolioPage.shouldContainText(
                portfolioPage.selectors.hero.subtitle,
                'Quality Assurance Engineer'
            );
        });

        it('TC-070: Should display location', () => {
            portfolioPage.shouldContainText(
                portfolioPage.selectors.hero.contactInfo,
                'Bogor'
            );
        });
    });

    describe('Professional Summary Content', () => {
        beforeEach(() => {
            portfolioPage.scrollToSection('about');
        });

        it('TC-071: Should mention current company', () => {
            portfolioPage.shouldContainText(
                portfolioPage.selectors.about.content,
                'Horus Technology'
            );
        });

        it('TC-072: Should mention key testing tools', () => {
            const tools = ['Cypress', 'Katalon Studio', 'Postman', 'JMeter'];

            tools.forEach((tool) => {
                portfolioPage.shouldContainText(
                    portfolioPage.selectors.about.content,
                    tool
                );
            });
        });

        it('TC-073: Should mention testing methodologies', () => {
            const methodologies = ['SDLC', 'STLC', 'Agile'];

            methodologies.forEach((methodology) => {
                portfolioPage.shouldContainText(
                    portfolioPage.selectors.about.content,
                    methodology
                );
            });
        });
    });

    describe('Experience Section Content', () => {
        beforeEach(() => {
            portfolioPage.scrollToSection('experience');
        });

        it('TC-074: Should display current position', () => {
            portfolioPage.shouldContainText(
                portfolioPage.selectors.experience.title,
                'QA Tester Intern'
            );
        });

        it('TC-075: Should display company name', () => {
            portfolioPage.shouldContainText(
                portfolioPage.selectors.experience.company,
                'Horus Technology'
            );
        });

        it('TC-076: Should display work period', () => {
            portfolioPage.shouldContainText(
                portfolioPage.selectors.experience.date,
                'Present'
            );
        });

        it('TC-077: Should list responsibilities', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.experience.responsibilities)
                .should('have.length.at.least', 3);
        });

        it('TC-078: Should display previous experience', () => {
            portfolioPage.shouldContainText(
                portfolioPage.selectors.experience.items,
                'Fiber Optic Technician'
            );
        });
    });

    describe('Education Section Content', () => {
        beforeEach(() => {
            portfolioPage.scrollToSection('education');
        });

        it('TC-079: Should display bootcamp education', () => {
            portfolioPage.shouldContainText(
                portfolioPage.selectors.education.title,
                'Bootcamp Quality Assurance Engineer'
            );
        });

        it('TC-080: Should display education provider', () => {
            portfolioPage.shouldContainText(
                portfolioPage.selectors.education.institution,
                'Eduwork.id'
            );
        });

        it('TC-081: Should display graduation year', () => {
            portfolioPage.shouldContainText(
                portfolioPage.selectors.education.institution,
                '2025'
            );
        });
    });

    describe('Skills Section Content', () => {
        beforeEach(() => {
            portfolioPage.scrollToSection('skills');
        });

        it('TC-082: Should have Manual Testing category', () => {
            portfolioPage.shouldContainText(
                portfolioPage.selectors.skills.categoryTitle,
                'Manual Testing'
            );
        });

        it('TC-083: Should have Automation Testing category', () => {
            portfolioPage.shouldContainText(
                portfolioPage.selectors.skills.categoryTitle,
                'Automation Testing'
            );
        });

        it('TC-084: Should list Cypress as a skill', () => {
            portfolioPage.shouldContainText(
                portfolioPage.selectors.skills.tags,
                'Cypress'
            );
        });

        it('TC-085: Should list API testing tools', () => {
            portfolioPage.shouldContainText(
                portfolioPage.selectors.skills.tags,
                'Postman'
            );
        });

        it('TC-086: Should have at least 20 skills listed', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.skills.tags)
                .should('have.length.at.least', 20);
        });
    });

    describe('Projects Section Content', () => {
        beforeEach(() => {
            portfolioPage.scrollToSection('projects');
        });

        it('TC-087: Should display at least 3 projects', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.projects.cards)
                .should('have.length.at.least', 3);
        });

        it('TC-088: Should have project titles', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.projects.cards)
                .each(($card) => {
                    cy.wrap($card)
                        .find(portfolioPage.selectors.projects.title)
                        .should('not.be.empty');
                });
        });

        it('TC-089: Should have project descriptions', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.projects.cards)
                .each(($card) => {
                    cy.wrap($card)
                        .find(portfolioPage.selectors.projects.description)
                        .should('not.be.empty');
                });
        });

        it('TC-090: Should have technology tags', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.projects.cards)
                .first()
                .find(portfolioPage.selectors.projects.tags)
                .should('have.length.at.least', 1);
        });

        it('TC-091: Should display project dates', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.projects.cards)
                .first()
                .find(portfolioPage.selectors.projects.date)
                .should('be.visible');
        });
    });

    describe('Certifications Section Content', () => {
        beforeEach(() => {
            portfolioPage.scrollToSection('certifications');
        });

        it('TC-092: Should display at least 4 certifications', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.certifications.cards)
                .should('have.length.at.least', 4);
        });

        it('TC-093: Should have QA bootcamp certificate', () => {
            portfolioPage.shouldContainText(
                portfolioPage.selectors.certifications.title,
                'QA Effective Testing Strategies'
            );
        });

        it('TC-094: Should display certificate issuers', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.certifications.cards)
                .each(($card) => {
                    cy.wrap($card)
                        .find(portfolioPage.selectors.certifications.issuer)
                        .should('not.be.empty');
                });
        });

        it('TC-095: Should have certificate descriptions', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.certifications.cards)
                .each(($card) => {
                    cy.wrap($card)
                        .find(portfolioPage.selectors.certifications.description)
                        .should('not.be.empty');
                });
        });
    });

    describe('Contact Section Content', () => {
        beforeEach(() => {
            portfolioPage.scrollToSection('contact');
        });

        it('TC-096: Should have call-to-action text', () => {
            portfolioPage.shouldContainText(
                portfolioPage.selectors.contact.heading,
                'Get In Touch'
            );
        });

        it('TC-097: Should have email button', () => {
            portfolioPage.shouldContainText(
                portfolioPage.selectors.contact.emailBtn,
                'Email Me'
            );
        });

        it('TC-098: Should have social media links', () => {
            portfolioPage
                .getElement(portfolioPage.selectors.contact.socialLinks)
                .should('have.length.at.least', 2);
        });
    });

    describe('Footer Content', () => {
        it('TC-099: Should display copyright year', () => {
            portfolioPage.shouldContainText(
                portfolioPage.selectors.footer.text,
                '2025'
            );
        });

        it('TC-100: Should display author name', () => {
            portfolioPage.shouldContainText(
                portfolioPage.selectors.footer.text,
                'Albarokah Rifansah Sutanto Putra'
            );
        });

        it('TC-101: Should mention tech stack', () => {
            portfolioPage.shouldContainText(
                portfolioPage.selectors.footer.text,
                'Vite'
            );
        });
    });
});
