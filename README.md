# TCC — Engenheiro de Qualidade de Software (EBAC)

Estratégia de testes para o e-commerce **EBAC Shop**, com automação Web, API e Mobile.

## Automação Mobile — Catálogo de Produtos

Testa o app Android **EBAC Store** (`br.com.lojaebac`), cobrindo o fluxo de
navegação e exibição do Catálogo de Produtos.

### Stack

- **WebdriverIO v8** + **Appium v2** + **Mocha**
- Emulador Android (API 29, x86_64) executado **100% na nuvem**, via
  **GitHub Actions**, sem depender de máquina ou dispositivo local
- Pipeline definido em [`.github/workflows/mobile-tests.yml`](.github/workflows/mobile-tests.yml)

### O que é testado

O arquivo [`Mobile/test/specs/catalog.spec.js`](Mobile/test/specs/catalog.spec.js)
verifica, na aba **Browse** do app:

1. Que a lista de produtos é exibida ao abrir o catálogo.
2. Que cada produto listado mostra nome e preço.
3. Que o campo de busca de produtos está presente na tela.

### Como rodar

O pipeline roda automaticamente a cada `push` ou `pull request` para a
branch `main`. Também pode ser disparado manualmente pela aba **Actions**
do GitHub, usando o botão **Run workflow**.

O pipeline, resumidamente:

1. Sobe um emulador Android no runner do GitHub Actions.
2. Instala o app a partir dos arquivos em `Mobile/splits/` (splits do
   pacote original, filtrados para a arquitetura x86_64 — ver nota
   técnica abaixo).
3. Executa os testes com `npm test` dentro da pasta `Mobile/`.
4. Salva screenshots, XML da tela e o log do Appium como artefato do job
   em caso de falha, disponíveis para download na página do run.

### Rodando localmente (opcional)

Requer Android SDK, um emulador ou dispositivo Android configurado, Node.js
e Appium instalados.

```bash
cd Mobile
npm install
npx appium driver install uiautomator2
npx appium &
adb install-multiple -r splits/*.apk
npm test
```

### Nota técnica — instalação do app

O app foi obtido como um pacote `.apks` (bundle de splits). Como o
Appium não instala esse formato diretamente, o app foi decomposto em
`Mobile/splits/`, mantendo apenas os arquivos necessários para a
arquitetura x86_64 (usada pelo emulador do GitHub Actions). Duas
variantes internas duplicadas do app (voltadas a versões antigas do
Android) foram excluídas da instalação — ver a lista de exclusão no
próprio `mobile-tests.yml`.

A instalação é feita via `adb install-multiple`, e não pelo parâmetro
padrão `appium:app`, por conta dessa decomposição em múltiplos arquivos.