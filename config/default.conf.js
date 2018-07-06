exports.config = {

    specs: [
        './features/**/*.feature'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'firefox'
        },
        {
            maxInstances: 5,
            browserName: 'chrome'
        }
    ],
    sync: true,
    logLevel: 'result',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: 'http://google.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'cucumber',
    reporters: ['dot', 'spec'],
    cucumberOpts: {
        require: ['./features/step-definitions'],       
        backtrace: false,   
        compiler: [],       
        dryRun: false,     
        failFast: false,    
        format: ['pretty'],
        colors: true,       
        snippets: true,    
        source: true,     
        profile: [],       
        strict: false,     
        tags: [],          
        timeout: 20000,
        ignoreUndefinedDefinitions: false,
    }
}
