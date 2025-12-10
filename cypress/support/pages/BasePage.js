/**
 * BasePage - Parent class untuk semua Page Objects
 * Berisi common methods yang digunakan di semua pages
 */
class BasePage {
    /**
     * Visit a URL
     * @param {string} url - URL to visit (relative to baseUrl)
     */
    visit(url = '/') {
        cy.visit(url);
        return this;
    }

    /**
     * Get element by selector
     * @param {string} selector - CSS selector
     */
    getElement(selector) {
        return cy.get(selector);
    }

    /**
     * Click element
     * @param {string} selector - CSS selector
     */
    click(selector) {
        this.getElement(selector).click();
        return this;
    }

    /**
     * Type text into input
     * @param {string} selector - CSS selector
     * @param {string} text - Text to type
     */
    type(selector, text) {
        this.getElement(selector).clear().type(text);
        return this;
    }

    /**
     * Check if element is visible
     * @param {string} selector - CSS selector
     */
    shouldBeVisible(selector) {
        this.getElement(selector).should('be.visible');
        return this;
    }

    /**
     * Check if element contains text
     * @param {string} selector - CSS selector
     * @param {string} text - Expected text
     */
    shouldContainText(selector, text) {
        this.getElement(selector).should('contain', text);
        return this;
    }

    /**
     * Check if element has attribute
     * @param {string} selector - CSS selector
     * @param {string} attr - Attribute name
     * @param {string} value - Expected value
     */
    shouldHaveAttribute(selector, attr, value) {
        this.getElement(selector).should('have.attr', attr, value);
        return this;
    }

    /**
     * Scroll to element
     * @param {string} selector - CSS selector
     */
    scrollTo(selector) {
        this.getElement(selector).scrollIntoView();
        return this;
    }

    /**
     * Wait for element to exist
     * @param {string} selector - CSS selector
     * @param {number} timeout - Timeout in ms
     */
    waitForElement(selector, timeout = 10000) {
        cy.get(selector, { timeout }).should('exist');
        return this;
    }

    /**
     * Get URL
     */
    getUrl() {
        return cy.url();
    }

    /**
     * Verify URL contains text
     * @param {string} text - Expected text in URL
     */
    urlShouldContain(text) {
        cy.url().should('include', text);
        return this;
    }

    /**
     * Take screenshot
     * @param {string} name - Screenshot name
     */
    screenshot(name) {
        cy.screenshot(name);
        return this;
    }

    /**
     * Wait for page load
     */
    waitForPageLoad() {
        cy.document().should('have.property', 'readyState', 'complete');
        return this;
    }
}

export default BasePage;
