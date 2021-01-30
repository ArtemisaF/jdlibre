describe('My first Cypress Test',()=>{
    it('Mi tienda y sus Test',()=>{
        cy.visit('http://localhost:8080/')
        cy.get('form-control form-control-lg').type('iPhone {enter}')
        cy.contains('iPad').click( )

     })
     
 })