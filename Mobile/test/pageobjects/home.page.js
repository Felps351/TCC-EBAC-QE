const { findFirst } = require('../utils/finder');

class HomePage {
    async goToLogin() {
        const btnProfile = await findFirst([
            '~profile', '~Profile', '~tab-profile', '~perfil', '~Perfil',
            '//*[contains(@content-desc,"rofile")]',
            '//*[contains(@content-desc,"erfil")]',
            '//*[@text="Profile" or @text="Perfil" or @text="Account" or @text="Conta"]'
        ], 45000, 'Aba Perfil');
        await btnProfile.click();
    }

    async goToBrowse() {
        const btnBrowse = await findFirst([
            '~browse', '~Browse', '~tab-browse', '~explorar', '~Explorar',
            '//*[contains(@content-desc,"rowse")]',
            '//*[contains(@content-desc,"xplorar")]',
            '//*[@text="Browse" or @text="Explorar"]'
        ], 45000, 'Aba Browse');
        await btnBrowse.click();
    }
}

module.exports = new HomePage();