const { findFirst } = require('../utils/finder');

class LoginPage {
    async getEmailInput() {
        return findFirst([
            '~email', '~Email', '~E-mail',
            '//*[@resource-id="email"]',
            '(//android.widget.EditText)[1]'
        ], 30000, 'Campo de e-mail');
    }

    async getPasswordInput() {
        return findFirst([
            '~password', '~Password', '~senha', '~Senha',
            '//*[@resource-id="password"]',
            '(//android.widget.EditText)[2]'
        ], 30000, 'Campo de senha');
    }

    async getLoginButton() {
        return findFirst([
            '~btnLogin', '~Login', '~Entrar',
            '//*[@clickable="true"][.//*[@text="Login" or @text="LOGIN" or @text="Entrar" or @text="ENTRAR"]]',
            '//*[@text="Login" or @text="LOGIN" or @text="Entrar" or @text="ENTRAR"]'
        ], 30000, 'Botão de login');
    }

    async login(email, password) {
        const inputEmail = await this.getEmailInput();
        await inputEmail.setValue(email);

        const inputPassword = await this.getPasswordInput();
        await inputPassword.setValue(password);

        try { await driver.hideKeyboard(); } catch (e) { /* teclado já fechado */ }

        const btnLogin = await this.getLoginButton();
        await btnLogin.click();
    }

    async waitFormClosed(timeout = 20000) {
        await browser.waitUntil(async () => {
            const fields = await $$('(//android.widget.EditText)[1]');
            return fields.length === 0 || !(await fields[0].isDisplayed());
        }, { timeout, timeoutMsg: 'A tela de login continuou aberta após enviar as credenciais' });
    }
}

module.exports = new LoginPage();