import React, { Component } from 'react'
// import { Menu, Icon } from "@icedesign/base";
import { Button, Input,Icon ,MenuButton} from '@alifd/next';

const { Item } = MenuButton;
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>);
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
           <Button type="normal">Normal</Button> &nbsp;&nbsp;
    <Button type="primary">Prirmary</Button> &nbsp;&nbsp;
    <Button type="secondary">Secondary</Button>
    <br /><br />
    <Button type="normal" text>Normal</Button> &nbsp;&nbsp;
    <Button type="primary" text>Primary</Button> &nbsp;&nbsp;
    <Button type="secondary" text>Secondary</Button>
    <br /><br />
    <Button type="normal" warning>Normal</Button> &nbsp;&nbsp;
    <Button type="primary" warning>Primary</Button> &nbsp;&nbsp;
    <Icon type="loading" />
    <MenuButton label="Document Edit">{menu}</MenuButton>&nbsp;&nbsp;
    <MenuButton type="primary" label="Document Edit">{menu}</MenuButton>&nbsp;&nbsp;
    <MenuButton type="secondary" label="Document Edit">{menu}</MenuButton><br /><br />
    <MenuButton text label="Document Edit">{menu}</MenuButton>&nbsp;&nbsp;
    <MenuButton text type="primary" label="Document Edit">{menu}</MenuButton>&nbsp;&nbsp;
    <MenuButton text type="secondary" label="Document Edit">{menu}</MenuButton>
            </div>  
        )
    }
}