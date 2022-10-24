///<reference types="cypress"/>

import * as index from '../pages/Index'
import * as search from '../pages/SearchResults'
import * as product from '../pages/ProductDetails'
import * as cart from '../pages/ShoppingCart'


describe('Add Item to Shopping Cart', () => {

  beforeEach(() => {
    //1. Navigate to http://automationpractice.com/
    cy.visit('http://automationpractice.com/')
  
  })

  it('Add cheapest Printed Summer Dress', () => {
    //2. Search for ‘Printed Summer Dress’
    index.productSearch('Printed Summer Dress')
    //index.productSearch('blouse')

    //3. Select the cheapest dress
    search.sortItem('Price: Lowest first')
    search.selectFirstItem()

    //4. Change the Quantity from 1 to 2
    product.changeQuantity(2)

    //5. Change the Size from S to M
    product.selectSize('M')

    //6. Change the colour from Yellow to Green
    product.selectColour('Green')

    //8. Select “Proceed to Checkout”
    product.addToCart()
    product.proceedToCart()
    
    //9. Assert that the price equals $34.80
    cart.getPrice()
    cart.getQuantity()
    cart.calculateTotal()
    cart.validateTotal()

  })


  it('Add first Printed Summer Dress', () => {
    index.productSearch('Printed Summer Dress')
    search.changeView()
    search.selectFirstItem()
    product.changeQuantity(3)
    product.selectSize('L')
    product.selectColour('Black')
    product.addToCart()
    product.proceedToCart()
    cart.getPrice()
    cart.getQuantity()
    cart.calculateTotal()
    cart.validateTotal()

  })

})
//pending tests
describe('Update Item In Shopping Cart', () =>{

  it('Change item size')

})
//pending tests
describe('Remove Item from Shopping Cart', ()=>{

  it('Remove last item')
})

