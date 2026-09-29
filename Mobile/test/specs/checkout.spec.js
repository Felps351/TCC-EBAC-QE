const ProloguePage = require('../pageobjects/prologue.page');
const HomePage = require('../pageobjects/home.page');
const BrowsePage = require('../pageobjects/browse.page');
const ProductPage = require('../pageobjects/product.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutPage = require('../pageobjects/checkout.page');
const LoginPage = require('../pageobjects/login.page');

describe('Fluxo E2E de Compra no Android', () => {

    it('Deve realizar o login, selecionar um produto, adicionar endereço e finalizar a compra', async () => {
        // 1. Passa pela tela inicial (Prologue) se estiver visível
        if (typeof ProloguePage.passPrologue === 'function') {
            await ProloguePage.passPrologue();
        }

        // 2. Navega até a aba de produtos
        await HomePage.goToBrowse();

        // 3. Fluxo de login e navegação
        // (Ajuste as chamadas abaixo de acordo com as funções do seu projeto)
        await BrowsePage.selectFirstProduct();
        await ProductPage.addToCart();
        await CartPage.goToCheckout();
        
        await LoginPage.login('cliente@ebac.com', '123456');
        await CheckoutPage.finishCheckout();
    });

});