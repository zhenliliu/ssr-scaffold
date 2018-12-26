import React        from 'react'
import Loadable     from 'react-loadable'
import { Route }    from 'react-router-dom'
import loading      from './components/loading'

const Home = Loadable({
    loading,
    loader: () => import('./pages/home')
})
let route = (
    <div>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
    </div>
) 
export default () => {
    return route
}



