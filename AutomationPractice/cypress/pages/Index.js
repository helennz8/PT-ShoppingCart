export const locator = {
    searchTextBox : '#search_query_top',
    searchLabel : '.lighter'
}

export function productSearch(searchString){
    cy.get(locator.searchTextBox)
    .clear()
    .type(searchString+'{enter}')
    cy.get(locator.searchLabel)
    .should('contain',searchString)
}
