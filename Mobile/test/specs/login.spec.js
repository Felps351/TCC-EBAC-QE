const HomePage = require('../pageobjects/home.page');
const LoginPage = require('../pageobjects/login.page');

describe('Fluxo de Login', () => {
    it('deve logar com sucesso usando credenciais válidas', async () => {
        await HomePage.goToLogin();
        await LoginPage.login('cliente@ebac.art.br', '123456');
        await LoginPage.waitFormClosed();
    });
});