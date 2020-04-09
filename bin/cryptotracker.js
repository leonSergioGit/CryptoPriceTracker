#!/usr/bin/env node

//We are using node executables

const program = require('commander');
const pkg = require('../package.json');

program
    .version(pkg.version)
    .command('key', 'Manage API Key -- https://nomics.com')
    .parse(process.argv);


console.log("hello from cryptotrackers")