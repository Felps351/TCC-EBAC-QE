class LoginPage {
    get inputEmail() { return $('~email'); }
    get inputPassword() { return $('~password'); }
    get btnLogin() { return $('~btnLogin'); }

    async login(email, password) {
        // Aguarda até 20 segundos para o campo de e-mail estar visível na tela
        await this.inputEmail.waitForDisplayed({ timeout: 20000 });
        
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
}

module.exports = new LoginPage();