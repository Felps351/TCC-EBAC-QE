Funcionalidade: Endereços
  Como cliente da EBAC-SHOP
  Quero gerenciar meus endereços cadastrados
  Para utilizá-los nas minhas compras

  Cenário: Cadastrar novo endereço com sucesso (Caminho Feliz)
    Dado que estou na área "Endereços" da minha conta
    Quando eu preencho todos os campos obrigatórios e salvo um novo endereço
    Então o endereço deve ser cadastrado com sucesso

  Cenário: Tentar cadastrar endereço com campo obrigatório vazio
    Dado que estou na área "Endereços" da minha conta
    Quando eu tento salvar um endereço sem preencher um campo obrigatório
    Então o sistema deve exibir uma mensagem indicando o campo pendente
    E o endereço não deve ser salvo

  Cenário: Editar um endereço existente
    Dado que já possuo um endereço cadastrado
    Quando eu altero os dados desse endereço e salvo
    Então as alterações devem ser refletidas no endereço cadastrado

  Cenário: Excluir um endereço cadastrado
    Dado que já possuo um endereço cadastrado
    Quando eu seleciono a opção de excluir esse endereço
    Então o endereço não deve mais aparecer na minha lista de endereços
