import LoginPage from "../POM/login.cy"
describe('Test suite', ()=>{
  let loginpage = new LoginPage()
  let data
  before(()=>{
    cy.fixture('example').then((testData)=>{
      data=testData
    })
  })

    it('Test case for e-commerce site',()=>{
        //login Page
        cy.visit('https://www.saucedemo.com/v1/')
        loginpage.typingUserName(data.username,data.password)
  
       
        
       // loginpage.typingUserName(data.username)


         //products Page
        cy.url().should('equal','https://www.saucedemo.com/v1/inventory.html')
        cy.get('select').select(2)
        cy.get('.inventory_item').each(($products)=>{
          let label=   $products.find('.inventory_item_label .inventory_item_name').text()
          if(label.includes('Backpack')){
          cy.wrap($products).contains('ADD TO CART').click()
          }
            if(label.includes('Bike Light')){
           cy.wrap($products).contains('ADD TO CART').click()
          } 
           if(label.includes('Jacket')){
           cy.wrap($products).contains('ADD TO CART').click()
          }
        })
        cy.get('#shopping_cart_container').click()

        cy.get('.cart_item').should('have.length',3)
        cy.contains('CHECKOUT').click()

        cy.get('#first-name').type('santo')
        cy.get('#last-name').type('man')
        cy.get('#postal-code').type(1109)
        cy.contains('CONTINUE').click()
        
        let sum=0
        cy.get('.cart_item .inventory_item_price').each(($label)=>{
          let priceLabel= $label.text()//$29.99
          let price =priceLabel.slice(1).trim()//29.99
             sum +=Number(price)
            }).then(()=>{
              cy.log("Our Total price: "+sum)
            })

            
       let Num=0
       cy.get('.summary_subtotal_label').then(($subtotal)=>{
        let subTotal=$subtotal.text()
        let rs=subTotal.split("$")
         Num=rs[1]
        }).then(()=>{
          cy.log("site Total price: "+Num)
        })
        expect(Number(Num)).to.eq(sum)
        
        

        




    })})
