@Library('libpipelines@master') _

hose {
    EMAIL = 'egeo'
    MODULE = 'st-monaco-editor'
    DEVTIMEOUT = 30
    RELEASETIMEOUT = 30
    REPOSITORY = 'st-monaco-editor'
    FOSS = true

    DEV = { config ->
        doUT(config)
        doDeploy(config)
        doPackage(config)
    }
}
