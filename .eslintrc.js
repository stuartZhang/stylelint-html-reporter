'use strict';

module.exports = {
  root: true,
  extends: [
      'minxing/eslint-config-node7x.js'
  ],
  rules: {
      'require-atomic-updates': 'off',
      'template-curly-spacing': 'off',
      'indent': ['error', 4, {
          SwitchCase: 0,
          ignoredNodes: ['TemplateLiteral'],
          VariableDeclarator: {
              var: 1,
              let: 1,
              const: 1
          }
      }]
  }
};
