import BasePage from './BasePage';

/**
 * Page Object: PortfolioPage
 * File: PortfolioPage.js
 * 
 * Mengelola interaksi dan validasi elemen pada halaman utama portfolio.
 * Menggunakan pendekatan fluent interface untuk alur pengujian yang rapi.
 * 
 * @class PortfolioPage
 * @extends BasePage
 */
class PortfolioPage extends BasePage {
  /**
   * Definisi selector elemen yang dipetakan secara terpusat untuk memudahkan pemeliharaan.
   * Seluruh selector diutamakan menggunakan atribut data-cy demi stabilitas testing.
   */
  selectors = {
    navbar: {
      logo: '[data-cy="nav-logo"]',
      desktopNavLinks: '[data-cy="desktop-nav-links"]',
      get navLinks() {
        return cy.state('viewportWidth') < 768 ? '[data-cy="mobile-nav-links"]' : '[data-cy="desktop-nav-links"]';
      },
      themeToggle: '[data-cy="theme-toggle"]',
      themeIcon: '[data-cy="theme-toggle"] svg',
      mobileMenu: '[data-cy="mobile-menu-toggle"]',
      navLink: (text) => `[data-cy="nav-link-${text.toLowerCase()}"]`,
    },

    // Area Hero
    hero: {
      section: '[data-cy="hero-section"]',
      name: '[data-cy="hero-name"]',
      role: '[data-cy="hero-role"]',
      cta: '[data-cy="hero-cta"]',
      linkedinBtn: '[data-cy="hero-linkedin"]',
      githubBtn: '[data-cy="hero-github"]',
      resumeBtn: '[data-cy="hero-resume"]',
      coverLetterBtn: '[data-cy="hero-resume"]',
      whatsapp: '[data-cy="hero-whatsapp"]',
    },

    // Bagian Tentang Saya (About)
    about: {
      section: '[data-cy="about-section"]',
      heading: '[data-cy="about-title"]',
      content: '[data-cy="about-section"] p',
    },

    // Bagian Pengalaman (Experience)
    experience: {
      section: '[data-cy="experience-section"]',
      heading: '[data-cy="experience-title"]',
      items: '[data-cy="experience-card"]',
      firstItem: '[data-cy="experience-card"]:first',
      title: '[data-cy="experience-role"]:first',
      company: '[data-cy="experience-company"]',
      date: '[data-cy="experience-date"]',
      responsibilities: '[data-cy="experience-responsibilities"]',
    },

    // Bagian Pendidikan (Education)
    education: {
      section: '[data-cy="education-section"]',
      heading: '[data-cy="education-title"]',
      items: '[data-cy="education-card"]',
      title: '[data-cy="education-degree"]',
      institution: '[data-cy="education-institution"]',
    },

    // Bagian Keahlian (Skills)
    skills: {
      section: '[data-cy="skills-section"]',
      heading: '[data-cy="skills-title"]',
      categories: '[data-cy="skills-section"] h3',
      tags: '[data-cy="skills-section"] .inline-flex',
    },

    // Bagian Projek
    projects: {
      section: '[data-cy="projects-section"]',
      heading: '[data-cy="projects-title"]',
      grid: '[data-cy="projects-section"] .grid',
      cards: '[data-cy="project-card"]',
      firstCard: '[data-cy="project-card"]:first',
      title: '[data-cy="project-card-title"]',
      description: '[data-cy="project-card-description"]',
      tags: '[data-cy="project-tag"]',
      tabs: '[data-cy="project-tabs"]',
      githubLink: '[data-cy="project-github-link"]',
      demoLink: '[data-cy="project-demo-link"]',
    },

    // Bagian Sertifikasi
    certifications: {
      section: '[data-cy="education-section"]', // Sertifikasi ada di dalam section pendidikan
      heading: '[data-cy="education-title"]',
      cards: '[data-cy="certification-card"]',
      firstCard: '[data-cy="certification-card"]:first',
      title: '[data-cy="cert-card-title"]',
      issuer: '[data-cy="cert-card-description"]',
      description: '[data-cy="cert-card-description"]',
      button: '[data-cy="view-certificate-button"]',
    },

    // Bagian Kontak
    contact: {
      section: '[data-cy="contact-section"]',
      heading: '[data-cy="contact-title"]',
      card: '[data-cy="contact-section"] .max-w-2xl',
      emailBtn: '[data-cy="contact-email"]',
      linkedinBtn: '[data-cy="contact-linkedin"]',
      githubBtn: '[data-cy="contact-github"]',
      whatsappBtn: '[data-cy="contact-whatsapp"]',
      githubLink: '[data-cy="contact-github"]',
      linkedinLink: '[data-cy="contact-linkedin"]',
      socialLinks: '[data-cy="contact-section"] .flex.flex-wrap a',
    },

    // Bagian Kaki (Footer)
    footer: {
      element: '[data-cy="contact-footer"]',
      text: '[data-cy="contact-footer"] p',
    },
  };

  // ==================== ACTIONS ====================

  /**
   * Mengarahkan browser untuk mengunjungi halaman utama portfolio dan menunggu hingga semua elemen siap.
   * @returns {PortfolioPage} Mengembalikan instance class ini untuk mendukung pemanggilan method berantai.
   */
  visitHomepage() {
    this.visit('/');
    this.waitForPageLoad();
    return this;
  }

  /**
   * Melakukan klik pada salah satu tautan navigasi untuk berpindah antar bagian halaman dengan efek smooth scroll.
   * @param {string} linkText - Nama tautan navigasi yang ingin diklik (misal: "About" atau "Skills").
   * @returns {PortfolioPage} Mempermudah alur interaksi pengguna secara berurutan.
   */
  clickNavLink(linkText) {
    const selector = this.selectors.navbar.navLink(linkText);
    cy.get(selector).filter(':visible').click();
    cy.wait(800); // Menunggu sebentar agar animasi scroll selesai dengan mulus.
    return this;
  }

  /**
   * Mengganti tema tampilan aplikasi (Terang/Gelap) melalui tombol toggle yang tersedia di navbar.
   * @returns {PortfolioPage} Memastikan alur testing tetap sinkron setelah pergantian tema.
   */
  toggleTheme() {
    this.click(this.selectors.navbar.themeToggle);
    cy.wait(500); // Menunggu transisi animasi perubahan warna selesai.
    return this;
  }

  /**
   * Memperoleh elemen ikon tema yang sedang aktif untuk divalidasi statusnya (Matahari/Bulan).
   * @returns {Cypress.Chainable} Mengembalikan objek Cypress berisi ikon tema saat ini.
   */
  getThemeIcon() {
    return this.getElement(this.selectors.navbar.themeIcon);
  }

  /**
   * Membuka atau menutup menu navigasi pada tampilan perangkat seluler (mobile).
   * @returns {PortfolioPage} Mendukung pengujian pada responsivitas tampilan mobile.
   */
  clickMobileMenu() {
    this.click(this.selectors.navbar.mobileMenu);
    return this;
  }

  /**
   * Mengarahkan tampilan layar menuju ke bagian (section) tertentu berdasarkan ID elemennya.
   * @param {string} sectionId - ID unik dari bagian yang dituju (misal: 'projects').
   * @returns {PortfolioPage} Membantu navigasi manual ke area konten yang spesifik.
   */
  scrollToSection(sectionId) {
    // Penanganan khusus untuk sertifikasi yang sekarang ada di section pendidikan
    const targetId = sectionId === 'certifications' ? 'education' : sectionId;
    this.scrollTo(`#${targetId}`);
    cy.wait(600); // Memberikan waktu jeda agar posisi scroll benar-benar mantap.
    return this;
  }

  /**
   * Membuka profil LinkedIn langsung melalui tombol yang ada di area Hero.
   * @returns {PortfolioPage} Mendukung validasi integrasi dengan platform profesional.
   */
  clickHeroLinkedIn() {
    this.click(this.selectors.hero.linkedinBtn);
    return this;
  }

  /**
   * Mengakses repositori GitHub melalui tombol pintas di bagian atas halaman.
   * @returns {PortfolioPage} Memastikan akses ke projek open-source berjalan lancar.
   */
  clickHeroGitHub() {
    this.click(this.selectors.hero.githubBtn);
    return this;
  }

  /**
   * Menghitung dan mengambil seluruh kartu projek yang ditampilkan di dalam grid.
   * @returns {Cypress.Chainable} Mengembalikan daftar elemen kartu projek yang ditemukan.
   */
  getProjectCardsCount() {
    return this.getElement(this.selectors.projects.cards);
  }

  /**
   * Mengklik tautan yang ada pada kartu projek pertama untuk melihat detail lebih lanjut.
   * @returns {PortfolioPage} Memvalidasi alur eksplorasi projek secara mendalam.
   */
  clickFirstProjectLink() {
    this.getElement(this.selectors.projects.firstCard)
      .find(this.selectors.projects.link)
      .first()
      .click();
    return this;
  }

  /**
   * Melakukan klik pada tombol di kartu sertifikasi pertama untuk memverifikasi keaslian sertifikat.
   * @returns {PortfolioPage} Memastikan dokumen pendukung dapat diakses dengan baik.
   */
  clickFirstCertButton() {
    this.getElement(this.selectors.certifications.firstCard)
      .find(this.selectors.certifications.button)
      .click();
    return this;
  }

  /**
   * Memicu pembukaan aplikasi email melalui tombol kontak untuk memulai komunikasi.
   * @returns {PortfolioPage} Menguji kesiapan fitur kontak bagi pengunjung.
   */
  clickContactEmail() {
    this.click(this.selectors.contact.emailBtn);
    return this;
  }

  // ==================== ASSERTIONS ====================

  /**
   * Memastikan bahwa bilah navigasi (navbar) tampil sempurna beserta seluruh komponen intinya.
   * @returns {PortfolioPage} Memberikan jaminan kemudahan akses bagi pengguna.
   */
  verifyNavbarVisible() {
    cy.get(this.selectors.navbar.logo).should('be.visible');
    cy.get(this.selectors.navbar.desktopNavLinks).should('be.visible');
    cy.get(this.selectors.navbar.themeToggle).should('be.visible');
    return this;
  }

  /**
   * Melakukan validasi terhadap konten di bagian Hero, seperti nama Albarokah dan posisi sebagai QA.
   * @returns {PortfolioPage} Menjamin identitas pemilik portfolio dikenali dengan tepat.
   */
  verifyHeroSection() {
    cy.get(this.selectors.hero.section).should('be.visible')
      .and('contain', 'ALBAROKAH')
      .and('contain', 'Quality Assurance');
    cy.get(this.selectors.hero.whatsapp).should('be.visible');
    return this;
  }

  /**
   * Memverifikasi keberadaan bagian 'Tentang Saya' beserta ringkasan profesional yang mendalam.
   * @returns {PortfolioPage} Memastikan pesan profesional tersampaikan dengan baik.
   */
  verifyAboutSection() {
    cy.get(this.selectors.about.section).should('be.visible');
    cy.get(this.selectors.about.heading).should('contain', 'Precision');
    cy.get(this.selectors.about.content).should('be.visible');
    return this;
  }

  /**
   * Mengecek apakah riwayat pengalaman kerja ditampilkan sesuai urutan dengan jumlah yang memadai.
   * @returns {PortfolioPage} Menunjukkan kredibilitas profesional melalui rekam jejak yang jelas.
   */
  verifyExperienceSection() {
    cy.get(this.selectors.experience.section).should('be.visible');
    cy.get(this.selectors.experience.heading).should('contain', 'Journey');
    cy.get(this.selectors.experience.items).should('have.length.at.least', 1);
    return this;
  }

  /**
   * Memastikan informasi latar belakang pendidikan tertera dengan benar di halaman.
   * @returns {PortfolioPage} Menguatkan fondasi kualifikasi akademis pengguna.
   */
  verifyEducationSection() {
    cy.get(this.selectors.education.section).should('be.visible');
    cy.get(this.selectors.education.heading).should('contain', 'Education');
    cy.get(this.selectors.education.items).should('have.length.at.least', 1);
    return this;
  }

  /**
   * Validasi daftar keahlian teknis (Skills) untuk memastikan klasifikasi dan kategori sudah lengkap.
   * @returns {PortfolioPage} Menonjolkan kapabilitas teknis yang relevan di mata pengunjung.
   */
  verifySkillsSection() {
    cy.get(this.selectors.skills.section).should('be.visible');
    cy.get(this.selectors.skills.heading).should('contain', 'Technical Expertise');
    cy.get(this.selectors.skills.categories).should('have.length.at.least', 1);
    cy.get(this.selectors.skills.tags).should('have.length.at.least', 5);
    return this;
  }

  /**
   * Memeriksa keterpajangan kartu projek serta navigasi grid projek agar tetap tertata rapi.
   * @returns {PortfolioPage} Memberikan impresi visual dari hasil kerja nyata.
   */
  verifyProjectsSection() {
    cy.get(this.selectors.projects.section).should('be.visible');
    cy.get(this.selectors.projects.heading).should('contain', 'Featured Projects');
    cy.get(this.selectors.projects.cards).should('have.length.at.least', 1);
    return this;
  }

  /**
   * Memastikan bagian sertifikasi memuat data yang valid untuk memperkuat pembuktian keahlian.
   * @returns {PortfolioPage} Menambah nilai kepercayaan melalui sertifikasi resmi.
   */
  verifyCertificationsSection() {
    cy.get(this.selectors.certifications.section).should('be.visible');
    cy.get(this.selectors.certifications.cards).should('have.length.at.least', 1);
    return this;
  }

  /**
   * Memvalidasi kemudahan akses kontak bagi audiens yang ingin berkolaborasi lebih lanjut.
   * @returns {PortfolioPage} Menutup perjalanan pengunjung dengan pintu kolaborasi yang terbuka.
   */
  verifyContactSection() {
    cy.get(this.selectors.contact.section).should('be.visible');
    cy.get(this.selectors.contact.heading).should('contain', 'bug-free');
    cy.get(this.selectors.contact.emailBtn).should('be.visible');
    return this;
  }

  /**
   * Memastikan bagian terbawah halaman (Footer) mencantumkan hak cipta dan tahun yang valid.
   * @returns {PortfolioPage} Memberikan kesan profesional hingga akhir halaman.
   */
  verifyFooter() {
    cy.get(this.selectors.footer.element).should('be.visible');
    // Menggunakan RegExp agar test tidak flaky karena perbedaan waktu/tahun sistem
    cy.get(this.selectors.footer.text).invoke('text').should('match', /20\d{2}/);
    return this;
  }

  /**
   * Menjalankan audit menyeluruh terhadap keberadaan seluruh bagian utama di dalam satu pemanggilan aksi.
   * @returns {PortfolioPage} Mempercepat proses validasi integritas struktur halaman secara keseluruhan.
   */
  verifyAllSections() {
    this.verifyHeroSection()
        .verifyAboutSection()
        .verifyExperienceSection()
        .verifyEducationSection()
        .verifySkillsSection()
        .verifyProjectsSection()
        .verifyCertificationsSection()
        .verifyContactSection()
        .verifyFooter();
    return this;
  }

  /**
   * Memastikan bahwa tema warna (Terang/Gelap) telah diterapkan dengan benar pada elemen root HTML.
   * @param {string} theme - Pilihan tema yang diharapkan ('light' atau 'dark').
   * @returns {PortfolioPage} Menjaga konsistensi estetika aplikasi sesuai preferensi pengguna.
   */
  verifyTheme(theme) {
    cy.get('html').should('have.class', theme);
    return this;
  }

  /**
   * Melakukan validasi terhadap tautan eksternal untuk memastikan ia terbuka di tab baru dan menuju domain yang benar.
   * @param {string} selector - Selector CSS dari tautan yang akan diuji.
   * @param {string} expectedUrl - Potongan alamat URL yang diharapkan sebagai destinasi.
   * @returns {PortfolioPage} Menjamin tautan rujukan pihak ketiga bekerja dengan aman.
   */
  verifyExternalLink(selector, expectedUrl) {
    this.getElement(selector)
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href')
      .and('include', expectedUrl);
    return this;
  }
}

export default PortfolioPage;
