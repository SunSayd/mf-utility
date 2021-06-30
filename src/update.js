const config = require('../config.json');
const shell = require('shelljs');

module.exports = function update(yargs, argv) {
    console.log('updating modules');

    for(let module of config.modules){
        if(module.isRemote)
            return

        shell.cd(module.path);
        shell.exec('git fetch --tags');
    }

}