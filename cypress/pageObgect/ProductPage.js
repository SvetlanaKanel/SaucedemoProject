class ProductPage {
    //elements
    getMainHeader = () => cy.get('.title');
    getAllItemsPictures = () => cy.get('.inventory_item img');
    getLogo = () => cy.get('.app_logo');
    getBurgerMenu = () => cy.get('.bm-burger-button img');
    getBurgerMenuList = () => cy.get('.bm-item-list a');


    //methods
    clickBurgerMenu() {
        this.getBurgerMenu().click( {force : true} );
        return this;
    }
}
export default ProductPage;