describe('My first Cypress Test',()=>{
    it('Mi tienda y sus Test',()=>{
        cy.visit('http://localhost:8080/')
        cy.get('.jumbotron').get('form')
        cy.get('.form-control form-control-lg').get('input').type('iPhone {enter}')
        cy.wait(3000)

        cy.contains('iPhone').get('.btn-outline-success:first').click();
        cy.url().should('include','/producto');//ASSERT
     })
     
 })