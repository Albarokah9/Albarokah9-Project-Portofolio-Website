/**
 * Test Suite: Portfolio - External Links Tests
 * File: 04-links-tests.cy.js
 * 
 * Pengujian seluruh tautan eksternal (LinkedIn, GitHub, WhatsApp, dll) untuk 
 * memastikan koneksi ke platform profesional dan kontak berjalan dengan valid.
 */

import PortfolioPage from '../support/pages/PortfolioPage';

describe('Portfolio - External Links Tests', () => {
    const portfolioPage = new PortfolioPage();

    beforeEach(() => {
        portfolioPage.visitHomepage();
    });

    describe('Hero Section Links', () => {
        it('TC-037: Should have valid WhatsApp link', () => {
            // Test Steps:
            // 1. Meminta Page Object untuk memvalidasi tautan WhatsApp di area Hero.
            // 2. Memastikan nomor tujuan sesuai dengan kontak resmi Albarokah.
            
            portfolioPage.verifyExternalLink(
                portfolioPage.selectors.hero.whatsapp,
                'wa.me/6289611515526'
            );
        });

        it('TC-038: Should have valid LinkedIn link in hero', () => {
            // Test Steps:
            // 1. Memvalidasi tautan profil LinkedIn pada tombol di bagian Hero.
            // 2. Memastikan alamat URL mengarah ke profil profesional yang tepat.
            
            portfolioPage.verifyExternalLink(
                portfolioPage.selectors.hero.linkedinBtn,
                'linkedin.com/in/albarokahrifansahsutantoputra'
            );
        });

        it('TC-039: Should have valid GitHub link in hero', () => {
            // Test Steps:
            // 1. Memeriksa tautan repositori GitHub di area sapaan utama.
            // 2. Memastikan username GitHub yang dituju adalah 'Albarokah9'.
            
            portfolioPage.verifyExternalLink(
                portfolioPage.selectors.hero.githubBtn,
                'github.com/Albarokah9'
            );
        });

        it('TC-039a: Should have valid Cover Letter link in hero', () => {
            // Test Steps:
            // 1. Memvalidasi tombol unduh 'Cover Letter'.
            // 2. Memastikan tautan mengarah ke file PDF dokumentasi yang benar.
            
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
            // Test Steps:
            // 1. Mendapatkan seluruh elemen kartu projek.
            // 2. Memfilter kartu yang memiliki tautan GitHub.
            // 3. Memastikan setidaknya ada satu kartu yang terhubung ke GitHub.
            // 4. Memvalidasi setiap tautan GitHub tersebut mengandung domain 'github.com'.
            
            portfolioPage.getElement(portfolioPage.selectors.projects.cards)
                .then(($cards) => {
                    const cardsWithGitHub = $cards.filter((i, card) => {
                        return Cypress.$(card).find('a[href*="github.com"]').length > 0;
                    });

                    expect(cardsWithGitHub.length).to.be.greaterThan(0);

                    cy.wrap(cardsWithGitHub).each(($card) => {
                        cy.wrap($card)
                            .find('a[href*="github.com"]')
                            .should('have.attr', 'href')
                            .and('include', 'github.com');
                    });
                });
        });

        it('TC-041: Should open project links in new tab', () => {
            // Test Steps:
            // 1. Mencari seluruh tautan GitHub di area projek.
            // 2. Memastikan setiap tautan memiliki atribut target='_blank' agar terbuka di tab baru.
            
            portfolioPage.getElement(portfolioPage.selectors.projects.cards)
                .find('a[href*="github.com"]')
                .should('have.length.at.least', 1)
                .each(($link) => {
                    cy.wrap($link).should('have.attr', 'target', '_blank');
                });
        });

        it('TC-042: Should have valid links for all projects', () => {
            // Test Steps:
            // 1. Menelusuri setiap kartu projek di dalam grid.
            // 2. Memastikan setiap kartu memiliki setidaknya satu tautan aktif di terminal projek.
            // 3. Memvalidasi alamat URL tautan tersebut tidak kosong.
            
            portfolioPage.getElement(portfolioPage.selectors.projects.cards)
                .each(($card) => {
                    cy.wrap($card)
                        .find(portfolioPage.selectors.projects.githubLink)
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
            // Test Steps:
            // 1. Memeriksa keberadaan tombol 'View Certificate' pada setiap kartu sertifikasi.
            // 2. Memvalidasi bahwa tombol tersebut berisi teks keterangan 'Certificate'.
            
            portfolioPage.getElement(portfolioPage.selectors.certifications.cards)
                .then(($cards) => {
                    const cardsWithButtons = $cards.filter((i, card) => {
                        return Cypress.$(card).find(portfolioPage.selectors.certifications.button).length > 0;
                    });

                    expect(cardsWithButtons.length).to.be.greaterThan(0);

                    cy.wrap(cardsWithButtons).each(($card) => {
                        cy.wrap($card)
                            .find(portfolioPage.selectors.certifications.button)
                            .should('be.visible');
                    });
                });
        });

        it('TC-044: Should open certificates in new tab', () => {
            // Test Steps:
            // 1. Memilih kartu sertifikasi pertama.
            // 2. Memastikan tombol sertifikat akan membuka halaman baru saat diklik.
            
            portfolioPage.getElement(portfolioPage.selectors.certifications.cards)
                .first()
                .find(portfolioPage.selectors.certifications.button)
                .should('have.attr', 'target', '_blank');
        });

        it('TC-045: Should have valid certificate URLs', () => {
            // Test Steps:
            // 1. Memvalidasi kredensial URL pada sertifikat pertama.
            // 2. Memastikan alamat tautan valid dan siap diverifikasi.
            
            portfolioPage.getElement(portfolioPage.selectors.certifications.cards)
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
            // Test Steps:
            // 1. Memeriksa tombol email di bagian Kontak.
            // 2. Memastikan protokol 'mailto' mengarah ke alamat email resmi Albarokah.
            
            portfolioPage.getElement(portfolioPage.selectors.contact.emailBtn)
                .should('have.attr', 'href')
                .and('include', 'mailto:albarokahrifansahsutantoputra@gmail.com');
        });

        it('TC-047: Should have GitHub link in contact section', () => {
            // Test Steps:
            // 1. Memvalidasi ulang tautan GitHub yang ada di bagian bawah halaman (Kontak).
            
            portfolioPage.verifyExternalLink(
                portfolioPage.selectors.contact.githubLink,
                'github.com/Albarokah9'
            );
        });

        it('TC-048: Should have LinkedIn link in contact section', () => {
            // Test Steps:
            // 1. Memvalidasi ulang tautan LinkedIn yang ada di bagian Kontak.
            
            portfolioPage.verifyExternalLink(
                portfolioPage.selectors.contact.linkedinLink,
                'linkedin.com/in/albarokahrifansahsutantoputra'
            );
        });
    });

    describe('Link Accessibility', () => {
        it('TC-049: Should not have broken internal links', () => {
            // Test Steps:
            // 1. Memastikan seluruh navigasi internal (jangkar/anchor) antar bagian halaman berfungsi dengan baik tanpa ada tautan yang rusak.
            
            const sections = [
                { name: 'About', selector: portfolioPage.selectors.about.section },
                { name: 'Experience', selector: portfolioPage.selectors.experience.section },
                { name: 'Education', selector: portfolioPage.selectors.education.section },
                { name: 'Skills', selector: portfolioPage.selectors.skills.section },
                { name: 'Projects', selector: portfolioPage.selectors.projects.section },
                { name: 'Contact', selector: portfolioPage.selectors.contact.section }
            ];

            sections.forEach((section) => {
                portfolioPage.clickNavLink(section.name)
                    .shouldBeVisible(section.selector);
            });
        });

        it('TC-050: Should have descriptive link text (no "click here")', () => {
            // Test Steps:
            // 1. Melakukan audit aksesibilitas pada seluruh elemen tautan (<a>).
            // 2. Memastikan tidak ada teks tautan yang ambigu seperti "click here" demi keramahan terhadap screen reader.
            
            cy.get('a').each(($link) => {
                const text = $link.text().toLowerCase();
                expect(text).not.to.equal('click here');
                expect(text).not.to.equal('here');
            });
        });
    });
});

