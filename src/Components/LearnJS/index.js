import React, { Component } from 'react';
import {findDOMNode} from 'react-dom'
import ModalHoc from './../Public/HOC/index';
import { Table,Button } from 'antd';
import classnames  from 'classnames';
// import { Resizable } from 'react-resizable';
import moment from 'moment';
import Data from '../Public/data'
import style from './css.less';

import One from './One';
import Two from './Two'


class LeanJs extends Component {
    constructor(){
        super();
        this.state = {
            visibility:'visible'
        }
    }
    render(){
        return (
            <div>
                <Button onClick={()=> this.setState({visibility:this.state.visibility === 'hidden'? 'visible':'hidden'})}>頁面one</Button>
                <div style={{visibility:this.state.visibility}}>
                    <One/>
                </div>
                <Two/>
            </div>
        )
    }
}
export default LeanJs;


