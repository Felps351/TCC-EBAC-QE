class LoginPage {
    get inputEmail() { 
        return $('//*[@content-desc="email" or @text="E-mail" or @resource-id="email"]'); 
    }
    get inputPassword() { 
        return $('//*[@content-desc="password" or @text="Senha" or @resource-id="password"]'); 
    }
    get btnLogin() { 
        return $('//*[@content-desc="btnLogin" or @text="Login" or @text="Entrar"]'); 
    }

    async login(email, password) {
        await this.inputEmail.waitForDisplayed({ timeout: 30000 });
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
}

module.exports = new LoginPage();