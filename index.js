const path = require('path');
const fs = require('fs-extra');
const inlineFormatter = require('stylelint-formatter-pretty');
const createTemplate = require('./createTemplate');
const globalConfig = {
    filename: 'stylelint-report.html'
};

const parser = results => {
    if (Array.isArray(results)) {
        fs.ensureDir(path.dirname(globalConfig.filename)).then(() => fs.writeFile(globalConfig.filename, createTemplate(results)));
        return inlineFormatter(results);
    }
    return '';
};

module.exports = function(config = {}){
    Object.assign(globalConfig, config);
    return parser;
};
