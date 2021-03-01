context('Check Squash TF Main Documentation', () => {
  beforeEach(() => {
    cy.visit('https://squash-tf.readthedocs.io/en/latest/')
  })
  
  it('checkWelcomeTextSuccess', () => {
      cy.get("h1").invoke('text').should('match', /Welcome to Squash TF components documentation!*/)
  })

})