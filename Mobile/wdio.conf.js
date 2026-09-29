const path = require('path');
const fs = require('fs');
const Screen = require('./test/utils/screen');

exports.config = {
    runner: 'local',
    port: 4723,
    path: '/',
    specs: [
        './test/specs/login.spec.js'
    ],
    maxInstances: 1,
    bail: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Android Emulator',
            'appium:appPackage': 'br.com.lojaebac',
            'appium:appActivity': '.MainActivity',
            'appium:noReset': true,
        'appium:appWaitActivity': '*',
        'appium:appWaitDuration': 60000,
        'appium:newCommandTimeout': 240,
        'appium:autoGrantPermissions': true,
        'appium:adbExecTimeout': 120000,
        'appium:uiautomator2ServerInstallTimeout': 120000,
        'appium:uiautomator2ServerLaunchTimeout': 120000
    }],
    logLevel: 'warn',
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
            fs.writeFileSync(`./error-${stamp}.xml`, await browser.getPageSource());
        } catch (e) {
            console.log('### Não foi possível salvar as evidências:', e.message);
        }
        await Screen.dump('FALHA');
    }
};