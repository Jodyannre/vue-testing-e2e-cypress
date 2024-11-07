// https://docs.cypress.io/api/table-of-contents

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js + TypeScript App')
  })
})

describe('Counter feature', ()=> {
  it('User can visit the page', ()=>{
    cy.visit('/')
    cy.contains('h1', 'Counter App')
  })

  it('User can increment the counter', ()=>{
    cy.visit('/')
    cy.get('#counter-info').contains('0')
    cy.contains('button', 'Increment').click()
  })
})


/*
describe('Test Name', () => {
  // Test execution
  it ('Test description', () => {
    // Step execution
  })
})
*/
// Algunso metodos con cy
// cy.visit() //Visitar una URL
// cy.get('.clase') //Seleccionar un elemento
// cy.get('#id') //Seleccionar un elemento por su id
// cy.get('[atributo=valor]') //Seleccionar un elemento por su atributo
// cy.contains() //Seleccionar un elemento por su contenido
// cy.url() //Obtener la URL actual
// cy.should() //Verificar que un elemento cumple con una condición
// Comprobación de proposito general sobre un elemento especifico con should
// cy.should('have.class', 'color', 'red') //Verificar que un elemento tiene una clase
// cy.request('POST', url, {options}) //Realizar una petición HTTP
// cy.click() //Hacer click en un elemento
// cy.type() //Escribir texto en un input
