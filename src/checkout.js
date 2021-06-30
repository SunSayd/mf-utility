const config = require('../config.json');
const shell = require('shelljs');


module.exports = function checkout(yargs, argv) {

    let coreVersion =  require(`${config.coreModule.path}/package.json`).version;
    let versionToCheckout = argv.moduleVersion.split('.');

    if(versionToCheckout.length < 3) {
        console.error('version should be in semver format, example: major.minor.patch')
    }

    for(let module of config.modules){

        if(module.isRemote)
            return

        let moduleVersion = require(`${module.path}/package.json`).version;

    }
}

