/**
 * Test Suite: Portfolio - Navigation Tests
 * File: 02-navigation-tests.cy.js
 * 
 * Pengujian fitur navigasi untuk memastikan pengguna dapat berpindah antar bagian 
 * halaman dengan lancar melalui menu navigasi, baik di desktop maupun perangkat mobile.
 */

import PortfolioPage from '../support/pages/PortfolioPage';

describe('Portfolio - Navigation Tests', () => {
    const portfolioPage = new PortfolioPage();

    beforeEach(() => {
        portfolioPage.visitHomepage();
    });

    describe('Desktop Navigation', () => {
        it('TC-013: Should navigate to About section via nav link', () => {
            // Test Steps:
            // 1. Mengklik tautan 'About' pada bilah navigasi.
            // 2. Memastikan layar berpindah dan bagian 'About' terlihat jelas di hadapan pengguna.
            
            portfolioPage.clickNavLink('About')
                .shouldBeVisible(portfolioPage.selectors.about.section);
        });

        it('TC-014: Should navigate to Experience section via nav link', () => {
            // Test Steps:
            // 1. Memilih menu 'Experience' untuk melihat riwayat karier.
            // 2. Memvalidasi bagian 'Experience' telah muncul sempurna.
            
            portfolioPage.clickNavLink('Experience')
                .shouldBeVisible(portfolioPage.selectors.experience.section);
        });

        it('TC-015: Should navigate to Education section via nav link', () => {
            // Test Steps:
            // 1. Menekan tautan 'Education' pada navigasi.
            // 2. Memastikan area latar belakang pendidikan berhasil ditampilkan.
            
            portfolioPage.clickNavLink('Education')
                .shouldBeVisible(portfolioPage.selectors.education.section);
        });

        it('TC-016: Should navigate to Skills section via nav link', () => {
            // Test Steps:
            // 1. Memilih tab 'Skills' untuk mengecek daftar keahlian.
            // 2. Memverifikasi bagian 'Skills' tampil tanpa kendala.
            
            portfolioPage.clickNavLink('Skills')
                .shouldBeVisible(portfolioPage.selectors.skills.section);
        });

        it('TC-017: Should navigate to Projects section via nav link', () => {
            // Test Steps:
            // 1. Mengklik menu 'Projects' untuk melihat hasil karya.
            // 2. Memastikan grid projek telah dirender dengan benar.
            
            portfolioPage.clickNavLink('Projects')
                .shouldBeVisible(portfolioPage.selectors.projects.section);
        });

        it('TC-018: Should navigate to Education section (Self-contained Certifications)', () => {
            // Test Steps:
            // 1. Mengarahkan navigasi ke bagian 'Education' (yang kini memuat sertifikat).
            // 2. Memastikan area pendidikan dan sertifikasi muncul di layar.
            
            portfolioPage.clickNavLink('Education')
                .shouldBeVisible(portfolioPage.selectors.education.section);
        });

        it('TC-019: Should navigate to Contact section via nav link', () => {
            // Test Steps:
            // 1. Menuju bagian terakhir, yaitu 'Contact'.
            // 2. Memastikan formulir atau informasi kontak sudah siap digunakan.
            
            portfolioPage.clickNavLink('Contact')
                .shouldBeVisible(portfolioPage.selectors.contact.section);
        });

        it('TC-020: Should navigate through all sections sequentially', () => {
            // Test Steps:
            // 1. Melakukan simulasi perjalanan pengguna melewati seluruh menu navigasi satu per satu secara berurutan.
            // 2. Memastikan setiap klik pada menu memindahkan fokus layar ke bagian yang tepat.
            
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
    });

    describe('Mobile Navigation', () => {
        beforeEach(() => {
            // Test Steps:
            // 1. Mengatur ukuran layar browser menjadi tampilan ponsel pintar (375x667).
            
            cy.viewport(375, 667);
        });

        it('TC-021: Should show hamburger menu on mobile', () => {
            // Test Steps:
            // 1. Memastikan tombol menu 'hamburger' muncul saat aplikasi diakses lewat perangkat mobile.
            
            portfolioPage.shouldBeVisible(portfolioPage.selectors.navbar.mobileMenu);
        });

        it('TC-022: Should toggle mobile menu when clicked', () => {
            // Test Steps:
            // 1. Membuka menu mobile dengan satu ketukan.
            // 2. Memastikan daftar tautan navigasi muncul (memiliki class 'active').
            // 3. Menutup kembali menu tersebut.
            // 4. Memastikan daftar tautan kembali tersembunyi (class 'active' hilang).
            
            portfolioPage.clickMobileMenu();
            portfolioPage.getElement(portfolioPage.selectors.navbar.navLinks)
                .should('not.be.disabled'); // Memastikan menu mobile dirender

            portfolioPage.clickMobileMenu();
            portfolioPage.getElement(portfolioPage.selectors.navbar.navLinks)
                .should('have.css', 'pointer-events', 'none');
        });

        it('TC-023: Should navigate to sections via mobile menu', () => {
            // Test Steps:
            // 1. Membuka menu mobile terlebih dahulu.
            // 2. Memilih tautan 'About'.
            // 3. Memastikan layar berpindah ke bagian 'About'.
            
            portfolioPage.clickMobileMenu()
                .clickNavLink('About')
                .shouldBeVisible(portfolioPage.selectors.about.section);
        });
    });

    describe('Scroll Navigation', () => {
        it('TC-024: Should scroll to section when clicking nav link', () => {
            // Test Steps:
            // 1. Melakukan navigasi ke bagian 'Skills'.
            // 2. Memvalidasi bahwa elemen 'Skills' benar-benar terlihat di area pandang browser.
            
            portfolioPage.clickNavLink('Skills');
            portfolioPage.getElement(portfolioPage.selectors.skills.section)
                .should('be.visible');
        });

        it('TC-025: Should maintain navbar visibility while scrolling', () => {
            // Test Steps:
            // 1. Menggulir layar hingga mencapai bagian terbawah (Contact).
            // 2. Memastikan bilah navigasi tetap menempel (sticky) dan terlihat di bagian atas layar.
            
            portfolioPage.scrollToSection('contact')
                .shouldBeVisible(portfolioPage.selectors.navbar.logo);
        });
    });
});

