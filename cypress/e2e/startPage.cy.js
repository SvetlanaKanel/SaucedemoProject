/// <reference types = "Cypress">

import StartPage from "../pageObgect/StartPage";

const startPage = new StartPage();

describe('Start page woth login', () => {
    it('Verify that start page has header "Swag Labs', () => {
        cy.visit('https://www.saucedemo.com/');
        
        startPage.getMainHeader().should('have.text', "Swag Labs");        
    });
});