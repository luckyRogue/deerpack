#!/usr/bin/env node
try {
    const argv = require('yargs').alias('n', 'name').boolean(['r']).argv;
    require('../index.js')(argv._[0], argv.n, argv.r);
    process.exit(0);
} catch (e) {
    process.exit(1);
}