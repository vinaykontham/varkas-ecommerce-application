describe('Search Page', () => {
  beforeEach(() => {
    cy.visit('/search')
  })

  it('should display search input and filter products', () => {
    // Check if search input exists
    cy.get('input[type="text"]').should('exist')

    // Type in search input
    cy.get('input[type="text"]').type('Denim')

    // Check if products are filtered
    cy.contains('Classic Denim Jacket').should('exist')
    cy.contains('Decorative Cushion Set').should('not.exist')

    // Clear search and check if all products are shown
    cy.get('input[type="text"]').clear()
    cy.contains('Classic Denim Jacket').should('exist')
    cy.contains('Decorative Cushion Set').should('exist')
  })

  it('should show "No products found" message for non-existent products', () => {
    cy.get('input[type="text"]').type('NonExistentProduct')
    cy.contains('No products found').should('exist')
  })

  it('should navigate to product details page when clicking on a product', () => {
    cy.contains('Classic Denim Jacket').click()
    cy.url().should('include', '/products/')
    cy.contains('Classic Denim Jacket').should('exist')
    cy.contains('$89.99').should('exist')
  })
})
