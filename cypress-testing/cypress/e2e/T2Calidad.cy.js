describe('Home', () => {
    it('Home Page', () =>{
        cy.visit(Cypress.env('biblioteca'))
        cy.get('#agregarBiblioteca').click()

        //cy.get('#errorText').next().should('have.value','loginForm')
    })
})

describe('Login', () => {
    it('Visit Login', () =>{
        cy.visit(Cypress.env('base_url'))
        // codigo para agregar al usuario
        cy.get('input[name="Username"]').type('admin', {delay:150}).should('have.value','admin')
        
        cy.get('input[name="Password"]').type('admin')

        cy.get('#buttonIS').click()

    })
    it('Agregar Libro',() => {
        cy.visit(Cypress.env('biblioteca'))
        cy.get('#agregarBiblioteca').click()
    })
})

describe('Detalles Libro', () => {
    it('Agregar Comentario', () =>{
        cy.visit(Cypress.env('comentario'))

        
        cy.scrollTo(0, 1200) // Scroll the window 500px down

        //cy.get('.form-group').type('Muy buen libro.', {delay:150})
        cy.get('.form-control').type('Muy buen libro.', {delay:150})
        cy.get('input[name="Puntaje"]').type('5', {delay:150})
        
    })
})

describe('Mi Biblioteca', () => {
    it('Libro Terminado', () =>{
        cy.visit(Cypress.env('miBiblioteca'))

        cy.get('input[name="Username"]').type('admin', {delay:150}).should('have.value','admin')
        
        cy.get('input[name="Password"]').type('admin')

        cy.get('#buttonIS').click()
    })
})

