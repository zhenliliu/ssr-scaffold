import bodyParser     from 'koa-bodyparser'
import session        from 'koa-session'
import statics        from 'koa-static'
import userAgent      from 'koa-useragent'
import path           from 'path'
import cacheControl   from 'koa-cache-control'
import logger         from './../middleware/logger'
import router         from './../middleware/router'
import redirect       from './../middleware/redirectTo'
import axios          from './../middleware/axios'
import staticCache    from 'koa-static-cache'
import webpack        from 'webpack'
import webpackDevMiddleware from 'koa-webpack-dev-middleware'
import webpackHotMiddleware from 'koa-webpack-hot-middleware'

import webpackConfig  from './../../webpack.dev'
const compiler = webpack(webpackConfig);
export default (app) => {
	app.use(logger())
	app.use(axios())
	app.use(userAgent)
	app.use(redirect())
	app.use(bodyParser())
	if(process.env.NODE_ENV === 'development') {
		app.use(webpackDevMiddleware(compiler, {
			noInfo: true,
			publicPath: webpackConfig.output.publicPath
		}));
		app.use(webpackHotMiddleware(compiler));
	}
	if(process.env.NODE_ENV === 'production') {
		app.use(cacheControl({
			maxAge: 12 * 3600
		}))
	}
	app.use(statics(path.join(__dirname, "../../dist")));
	app.use(router(app))
	
}