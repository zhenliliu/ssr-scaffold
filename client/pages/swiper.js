import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
export default class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: ['1', '2', '3'],
          imgHeight: 176,
        }
    }
    comonentDidMount() {
      
    }
    render() {
        return (
            <div className="container">
                <Carousel
                  autoplay={true}
                  infinite
                  beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                  afterChange={index => console.log('slide to', index)}
                >
                  {this.state.data.map(val => (
                    <a
                      key={val}
                      href="http://www.alipay.com"
                      style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                      <img src='http://p0.meituan.net/scarlett/1cd4e2db4aa9cee1924190b964ad838e35907.png'
                        alt=""
                        style={{ width: '100%', verticalAlign: 'middle' }}
                        onLoad={() => {
                          // fire window resize event to change height
                          window.dispatchEvent(new Event('resize'));
                          this.setState({ imgHeight: 'auto' });
                        }}
                      />
                    </a>
                  ))}
                </Carousel>
            </div>  
        )
    }
}