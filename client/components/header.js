import React, { Component } from 'react'
import { withRouter }      from 'react-router-dom'
import { connect }          from 'react-redux'
import { 
    Popover,
    ActionSheet,
  } from 'antd-mobile';
import '@s/components/header.less'
const Item = Popover.Item;
const myImg = src => <img src={src} className="am-icon am-icon-xs" alt="" />;
@connect(state => state)
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }
    dataList = [
        { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
        { url: 'cTTayShKtEIdQVEMuiWt', title: '朋友圈' },
        { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
        { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
      ].map(obj => ({
        icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
        title: obj.title,
      }));

    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        })
    }
    showShareActionSheet = () => {
        ActionSheet.showShareActionSheetWithOptions({
            options: this.dataList
        },(buttonIndex) => {
          return 
        });
    }
    onSelect = (opt) => {
        this.setState({
          visible: false,
        }, () => {
          let { value } = opt.props
          value === 'share' ? this.showShareActionSheet() :
          value === 'test'  ? this.getList()              :
          this.changeRoute(opt.props.value)
        })
    }
    changeRoute = (path, params) => {
        this.props.history.push(path,params)
    }
    render() {
        return (
            <div className="header-container">
                <div className="left-content"></div>
                <Popover
                    visible={this.state.visible}
                    overlay={[
                        (<Item value="/" icon={myImg('http://p0.meituan.net/scarlett/c2bad99a527ca376fd878afff13a7eaa10815.png')} >Home</Item>),
                        (<Item value="/about" icon={myImg('http://p0.meituan.net/scarlett/aeabcd5af02582d183e6669e39db14eb9857.png')} >About</Item>),
                        (<Item value="/mine" icon={myImg('http://p0.meituan.net/scarlett/9895f27aae94ea65d6d64c339706fc3f10361.png')} >Mine</Item>),
                        (<Item value="share" icon={myImg('http://p0.meituan.net/scarlett/0f001f90108061b0bc7313f6834f19c311357.png')} >Share</Item>),
                    ]}
                    onVisibleChange={this.handleVisibleChange}
                    onSelect={this.onSelect}
                >
                    <img className="menu-img" src="http://p0.meituan.net/scarlett/e3af60d14be7729ecb5c3f9062acd8a82426.png"/>
                </Popover>
            </div>  
        )
    }
}
export default withRouter(Header)