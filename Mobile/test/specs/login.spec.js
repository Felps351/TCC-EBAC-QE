const ProloguePage = require('../pageobjects/prologue.page');
const { findFirst } = require('../utils/finder');
const Screen = require('../utils/screen');

describe('Exploração do login (app WooCommerce)', () => {
    it('avança pelo fluxo de endereço da loja e registra as telas', async () => {
        await Screen.dump('1-tela-inicial');

        await ProloguePage.tapEnterStoreAddress();
        await Screen.dump('2-apos-tocar-endereco-da-loja');

        const inputStore = await findFirst(['//android.widget.EditText'], 30000, 'Campo do endereço da loja');
        await inputStore.setValue('lojaebac.ebaconline.art.br');
        try { await driver.hideKeyboard(); } catch (e) { /* teclado já fechado */ }
        await Screen.dump('3-endereco-preenchido');

        const btnContinue = await findFirst([
            '//*[@clickable="true" and (contains(@text,"Continue") or contains(@text,"CONTINUE") or contains(@text,"Continuar") or contains(@text,"CONTINUAR"))]',
            '//android.widget.Button[last()]'
        ], 20000, 'Botão Continuar');
        await btnContinue.click();

        await driver.pause(8000);
        await Screen.dump('4-apos-continuar');
    });
});