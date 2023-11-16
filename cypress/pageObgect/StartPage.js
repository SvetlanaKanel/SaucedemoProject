class StartPage {
    //elements
    getMainHeader = () => cy.get('.login_logo');
    getUsernameInputField = () => cy.get('#user-name');
    getPasswordInputField = () => cy.get('#password');
    getLoginBtn = () => cy.get('#login-button');
    getUsernamesListHeader = () => cy.get('#login_credentials h4');
    getPasswordHeader = () => cy.get('.login_password h4');


    //methods
}
export default StartPage