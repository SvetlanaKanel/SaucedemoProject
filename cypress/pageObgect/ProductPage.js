class ProductPage {
    //elements
    getMainHeader = () => cy.get('.title');
    getAllItemsPictures = () => cy.get('.inventory_item img');
    getLogo = () => cy.get('.app_logo');
    getBurgerMenu = () => cy.get('.bm-burger-button img');


    //methods
}
export default ProductPage;