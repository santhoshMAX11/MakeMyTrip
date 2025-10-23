describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('#female').check()//"check()" will work only with input tag
    cy.get('[type="checkbox"]').check('thursday')//.check() only works on <input>
    cy.get('#country').select('India')//use proper attr/css selector and select by value or visible text
    cy.get('#colors').select('Red')//this is visible text
    cy.get('#animals').select('elephant')//this is value attr's value
    cy.get('p #txtDate').click()
    cy.get('.ui-datepicker-month').select('Dec')
    cy.get('.ui-datepicker-year').select('2027')
    cy.get('.ui-datepicker-calendar').contains('9').click()
    cy.get('p #txtDate').should('have.value','09/12/2027')
    cy.get('p #txtDate').invoke('val').then((selectedDate)=>{//here the value attr is in hidden mode so we have to 
    expect(selectedDate).to.equal('09/12/2027')
    })
    cy.get('p #txtDate').invoke('val').should('equal','09/12/2027')
  })
})

