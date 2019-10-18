describe('SM01 - Login', function() {

  /**
  * PRE & POST CONDITIONS
  */
  before(function () {
    // Launch anibis
    cy.visit("/")

    // Get dataset
    cy.fixture('accounts.json').as('accounts')
  })

  /**
  * TESTCASES
  */
  it('Verify user can login successful with valid account', function() {
    this.accounts.forEach((account) => {
      // Login with valid account
      cy.login(account.email, account.password)

      // VP: username displays on my profile page
      cy.checkUserInfo(account.username)

      cy.logout()
    })
  })
})
