describe('Test suite', ()=>{
    it('Test case for e-commerce site',()=>{
        
        //login Page
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.contains('LOGIN').click()
  

        //products Page
       cy.url().should('equal','https://www.saucedemo.com/v1/inventory.html')
        cy.get('select').select(2)
        cy.get('.inventory_item').each(($el) =>{
           let things= $el.find('.inventory_item_label .inventory_item_name').text()
            if(things.includes('T-Shirt') || things.includes('Backpack')){
                cy.wrap($el).contains('ADD TO CART').click()
            }
        })
        cy.get('#shopping_cart_container').click()

        //cartPage
        cy.url().should('equal','https://www.saucedemo.com/v1/cart.html')
        cy.get('.cart_quantity').should('have.length','3')
        cy.contains('CHECKOUT').should('be.visible')
        cy.contains('CHECKOUT').click()

        //checkout Page
        cy.url().should('equal','https://www.saucedemo.com/v1/checkout-step-one.html')
        cy.get('#first-name').type('Santhosh')
        cy.get('#last-name').type('QA')
        cy.get('#postal-code').type(620008)
        cy.contains('CONTINUE').should('be.visible')
        cy.contains('CONTINUE').click()

        //checkout page2
        globalThis.sum=0
        cy.url().should('equal','https://www.saucedemo.com/v1/checkout-step-two.html')
        cy.get('.cart_item .inventory_item_price').each(($price)=>{
            let amount= $price.text()
               globalThis.sum+=Number(amount.slice(1))// 99.99
            })
            cy.then(()=>{
                cy.log('Total: ',sum)
            })
             
        globalThis.rs=0
        cy.get('.summary_subtotal_label').invoke('text').then((text)=>{
           var tag= text.split('$')
               rs=tag[1].trim()
              cy.log('Site Total price: ',rs)
              
        })

        cy.then(()=>{
            cy.log("Assertion for Total prices")
            if(sum==rs){
                cy.log('Total amount is equal')
            }else{
                cy.log('Total amount is not equal')
            }
        })
       
       
       cy.contains('FINISH').should('be.visible')
       cy.contains('FINISH').click()

        
        //greeting Page
       cy.url().should('equal','https://www.saucedemo.com/v1/checkout-complete.html')
       cy.get('.complete-header').should('include.text','THANK YOU')


    })
})