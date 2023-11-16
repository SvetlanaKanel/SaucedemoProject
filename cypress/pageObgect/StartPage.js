class StartPage {
    //elements
    getMainHeader = () => cy.get('.login_logo');
    getUsernameInputField = () => cy.get('#user-name');
    getPasswordInputField = () => cy.get('#password');
    getLoginBtn = () => cy.get('#login-button');


    //methods
}
export default StartPage