import React, { Component }   from 'react'
import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'
import { Button }             from 'antd';
import actions                from '@a'
import "@s/home.less"
@connect(state => state, dispatch => bindActionCreators({
    ...actions.get,
    ...actions.home
},dispatch))
export default class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            loading: false,
            iconLoading: false,
        }
    }
    componentDidMount() {
        console.log('this.props', this.props)
    }
    enterLoading = () => {
        this.setState({ loading: true });
    }
    
    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    }
    render() {
        return (
            <div className="container">
                <div className="top">
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </div>
                <div className="bottom">
                    <Button type="primary" loading>
                        Loading
                    </Button>
                    <Button type="primary" size="small" loading>
                        Loading
                    </Button>
                    <br />
                    <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                        Click me!
                    </Button>
                    <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
                        Click me!
                    </Button>
                    <br />
                    <Button shape="circle" loading />
                    <Button type="primary" shape="circle" loading />
                </div>
            </div>  
        )
    }
}