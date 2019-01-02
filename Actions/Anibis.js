/*
* Define business actions here
*/

// Import Interface to interact with defined elements
var Interface = require('/Users/khoivo/AnibisWeb/Interfaces/Interface.js')

// Navigate to specific path
Cypress.Commands.add('navigate', (path) => {
    var items = path.split(">")
    cy.log(items)
    for (const item of items) {
      cy.contains(item.trim()).click()
    }
})

// Login to anibis with specific email and password
Cypress.Commands.add('login', (email, password) => {
  // Navigate to login screen by using business action 'navigate'
  cy.navigate("Se connecter")

  // Input email and password
  cy.get(Interface.Login.txtEmail).type(email)
  cy.get(Interface.Login.btnContinue).click()
  cy.get(Interface.Login.txtPassword).type(password)
  cy.get(Interface.Login.btnLogin).click()

  cy.contains("Compte d’utilisateur").click()
})
