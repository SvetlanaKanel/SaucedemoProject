/// <reference types = "Cypress">

import StartPage from "../pageObgect/StartPage";
import startData from "../fixtures/startData.json";

const startPage = new StartPage();

describe('Start page woth login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })

    it('Verify that start page has header "Swag Labs', () => {        

        startPage.getMainHeader().should('be.visible')
            .and('have.text', startData.mainHeader);
    });

    it('Verify that user name input field is visible and has placeholder "Username"', () => {
        startPage.getUsernameInputField().should('be.visible')
        .and('have.attr', 'placeholder', startData.userNameInputFieldPlaceholder);
    })

    it('Verify that password input field is visible and has placeholder "Password"', () => {
        startPage.getPasswordInputField().should('be.visible')
        .and('have.attr', 'placeholder', startData.passwordInputFieldPlaceholder);
    })
});