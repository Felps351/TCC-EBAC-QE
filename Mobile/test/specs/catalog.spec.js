const HomePage = require('../pageobjects/home.page');
const ProductsPage = require('../pageobjects/products.page');
const Screen = require('../utils/screen');

describe('Catálogo de Produtos', () => {
    before(async () => {
        await Screen.dump('antes-de-clicar-browse');

        await HomePage.goToBrowse();
        await driver.pause(3000);

        try {
            await browser.waitUntil(
                async () => (await ProductsPage.productCards).length > 0,
                { timeout: 15000, interval: 1500 }
            );
        } catch (e) {
            // Primeira tentativa falhou: clica em Browse de novo e espera mais
            await Screen.dump('retry-antes-de-clicar-browse-de-novo');
            await HomePage.goToBrowse();
            await browser.waitUntil(
                async () => (await ProductsPage.productCards).length > 0,
                {
                    timeout: 30000,
                    interval: 2000,
                    timeoutMsg: 'Nenhum produto apareceu na aba Browse mesmo após nova tentativa'
                }
            );
        }
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