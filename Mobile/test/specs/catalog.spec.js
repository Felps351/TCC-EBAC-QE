const HomePage = require('../pageobjects/home.page');
const ProductsPage = require('../pageobjects/products.page');
const Screen = require('../utils/screen');

describe('Catálogo de Produtos', () => {
    before(async () => {
        await HomePage.goToBrowse();
        await browser.waitUntil(
            async () => (await ProductsPage.productCards).length > 0,
            {
                timeout: 20000,
                timeoutMsg: 'Nenhum produto apareceu na aba Browse depois de 20s'
            }
        );
    });

    it('exibe a lista de produtos ao abrir a aba Browse', async () => {
        const cards = await ProductsPage.productCards;
        expect(cards.length).toBeGreaterThan(0);
    });

    it('exibe nome e preço em cada produto listado', async () => {
        const cards = await ProductsPage.productCards;
        const nome = await ProductsPage.firstProductName();

        expect(nome).not.toBe('');
        await expect(cards[0]).toBeDisplayed();
    });

    it('permite buscar produtos pelo campo de busca', async () => {
        await expect(ProductsPage.searchInput).toBeDisplayed();
    });

    afterEach(async () => {
        await Screen.dump('depois-do-teste');
    });
});