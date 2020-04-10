#!/usr/bin/env node

//We are using node executables

const program = require('commander');
const pkg = require('../package.json');

program
    .version(pkg.version)
    .command('key', 'Manage API Key -- https://nomics.com')
    .command('check', 'Check Coin Price Info')
    .parse(process.argv);


console.log("hello from cryptotrackers")