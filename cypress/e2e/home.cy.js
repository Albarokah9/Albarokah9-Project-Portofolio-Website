describe('Portfolio Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/');
        cy.contains('QA.Portfolio');
        cy.contains('Ensuring Quality');
        cy.get('.project-card').should('have.length.at.least', 1);
    });
});
