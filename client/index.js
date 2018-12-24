
import React                     from 'react'
import { hydrate }               from 'react-dom'
import { Router, Switch }                from 'react-router-dom'
import { Provider }              from 'react-redux'
import createStore               from './store'
import App                       from './app'
import { createBrowserHistory }  from 'history';
import '@s/index.less'
const store              = createStore(state)
const history            = createBrowserHistory()
const state              = window._INIT_STATE_
hydrate(
  <Provider store={store}>
    <Router history={history}>
        <App/>
    </Router>
  </Provider>
  , 
  document.getElementById("app")
)
if(module.hot){
  module.hot.accept();
}


