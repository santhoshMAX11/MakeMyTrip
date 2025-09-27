describe('basics of cypress', () => {
  //"describle" groups your test cases together. think of it like a folder where you keep all related tests
  //"basics of cypress" is just a name/label for this group of tests
  it('cyp', () => {
    //"it" this is a single test case inside the group.
    //"cyp" is just the test case name
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    //".visit()" opens the given url in the browser 
    cy.get('[id="username"]').type('incorrectUser')
    //".get" is used to find an element on the webpage
    cy.get('[id="password"]').type('Password123')
    cy.get('[id="submit"]').click()
    cy.get('[class="show"]').should('be.visible')
    //".should()" is used to make an assertion, a check or a test to confirm that something is true.

    cy.get('[class="show"]').should('have.text','Your username is invalid!')
    //"have.text", checks whether an element's text content matches exactly with the expected value
    //"have.text" checks for exact match(case-sensitive)
   
    //".contains()", its a command in cypress to locate elements by text
    
  })
})