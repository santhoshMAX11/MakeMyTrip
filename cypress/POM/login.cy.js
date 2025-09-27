
class LoginPage{
    constructor(){
        this.username='#user-name'
        this.password='#password'
        this.submit='LOGIN'
    }
    typingUserName(usern){
        cy.get(this.username).type(usern)
    }
    typingPassword(userP){
        cy.get(this.password).type(userp)
    }
    clickingOnLoginButton(){
        cy.contains(this.submit).click()

    }
          
}
export default LoginPage
        