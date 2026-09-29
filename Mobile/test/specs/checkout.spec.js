const HomeScreen = require('../pageobjects/home.screen');
const CartScreen = require('../pageobjects/cart.screen');
const CheckoutScreen = require('../pageobjects/checkout.screen');
const LoginScreen = require('../pageobjects/login.screen');

describe('Fluxo de Checkout no Mobile', () => {

    beforeEach(async () => {
        // Reinicia o estado da aplicação antes de cada teste
        await driver.reset();
    });

    it('deve realizar uma compra com sucesso preenchendo todos os dados obrigatórios', async () => {
        // 1. Autenticação do usuário
        await LoginScreen.login('cliente.teste@email.com', 'Senha123!');
        await expect(HomeScreen.screenTitle).toBeDisplayed();

        // 2. Seleção de produto e adição ao carrinho
        await HomeScreen.selectFirstProduct();
        await HomeScreen.addToCart();
        await expect(HomeScreen.cartBadgeCount).toHaveText('1');

        // 3. Navegação para o Carrinho
        await HomeScreen.goToCart();
        await expect(CartScreen.cartList).toBeDisplayed();
        await CartScreen.proceedToCheckout();

        // 4. Preenchimento do formulário de entrega
        await CheckoutScreen.fillShippingInformation({
            firstName: 'João',
            lastName: 'Silva',
            address: 'Av. Paulista, 1000',
            city: 'São Paulo',
            postalCode: '01310-100',
            country: 'Brasil'
        });

        // 5. Seleção da forma de pagamento e confirmação
        await CheckoutScreen.selectPaymentMethod('CreditCard');
        await CheckoutScreen.placeOrder();

        // 6. Validação do pedido finalizado
        await expect(CheckoutScreen.successHeader).toBeDisplayed();
        await expect(CheckoutScreen.successHeader).toHaveText('Pedido Realizado com Sucesso!');
    });

    it('deve exibir mensagem de erro ao tentar avançar no checkout sem preencher o endereço', async () => {
        await HomeScreen.selectFirstProduct();
        await HomeScreen.addToCart();
        await HomeScreen.goToCart();
        await CartScreen.proceedToCheckout();

        // Tenta avançar sem preencher os campos obrigatórios
        await CheckoutScreen.continueButton.click();

        // Validação da mensagem de erro
        await expect(CheckoutScreen.errorMessage).toBeDisplayed();
        await expect(CheckoutScreen.errorMessage).toHaveText('Por favor, preencha todos os campos obrigatórios.');
    });

});