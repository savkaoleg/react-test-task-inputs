require('babel-register')({
    presets: [ 'env', 'react', 'es2015', 'stage-0']
})
require('ignore-styles').default(['.sass', '.scss'])
require('./src/server')

