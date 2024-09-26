/// <reference types= "cypress" />

describe ('Saucedemo login form', () => {
   beforeEach ( () => {
        cy.visit ('https://www.saucedemo.com/');
     });
it('Username field verifying - error when field is empty', () => {
    cy.get('[data-test="password"]').type('svsvfs');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('have.text','Epic sadface: Username is required');

});
it('Password field verifying- error when field is empty', () => {
    cy.get('[data-test="username"]').type('svsvfs',{delay:500});
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('have.text','Epic sadface: Password is required');

});
it('Form verifying- error when password or username is incorrect', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('svsvfvsfs');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service');

});
it('Key test', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('svsvfvsfs {enter}'); 
    cy.get('[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service');

});

})