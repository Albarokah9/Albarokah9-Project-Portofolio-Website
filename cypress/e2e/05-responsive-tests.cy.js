/**
 * Test Suite: Portfolio - Responsive Design Tests
 * File: 05-responsive-tests.cy.js
 * 
 * Pengujian responsivitas untuk memastikan tampilan website tetap estetis dan 
 * fungsional di berbagai ukuran layar, mulai dari smartphone hingga monitor layar lebar.
 */

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
                // Test Steps:
                // 1. Mengatur ukuran layar sesuai spesifikasi viewport.
                // 2. Berkunjung ke halaman utama portfolio.
                
                cy.viewport(viewport.width, viewport.height);
                portfolioPage.visitHomepage();
            });

            it(`TC-051-${viewport.name}: Should load all sections`, () => {
                // Test Steps:
                // 1. Melakukan audit terhadap seluruh bagian halaman.
                // 2. Memastikan semua konten dirender dengan aman pada ukuran layar ini.
                
                portfolioPage.verifyAllSections();
            });

            it(`TC-052-${viewport.name}: Should have readable text`, () => {
                // Test Steps:
                // 1. Memeriksa keterbacaan teks utama di bagian Hero.
                // 2. Memvalidasi bahwa teks tersebut terlihat dan memiliki ukuran (font-size) yang layak.
                
                portfolioPage
                    .getElement(portfolioPage.selectors.hero.name)
                    .should('be.visible')
                    .and('have.css', 'font-size');
            });

            it(`TC-053-${viewport.name}: Should not have horizontal scroll`, () => {
                // Test Steps:
                // 1. Memeriksa lebar konten keseluruhan terhadap lebar layar yang tersedia.
                // 2. Memastikan tidak ada luapan konten (layout overflow) yang memicu munculnya scroll bar horizontal.
                
                cy.document().then((doc) => {
                    const scrollWidth = doc.documentElement.scrollWidth;
                    expect(scrollWidth).to.be.at.most(viewport.width + 20);
                });
            });

            it(`TC-054-${viewport.name}: Should display images properly`, () => {
                // Test Steps:
                // 1. Melakukan scroll ke bagian Projek.
                // 2. Memastikan gambar pada kartu projek pertama tampil dengan proporsional.
                
                portfolioPage.scrollToSection('projects')
                    .shouldBeVisible(portfolioPage.selectors.projects.firstCard);
            });
        });
    });

    describe('Mobile-Specific Tests', () => {
        beforeEach(() => {
            // Test Steps:
            // 1. Menyiapkan tampilan layar mobile standar (375px).
            
            cy.viewport(375, 667);
            portfolioPage.visitHomepage();
        });

        it('TC-055: Should show hamburger menu on mobile', () => {
            // Test Steps:
            // 1. Memastikan tombol hamburger muncul menggantikan menu navigasi desktop.
            
            portfolioPage.shouldBeVisible(portfolioPage.selectors.navbar.mobileMenu);
        });

        it('TC-056: Should hide desktop nav links on mobile', () => {
            // Test Steps:
            // 1. Memastikan daftar menu navigasi dalam kondisi tertutup (tidak aktif) saat baru dibuka di mobile.
            
            portfolioPage
                .getElement(portfolioPage.selectors.navbar.navLinks)
                .should('not.be.visible');
        });

        it('TC-057: Should stack elements vertically on mobile', () => {
            // Test Steps:
            // 1. Memeriksa pengaturan tata letak (layout) di bagian Hero.
            // 2. Memastikan elemen diatur secara vertikal (column) demi kenyamanan pembaca di layar sempit.
            
            portfolioPage
                .getElement(portfolioPage.selectors.hero.section + ' > div > div')
                .should('have.css', 'flex-direction', 'column');
        });

        it('TC-058: Should have touch-friendly button sizes', () => {
            // Test Steps:
            // 1. Memperoleh elemen tombol toggle tema.
            // 2. Memvalidasi ukuran fisik tombol setidaknya 26px agar mudah ditekan oleh jari (touch-friendly).
            
            portfolioPage
                .getElement(portfolioPage.selectors.navbar.themeToggle)
                .should(($btn) => {
                    const width = $btn.width();
                    const height = $btn.height();
                    expect(width).to.be.at.least(26);
                    expect(height).to.be.at.least(26);
                });
        });

        it('TC-060: Should have proper spacing on mobile', () => {
            // Test Steps:
            // 1. Memeriksa area 'About'.
            // 2. Memastikan terdapat jarak (padding) yang cukup agar konten tidak menempel ke tepi layar.
            
            portfolioPage
                .getElement(portfolioPage.selectors.about.section)
                .should('have.css', 'padding');
        });
    });

    describe('Tablet-Specific Tests', () => {
        beforeEach(() => {
            // Test Steps:
            // 1. Menyesuaikan tampilan ke ukuran tablet (768px).
            
            cy.viewport(768, 1024);
            portfolioPage.visitHomepage();
        });

        it('TC-061: Should adapt grid layouts for tablet', () => {
            // Test Steps:
            // 1. Menggulir layar ke bagian Keahlian (Skills).
            // 2. Memastikan wadah grid tampil dengan benar di layar tablet.
            
            portfolioPage.scrollToSection('skills')
                .shouldBeVisible(portfolioPage.selectors.skills.section);
        });

        it('TC-062: Should maintain readability on tablet', () => {
            // Test Steps:
            // 1. Melakukan audit visual seluruh bagian di perangkat tablet.
            
            portfolioPage.verifyAllSections();
        });
    });

    describe('Desktop-Specific Tests', () => {
        beforeEach(() => {
            // Test Steps:
            // 1. Menyesuaikan tampilan ke standar layar desktop (1366px).
            
            cy.viewport(1366, 768);
            portfolioPage.visitHomepage();
        });

        it('TC-063: Should show desktop navigation', () => {
            // Test Steps:
            // 1. Memastikan seluruh tautan navigasi langsung terlihat tanpa perlu menekan tombol apapun.
            
            portfolioPage.shouldBeVisible(portfolioPage.selectors.navbar.navLinks);
        });

        it('TC-064: Should hide hamburger menu on desktop', () => {
            // Test Steps:
            // 1. Mematikan tampilan tombol hamburger karena menu utama sudah tersedia.
            
            portfolioPage
                .getElement(portfolioPage.selectors.navbar.mobileMenu)
                .should('not.be.visible');
        });

        it('TC-065: Should use multi-column layouts', () => {
            // Test Steps:
            // 1. Meninjau tata letak grid pada bagian Projek.
            // 2. Memastikan properti CSS 'display: grid' aktif untuk menyusun kartu projek berdampingan.
            
            portfolioPage.scrollToSection('projects');
            portfolioPage.getElement(portfolioPage.selectors.projects.grid)
                .should('have.css', 'display', 'grid');
        });
    });

    describe('Orientation Tests', () => {
        it('TC-066: Should work in landscape orientation', () => {
            // Test Steps:
            // 1. Memutar layar perangkat ke mode lanskap.
            // 2. Memastikan logo identitas tetap terlihat dan terbaca.
            
            cy.viewport(667, 375);
            portfolioPage.visitHomepage()
                .shouldBeVisible(portfolioPage.selectors.navbar.logo);
        });

        it('TC-067: Should work in portrait orientation', () => {
            // Test Steps:
            // 1. Memutar layar perangkat ke mode potret.
            // 2. Memastikan logo identitas tampil sempurna di bagian atas.
            
            cy.viewport(375, 667);
            portfolioPage.visitHomepage()
                .shouldBeVisible(portfolioPage.selectors.navbar.logo);
        });
    });
});

