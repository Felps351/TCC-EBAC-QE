Funcionalidade: Painel Minha Conta
  Como cliente da EBAC-SHOP
  Quero acessar o painel da minha conta
  Para visualizar e gerenciar minhas informações

  Cenário: Exibir painel ao acessar logado (Caminho Feliz)
    Dado que estou autenticado na plataforma
    Quando eu acesso a área "Minha Conta"
    Então devo visualizar o painel com minhas informações de cliente

  Cenário: Tentar acessar o painel sem estar autenticado
    Dado que não estou autenticado na plataforma
    Quando eu tento acessar a área "Minha Conta"
    Então devo ser redirecionado para a página de login

  Cenário: Exibir atalhos para pedidos e endereços no painel
    Dado que estou autenticado e na área "Minha Conta"
    Quando o painel é carregado
    Então devo visualizar atalhos para "Meus Pedidos" e "Endereços"

  Cenário: Encerrar sessão a partir do painel
    Dado que estou autenticado e na área "Minha Conta"
    Quando eu seleciono a opção de sair
    Então minha sessão deve ser encerrada
    E devo ser redirecionado para a página inicial ou de login
