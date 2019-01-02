describe('SM01 - Login', function() {

  // TC: Verify user can login successful with valid account
  // Steps:
  //  - Navigate to Login screen
  //  - Login with valid account
  // VP:
  //  - User login successful and correct username displays in Profile
  it('Verify user can login successful with valid account', function() {
    // Launch anibis
    cy.visit("/")

    // Navigate to Login screen
    // Login with valid account
    cy.login("reseller.nvg@gmail.com", "nvg07072012")

    // VP: User login successful and correct username displays in Profile
    cy.get('.block').find('strong').first().should('contain', 'NVG Reseller')
  })
})
