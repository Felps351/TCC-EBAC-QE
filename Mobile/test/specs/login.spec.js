const homePage = require('../pageobjects/home.page');
const loginPage = require('../pageobjects/login.page');

describe('Fluxo de Login', () => {
    it('deve logar com sucesso usando credenciais válidas', async () => {
        // 1. Acessa a tela de login a partir da Home
        await homePage.goToLogin();

        // 2. Preenche os dados e realiza o login
        await loginPage.login('cliente@ebac.com', '123456');
    });
});