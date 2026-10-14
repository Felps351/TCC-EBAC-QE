# Automação Web (UI) — EBAC Shop

Testes de interface do e-commerce EBAC Shop, escritos com **Cypress** e **JavaScript**.

## Como executar

```bash
cd UI
npm install
npx cypress run
```

Ao final, o relatório HTML é gerado em `UI/cypress/reports/index.html`.

## Escopo automatizado

| Spec | História | Casos |
|---|---|---|
| `cypress/e2e/login.cy.js` | US-0002 — Login | CT-0002-01 (caminho feliz), CT-0002-03 (caminho alternativo) |
| `cypress/e2e/catalog.cy.js` | US-0004 — Catálogo de Produtos | CT-0004-01, CT-0004-02 (caminho feliz), CT-0004-03 (caminho alternativo) |

## Testing Pattern: Page Object

Cada tela tem uma classe em `cypress/support/page-objects/` (`login.page.js`, `catalog.page.js`) que concentra os seletores e as ações.
Os specs só descrevem o comportamento esperado. Se o HTML da página mudar, o ajuste fica em um único arquivo.

## Justificativa da escolha da ferramenta

Foram comparadas três opções para automação Web.

| Critério | Cypress (JavaScript) | Playwright (JavaScript/TypeScript) | Selenium WebDriver (JavaScript) |
|---|---|---|---|
| Linguagens | JavaScript e TypeScript | JavaScript/TypeScript, Python, Java e .NET | Java, Python, C#, JavaScript e outras |
| Navegadores | Chrome, Edge, Firefox e Electron | Chromium, Firefox e WebKit | Todos os principais, via drivers |
| Espera por elementos | Automática, com repetição das asserções | Automática | Manual (esperas explícitas) |
| Depuração | Execução com interface gráfica e capturas de tela por comando | Trace viewer e inspetor | Depende de ferramentas externas |
| Relatórios | Plugins prontos (Mochawesome) | Relatórios HTML nativos | Dependem do executor de testes escolhido |
| Mais de uma aba/janela | Limitado | Suportado | Suportado |
| Curva de aprendizado | Baixa | Média | Mais alta (mais código de configuração) |

**Ferramenta escolhida: Cypress com JavaScript.** Os motivos:

1. **Mesma linguagem das outras camadas.** A API (Jest + Supertest) e o Mobile (WebdriverIO) também são em JavaScript, então o projeto inteiro usa uma só linguagem e um só gerenciador de pacotes (npm).
2. **Espera automática.** O Cypress repete comandos e asserções até o elemento aparecer. O site da loja demora para responder, e isso reduz testes instáveis sem escrever esperas manuais. Nos testes do Catálogo, o único ajuste de seletor foi trocar `>` por descendente.
3. **Curva de aprendizado baixa e CI simples.** A action oficial `cypress-io/github-action` instala as dependências e roda a suíte no GitHub Actions com poucas linhas de configuração.
4. **Relatório pronto.** O `cypress-mochawesome-reporter` gera um HTML com resultados por história, sem código adicional.
5. **Os fluxos testados cabem nas limitações do Cypress.** O login e o catálogo acontecem em uma única aba e em um único domínio.

**Limitações assumidas.** O Cypress não cobre bem fluxos com várias abas e não testa o WebKit (Safari) de forma estável. Se a estratégia passar a exigir testes cross-browser mais amplos, o Playwright seria a evolução natural. O Selenium foi descartado por exigir mais código de configuração e de espera para o mesmo resultado neste escopo.