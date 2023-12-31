/// <reference types = "Cypress" />

import StartPage from "../../pageObgect/StartPage"
import startData from "../../fixtures/startData.json";
import Header from "../../pageObgect/Header";
import headerData from "../../fixtures/headerData.json";
import SaucelabsPage from "../../pageObgect/SaucelabsPage";
import saucelabsData from "../../fixtures/saucelabsData.json";

const startPage = new StartPage();
const header = new Header();
const saucelabsPage = new SaucelabsPage();

describe('Burger menu and sidebar', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        startPage
            .typeUsernameToInputField(startData.userNames[0])
            .typePassordToInputField(startData.password)
            .clickLoginBtn();
    })

    it('AT_02.01.01 | Click on humburger menu and verify all links are visible and have right name', () => {
        header
            .clickBurgerMenu()
            .getSidebarList().each(($el, idx) => {
                cy.wrap($el)
                    .should('be.visible')
                    .and('have.text', headerData.burgerMenuList[idx])
            })
    });

    it('AT_02.01.02 | burger menu > click on "About" sidebar link and verify it redirects on SaiceLabs site', () => {
        header
            .clickBurgerMenu()
            .clickAboutSidebarLink();

        cy.url().should('be.eq', 'https://saucelabs.com/')
        saucelabsPage.getLogo().should('have.attr', 'alt', saucelabsData.logoAltText)
    })

    it('AT_02.01.03 | burger menu > click on "Logout" sidebar link and verify it redirects on Start login page', () => {
        header
            .clickBurgerMenu()
            .clickLogoutSidebarLink();

        cy.url().should('be.eq', 'https://www.saucedemo.com/')
        startPage
            .getLoginBtn()
            .should('be.visible')
            .and('have.value', startData.textBtn);
    })

    it('AT_02.01.04 | Close sidebar and verify that the user can see the burger menu ikon', () => {
        header
            .clickBurgerMenu()
            .getSidebarMenu().should('be.visible')
            .and('have.attr', 'aria-hidden', 'false')

        header.clickSidebarCrossBtn()
            .getSidebarMenu().should('not.be.visible')
            .and('have.attr', 'aria-hidden', 'true')
        header.getBurgerMenu()
            .should('be.visible')
    })

})