import React, { Component } from 'react'
import classname            from 'classname'
import { WingBlank }        from 'antd-mobile'
import Header               from '@c/header'
import '@s/detail.less'
export default class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
      let { title, content } = this.props.location.state
      this.setState({
        title,
        content
      })
    }
    render() {
      let { title, content } = this.state
        return (
          <div className="d-container">
            <Header/>
            <div className="img-box">
              <div className="essay-title">{title}</div>
            </div>
            <WingBlank>
              <p>{ content }</p>
            </WingBlank>
          </div>  
        )
    }
}