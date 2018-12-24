import Koa            from 'koa'
import middlewareLoader from './utils/middlewareLoader'
export default function() {
	const app = new Koa()
	middlewareLoader(app)
	return app
}
