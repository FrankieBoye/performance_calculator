describe('Performance Calculator', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000/')
  })

  it('contains "Performance Calculator" in the title', function() {
    cy.contains("Performance Calculator")
  })

  it('has a visible Reset button', function() {
    cy.get("button")
    .should('be.visible')
    .should('contain', 'Reset')
  })

  it('has visible RWD, FWD and AWD buttons', function() {
    cy.get('input[type=button]')
    .should('be.visible')
  })

})
