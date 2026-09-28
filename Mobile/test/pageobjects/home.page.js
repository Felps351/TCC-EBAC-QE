class HomePage {
    get btnProfile() { return $('~profile'); }
    get btnBrowse() { return $('~browse'); }

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