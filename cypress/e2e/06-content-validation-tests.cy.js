/**
 * Test Suite: Portfolio - Content Validation Tests
 * File: 06-content-validation-tests.cy.js
 * 
 * Pengujian akurasi konten di seluruh halaman untuk memastikan data diri, 
 * pengalaman kerja, dan daftar keahlian tersaji dengan benar sesuai profil Albarokah.
 */

import PortfolioPage from '../support/pages/PortfolioPage';

describe('Portfolio - Content Validation Tests', () => {
    const portfolioPage = new PortfolioPage();

    beforeEach(() => {
        portfolioPage.visitHomepage();
    });

    describe('Hero Section Content', () => {
        it('TC-068: Should display correct name', () => {
            // Test Steps:
            // 1. Mencari elemen nama di bagian Hero.
            // 2. Memastikan teks yang tampil mengandung 'ALBAROKAH'.
            
            portfolioPage.shouldContainText(
                portfolioPage.selectors.hero.name,
                'ALBAROKAH'
            );
        });

        it.skip('TC-070a: Should display profile image', () => {
            // Hero saat ini menggunakan Terminal UI bukannya foto profil.
        });
    });

    describe('Professional Summary Content', () => {
        beforeEach(() => {
            portfolioPage.scrollToSection('about');
        });

        it('TC-071: Should mention current company', () => {
            // Test Steps:
            // 1. Memeriksa isi teks pada bagian 'About'.
            // 2. Memastikan terdapat penyebutan 'Horus Technology' sebagai tempat berkarier saat ini.
            
            portfolioPage.shouldContainText(
                portfolioPage.selectors.about.content,
                'Horus Technology'
            );
        });

        it('TC-072: Should mention key testing tools', () => {
            // Test Steps:
            // 1. Menyiapkan daftar alat pengujian utama (Cypress, Postman, dll).
            // 2. Memastikan setiap alat tersebut disebutkan dalam ringkasan profesional.
            
            const tools = ['Cypress', 'Katalon Studio', 'Postman', 'JMeter'];

            tools.forEach((tool) => {
                portfolioPage.shouldContainText(
                    portfolioPage.selectors.about.content,
                    tool
                );
            });
        });

        it('TC-073: Should mention testing methodologies', () => {
            // Test Steps:
            // 1. Memvalidasi penyebutan metodologi pengujian seperti SDLC, STLC, dan Agile.
            
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
            // Test Steps:
            // 1. Memastikan jabatan 'QA Tester Intern' tampil di bagian pengalaman.
            
            portfolioPage.shouldContainText(
                portfolioPage.selectors.experience.title,
                'QA Tester Intern'
            );
        });

        it('TC-075: Should display company name', () => {
            // Test Steps:
            // 1. Memastikan nama perusahaan 'Horus Technology' tertera dengan benar.
            
            portfolioPage.shouldContainText(
                portfolioPage.selectors.experience.company,
                'Horus Technology'
            );
        });

        it('TC-076: Should display work period', () => {
            // Test Steps:
            // 1. Memvalidasi masa kerja yang menunjukkan status aktif ('Present').
            
            portfolioPage.shouldContainText(
                portfolioPage.selectors.experience.date,
                '2026'
            );
        });

        it('TC-077: Should list responsibilities', () => {
            // Test Steps:
            // 1. Menghitung jumlah poin tanggung jawab pada pekerjaan saat ini.
            // 2. Memastikan terdapat minimal 3 poin penjelasan tugas.
            
            portfolioPage
                .getElement(portfolioPage.selectors.experience.responsibilities)
                .should('have.length.at.least', 3);
        });

        it('TC-078: Should display previous experience', () => {
            // Test Steps:
            // 1. Memeriksa riwayat pekerjaan sebelumnya.
            // 2. Memastikan posisi 'Fiber Optic Technician' tercatat dalam sejarah karier.
            
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
            // Test Steps:
            // 1. Memvalidasi judul pendidikan non-formal (Bootcamp) yang dijalani.
            
            portfolioPage.shouldContainText(
                portfolioPage.selectors.education.title,
                'Bootcamp Quality Assurance'
            );
        });

        it('TC-080: Should display education provider', () => {
            // Test Steps:
            // 1. Memastikan nama lembaga penyedia pendidikan tertera dengan jelas.
            
            portfolioPage.shouldContainText(
                portfolioPage.selectors.education.institution,
                'Eduwork.id'
            );
        });

        it('TC-081: Should display graduation year', () => {
            // Test Steps:
            // 1. Memverifikasi tahun kelulusan atau sertifikasi (2025).
            
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

        it('TC-082: Should have Core Testing category', () => {
            // Test Steps:
            // 1. Mencari kategori keahlian 'Testing & QA'.
            
            portfolioPage.shouldContainText(
                portfolioPage.selectors.skills.categories,
                'Testing & QA'
            );
        });

        it('TC-083: Should have Automation category', () => {
            // Test Steps:
            // 1. Mencari kategori keahlian 'Automation Tools'.
            
            portfolioPage.shouldContainText(
                portfolioPage.selectors.skills.categories,
                'Automation Tools'
            );
        });

        it('TC-084: Should list Cypress as a skill', () => {
            // Test Steps:
            // 1. Memastikan 'Cypress' terdaftar sebagai salah satu teknologi yang dikuasai.
            
            portfolioPage.shouldContainText(
                portfolioPage.selectors.skills.tags,
                'Cypress'
            );
        });

        it('TC-085: Should list API testing tools', () => {
            // Test Steps:
            // 1. Memastikan 'Postman' muncul dalam daftar alat pengujian API.
            
            portfolioPage.shouldContainText(
                portfolioPage.selectors.skills.tags,
                'Postman'
            );
        });

        it('TC-086: Should have at least 15 skills listed', () => {
            // Test Steps:
            // 1. Menghitung total lencana keahlian di bagian Skills.
            
            portfolioPage.getElement(portfolioPage.selectors.skills.tags)
                .should('have.length.at.least', 15);
        });
    });

    describe('Projects Section Content', () => {
        beforeEach(() => {
            portfolioPage.scrollToSection('projects');
        });

        it('TC-087: Should display at least 3 projects', () => {
            // Test Steps:
            // 1. Memastikan setidaknya ada 3 proyek unggulan yang dipamerkan.
            
            portfolioPage
                .getElement(portfolioPage.selectors.projects.cards)
                .should('have.length.at.least', 3);
        });

        it('TC-088: Should have project titles', () => {
            // Test Steps:
            // 1. Memvalidasi bahwa setiap proyek memiliki judul yang jelas.
            
            portfolioPage
                .getElement(portfolioPage.selectors.projects.cards)
                .each(($card) => {
                    cy.wrap($card)
                        .find(portfolioPage.selectors.projects.title)
                        .should('not.be.empty');
                });
        });

        it('TC-089: Should have project descriptions', () => {
            // Test Steps:
            // 1. Memastikan setiap proyek dilengkapi dengan penjelasan singkat mengenai fungsinya.
            
            portfolioPage
                .getElement(portfolioPage.selectors.projects.cards)
                .each(($card) => {
                    cy.wrap($card)
                        .find(portfolioPage.selectors.projects.description)
                        .should('not.be.empty');
                });
        });

        it('TC-090: Should have technology tags', () => {
            // Test Steps:
            // 1. Memeriksa ketersediaan label teknologi pada proyek pertama.
            
            portfolioPage
                .getElement(portfolioPage.selectors.projects.cards)
                .first()
                .find(portfolioPage.selectors.projects.tags)
                .should('have.length.at.least', 1);
        });

        it.skip('TC-091: Should display project dates', () => {
            // Test Steps:
            // 1. (Dilewati) Struktur kartu terminal saat ini tidak menampilkan tanggal secara eksplisit.
            
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
            // Test Steps:
            // 1. Menghitung jumlah sertifikasi yang ditampilkan.
            // 2. Memastikan minimal ada 4 sertifikat yang terdaftar.
            
            portfolioPage
                .getElement(portfolioPage.selectors.certifications.cards)
                .should('have.length.at.least', 4);
        });

        it('TC-093: Should have QA bootcamp certificate', () => {
            // Test Steps:
            // 1. Mencari sertifikat spesifik 'QA Effective Testing Strategies'.
            
            portfolioPage.shouldContainText(
                portfolioPage.selectors.certifications.title,
                'QA Effective Testing Strategies'
            );
        });

        it('TC-094: Should display certificate issuers', () => {
            // Test Steps:
            // 1. Memastikan setiap sertifikat mencantumkan nama lembaga penerbitnya.
            
            portfolioPage
                .getElement(portfolioPage.selectors.certifications.cards)
                .each(($card) => {
                    cy.wrap($card)
                        .find(portfolioPage.selectors.certifications.issuer)
                        .should('not.be.empty');
                });
        });

        it('TC-095: Should have certificate descriptions', () => {
            // Test Steps:
            // 1. Memastikan setiap sertifikat memiliki detail deskripsi materi yang dipelajari.
            
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
            // Test Steps:
            // 1. Memvalidasi ajakan bertindak (CTA) di bagian kontak.
            
            portfolioPage.shouldContainText(
                portfolioPage.selectors.contact.heading,
                "Let's build something"
            );
        });

        it('TC-097: Should have email button', () => {
            // Test Steps:
            // 1. Memastikan tombol kirim email bertuliskan 'Email Me'.
            
            portfolioPage.shouldContainText(
                portfolioPage.selectors.contact.emailBtn,
                'Email Me'
            );
        });

        it('TC-098: Should have social media links', () => {
            // Test Steps:
            // 1. Menghitung jumlah ikon media sosial di bagian bawah.
            // 2. Memastikan tersedia minimal 2 opsi kontak sosial.
            
            portfolioPage
                .getElement(portfolioPage.selectors.contact.socialLinks)
                .should('have.length.at.least', 2);
        });
    });

    describe('Footer Content', () => {
        it('TC-099: Should display copyright year', () => {
            // Test Steps:
            // 1. Memeriksa tahun hak cipta di bagian kaki halaman (Footer).
            
            portfolioPage.shouldContainText(
                portfolioPage.selectors.footer.text,
                new Date().getFullYear().toString()
            );
        });

        it('TC-100: Should display author name', () => {
            // Test Steps:
            // 1. Memastikan nama lengkap pemilik portofolio tertera di footer.
            
            portfolioPage.shouldContainText(
                portfolioPage.selectors.footer.text,
                'ALBAROKAH'
            );
        });

        it.skip('TC-101: Should mention tech stack', () => {
            // Diterapkan jika ada info footer tambahan.
        });
    });
});

