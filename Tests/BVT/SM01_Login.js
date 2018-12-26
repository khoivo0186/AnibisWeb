import * as Login from '/Users/khoivo/AnibisWeb/Interfaces/Login'

describe('SM01 - Login', function() {

  // TC: Verify user can login successful with valid account
  // Steps:
  //  - Navigate to Login screen
  //  - Login with valid account
  // VP:
  //  - User login successful and correct username displays in Profile
  it('Verify user can login successful with valid account', function() {
    cy.visit("/")
    cy.contains("Se connecter").click()
    cy.get(Login.txtEmail).type("reseller.nvg@gmail.com")
    cy.get(Login.btnContinue).click()
    cy.get(Login.txtPassword).type("nvg07072012")
    cy.get(Login.btnLogin).click()
    cy.contains("Compte d’utilisateur").click()
    cy.get('.block').find('strong').should('have.value', 'Reseller NVG')
  })
})
