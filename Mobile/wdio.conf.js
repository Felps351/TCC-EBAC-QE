exports.config = {
    runner: 'local',
    port: 4723,
    path: '/',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    bail: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Android Emulator',
        'appium:appPackage': 'br.com.lojaebac',
        'appium:appActivity': 'br.com.lojaebac.MainActivity',
        'appium:newCommandTimeout': 240,
        'appium:autoGrantPermissions': true
    }],
    logLevel: 'warn',
    framework: 'mocha',
    reporters: ['spec'],
    waitforTimeout: 30000,
    connectionRetryTimeout: 180000,
    connectionRetryCount: 3,
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}