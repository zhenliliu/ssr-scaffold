import { connect }            from 'react-redux'
import React, { Component }   from 'react'
import { bindActionCreators } from 'redux'
import actions                from '@a'
import { distanceInWords } from 'date-fns'
import Header                 from '@c/header'
import { 
  Card,
  WingBlank,
  WhiteSpace,
} from 'antd-mobile';
import '@s/home.less'
import homeData from '../mock/homeData'
@connect(state => state.home, dispatch => bindActionCreators({
  ...actions.get
},dispatch))
export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      data: homeData
    };
  }
  
  getList =() => {
    this.props.get('api/getList', {
      userId: 1
    }).then(({data}) => { 
      console.log('res', data)
      alert(JSON.stringify(data))
    }).catch((error) => {
      console.log('error', error)
    })
  }
  componentDidMount() {
    
  }

  changeRoute = (path, params) => {
    let { history } = this.props
    history.push(path, params)
  }

  render() {
    let { data } = this.state
    return (
      <div className="home-container">
        <div className="top-content">
          <Header/>
          <div className="title-box">
            Blog
          </div>
        </div>
        <div className="content-box">
            {
              data.map((item, index) => {
                return (
                  <WingBlank size="lg" key={index}>
                    <WhiteSpace size="lg" />
                    <Card onClick={() => this.changeRoute('/detail', item)}>
                      <Card.Header
                        title={<span className="nick-name">{item.nickName}</span>}
                        thumb={<img  className="avatar" src={item.avatarUrl}/>}
                        extra={<span className="title">{item.title}</span>}
                      />
                      <Card.Body>
                        <div className="card-content">{item.content}</div>
                      </Card.Body>
                      <Card.Footer 
                        content={<div></div>} 
                        extra={<span className="time">{distanceInWords(new Date(item.releaseTime), Date.now())}</span>} 
                      />
                    </Card>
                    <WhiteSpace size="lg" />
                  </WingBlank>
                )
              })  
            }
        </div>
      </div>
    )
  }
}