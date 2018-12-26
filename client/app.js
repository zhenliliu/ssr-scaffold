import React        from 'react'
import Loadable     from 'react-loadable'
import { Route }    from 'react-router-dom'
import loading      from './components/loading'

const Exmple = Loadable({
    loading,
    loader: () => import('./pages/exmple')
})
let route = (
    <div>
        <Route exact path="/" component={Exmple}/>
        <Route path="/home" component={Exmple}/>
    </div>
) 
export default () => {
    return route
}



