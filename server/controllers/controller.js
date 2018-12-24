import React              from 'react'
import fs                 from 'fs'
import path               from 'path'
import minifier           from 'html-minifier'
import { renderToString } from 'react-dom/server'
import { StaticRouter }   from 'react-router-dom'
import Loadable           from 'react-loadable'
import { getBundles }     from 'react-loadable/webpack'
import App                from './../../client/app'
import createStore        from './../../client/store'
import { Provider }       from 'react-redux'
import config             from './../../config/default'
let pathObj = {
    template: path.resolve(__dirname, './../view/index.html'),
    cssFile : path.resolve(__dirname, '../../dist/css'),
    jsFile  : path.resolve(__dirname, '../../dist/js'),
    componentsPath : path.resolve(__dirname, '../../client/pages'),
    remFile : path.resolve(__dirname, '../utils/rem.js'),
    statFile: path.resolve(__dirname, '../../client/store/state.json'),
    daoFile : path.resolve(__dirname, '../dao/')
}
const initState = (state) => {
    return `window._INIT_STATE_=${JSON.stringify(state).replace(/</g, '\\u003c')}`
}
export default class Controller{
    constructor() {
        let firstChart = this.constructor.name.substring(0,1)
        let lastChart  = this.constructor.name.substring(1)
        let constrollerName = `${firstChart.toLowerCase()}${lastChart}.js`
        let daoFileArr    = fs.readdirSync(pathObj.daoFile)
        if(daoFileArr.includes(constrollerName)) {
            this.dao = require(`${pathObj.daoFile}/${constrollerName}`).default
        }
    }
    
    async send(data) {
        this.ctx.body = data
    }
    async render(props) {
        try{
            const store = createStore(props)
            const state = store.getState()
            let modules = []
            let cssFile = []
            let cssArr  = []
            let template     = fs.readFileSync(pathObj.template, 'utf-8')
            let rem          = fs.readFileSync(pathObj.remFile, 'utf-8')
            if ( process.env.NODE_ENV === 'production') {
                cssFile      = fs.readdirSync(pathObj.cssFile)
                cssArr       = cssFile.map(path => {
                    if(path.includes("index")) {
                        return `<link rel='stylesheet' href='css/${path}'></script>`
                    }
                })
            }
            let jsFile       = fs.readdirSync(pathObj.jsFile)
            let appHtml      = renderToString(
                <Loadable.Capture report={moduleName => modules.push(moduleName)}>
                    <StaticRouter context={{}} location={this.ctx.url}>
                        <Provider store={store}>
                            <App props={state}/>
                        </Provider>
                    </StaticRouter>
                </Loadable.Capture>
            )
            let baseScript = jsFile.map(path => {
                if(/^(?!\d.*)/.test(path)) {
                    return `
                        <script src="js/${path}"></script>
                    `
                }
            })
            let bundles = getBundles(require('./../json/react-loadable.json'), modules);
            let scripts = bundles.filter(bundle => bundle.file.endsWith('.js'));
            let html= template.replace('${app}',appHtml)
            .replace('${title}', config.siteTitle)
            .replace('${script-content}',scripts.map(script => `<script src="${script.file}"></script>`).join('\n'))
            .replace('${css-content}', cssArr.join('\n'))
            .replace('${rem-content}',`<script>${rem}</script>`)
            .replace('${init-state}', `<script>${initState(state)}</script>`)
            .replace('${script-base}', baseScript.join("\n"))
            this.ctx.body = minifier.minify(html,{removeComments: true,collapseWhitespace: true,minifyJS:true, minifyCSS:true})
		} catch(e) {
			console.log(e)
		}
    }
  
}