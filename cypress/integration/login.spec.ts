describe('Login Flow', () => {
  it('should display login page and allow user to submit login form', () => {
    cy.visit('/login')
    cy.get('input[type="email"]').type('test@example.com')
    cy.get('input[type="password"]').type('password123')
    cy.get('button[type="submit"]').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Login submitted')
    })
  })
})
