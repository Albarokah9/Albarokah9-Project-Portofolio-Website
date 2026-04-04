/**
 * @class BasePage
 * 
 * Halaman dasar (Parent Class) yang menyediakan pondasi utama untuk seluruh Page Objects.
 * Berisi sekumpulan perintah umum yang sering digunakan agar penulisan skrip testing 
 * menjadi lebih efisien, rapi, dan mudah dirawat.
 */
class BasePage {
    /**
     * Membuka halaman website tertentu sesuai dengan URL yang diberikan agar kita bisa mulai berinteraksi dengan elemen di dalamnya.
     * @param {string} url - Alamat URL tujuan (relatif terhadap baseUrl).
     * @returns {BasePage} Mengembalikan instance class ini untuk mendukung method chaining yang cantik.
     */
    visit(url = '/') {
        cy.visit(url);
        return this;
    }

    /**
     * Mengambil elemen dari halaman web menggunakan selector CSS yang spesifik.
     * @param {string} selector - Selector CSS untuk membidik elemen yang diinginkan.
     * @returns {Cypress.Chainable} Mengembalikan objek Cypress agar bisa diproses lebih lanjut (misal: klik atau ketik).
     */
    getElement(selector) {
        // Menggunakan standar cy.get, namun logika yang lebih kompleks bisa saja menggunakan cy.getBySel jika diperlukan.
        return cy.get(selector);
    }

    /**
     * Melakukan tindakan klik pada elemen yang telah dipilih untuk memicu aksi tertentu pada antarmuka.
     * @param {string} selector - Selector CSS elemen yang akan diklik.
     * @returns {BasePage} Mengembalikan instance class ini agar proses pengetesan bisa dilanjutkan dalam satu baris perintah.
     */
    click(selector) {
        this.getElement(selector).click();
        return this;
    }

    /**
     * Mengisi kolom input dengan teks tertentu setelah sebelumnya membersihkan isi kolom tersebut agar data yang dimasukkan akurat.
     * @param {string} selector - Selector CSS kolom input tujuan.
     * @param {string} text - Untaian teks yang ingin kita masukkan ke dalam kolom.
     * @returns {BasePage} Mendukung penggunaan method chaining untuk alur testing yang lebih mengalir.
     */
    type(selector, text) {
        this.getElement(selector).clear().type(text);
        return this;
    }

    /**
     * Memastikan bahwa elemen yang kita tuju benar-benar muncul dan dapat dilihat oleh pengguna di layar.
     * @param {string} selector - Selector CSS elemen yang ingin divalidasi visibilitasnya.
     * @returns {BasePage} Mempermudah proses pengecekan berantai dalam satu skrip.
     */
    shouldBeVisible(selector) {
        this.getElement(selector).should('be.visible');
        return this;
    }

    /**
     * Memeriksa apakah suatu elemen mengandung potongan teks tertentu untuk memvalidasi informasi yang ditampilkan.
     * @param {string} selector - Selector CSS elemen yang akan diperiksa isinya.
     * @param {string} text - Teks yang diharapkan muncul di dalam elemen tersebut.
     * @returns {BasePage} Menjaga alur testing tetap sinkron dan mudah dibaca.
     */
    shouldContainText(selector, text) {
        this.getElement(selector).should('contain', text);
        return this;
    }

    /**
     * Validasi atribut pada sebuah elemen (seperti 'href' atau 'class') untuk memastikan konfigurasi elemen sudah tepat.
     * @param {string} selector - Selector CSS elemen target.
     * @param {string} attr - Nama atribut yang ingin diperiksa (misal: 'src').
     * @param {string} value - Nilai atribut yang kita harapkan.
     * @returns {BasePage} Memungkinkan pengecekan atribut secara beruntun.
     */
    shouldHaveAttribute(selector, attr, value) {
        this.getElement(selector).should('have.attr', attr, value);
        return this;
    }

    /**
     * Menggulir tampilan layar (scrolling) hingga elemen yang dimaksud terlihat dengan jelas dalam area pandang.
     * @param {string} selector - Selector CSS elemen tujuan scrolling.
     * @returns {BasePage} Membantu navigasi antar bagian halaman dengan mulus.
     */
    scrollTo(selector) {
        this.getElement(selector).scrollIntoView();
        return this;
    }

    /**
     * Menunggu hingga elemen tertentu muncul di dalam DOM (Document Object Model) sebelum melanjutkan ke langkah berikutnya.
     * @param {string} selector - Selector CSS elemen yang kita tunggu kehadirannya.
     * @param {number} timeout - Batas waktu tunggu maksimal dalam milidetik (default: 10 detik).
     * @returns {BasePage} Memberikan kepastian bahwa elemen sudah siap sebelum diinteraksi.
     */
    waitForElement(selector, timeout = 10000) {
        cy.get(selector, { timeout }).should('exist');
        return this;
    }

    /**
     * Mengambil URL halaman yang saat ini sedang aktif untuk keperluan validasi navigasi.
     * @returns {Cypress.Chainable<string>} Mengembalikan URL aktif dalam format string.
     */
    getUrl() {
        return cy.url();
    }

    /**
     * Memastikan URL saat ini mengandung potongan kata atau alamat tertentu sebagai tanda navigasi berhasil.
     * @param {string} text - Potongan teks yang harus ada di dalam URL.
     * @returns {BasePage} Membuat validasi alur perpindahan halaman jadi lebih praktis.
     */
    urlShouldContain(text) {
        cy.url().should('include', text);
        return this;
    }

    /**
     * Mengabadikan tampilan layar saat ini dalam bentuk gambar (screenshot) untuk keperluan dokumentasi atau analisa saat terjadi kegagalan.
     * @param {string} name - Nama file gambar yang akan disimpan.
     * @returns {BasePage} Mendukung pencatatan visual di setiap langkah krusial.
     */
    screenshot(name) {
        cy.screenshot(name);
        return this;
    }

    /**
     * Memastikan seluruh dokumen web telah dimuat dengan sempurna oleh peramban sebelum melakukan aksi apa pun.
     * @returns {BasePage} Menjamin stabilitas testing agar tidak terburu-buru saat halaman masih memuat data.
     */
    waitForPageLoad() {
        cy.document().should('have.property', 'readyState', 'complete');
        return this;
    }
}

export default BasePage;

