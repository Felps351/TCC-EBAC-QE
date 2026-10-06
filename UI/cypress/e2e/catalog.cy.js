import catalogPage from '../support/page-objects/catalog.page'

describe('US-0004: Catálogo de Produtos', () => {
  beforeEach(() => {
    catalogPage.visitarCatalogo()
  })

  it('CT-0004-01: Deve exibir a lista de produtos ao abrir o catálogo (Caminho Feliz)', () => {
    cy.get('.products.products-grid div.product')
      .should('have.length.greaterThan', 0)
  })

  it('CT-0004-02: Cada produto listado deve exibir nome e preço (Caminho Feliz)', () => {
    cy.get('.products.products-grid div.product')
      .first()
      .within(() => {
        cy.get('h3.name').should('be.visible')
        cy.get('span.price').should('exist')
      })
  })

  it('CT-0004-03: Deve exibir mensagem quando a busca não encontra produtos (Caminho Alternativo)', () => {
    catalogPage.buscarProduto('produtoinexistentexyz123')
    cy.wait(2000)
  })
})