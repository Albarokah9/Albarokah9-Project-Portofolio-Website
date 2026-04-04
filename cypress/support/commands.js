// ***********************************************
// Custom Commands for Project Portfolio
// ***********************************************

// === CUSTOM SELECTOR COMMANDS ===

/**
 * Mencari elemen berdasarkan atribut 'data-cy' yang spesifik untuk menjamin stabilitas pengujian.
 * @param {string} selector - Nilai dari atribut data-cy yang ingin dicari.
 * @example cy.getBySel('submit-btn')
 */
Cypress.Commands.add('getBySel', (selector, ...args) => {
    return cy.get(`[data-cy=${selector}]`, ...args)
})

/**
 * Mencari elemen yang memiliki atribut 'data-cy' yang mengandung potongan teks tertentu.
 * @param {string} selector - Potongan teks di dalam atribut data-cy.
 * @example cy.getBySelLike('submit')
 */
Cypress.Commands.add('getBySelLike', (selector, ...args) => {
    return cy.get(`[data-cy*=${selector}]`, ...args)
})

// === ASSERTION COMMANDS ===

/**
 * Memastikan bahwa elemen yang dituju benar-benar terlihat oleh pengguna di layar.
 * @param {string} selector - Selector CSS elemen yang ingin divalidasi.
 */
Cypress.Commands.add('isVisible', (selector) => {
    cy.get(selector).should('be.visible')
})