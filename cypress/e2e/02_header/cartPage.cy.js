/// <reference types = "Cypress" />

import startData from "../../fixtures/startData.json";
import StartPage from "../../pageObgect/StartPage";
import Header from "../../pageObgect/Header";
import CartPage from "../../pageObgect/CartPage";
import cartData from "../../fixtures/cartData.json";

const startPage = new StartPage();
const header = new Header();
const catrPage = new CartPage();

describe('Cart page UI and functionality', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        startPage
            .typeUsernameToInputField(startData.userNames[0])
            .typePassordToInputField(startData.password)
            .clickLoginBtn();
        header.clickCartLink();    
    })

    it('AT_02.03.01 | Verify secondary header has text "Your Cart"', () => {
        catrPage.getSecondaryHeader().should('have.text', cartData.secondHeader);
    })
    
    it('AT_02.03.02 | Verify quantity label', ()=> {
        catrPage.getQuantityLabel().should('have.text', cartData.quantityLabel)
    })

    it('AT_02.03.03 | Verify description label', () => {
        catrPage.getDescriptionLabel().should('have.text', cartData.descriptionLabel)
    }) 
});