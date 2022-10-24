export const locator = {
   priceValue: '.cart_unit > .price > span',
   quantityValue : '.cart_quantity_input',
   totalPriceValue : '#total_price'
}

export function getPrice(){
    cy.get(locator.priceValue)
    .invoke('text')
    .as('price2')
    .then((price2)=>{
       cy.log('price before conversion = '+price2)
   })    
}

export function getQuantity(){
    cy.get(locator.quantityValue)
    .invoke('val')
    .as('quantity')
    .then(($quantity) =>{
        cy.log('quantity before conversion = '+$quantity)
    })
}

export function calculateTotal(){
    const shipping = require ('../fixtures/data.json')

    cy.get('@price2').then(($unitPrice)=>{
        const priceNum = parseFloat($unitPrice.substring(1))

        cy.log('price after conversion = '+priceNum)

        cy.get('@quantity').then(($quantity)=>{

            const quanNum = parseFloat($quantity)
            cy.log('quantity after conversion = '+quanNum)

            const total = (priceNum * quanNum) + shipping['flat fee']
            cy.log('total including shipping = ' +total)
            cy.wrap(total).as('calcTotal')
        })
    })
}

export function validateTotal(){    
    cy.get(locator.totalPriceValue)
    .invoke('text')
    .then(($total)=>{
        const totalNum = parseFloat($total.substring(1)) 
        cy.log(totalNum)

        cy.get('@calcTotal').then(($calcTotal)=>{                
            cy.log($calcTotal)            
            expect(totalNum).to.equal($calcTotal)
            cy.screenshot()        
        })
    })
}