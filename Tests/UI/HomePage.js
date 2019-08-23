describe('UI01 - Home Page', function() {
  /**
  * TESTCASES
  */
  it('Verify home page follows mockup', function() {
    cy.visit('stage.anibis.ch')

    //Start the test
    cy.eyesOpen({
      appName: 'anibis',
      testName: 'Verify home page follows mockup',
      browser: { width: 800, height: 600 },
    });

    // Check current window
    cy.eyesCheckWindow('Home Page');

    //End Test
    cy.eyesClose();
  })
})
