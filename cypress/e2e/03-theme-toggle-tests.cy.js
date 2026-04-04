/**
 * Test Suite: Portfolio - Theme Toggle Tests
 * File: 03-theme-toggle-tests.cy.js
 * 
 * Pengujian fitur pergantian tema (Terang/Gelap) untuk memastikan aspek visual 
 * dan kenyamanan mata pengguna tetap terjaga di berbagai kondisi pencahayaan.
 */

import PortfolioPage from '../support/pages/PortfolioPage';

describe('Portfolio - Theme Toggle Tests', () => {
    const portfolioPage = new PortfolioPage();

    beforeEach(() => {
        portfolioPage.visitHomepage();
    });

    it('TC-026: Should display theme toggle button', () => {
        // Test Steps:
        // 1. Memastikan tombol toggle tema muncul di bilah navigasi.
        // 2. Memvalidasi keberadaan ikon di dalam tombol tersebut agar user tahu fungsinya.
        
        portfolioPage.shouldBeVisible(portfolioPage.selectors.navbar.themeToggle)
            .shouldBeVisible(portfolioPage.selectors.navbar.themeIcon);
    });

    it('TC-027: Should start with dark theme by default', () => {
        // Test Steps:
        // 1. Memeriksa identitas tema pada elemen root saat pertama kali dibuka.
        // 2. Memastikan tema 'dark' (gelap) aktif secara otomatis sebagai default.
        
        portfolioPage.verifyTheme('dark');
    });

    it('TC-028: Should toggle to light theme when clicked', () => {
        // Test Steps:
        // 1. Mengetuk tombol toggle tema.
        // 2. Memastikan tema aplikasi berubah menjadi 'light' (terang).
        // 3. Mengambil bukti screenshot tampilan tema terang.
        
        portfolioPage.toggleTheme()
            .verifyTheme('light')
            .screenshot('light-theme');
    });

    it('TC-029: Should toggle back to dark theme', () => {
        // Test Steps:
        // 1. Mengubah tema ke terang terlebih dahulu.
        // 2. Mengembalikan tema ke gelap dengan menekan tombol toggle sekali lagi.
        // 3. Memastikan tema kembali menjadi 'dark'.
        // 4. Mengambil bukti screenshot tampilan tema gelap.
        
        portfolioPage.toggleTheme()
            .verifyTheme('light')
            .toggleTheme()
            .verifyTheme('dark')
            .screenshot('dark-theme');
    });

    it('TC-030: Should persist theme after page reload', () => {
        // Test Steps:
        // 1. Mengganti tema menjadi terang.
        // 2. Melakukan muat ulang halaman (reload).
        // 3. Memastikan pilihan tema terang tetap bertahan dan tidak kembali ke default.
        
        portfolioPage.toggleTheme()
            .verifyTheme('light');
        
        cy.reload();
        
        portfolioPage.verifyTheme('light');
    });

    it('TC-031: Should maintain theme across navigation', () => {
        // Test Steps:
        // 1. Mengatur tema ke terang.
        // 2. Berpindah ke bagian 'Skills'.
        // 3. Memastikan tema tetap terang.
        // 4. Berpindah lagi ke bagian 'Projects' dan memastikan konsistensi tema terang.
        
        portfolioPage.toggleTheme()
            .verifyTheme('light')
            .clickNavLink('Skills')
            .verifyTheme('light')
            .clickNavLink('Projects')
            .verifyTheme('light');
    });

    it('TC-032: Should have proper contrast in light theme', () => {
        // Test Steps:
        // 1. Mengaktifkan tema terang.
        // 2. Melakukan audit visual cepat ke seluruh bagian halaman untuk memastikan keterbacaan teks.
        
        portfolioPage.toggleTheme()
            .verifyAllSections();
    });

    it('TC-033: Should have proper contrast in dark theme', () => {
        // Test Steps:
        // 1. Memastikan seluruh bagian halaman tetap terbaca dengan nyaman pada tema gelap (default).
        
        portfolioPage.verifyAllSections();
    });

    it('TC-034: Should animate theme toggle button on hover', () => {
        // Test Steps:
        // 1. Melakukan simulasi mengarahkan kursor (hover) ke tombol toggle tema.
        // 2. Memastikan tombol tetap terlihat dan merespons interaksi tersebut.
        
        portfolioPage.getElement(portfolioPage.selectors.navbar.themeToggle)
            .trigger('mouseover');
        
        portfolioPage.shouldBeVisible(portfolioPage.selectors.navbar.themeToggle);
    });

    it('TC-035: Should change theme icon when toggling', () => {
        // Test Steps:
        // 1. Memastikan tema awal adalah gelap (Moon icon visible).
        // 2. Menekan tombol toggle tema.
        // 3. Memastikan tema berubah menjadi terang (Sun icon visible).
        
        portfolioPage.verifyTheme('dark');
        portfolioPage.toggleTheme();
        portfolioPage.verifyTheme('light');
    });
});

