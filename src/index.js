const yargs = require("yargs");
const config = require('../config.json');

const start = require('./start.js')
const checkout = require('./checkout.js')
const update = require('./update.js')
const build = require('./build.js')


const options = yargs
    .usage('Usage: mf-utility <command> [options]')
    .command('checkout', 'checkout module federation repositories', function (yargs) {
        let argv = yargs
            .usage('usage: mf checkout [options]')
            .option("moduleVersion", {
                alias: 'mv',
                describe: "choose version to checkout, if exact version " +
                    "doesn't exist in some module checkout to latest minor version.If major version doesn't match throw an error ",
                type: "string",
                demandOption: true
            })
            .argv
        checkout(yargs, argv)
    })
    .command('update', 'update module federation repositories', function (yargs) {
        let argv = yargs
            .usage('usage: mf update')
            .wrap(null)
            .argv
        update(yargs, argv)
    })
    .command('start', 'start module federation repositories', function (yargs) {
        let argv = yargs
            .usage('usage: mf start [options]')
            .wrap(null)
            .argv
        start(yargs, argv, 2)
    })
    .command('build', 'build local module federation repositories', function (yargs) {
        let argv = yargs
            .usage('usage: mf build')
            .wrap(null)
            .argv
        build(yargs, argv)
    })
    .command('config', 'set config for utility', function (yargs) {
        let argv = yargs
            .usage('usage: mf config [path-to-config]')
            .wrap(null)
            .argv
        build(yargs, argv)
    })
    .argv;
