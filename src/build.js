const config = require('../config.json');
const shell = require('shelljs');

module.exports = function build(yargs, argv) {
    console.log('building modules');

    for(let module of config.modules){
        if(module.isRemote)
            return

        shell.cd(module.path);
        shell.exec('npm run build');
    }
}