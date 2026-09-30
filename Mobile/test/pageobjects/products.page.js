class ProductsPage {
    get productCards() {
        return $$('//*[contains(@resource-id,"productDetails")]');
    }

    get searchInput() {
        return $('//*[contains(@resource-id,"searchInput")]');
    }

    async getProductCount() {
        const cards = await this.productCards;
        return cards.length;
    }

    async firstProductName() {
        const cards = await this.productCards;
        const nameEl = await cards[0].$('android.widget.TextView');
        return nameEl.getText();
    }

    async openFirstProduct() {
        const cards = await this.productCards;
        await cards[0].click();
    }
}

module.exports = new ProductsPage();