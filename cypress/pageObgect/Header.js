import SaucelabsPage from "./SaucelabsPage";
import StartPage from "./StartPage";
import CartPage from "./CartPage";

class Header {
    //elements
    getHeaderLogo = () => cy.get('.app_logo');
    getBurgerMenu = () => cy.get('.bm-burger-button');
    getBurgerMenuLogo = () => cy.get('.bm-burger-button img');
    getSidebarMenu = () => cy.get('.bm-menu-wrap');
    getSidebarList = () => cy.get('.bm-item-list a');
    getAboutSidebarLink = () => cy.get('#about_sidebar_link');
    getLogoutSidebarLink = () => cy.get('#logout_sidebar_link');
    getSidebarCrossBtn = () => cy.get('#react-burger-cross-btn');
    getCartLink = () => cy.get('.shopping_cart_link');

    //methods
    clickBurgerMenu() {
        this.getBurgerMenu().click();
        return this;
    }

    clickAboutSidebarLink() {
        this.getAboutSidebarLink().click({force: true});
        return SaucelabsPage;
    }

    clickLogoutSidebarLink() {
        this.getLogoutSidebarLink().click({force : true}); 
        return StartPage;
    }

    clickSidebarCrossBtn() {
        this.getSidebarCrossBtn().click({force: true});
        return this;
    }

    clickCartLink(){
        this.getCartLink().click();
        return CartPage;
    }
    
}
export default Header