import React        from 'react'
import Loadable     from 'react-loadable'
import { Route }    from 'react-router-dom'
import loading      from './components/loading'

const Home = Loadable({
    loading,
    loader: () => import('./pages/home')
})
const About = Loadable({
    loading,
    loader: () => import('./pages/about')
})
const DatePicker = Loadable({
    loading,
    loader: () => import('./pages/datePicker')
})
const Swiper = Loadable({
    loading,
    loader: () => import('./pages/swiper')
})
const Mine = Loadable({
    loading,
    loader: () => import('./pages/mine')
})
const Detail = Loadable({
    loading,
    loader: () => import('./pages/detail/detail.js')
})

const Admin = Loadable({
    loading,
    loader: () => import('./pages/admin/index.js')
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



