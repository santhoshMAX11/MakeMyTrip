describe('template spec', () => {
  
    cy.visit('https://www.amazon.in/')
    cy.get('[id="twotabsearchtextbox"]').type("iphone 17 pro max")
    cy.get('[type="submit"]').click()
    cy.get('[aria-label*="iPhone 17 Pro 1 TB"]').click()
    cy.screenshot()
    //cy.get('[data-csa-c-item-id="B0FQFNQTTK"]').click()
    //cy.get('[class="a-button-stack"] [id="submit.add-to-cart"]').click()
     //cy.screenshot()
    
//img[alt="Desert Titanium"]:nth-child(1)
//[id="color_name_1-announce"] [alt="Desert Titanium"]
  })
