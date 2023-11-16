/// <reference types = "Cypress">

import StartPage from "../pageObgect/StartPage";
import startData from "../fixtures/startData.json";

const startPage = new StartPage();

describe('Start page with login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })

    it('AT_01.01.01 | Verify that start page has header "Swag Labs', () => {

        startPage.getMainHeader()
            .should('be.visible')
            .and('have.text', startData.mainHeader);
    });

    it('AT_01.01.02 | Verify that user name input field is visible and has placeholder "Username"', () => {
        startPage.getUsernameInputField()
            .should('be.visible')
            .and('have.attr', 'placeholder', startData.userNameInputFieldPlaceholder);
    })

    it('AT_01.01.03 | Verify that password input field is visible and has placeholder "Password"', () => {
        startPage.getPasswordInputField()
            .should('be.visible')
            .and('have.attr', 'placeholder', startData.passwordInputFieldPlaceholder);
    })   
    
    it('AT_01.01.04 | Verify that login button is visible and has text "Login"', () => {
        startPage.getLoginBtn()
        .should('be.visible')
        .and('have.value', startData.textBtn)
    })

    it('AT_01.01.05 | Verify that login button color is rgb(19, 35, 34) and background-color is rgb(61, 220, 145)', () => {
        startPage.getLoginBtn()
        .should('have.css', 'color', startData.colorBtn)
        .and('have.css', 'background-color', startData.backgroundColorBtn)
    })

    it('AT_01.01.06 | Verify that usernames header is visible and has text "Accepted usernames are:"', () => {
        startPage.getUsernamesListHeader()
            .should('be.visible')
            .and('have.text', startData.namesHeader)
    })

    it('AT_01.01.07 | Verify that password header is visible and has text "Password for all users:"', () => {
        startPage.getPasswordHeader()
            .should('be.visible')
            .and('have.text', startData.passwordHeader)
    })

});