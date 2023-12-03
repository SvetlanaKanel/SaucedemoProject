/// <reference types = "Cypress" />

import StartPage from "../../pageObgect/StartPage";
import startData from "../../fixtures/startData.json";
import ProductPage from "../../pageObgect/ProductPage";
import productData from "../../fixtures/productData.json";
import SaucelabsPage from "../../pageObgect/SaucelabsPage";
import saucelabsData from "../../fixtures/saucelabsData.json";

const startPage = new StartPage();
const productPage = new ProductPage();
const saucelabsPage = new SaucelabsPage();

describe('Product page UI', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        startPage
            .typeUsernameToInputField(startData.userNames[0])
            .typePassordToInputField(startData.password)
            .clickLoginBtn();
    })

});
