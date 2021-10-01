describe('Search for cypress.io on google', () => {
    before(() => {
        cy.visit('/')
    })
    it('Has search bar on landing page', () =>{
        cy.get('input[class="gLFyf gsfi"]').should('be.visible');
    });
    it('Shows search results for cypress', () => {
        cy.get('input[class="gLFyf gsfi"]').type('cypress.io').type('{enter}');
        cy.get('input[class="gLFyf gsfi"]').should('have.attr','value').and('contain','cypress.io');
    })
});