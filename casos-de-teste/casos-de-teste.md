# Casos de Teste — TCC EBAC Shop

Casos de teste derivados dos critérios de aceitação (Gherkin) de cada
história de usuário, cobrindo caminho feliz e caminho alternativo/negativo.
A coluna **Automatizado** indica se o caso foi implementado como teste
automatizado neste repositório, e em qual camada.

---

## US-0001 — Adicionar item ao carrinho

| ID | Caso de Teste | Pré-condição | Passos | Resultado Esperado | Tipo | Automatizado |
|---|---|---|---|---|---|---|
| CT-0001-01 | Adicionar até o limite permitido de um mesmo produto | Estar na página de um produto | Adicionar 10 unidades do mesmo produto ao carrinho | Itens adicionados com sucesso | Feliz | Não |
| CT-0001-02 | Tentar adicionar mais itens do que o permitido | Estar na página de um produto | Tentar adicionar 11 unidades do mesmo produto | Sistema exibe mensagem de limite excedido | Alternativo | Não |
| CT-0001-03 | Aplicar cupom de 10% | Ter itens no carrinho | Totalizar valor entre R$ 200 e R$ 600 | Cupom de 10% disponibilizado | Feliz | Não |
| CT-0001-04 | Validar limite de valor total do carrinho | Ter produtos no carrinho | Tentar ultrapassar R$ 990,00 em itens | Sistema bloqueia a adição | Alternativo | Não |

## US-0002 — Login na plataforma

| ID | Caso de Teste | Pré-condição | Passos | Resultado Esperado | Tipo | Automatizado |
|---|---|---|---|---|---|---|
| CT-0002-01 | Autenticação com sucesso | Estar na página de login | Inserir credenciais válidas de usuário ativo | Login efetuado, redireciona para pedidos | Feliz | **Sim — UI (Cypress)** |
| CT-0002-02 | Login com usuário inativo | Estar na página de login | Autenticar com usuário de status inativo | Acesso negado, mensagem de usuário inativo | Alternativo | Não |
| CT-0002-03 | Erro de usuário ou senha incorretos | Estar na página de login | Inserir usuário ou senha incorretos | Mensagem de erro de autenticação | Alternativo | **Sim — UI (Cypress)** |
| CT-0002-04 | Travar login após 3 tentativas | Estar na página de login | Errar a senha 3 vezes consecutivas | Acesso travado por 15 minutos | Alternativo | Não |

## US-0003 — API de cupons

| ID | Caso de Teste | Pré-condição | Passos | Resultado Esperado | Tipo | Automatizado |
|---|---|---|---|---|---|---|
| CT-0003-01 | Listar todos os cupons | Autenticado como admin | GET `/wc/v3/coupons` | Lista de cupons retornada (200) | Feliz | **Sim — API (Supertest)** |
| CT-0003-02 | Cadastrar novo cupom | Autenticado como admin | POST `/wc/v3/coupons` com campos obrigatórios | Cupom criado com sucesso (201) | Feliz | **Sim — API (Supertest)** |
| CT-0003-03 | Cadastrar cupom com código repetido | Cupom "Ganhe10" já existe | POST com mesmo código | Erro de código duplicado (400) | Alternativo | **Sim — API (Supertest)** |
| CT-0003-04 | Acessar sem autenticação | Sem credenciais informadas | GET `/wc/v3/coupons` sem header de auth | Acesso negado (401) | Alternativo | **Sim — API (Supertest)** |

*(equivalem aos testes CT-05 a CT-08 implementados em `API/cupons.test.js`)*

## US-0004 — Catálogo de Produtos

| ID | Caso de Teste | Pré-condição | Passos | Resultado Esperado | Tipo | Automatizado |
|---|---|---|---|---|---|---|
| CT-0004-01 | Exibir lista de produtos | Estar na tela do catálogo | Abrir a aba de catálogo | Lista de produtos é carregada | Feliz | **Sim — Mobile (WebdriverIO)** |
| CT-0004-02 | Exibir nome e preço de cada produto | Catálogo carregado | Inspecionar os produtos listados | Cada produto exibe nome e preço | Feliz | **Sim — Mobile (WebdriverIO)** |
| CT-0004-03 | Buscar produto por termo inexistente | Estar na tela do catálogo | Buscar um termo sem correspondência | Mensagem de "nenhum produto encontrado" | Alternativo | Não |
| CT-0004-04 | Acessar detalhes de um produto | Catálogo carregado | Selecionar um produto da lista | Tela de detalhes do produto é exibida | Feliz | Não |

## US-0005 — Painel Minha Conta

| ID | Caso de Teste | Pré-condição | Passos | Resultado Esperado | Tipo | Automatizado |
|---|---|---|---|---|---|---|
| CT-0005-01 | Exibir painel ao acessar logado | Estar autenticado | Acessar "Minha Conta" | Painel com informações do cliente é exibido | Feliz | Não |
| CT-0005-02 | Tentar acessar sem autenticação | Não estar autenticado | Tentar acessar "Minha Conta" | Redirecionado para login | Alternativo | Não |
| CT-0005-03 | Exibir atalhos de pedidos e endereços | Autenticado, no painel | Carregar o painel | Atalhos para "Meus Pedidos" e "Endereços" visíveis | Feliz | Não |
| CT-0005-04 | Encerrar sessão | Autenticado, no painel | Selecionar opção de sair | Sessão encerrada, redireciona para login/home | Alternativo | Não |

## US-0006 — Meus Pedidos

| ID | Caso de Teste | Pré-condição | Passos | Resultado Esperado | Tipo | Automatizado |
|---|---|---|---|---|---|---|
| CT-0006-01 | Listar pedidos realizados | Autenticado, com pedidos | Acessar "Meus Pedidos" | Lista de pedidos exibida | Feliz | Não |
| CT-0006-02 | Exibir mensagem sem pedidos | Autenticado, sem pedidos | Acessar "Meus Pedidos" | Mensagem de ausência de pedidos | Alternativo | Não |
| CT-0006-03 | Visualizar detalhes de um pedido | Na lista, com ao menos 1 pedido | Selecionar um pedido | Itens, valores e endereço exibidos | Feliz | Não |
| CT-0006-04 | Exibir status do pedido | Visualizando detalhes | Carregar a tela | Status atual do pedido visível | Feliz | Não |

## US-0007 — Endereços

| ID | Caso de Teste | Pré-condição | Passos | Resultado Esperado | Tipo | Automatizado |
|---|---|---|---|---|---|---|
| CT-0007-01 | Cadastrar novo endereço | Na área "Endereços" | Preencher campos obrigatórios e salvar | Endereço cadastrado com sucesso | Feliz | Não |
| CT-0007-02 | Cadastrar com campo obrigatório vazio | Na área "Endereços" | Tentar salvar sem preencher campo obrigatório | Mensagem de campo pendente, não salva | Alternativo | Não |
| CT-0007-03 | Editar endereço existente | Possuir endereço cadastrado | Alterar dados e salvar | Alterações refletidas no endereço | Feliz | Não |
| CT-0007-04 | Excluir endereço cadastrado | Possuir endereço cadastrado | Selecionar excluir | Endereço removido da lista | Alternativo | Não |

## US-0008 — Detalhes da Conta

| ID | Caso de Teste | Pré-condição | Passos | Resultado Esperado | Tipo | Automatizado |
|---|---|---|---|---|---|---|
| CT-0008-01 | Atualizar nome e e-mail | Na área "Detalhes da Conta" | Atualizar com dados válidos e salvar | Informações atualizadas com sucesso | Feliz | Não |
| CT-0008-02 | Salvar e-mail em formato inválido | Na área "Detalhes da Conta" | Informar e-mail inválido e tentar salvar | Erro de validação, não salva | Alternativo | Não |
| CT-0008-03 | Alterar senha com sucesso | Na área "Detalhes da Conta" | Informar senha atual correta + nova senha válida | Senha alterada com sucesso | Feliz | Não |
| CT-0008-04 | Alterar senha com senha atual incorreta | Na área "Detalhes da Conta" | Informar senha atual incorreta | Erro exibido, senha não alterada | Alternativo | Não |

---

## Resumo de cobertura de automação

| História | Camada automatizada | Casos cobertos |
|---|---|---|
| US-0001 — Carrinho | — | Nenhum (manual) |
| US-0002 — Login | UI (Cypress) | CT-0002-01, CT-0002-03 |
| US-0003 — API de Cupons | API (Supertest) | CT-0003-01 a CT-0003-04 |
| US-0004 — Catálogo de Produtos | Mobile (WebdriverIO/Appium) | CT-0004-01, CT-0004-02 |
| US-0005 a US-0008 | — | Nenhum (manual) |