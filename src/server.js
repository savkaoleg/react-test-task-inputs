import express from 'express'
import path from 'path'
import React from 'react'
const fs = require('fs')

import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './store/configureStore'
import { renderToString } from 'react-dom/server'

import Container from './container'

const app = express()

app.use(express.static(path.resolve(__dirname, '../build')))

app.get('/*', (req, res) => {

    const css = '' + fs.readFileSync('build/bundle.css', 'utf8')

    const store = configureStore()
    const jsx = (
          <ReduxProvider store={store}>
            <Container />
          </ReduxProvider>
    )
    const reactDom = renderToString(jsx)

    res.writeHead(200, { 'Content-Type': 'text/html'})
    res.end(htmlTemplate(reactDom, css))
})


app.listen(2048)

function htmlTemplate (reactDom, css) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Title</title>
            <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width">
            <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1" media="(device-height: 568px)">
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
            <style>${ css }</style>
        </head>
        <body>
            <div id="index">${ reactDom }</div>
            <script src="./bundle.js"></script>
        </body>
        </html>
    `
}
