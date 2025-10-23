describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('.left-align tr td:nth-child(2)').each(($el)=>{
        let course=$el.text()
        if(course.includes('Python')){
                let price=$el.next().text()//next() can be used in jquery
                cy.log(course + " course is offered for rs "+ price)
           }
    })
  })
})