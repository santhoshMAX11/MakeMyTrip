describe('Test suite', () => {
    let externalData;
    before(() => {
        cy.fixture('tdata').then((data) => {
            externalData = data
        })
    })
    it('Test case for e-commerce site', () => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('#user-name').type(externalData.username)
        cy.get('#password').type(externalData.password)
        cy.get('#login-button').click()
        //  cy.get('inventory_item').each((pro)=>{
        //     cy.contains('',)
        // })

        externalData.products.forEach((pro) => {
            cy.contains('.inventory_item', pro).find('button.btn_primary').click()

        })

        cy.get('.shopping_cart_container').click()

        externalData.products.forEach((pro) => {
            cy.get('.cart_item').contains(pro).should('exist')

        })

        cy.get('#first-name').type('santo')
        cy.get('#last-name').type('man')
        cy.get('#postal-code').type(1109)
        cy.contains('CONTINUE').click()
    })
})