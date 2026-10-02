Funcionalidade: Detalhes da Conta
  Como cliente da EBAC-SHOP
  Quero editar meus dados cadastrais e senha
  Para manter minhas informações atualizadas e seguras

  Cenário: Atualizar nome e e-mail com sucesso (Caminho Feliz)
    Dado que estou na área "Detalhes da Conta"
    Quando eu atualizo meu nome e e-mail com dados válidos e salvo
    Então as informações devem ser atualizadas com sucesso

  Cenário: Tentar salvar e-mail em formato inválido
    Dado que estou na área "Detalhes da Conta"
    Quando eu informo um e-mail em formato inválido e tento salvar
    Então o sistema deve exibir uma mensagem de erro de validação
    E as informações não devem ser salvas

  Cenário: Alterar senha com sucesso
    Dado que estou na área "Detalhes da Conta"
    Quando eu informo a senha atual corretamente e defino uma nova senha válida
    Então minha senha deve ser alterada com sucesso

  Cenário: Tentar alterar senha informando senha atual incorreta
    Dado que estou na área "Detalhes da Conta"
    Quando eu informo a senha atual de forma incorreta ao tentar definir uma nova senha
    Então o sistema deve exibir uma mensagem de erro
    E a senha não deve ser alterada
