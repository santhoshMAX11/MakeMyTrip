describe('test suite',()=>{
    it('alert & confirm',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //alert
        cy.get('#alertbtn').click()
        cy.on('window:alert',(alt)=>{
            expect(alt).to.equal('Hello , share this practice page and share your knowledge')
            return true;
        })
        //confirm
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(cfm)=>{
            expect(cfm).to.equal('Hello , Are you sure you want to confirm?')
            return false;
        })
        
        //mouse hover
        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('equal','https://rahulshettyacademy.com/AutomationPractice/#top')
        //"equal", checks if the actual value is exactly equal to the expected value
        cy.url().should('include','/#top')

        //web table
        cy.get('.left-align .table-display td:nth-child(2)').each(($el)=>{
            if($el.text().includes('TestNG')){
                cy.wrap($el).then((course)=>{
                    let courseName=course.t
                    ext()
                    cy.log(courseName)
                })
            }
        })
        //without using then()
        cy.get('.left-align .table-display td:nth-child(2)').each(($ele)=>{
            if($ele.text().includes('TestNG')){
               cy.log($ele.text())
            }
        })
















    })


})