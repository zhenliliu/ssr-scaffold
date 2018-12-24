import React, { Component } from 'react'
import BounceLoader         from 'react-spinners/BounceLoader';
import './../style/components/loading.less'
export default class Loading extends Component {
    render() {
        return (
            <div className="container">
                <BounceLoader
                    className="loading"
                    sizeUnit={"rem"}
                    size={1}
                    color={'#236B8E'}
                    />
                <div className="loading-text">
                    加载中...
                </div>
            </div>
        )
    }
}