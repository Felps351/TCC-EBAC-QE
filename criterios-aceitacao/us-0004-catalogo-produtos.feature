Funcionalidade: Catálogo de Produtos
  Como cliente da EBAC-SHOP
  Quero visualizar e buscar produtos no catálogo
  Para escolher o que comprar

  Cenário: Exibir lista de produtos ao abrir o catálogo
    Dado que estou na tela do catálogo de produtos
    Quando a lista de produtos é carregada
    Então cada produto deve exibir nome e preço

  Cenário: Buscar produto por nome existente
    Dado que estou na tela do catálogo de produtos
    Quando eu busco por um produto pelo nome
    Então devo visualizar apenas os produtos que correspondem ao termo buscado

  Cenário: Buscar produto por termo inexistente
    Dado que estou na tela do catálogo de produtos
    Quando eu busco por um termo que não corresponde a nenhum produto
    Então o sistema deve exibir uma mensagem informando que nenhum produto foi encontrado

  Cenário: Acessar detalhes de um produto do catálogo
    Dado que estou na tela do catálogo de produtos
    Quando eu seleciono um produto da lista
    Então devo ser direcionado para a tela de detalhes daquele produto
