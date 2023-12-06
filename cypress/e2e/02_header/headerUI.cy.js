/// <reference types = "Cypress" />

import StartPage from "../../pageObgect/StartPage"
import startData from "../../fixtures/startData.json";
import Header from "../../pageObgect/Header";
import headerData from "../../fixtures/headerData.json";
import CartPage from "../../pageObgect/CartPage";

const startPage = new StartPage();
const header = new Header();
const cartPage = new CartPage();

describe('Header UI and functionality', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        startPage
            .typeUsernameToInputField(startData.userNames[0])
            .typePassordToInputField(startData.password)
            .clickLoginBtn();
    })

    it('AT_02.01.01 | Product page > Verify logo is "Swag Labs', () => {
        header.getHeaderLogo().should('have.text', headerData.logo);
    })

    it('AT_02.01.02 | Product page > Verify burger menu logo is visible and has required image', () => {
        header
            .getBurgerMenuLogo().should('be.visible')
            .and('have.attr', "srcset", headerData.burgerPicture_srcset);
    })

    it('AT_02.01.03 | Product page > Verify that burger menu is clickable', () => {
        header
            .getSidebarMenu().should('not.be.visible')
            .and('have.attr', 'aria-hidden', 'true');
        header
            .clickBurgerMenu()
            .getSidebarMenu().should('be.visible')
            .and('have.attr', 'aria-hidden', 'false')
    })

    it('AT_02.01.04 | Product page > Verify shopping cart is visible and has required image', () => {
        header.getCartLink().should('be.visible')
            .and('have.css', 'height', headerData.cartCSSHeight)
            .and('have.css', 'width', headerData.cartCSSWidth);
    })

    it('AT_02.01.05 | Cart page >  Verify logo is "Swag Labs', () => {
        header.clickCartLink()
        header.getHeaderLogo().should('have.text', headerData.logo);
    })

});