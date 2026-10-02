Funcionalidade: Meus Pedidos
  Como cliente da EBAC-SHOP
  Quero visualizar meus pedidos realizados
  Para acompanhar o status das minhas compras

  Cenário: Listar pedidos realizados (Caminho Feliz)
    Dado que estou autenticado e possuo pedidos realizados
    Quando eu acesso a área "Meus Pedidos"
    Então devo visualizar a lista com todos os meus pedidos

  Cenário: Exibir mensagem quando não há pedidos
    Dado que estou autenticado e não possuo nenhum pedido realizado
    Quando eu acesso a área "Meus Pedidos"
    Então o sistema deve exibir uma mensagem informando que não há pedidos

  Cenário: Visualizar detalhes de um pedido específico
    Dado que estou na área "Meus Pedidos" e possuo ao menos um pedido
    Quando eu seleciono um pedido da lista
    Então devo visualizar os itens, valores e endereço daquele pedido

  Cenário: Exibir status atual do pedido
    Dado que estou visualizando os detalhes de um pedido
    Quando a tela é carregada
    Então devo visualizar o status atual do pedido (ex.: processando, concluído ou cancelado)
