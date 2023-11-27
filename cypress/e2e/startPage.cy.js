/// <reference types = "Cypress"/>

import StartPage from "../pageObgect/StartPage";
import startData from "../fixtures/startData.json";
import ProductPage from "../pageObgect/ProductPage";
import productData from "../fixtures/productData.json";

const startPage = new StartPage();
const productPage = new ProductPage();

describe('Start page login UI', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })

    it('AT_01.01.01 | Verify that start page has header "Swag Labs"', () => {

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

    startData.userNames.forEach((el, idx) => {
        it(`AT_01.01.08 | Verify that the ${el} from list of the users matches ${el}`, () => {
            startPage.getUsernamesArray(idx).then($name => {

                expect($name).equal(startData.userNames[idx]);
            })
        })
    })

    it('AT_01.01.09 | Verify that the password is "secret_sauce"', () => {
        startPage.getPassword().then($el => {

            expect($el).equal(startData.password);
        })
    })
})

describe('Start page (login) Positive Functional and E2E tests', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })

    it('AT_01.02.01 | Type the name into the username input field and verify this field will get a value equalled the name', () => {
        startPage.getUsernameInputField().should('have.attr', 'value', "");
        startPage.getUsernameInputField().type(startData.userNames[0]);

        startPage.getUsernameInputField().should('have.attr', 'value', startData.userNames[0])
    })

    it('AT_01.02.02 | Type the password into the password input field and verify this field will get a value equaled the password', () => {
        startPage.getPasswordInputField().should('have.attr', 'value', "");
        startPage.getPasswordInputField().type(startData.password);

        startPage.getPasswordInputField().should('have.attr', 'value', startData.password)
    })

    it('AT_01.02.03 | login "standard user" and verify that the site is opened on the product page', () => {
        startPage.getUsernameInputField().type(startData.userNames[0]);
        startPage.getPasswordInputField().type(startData.password);
        startPage.clickLoginBtn();

        cy.url().should('be.eq', productData.url)
        productPage.getMainHeader().should('have.text', productData.mainHeader);
    })

    it('AT_01.02.04 | login "locked out" user and verify error message', () => {
        startPage.getUsernameInputField().type(startData.userNames[1]);
        startPage.getPasswordInputField().type(startData.password);
        startPage.clickLoginBtn();

        startPage.getErrorMessage().should('have.text', startData.lockesOutErrorMessage);
    })

    it('AT_01.02.05 | login "locked out" user and verify that the user can close error massage', () => {
        startPage
            .typeUsernameToInputField(startData.userNames[1])
            .typePassordToInputField(startData.password)
            .clickLoginBtn()
            .getErrorMessage().should('be.visible');

        startPage
            .clickCrossOnErrorMessage()
            .getErrorMessage().should('not.exist');
    })

    it('AT_01.02.06 | login "problem user" user and verify user get Product page but each product has the same picture', () => {
        startPage
            .typeUsernameToInputField(startData.userNames[2])
            .typePassordToInputField(startData.password)
            .clickLoginBtn();

        productPage.getMainHeader().should('have.text', productData.mainHeader);

        productPage.getAllItemsPictures().each($el => {
            cy.wrap($el).should('have.attr', 'src', productData.problemUserPicture);
        })
    })

    it('AT_01.02.07 | login "performance_glitch_user" user and verify user transferred to Product page', () => {
        startPage
            .typeUsernameToInputField(startData.userNames[3])
            .typePassordToInputField(startData.password)
            .clickLoginBtn();

        cy.url().should('be.eq', productData.url)    
        productPage.getMainHeader().should('have.text', productData.mainHeader);
    })

    it('AT_01.02.08 | login "error_user" user and verify user transferred to Product page', () => {
        startPage
            .typeUsernameToInputField(startData.userNames[4])
            .typePassordToInputField(startData.password)
            .clickLoginBtn();

        cy.url().should('be.eq', productData.url)    
        productPage.getMainHeader().should('have.text', productData.mainHeader);
    })

    it('AT_01.02.09 | login "visual_user" user and verify user transferred to Product page', () => {
        startPage
            .typeUsernameToInputField(startData.userNames[5])
            .typePassordToInputField(startData.password)
            .clickLoginBtn();

        cy.url().should('be.eq', productData.url)    
        productPage.getMainHeader().should('have.text', productData.mainHeader);
    })
})

describe('Start page (login) - Negative scenarios', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })

    it('AT_01.03.01 | Verify that the User cannot login without password', () => {
        startPage
            .typeUsernameToInputField(startData.userNames[0])
            .clickLoginBtn();

        startPage.getErrorMessage().should('have.text', startData.loginWithoutPasswordErrorMessage)
    });

    it('AT_01.03.02 | Login without password and verify that the user can close error massage', () => {
        startPage
            .typeUsernameToInputField(startData.userNames[0])
            .clickLoginBtn()
            .getErrorMessage().should('be.visible');

        startPage
            .clickCrossOnErrorMessage()
            .getErrorMessage().should('not.exist');
    })

    it('AT_01.03.03 | Verify that the user cannot Login without username', () => {
        startPage
            .typePassordToInputField(startData.password)
            .clickLoginBtn()

            .getErrorMessage().should('have.text', startData.loginWithoutUsernameErrorMessage);
    })

    it('AT_01.03.04 | login without username and verify that the user can close error massage', () => {
        startPage
            .typePassordToInputField(startData.password)
            .clickLoginBtn()
            .getErrorMessage().should('be.visible');
        startPage
            .clickCrossOnErrorMessage()

            .getErrorMessage().should('not.exist');
    })
})
