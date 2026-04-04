/**
 * Test Suite: Portfolio - Smoke Tests
 * File: 01-smoke-tests.cy.js
 * 
 * Pengujian dasar (Smoke Test) untuk memastikan seluruh komponen utama portfolio 
 * dapat dimuat dengan sempurna dan fungsi fundamental berjalan tanpa hambatan.
 */

import PortfolioPage from '../support/pages/PortfolioPage';

describe('Portfolio - Smoke Tests', () => {
    const portfolioPage = new PortfolioPage();

    beforeEach(() => {
        portfolioPage.visitHomepage();
    });

    it('TC-001: Should load homepage successfully', () => {
        // Test Steps:
        // 1. Memastikan halaman utama berhasil dimuat hingga status 'complete'.
        // 2. Memvalidasi URL mengandung base path yang benar agar navigasi tepat sasaran.
        // 3. Memverifikasi bahwa bilah navigasi utama muncul dengan jelas bagi pengunjung.
        // 4. Mengambil bukti visual (screenshot) bahwa halaman utama telah tampil sempurna.
        
        portfolioPage.waitForPageLoad();
        portfolioPage.urlShouldContain('/');
        portfolioPage.verifyNavbarVisible();
        portfolioPage.screenshot('homepage-loaded');
    });

    it('TC-002: Should display all main sections', () => {
        // Test Steps:
        // 1. Melakukan pemeriksaan menyeluruh pada setiap bagian konten (Hero, About, Skills, dll).
        // 2. Memastikan tidak ada bagian penting yang hilang agar informasi tersampaikan utuh.
        
        portfolioPage.verifyAllSections();
    });

    it('TC-003: Should have correct page title', () => {
        // Test Steps:
        // 1. Memeriksa judul halaman pada tab browser apakah sudah sesuai dengan identitas pemilik.
        
        cy.title().should('eq', 'Albarokah | QA Automation Engineer Portfolio');
    });

    it('TC-004: Should display hero section with correct information', () => {
        // Test Steps:
        // 1. Memvalidasi konten pada area sapaan utama (Hero Section).
        // 2. Memastikan seluruh tombol aksi sosial (LinkedIn, GitHub, dll) tersedia dan terlihat.
        
        portfolioPage.verifyHeroSection();
        portfolioPage
            .shouldBeVisible(portfolioPage.selectors.hero.resumeBtn)
            .shouldBeVisible(portfolioPage.selectors.hero.whatsapp)
            .shouldBeVisible(portfolioPage.selectors.hero.linkedinBtn)
            .shouldBeVisible(portfolioPage.selectors.hero.githubBtn);
    });

    it('TC-005: Should display professional summary section', () => {
        // Test Steps:
        // 1. Melakukan gulir layar menuju bagian 'About'.
        // 2. Memastikan ringkasan profesional tampil dan terbaca dengan baik.
        // 3. Mencari kata kunci 'Cypress' untuk memastikan keahlian utama disebutkan.
        
        portfolioPage.scrollToSection('about');
        portfolioPage.verifyAboutSection();
        portfolioPage.shouldContainText(
            portfolioPage.selectors.about.content,
            'Cypress'
        );
    });

    it('TC-006: Should display experience timeline', () => {
        // Test Steps:
        // 1. Berpindah ke bagian riwayat pengalaman kerja.
        // 2. Memvalidasi struktur timeline pengalaman tampil dengan benar.
        // 3. Memastikan detail pekerjaan terakhir (QA Tester) tercantum dengan jelas.
        
        portfolioPage.scrollToSection('experience');
        portfolioPage.verifyExperienceSection();
        portfolioPage
            .shouldBeVisible(portfolioPage.selectors.experience.firstItem)
            .shouldContainText(portfolioPage.selectors.experience.title, 'QA');
    });

    it('TC-007: Should display education section', () => {
        // Test Steps:
        // 1. Menuju bagian informasi pendidikan.
        // 2. Memeriksa ketersediaan ikon dan teks keterangan institusi pendidikan.
        
        portfolioPage.scrollToSection('education');
        portfolioPage.verifyEducationSection();
        portfolioPage.getElement(portfolioPage.selectors.education.items)
            .should('have.length.at.least', 1);
    });

    it('TC-008: Should display skills with multiple categories', () => {
        // Test Steps:
        // 1. Membuka area daftar keahlian (Skills).
        // 2. Memvalidasi pengelompokan keahlian setidaknya terdiri dari 4 kategori utama.
        
        portfolioPage.scrollToSection('skills');
        portfolioPage.verifySkillsSection();
        portfolioPage
            .getElement(portfolioPage.selectors.skills.categories)
            .should('have.length.at.least', 4);
    });

    it('TC-009: Should display projects with cards', () => {
        // Test Steps:
        // 1. Mengarahkan pandangan ke bagian daftar projek.
        // 2. Memeriksa salah satu kartu projek untuk memastikan ada judul, deskripsi, dan label penanda (tags).
        
        portfolioPage.scrollToSection('projects');
        portfolioPage.verifyProjectsSection();
        portfolioPage
            .getElement(portfolioPage.selectors.projects.firstCard)
            .within(() => {
                cy.get(portfolioPage.selectors.projects.title).should('be.visible');
                cy.get(portfolioPage.selectors.projects.description).should('be.visible');
                cy.get(portfolioPage.selectors.projects.tags).should('have.length.at.least', 1);
            });
    });

    it('TC-010: Should display certifications section', () => {
        // Test Steps:
        // 1. Melakukan pengecekan pada bagian sertifikasi profesional.
        // 2. Memastikan setiap sertifikat memiliki tombol akses yang berfungsi.
        
        portfolioPage.scrollToSection('certifications');
        portfolioPage.verifyCertificationsSection();
        portfolioPage.shouldBeVisible(portfolioPage.selectors.certifications.button);
    });

    it('TC-011: Should display contact section', () => {
        // Test Steps:
        // 1. Berlabuh pada bagian kotak kontak (Contact).
        // 2. Memastikan tautan sosial (GitHub & LinkedIn) sudah siap untuk dihubungi.
        
        portfolioPage.scrollToSection('contact');
        portfolioPage.verifyContactSection();
        portfolioPage
            .shouldBeVisible(portfolioPage.selectors.contact.githubBtn)
            .shouldBeVisible(portfolioPage.selectors.contact.linkedinBtn);
    });

    it('TC-012: Should display footer with copyright', () => {
        // Test Steps:
        // 1. Memeriksa bagian kaki halaman (Footer).
        // 2. Memastikan nama pemilik dan informasi hak cipta tertera dengan bangga.
        
        portfolioPage.verifyFooter();
        portfolioPage.shouldContainText(
            portfolioPage.selectors.footer.text,
            'ALBAROKAH'
        );
    });
});

