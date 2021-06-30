const config = require('../config.json');
const shell = require('shelljs');

module.exports = function start(yargs, argv) {
    console.log('starting modules');

    for(let module of config.modules){
        if(module.isRemote)
            return

        shell.cd(module.path);
        shell.exec('npm run start');
    }

}