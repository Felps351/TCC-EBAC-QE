class HomePage {
    get btnProfile() { 
        return $('//*[@content-desc="profile" or @content-desc="tab-profile" or @text="Perfil" or @text="Profile" or @text="Account"]'); 
    }

    get btnBrowse() { 
        return $('//*[@content-desc="browse" or @content-desc="tab-browse" or @text="Browse" or @text="Explorar"]'); 
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