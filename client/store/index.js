import { createStore, applyMiddleware }         from 'redux'
import reducers                                 from './../reducers'
import AxiosCreator                             from './../middlewares/axios'

const middlewares   = [
	AxiosCreator({
		baseURL: '/',
		timeout: 20 * 1000
	})
    
]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
export default (initState) => {
	const store = createStoreWithMiddleware(reducers, initState)
	if (module.hot) {
		module.hot.accept('../reducers', () => {
		  const nextRootReducer = require('../reducers/index');
		  store.replaceReducer(nextRootReducer);
		});
	}
	return store
}