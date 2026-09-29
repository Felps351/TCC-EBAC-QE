class BrowsePage {

    // Mapeamento dos elementos da tela
    get firstProduct() {
        return $('~Ingrid Running Jacket');
    }

    // Métodos de interação
    async selectFirstProduct() {
        // Aguarda até 30 segundos para o elemento ser renderizado no emulador
        await this.firstProduct.waitForDisplayed({ timeout: 30000 });
        await this.firstProduct.click();
    }

}

module.exports = new BrowsePage();