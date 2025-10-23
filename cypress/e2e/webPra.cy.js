describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.right-align table tbody tr').each(($el) => {
            let name = $el.find('td:nth-child(1)').text()
            if (name.includes('Ronaldo')) {
                let passion = $el.find('td:nth-child(2)').text()
                let state = $el.find('td:nth-child(3)').text()
                let age = $el.find('td:nth-child(4)').text()
                cy.log(`${name} is from ${state} and he is ${age} who is passionate about ${passion} `)
            }

        })
    })
})