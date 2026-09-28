const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const BrowsePage = require('../pageobjects/browse.page');
const ProductPage = require('../pageobjects/product.page');
const CartPage = require('../pageobjects/cart.page');
const AddressPage = require('../pageobjects/address.page');
const CheckoutPage = require('../pageobjects/checkout.page');

describe('Fluxo E2E de Compra no Android', () => {
    it('Deve realizar o login, selecionar um produto, adicionar endereço e finalizar a compra', async () => {
        // 1. Navegar até a tela de login a partir da Home
        await HomePage.goToLogin();

        // 2. Realizar o Login
        await LoginPage.login('cliente@ebac.art.br', '123456');

        // 3. Navegar até o catálogo de produtos (Browse)
        await HomePage.goToBrowse();

        // 4. Escolher um produto na lista
        await BrowsePage.selectFirstProduct();

        // 5. Adicionar ao carrinho
        await ProductPage.addToCart();

        // 6. Tratar endereço (se não existir, cria um novo)
        if (await CartPage.btnAddAddress.isDisplayed()) {
            await CartPage.btnAddAddress.click();
            await AddressPage.fillAddress('Teste QA', '98998900', 'Rua EBAC', 'São Paulo', 'SP', '01000-000');
        }
        await CartPage.btnContinueToPayment.click();

        // 7. Finalizar o checkout
        await CheckoutPage.completePayment();

        // Asserção final
        await expect(CheckoutPage.successMessage).toBeDisplayed();
    });
});