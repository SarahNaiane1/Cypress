/**
 * Feature - Describe 
 * Background  - Contexto ou beforEach
 * Caso de Teste - It 
 * Describe - Cénario de Teste
 **/

///<reference types ="Cypress"/>

describe('Login Functional Test', () => {
  it('Successful login with incorrect password and email', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.title().should('eq', 'Swag Labs');    
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should('contain', 'Products')
  })

it('Unsuccessful login with incorrect password and email', () => {
  cy.visit('https://www.saucedemo.com/')
  cy.title().should('eq', 'Swag Labs');    
  cy.get('[data-test="username"]').type('sarah_user')
  cy.get('[data-test="password"]').type('secret')
  cy.get('[data-test="login-button"]').click()
  cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
})  
it('Unsuccessful login with incorrect password', () => {
  cy.visit('https://www.saucedemo.com/')
  cy.title().should('eq', 'Swag Labs');    
  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret')
  cy.get('[data-test="login-button"]').click()
  cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
}) 
it('Unsuccessful  with incorrect login', () => {
  cy.visit('https://www.saucedemo.com/')
  cy.title().should('eq', 'Swag Labs');    
  cy.get('[data-test="username"]').type('sarah_user')
  cy.get('[data-test="password"]').type('secret')
  cy.get('[data-test="login-button"]').click()
  cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
})   
it.only('Leaving fields empty', () => {
  cy.visit('https://www.saucedemo.com/')
  cy.title().should('eq', 'Swag Labs');    
  cy.get('[data-test="login-button"]').click()
  cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required')

  

}) 

})
