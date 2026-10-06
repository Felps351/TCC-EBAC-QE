class CatalogPage {
  get #listaProdutos() { return cy.get('.products.products-grid div.product') }
  get #tituloProduto() { return cy.get('h3.name') }
  get #precoProduto() { return cy.get('span.price') }
  get #campoBuscaVisivel() { return cy.get('input[name="s"]').filter(':visible') }
  get #botaoBuscaVisivel() { return cy.get('button.button-search').filter(':visible') }

  visitarCatalogo() {
    cy.visit('/produtos')
  }

  buscarProduto(termo) {
    this.#campoBuscaVisivel.clear().type(termo)
    this.#botaoBuscaVisivel.click()
  }
}

export default new CatalogPage()