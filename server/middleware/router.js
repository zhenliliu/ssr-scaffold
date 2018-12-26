import fs         from 'fs'
import path       from 'path'
import routes     from './../routes'
export default (app) => {
    let controllerPath  = fs.readdirSync(path.resolve(__dirname, './../controllers'))
    let routeObj = {}
    for(let route in routes) {
        let method     = routes[route][0]
        let controller = routes[route][1]
        let action     = routes[route][2]
        let controllerFile
        routeObj[route] = {
            method,
            action,
        }
        let controllerCompletePath = path.resolve(__dirname, `./../controllers/${controller}.js`)
        try {
            if(controllerPath.includes(`${controller}.js`)) {
                controllerFile     = require(controllerCompletePath)
            } else {
                throw new Error(`Module ${controller}.js is not defined at dir ${path.resolve(__dirname, './../controllers')}`)
            }
        } catch(error) {
            throw error
        }
        let Controller = controllerFile.default
        if(Controller) {
            routeObj[route]['Controller'] = Controller
        } else {
            throw new Error(`Controller ${controller} is not exported`)
        }
    }
    return async (ctx, next) => {
        let { url, method } = ctx.request
        let query           = {}
        let queryString     = ""
        if(url.includes('?')){
            queryString     = url.split('?')[1]
            let paramsArr   = queryString.split("&")
                url         = url.split('?')[0]
            for(let i = 0, len = paramsArr.length; i < len; i++){
                let key_val = paramsArr[i].split("=")
                query[key_val[0]] = key_val[1]
            }
        }
        if(/^(?!\/(js|css|images|assets)).*\//.test(url)) {
            let routeTarget = routeObj[url]
            if(routeTarget && routeTarget.method.toUpperCase() === method) {
                let { Controller, action } = routeTarget
                let controller             =  new Controller(app)
                if(controller[action]) {
                    controller.ctx         = ctx
                    controller.query       = query
                    controller.queryString = queryString
                    await controller[action].call(controller, ctx, next)
                }else {
                    throw new Error(`Method ${action} is not defined at Controller ${Controller}`)
                }
            } else{
                console.warn('路由没有定义,请检查%s下是否包含%s', path.resolve(__dirname,'../routes/index.js'), `'${ctx.url}': ["${method.toLowerCase()}","${routeTarget.Controller.name.toLowerCase()}", "${routeTarget.action}"]`)
            }
        }
        await next()
    }
}