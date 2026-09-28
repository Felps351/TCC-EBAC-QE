class HomePage {
    get btnProfile() { 
        return $('~profile, ~perfil, //android.widget.TextView[@text="Perfil"], //android.widget.TextView[@text="Account"]'); 
    }

    get btnBrowse() { 
        return $('~browse, ~explorar, //android.widget.TextView[@text="Browse"]'); 
    }

    async goToLogin() {
        await this.btnProfile.waitForDisplayed({ timeout: 60000 });
        await this.btnProfile.click();
    }

    async goToBrowse() {
        await this.btnBrowse.waitForDisplayed({ timeout: 60000 });
        await this.btnBrowse.click();
    }
}

module.exports = new HomePage();