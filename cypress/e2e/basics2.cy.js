describe('basics of cyp', () => {
    it('radio button & checkboxes & static & dynamic dropdowns', () => {
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//".check()", cypress command to select radio buttons or checkboxes.

//radio boxes
//select by value
cy.get('.radioButton').check('radio2')
//select by index ".eq()"
//".eq()", used to pick an element by its index from a list
cy.get('.radioButton').eq(0).check()
//select by locator and verify the radioboxes has selected
cy.get('[value="radio3"]').check().should('be.checked').and('have.value','radio3')



//checkboxes
//to select group of options in checkboxes use array of element value
// cy.get('fieldset [type="checkbox"]').check(['option1','option2','option3'])
// cy.pause()

cy.get('.right-align [type="checkbox"]').check('option1')
cy.get('.right-align [type="checkbox"]').eq(1).check()
//verify the checkboxes 
cy.get('.right-align #checkBoxOption3').check().should('be.checked').and('have.value','option3')
//to uncheck and verify (only applicable for checkboxes)
cy.get('.right-align #checkBoxOption3').uncheck().should('not.be.checked')



//static dropdowns
    //".select()", is specically made for static dropdowns
    
    //select by value
    cy.get('select').select('option1')
    //select by visible text
    cy.get('select').select('Option2')
    //select by index
    cy.get('select').select(3)

  //dynamic dropdown
    cy.get('#autocomplete').type('au')
    // cy.get('.ui-menu-item div').each(($country)=>{ //easiest way (using direct locator)
    //     if($country.text()==="Australia"){
    //        cy.wrap($country).click({force:true})
    //     }
    //     })

     cy.get('.ui-menu-item').each(($country)=>{
     let cty= $country.find('.ui-menu-item-wrapper').text()
        if(cty.includes('Australia')){
            cy.wrap($country).click()
        }
    })
   
   


})






})

