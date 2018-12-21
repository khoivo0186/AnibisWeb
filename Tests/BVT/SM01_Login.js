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
  })

})
