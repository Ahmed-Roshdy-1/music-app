// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it(' Sanity Test', () => {
    cy.visit('/')
    cy.contains('#header a:first-child', 'Music')
  })
})
