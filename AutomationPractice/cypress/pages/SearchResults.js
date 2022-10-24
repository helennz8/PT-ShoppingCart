export const locator =  {
    listViewIcon : '#list',
    sortByList : '#selectProductSort',
    productDetailsLink : '#center_column > ul> li'
}

export function changeView(){
    cy.get(locator.listViewIcon)
    .click()
}

export function sortItem(sort){
    switch(sort){
    case "Price: Lowest first":
        cy.get(locator.sortByList)
        .select('price:asc')
    break;
    case "Price: Highest first":
        cy.get(locator.sortByList)
        .select('price:desc')
    break;
    case "Product Name: A to Z":
        cy.get(locator.sortByList)
        .select('name:asc')
    break;
    case "Product Name: Z to A":
        cy.get(locator.sortByList)
        .select('name:desc')
    break;
    case "In stock":
        cy.get(locator.sortByList)
        .select('quantity:desc')
    break;
    default:
        cy.get(locator.sortByList)
        .select('price:asc')
    }
}

export function selectFirstItem(){
    cy.get(locator.productDetailsLink)
    .first()
    .within(($list) => {
        cy.get('.product-name')
        .click()
    })
}