const path = require('path');
const fs = require('fs');

exports.config = {
    runner: 'local',
    port: 4723,
    path: '/',
    specs: [
        // Por enquanto só o login. Depois que passar, adicione o checkout/catálogo.
        './test/specs/login.spec.js'
    ],
    maxInstances: 1,
    bail: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Android Emulator',
        'appium:app': path.join(__dirname, 'loja-ebac.apk'),
        'appium:appWaitActivity': '*',
        'appium:appWaitDuration': 60000,
        'appium:newCommandTimeout': 240,
        'appium:autoGrantPermissions': true,
        'appium:adbExecTimeout': 120000,
        'appium:uiautomator2ServerInstallTimeout': 120000,
        'appium:uiautomator2ServerLaunchTimeout': 120000
    }],
    logLevel: 'info',
    framework: 'mocha',
    reporters: ['spec'],
    waitforTimeout: 30000,
    connectionRetryTimeout: 180000,
    connectionRetryCount: 3,
    mochaOpts: {
        ui: 'bdd',
        timeout: 240000
    },
    afterTest: async function (test, context, { passed }) {
        if (passed) return;
        try {
            const stamp = Date.now();
            await browser.saveScreenshot(`./error-${stamp}.png`);
            const source = await browser.getPageSource();
            fs.writeFileSync(`./error-${stamp}.xml`, source);
            const pkg = await driver.getCurrentPackage();
            const activity = await driver.getCurrentActivity();
            console.log(`=== TELA ATUAL: ${pkg} / ${activity} ===`);
            console.log('=== PAGE SOURCE (início) ===\n' + source.slice(0, 8000));
        } catch (e) {
            console.log('Não foi possível coletar evidências:', e.message);
        }
    }
};