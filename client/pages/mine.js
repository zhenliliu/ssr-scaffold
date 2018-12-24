import React, { Component } from 'react'
import { Menu, Icon } from "@icedesign/base";
import Slider  from './slider'
import '@s/mine.less'
export default class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    onSelect = () => {

    }
    render() {
        return (
            <div className="container">
                    <Slider/>
            </div>  
        )
    }
}