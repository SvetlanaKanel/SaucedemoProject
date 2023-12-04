import SaucelabsPage from "./SaucelabsPage";
import StartPage from "./StartPage";

class ProductPage {   
    //elements
    getMainHeader = () => cy.get('.title');
    getAllItemsPictures = () => cy.get('.inventory_item img');


    //methods
 
}
export default ProductPage;