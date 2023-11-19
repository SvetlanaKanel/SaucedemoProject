class StartPage {
    //elements
    getMainHeader = () => cy.get('.login_logo');
    getUsernameInputField = () => cy.get('#user-name');
    getPasswordInputField = () => cy.get('#password');
    getLoginBtn = () => cy.get('#login-button');
    getUsernamesListHeader = () => cy.get('#login_credentials h4');
    getPasswordHeader = () => cy.get('.login_password h4');
    getUsernamesListString = () => cy.get('#login_credentials')


    //methods
    //this method froms Array of usernames from usernames string and returns the name by the index
    getUsernamesArray(idx) {
        return this.getUsernamesListString().then($str => {
            let usernamesArray = $str.text().split(':');            
            let newUsernamesArray = usernamesArray[1].split('user').map(el => el + "user");
            newUsernamesArray.pop();

            return newUsernamesArray[idx];
        })
    }
}
export default StartPage