// ***********************************************
// Custom Commands for Project Portfolio
// ***********************************************

/**
 * Get element by data-cy attribute
 * @param {string} selector - The value of data-cy attribute
 * @example cy.getBySel('submit-btn')
 */
Cypress.Commands.add('getBySel', (selector, ...args) => {
    return cy.get(`[data-cy=${selector}]`, ...args)
})

/**
 * Get element by partial data-cy attribute
 * @param {string} selector - Partial value of data-cy attribute
 * @example cy.getBySelLike('submit')
 */
Cypress.Commands.add('getBySelLike', (selector, ...args) => {
    return cy.get(`[data-cy*=${selector}]`, ...args)
})

/**
 * Assert element is visible
 * @param {string} selector - CSS selector
 */
Cypress.Commands.add('isVisible', (selector) => {
    cy.get(selector).should('be.visible')
})