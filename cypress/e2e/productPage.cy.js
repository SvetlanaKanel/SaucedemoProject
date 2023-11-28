/// <reference types = "Cypress" />

import StartPage from "../pageObgect/StartPage";
import startData from "../fixtures/startData.json";
import ProductPage from "../pageObgect/ProductPage";
import productData from "../fixtures/productData.json";

const startPage = new StartPage();
const productPage = new ProductPage();

describe('Product page UI', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        startPage
            .typeUsernameToInputField(startData.userNames[0])
            .typePassordToInputField(startData.password)
            .clickLoginBtn();
    })

    it('AT_02.01.01 | Verify that page has logo "Swag Labs', () => {
        productPage.getLogo().should('have.text', productData.logo);
    })

    it('AT_02.01.02 | Verify burger menu is visible and has required image', () => {
        productPage
            .getBurgerMenu().should('be.visible')
            .and('have.attr', "srcset", productData.burgerPicture_srcset);
    })

    it('AT_02.01.03 | Click on burger menu and verify all links are visible and have right name', () => {
        productPage
            .clickBurgerMenu()
            .getBurgerMenuList().each(($el, idx) => {
                cy.wrap($el).should('have.text', productData.burgerMenuList[idx])
            })
    });


});
