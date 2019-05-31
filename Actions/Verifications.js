/*
* Define verications here. Verication method should start with `check`
*/

// Import Interface to interact with defined elements
var Interface = require('../Interfaces/Interface.js')

// Check user info
Cypress.Commands.add('checkUserInfo', (username) => {
  // Navigate to My Profile
  cy.navigate("Compte d’utilisateur")
  // Check if username displays
  cy.get('.block').find('strong').first().should('contain', username)
})
