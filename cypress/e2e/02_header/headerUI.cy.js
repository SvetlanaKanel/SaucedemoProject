/// <reference types = "Cypress" />

import StartPage from "../../pageObgect/StartPage"
import startData from "../../fixtures/startData.json";
import ProductPage from "../../pageObgect/ProductPage";
import productData from "../../fixtures/productData.json";

const startPage = new StartPage();
const productPage = new ProductPage();

describe('Header UI', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        startPage
            .typeUsernameToInputField(startData.userNames[0])
            .typePassordToInputField(startData.password)
            .clickLoginBtn();
    })

    it('AT_02.01.01 | Product page > Verify logo is "Swag Labs', () => {
        productPage.getHeaderLogo().should('have.text', productData.logo);
    })

    it('AT_02.01.02 | Product page > Verify burger menu logo is visible and has required image', () => {
        productPage
            .getBurgerMenuLogo().should('be.visible')
            .and('have.attr', "srcset", productData.burgerPicture_srcset);
    })

    it('AT_02.01.03 | Product page > Verify shopping cart is visible and has required image', () => {
        productPage.getCartLink().should('be.visible')
        .and('have.css', 'height', '40px')
        .and('have.css', 'width', '40px')
    })

});