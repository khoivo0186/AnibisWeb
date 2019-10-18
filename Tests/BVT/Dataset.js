describe('Dataset', function() {
  before(function () {
    // Get dataset
    cy.fixture('accounts.json').as('accounts')
  })

  it('Log to console', function() {
    this.accounts.forEach((account) => {
      cy.log(account.email)
    })
  })
})
