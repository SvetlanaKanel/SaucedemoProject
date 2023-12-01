import SaucelabsPage from "./SaucelabsPage";
import StartPage from "./StartPage";

class ProductPage {
    //elements
    getMainHeader = () => cy.get('.title');
    getAllItemsPictures = () => cy.get('.inventory_item img');
    getLogo = () => cy.get('.app_logo');
    getBurgerMenu = () => cy.get('.bm-burger-button');
    getBurgerMenuLogo = () => cy.get('.bm-burger-button img');
    getSidebarMenu = () => cy.get('.bm-menu-wrap');
    getSidebarList = () => cy.get('.bm-item-list a');
    getAboutSidebarLink = () => cy.get('#about_sidebar_link');
    getLogoutSidebarLink = () => cy.get('#logout_sidebar_link');
    getSidebarCrossBtn = () => cy.get('#react-burger-cross-btn');


    //methods
    clickBurgerMenu() {
        this.getBurgerMenu().click()//.trigger('click');
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
}
export default ProductPage;