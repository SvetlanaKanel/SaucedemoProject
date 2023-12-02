class StartPage {
    //elements
    getMainHeader = () => cy.get('.login_logo');
    getUsernameInputField = () => cy.get('#user-name');
    getPasswordInputField = () => cy.get('#password');
    getLoginBtn = () => cy.get('#login-button');
    getUsernamesListHeader = () => cy.get('#login_credentials h4');
    getPasswordHeader = () => cy.get('.login_password h4');
    getUsernamesListString = () => cy.get('#login_credentials')
    getPasswordString = () => cy.get('.login_password');
    getErrorMessage = () => cy.get('h3');
    getCrossOnErrorMessage = () => cy.get('.error-button svg');


    //methods
    //this method froms Array of usernames from usernames string and returns the name by the index
    getUsernamesArray() {
        return this.getUsernamesListString().then($str => {
            let usernamesArray = $str.text().split(':');            
            let newUsernamesArray = usernamesArray[1].split('user').map(el => el + "user");
            newUsernamesArray.pop();

            return newUsernamesArray;
        })
    }

    getPassword() {
        return this.getPasswordString().then($str => {
            let passwordArray = $str.text().split(':');
            let password = passwordArray[1];
            return password;
        })
    }

    clickLoginBtn() {
        this.getLoginBtn().click();
        return this;
    }

    typeUsernameToInputField(name) {
        this.getUsernameInputField().type(name);
        return this;
    }

    clickCrossOnErrorMessage() {
        this.getCrossOnErrorMessage().click();
        return this;
    }

    typePassordToInputField(word) {
        this.getPasswordInputField().type(word)
        return this;
    }
}
export default StartPage