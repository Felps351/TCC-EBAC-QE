const { findFirst } = require('../utils/finder');

class ProloguePage {
    async tapEnterStoreAddress() {
        const btn = await findFirst([
            '//*[@resource-id="com.woocommerce.android:id/button_login_store"]',
            '//*[@clickable="true" and (contains(@text,"tore address") or contains(@text,"tore Address") or contains(@text,"endereço da loja") or contains(@text,"Endereço da loja"))]',
            '//*[@clickable="true" and contains(@text,"tore")]'
        ], 45000, 'Botão "Enter your store address"');
        await btn.click();
    }
}

module.exports = new ProloguePage();