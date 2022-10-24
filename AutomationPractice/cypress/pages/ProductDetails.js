export const locator = {
   quantityTextBox : '#quantity_wanted',
   sizeDropDownList: '#group_1',
   greenSelectionBox : '#color_15',
   yellowSelectionBox : '#color_16',
   blackSelectionBox : '#color_11',
   addCartButton : '#add_to_cart > button',
   addCartConfirmationText : '.layer_cart_product > h2',
   checkoutButton : '.button-medium > span',
   ShoppingCartHeading : '#cart_title'
}

export function changeQuantity(qantity){
    cy.get(locator.quantityTextBox)
    .clear()
    .type(qantity)
}

export function selectSize(size){
    cy.get(locator.sizeDropDownList)
    .select(size)
}

export function selectColour(colour){
    switch(colour){
    case "Green":
        cy.get(locator.greenSelectionBox)
        .click()
    break;
    case "Yellow":
        cy.get(locator.yellowSelectionBox)
        .click()
    break;
    case "Black":
        cy.get(locator.blackSelectionBox)
        .click()
    break;
    default:
        cy.get(locator.greenSelectionBox)
        .click()
    }
}

export function addToCart(){
    cy.get(locator.addCartButton)
    .click()
    cy.get(locator.addCartConfirmationText, {timeout:10000})
    .should('contain','Product successfully added to your shopping cart') 
}

export function proceedToCart(){
    cy.get(locator.checkoutButton , {timeout:10000}).contains('Proceed to checkout')
    .click()
    cy.get(locator.ShoppingCartHeading, {timeout:10000})
    .should('contain','Shopping-cart summary')
}


