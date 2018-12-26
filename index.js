require('babel-register')
require('babel-polyfill')
require('ignore-styles').default(['.less', '.css', ".scss"]);
const createServer = require('./server/app.js').default
const symbols       = require('log-symbols');
const server       = createServer()
const config       = require('./config/default.js').default
server.listen(config.port, () => {
	console.log(`${symbols.success} Server starting at %d`, config.port)
})
