import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DatePickerView } from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker-view/locale/en_US';
export default class DatePicker extends Component {
  constructor() {
    super()
    this.state = {
      value: null,
    };
  }
  onChange = (value) => {
    console.log(value);
    this.setState({ value });
  };
  onValueChange = (...args) => {
    console.log(args);
  };
  render() {
    return (<div>
      <div className="sub-title">Start datetime</div>
      <DatePickerView
        value={this.state.value}
        onChange={this.onChange}
        onValueChange={this.onValueChange}
      />
      <div className="sub-title">End datetime</div>
      <DatePickerView
        locale={enUs}
        value={this.state.value}
        onChange={this.onChange}
        onValueChange={this.onValueChange}
      />
    </div>);
  }
}