/// <reference types="cypress" />
describe('App should load', () => {
  it('passes', () => {
    cy.visit('/')
  })
})