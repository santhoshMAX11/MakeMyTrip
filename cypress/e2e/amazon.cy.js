describe('template spec', () => {
  it('passes', () => {


    //welcome page
    cy.visit('https://www.amazon.in/')
    cy.get('[role="searchbox"]').type('mobile')
    cy.get('div.nav-search-submit').click()

    //selecting specific brand
    cy.url().should('include','https://www.amazon.in/s?k=mobile&')
    cy.get('span#s-all-filters').click()
    cy.get('#brandsRefinements [role="presentation"] li a').each(($el)=>{
       let selectBrand= $el.find('.a-size-base').text()
       if(selectBrand.includes('Samsung')){
         cy.wrap($el).click()
       }
    })
    cy.wait(5000)

  //selecting price range
  cy.get('[name="low-price"]').type('10000',{force: true})//new concept 
  cy.get('[name="high-price"]').type('15000',{force: true})
  cy.get('.a-button input[type="submit"]').click({force: true})
  cy.wait(5000)
 

   //verifying the products are within the price range
   cy.get('[role="listitem"] .a-price-whole').each(($price)=>{
    let price=Number($price.text().split(',').join(''))//10,000
    cy.wrap(price).should('be.within', 10000, 15000)
    //let price=Number($price.text().replace(/[^0-9]/g, ""))
  })

   //add to cart 
  //  cy.contains('Samsung Galaxy F17 5G, Violet Pop (4GB, 128GB)').invoke('removeAttr','target').click({force:true})
  //   //cy.get('.a-section [href*="/Samsung-Storage-MediaTek-Octa-core-Processor"]').eq(0).invoke('removeAttr','target').click({force: true})
  //   cy.get('.a-button-inner [id="add-to-cart-button"]').click({force: true})

 })
})



