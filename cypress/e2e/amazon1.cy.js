describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.in/')
    //cy.contains('Search Amazon.in').type('mobile')
    cy.get('[role="searchbox"]').type('mobile')
    cy.get('div.nav-search-submit').click()

    //
    cy.url().should('include','https://www.amazon.in/s?k=mobile&')
    cy.get('span#s-all-filters').click()
    cy.get('#brandsRefinements [role="presentation"] li a').each(($el)=>{
       let selectBrand= $el.find('.a-size-base').text()
       if(selectBrand.includes('Samsung')){
         cy.wrap($el).click()
       }
    })
    cy.wait(6000)
   //#brandsRefinements [role="presentation"]  li a .a-size-base

   //
  //cy.get('span#s-all-filters').click()//80
   
  //  cy.get('[aria-label="Minimum price"]').invoke('val',70).trigger('input',{force: true}).trigger('change',{force: true})
  //  cy.get('[aria-label="Maximum price"]').invoke('val', 80).trigger('input',{force: true}).trigger('change',{force: true})
  //  cy.get('.a-button input[type="submit"]').click({force: true})
  cy.get('[name="low-price"]').type('10000',{force: true})
  cy.get('[name="high-price"]').type('15000',{force: true})
  cy.get('.a-button input[type="submit"]').click({force: true})
  //  //cy.url().should('include','mobile&rh=p_123%3A46655&dc')

   //[role="listitem"] .a-price-whole
   cy.get('[role="listitem"] .a-price-whole').each(($price)=>{
    //let price=Number($price.text().replace(/[^0-9]/g, ""))
    let price1=$price.text().split(',').join('')
    let price3 =Number(price1)
    //let price3= price1.split(',').join('')
    cy.wrap(price3).should('be.within', 7000, 20000)
   
  //  if(price>8000 && price<20000){
  //   cy.log(true)
  //   }else{
  //     cy.log(false)
  //      }
      })



   
















  })
})