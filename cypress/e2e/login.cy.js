describe('Login Test', () => {
let username;
  before(function () { 
    cy.fixture('users').then(function (data) {
      usersData = data;
    });
  });

  it('should login with valid credentials', function () { 
      usersData.forEach(user => {
      cy.visit('https://practicetestautomation.com/practice-test-login/');
      cy.get('#username').type(user.username);
      cy.get('#password').type(user.password);
      cy.contains('Submit').click();

      if (user.error_message) {
        cy.get('#error').should('contain.text', user.error_message);
      } else {
        cy.url().should('include', '/logged-in-successfully/');
      }
    });
  });

});

