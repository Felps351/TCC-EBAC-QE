exports.config = {
    runner: 'local',
    port: 4723,
    path: '/',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Android Emulator',
        'appium:app': './loja-ebac.apk',
        'appium:appWaitActivity': '*',
        'appium:newCommandTimeout': 240,
        'appium:autoGrantPermissions': true
    }],
    logLevel: 'info',
    framework: 'mocha',
    reporters: ['spec'],
    waitforTimeout: 60000,
    mochaOpts: {
        ui: 'bdd',
        timeout: 300000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retry }) {
        if (!passed) {
            await browser.saveScreenshot(`./error-${Date.now()}.png`);
        }
    }
}