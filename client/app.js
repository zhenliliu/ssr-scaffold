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
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/mine" component={Mine}/>
        <Route path="/about" component={About}/>
        <Route path="/datePicker" component={DatePicker}/>
        <Route path="/swiper" component={Swiper}/>
        <Route path="/detail" component={Detail}/>
        <Route path="/admin" component={Admin}/>
    </div>
) 
export default () => {
    return route
}



