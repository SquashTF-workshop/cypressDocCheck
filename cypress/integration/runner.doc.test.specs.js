context('Check Squash TF Runners Documentation', () => {
  beforeEach(() => {
    cy.visit('https://squash-tf.readthedocs.io/en/latest/')
  })
  it('checkRunnersListSuccess', () => {
    cy.get("a[href*='runner/overview.html']").should('have.text', 'Runners').click()
    cy.get("div[id='squash-tf-runners']").within(() => {
      cy.get("a").contains("Java Junit Runner").should('have.attr', 'href', 'https://squash-tf.readthedocs.io/projects/runner-java-junit/')
      cy.get("a").contains("Cucumber Java Runner").should('have.attr', 'href', 'https://squash-tf.readthedocs.io/projects/runner-cucumber-java/')
      cy.get("a").contains("Robot Framework Runner").should('have.attr', 'href', 'https://squash-tf.readthedocs.io/projects/runner-robotframework/')
    })
  })

  it('checkRunnersListFailure', () => {
    cy.get("a[href*='runner/overview.html']").should('have.text', 'Runners').click()
    cy.get("div[id='squash-tf-runners']").within(() => {
      cy.get("a").contains("Java Junit Runner").should('have.attr', 'href', 'https://squash-tf.readthedocs.io/projects/runner-java-junit/')
      cy.get("a").contains("Cucumber Java Runner").should('have.attr', 'href', 'concombre')
      cy.get("a").contains("Rob Bot").should('have.attr', 'href', 'https://squash-tf.readthedocs.io/projects/runner-robotframework/')
    })
  })
})