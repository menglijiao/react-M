import React, { Component } from 'react';
import {findDOMNode} from 'react-dom'
import ModalHoc from './../Public/HOC/index';
import {Icon,Button,Modal} from 'antd';
import styles from './css.less';

class LeanJs extends Component {
    constructor(props){
        super(props);
        this.state= {}
    };

    componentWillMount(){
        let link = [{a:1},{a:2}];
        console.log({link})//{link:[{a:1},{a:2}]}
















    }


    render(){
        return (
            <div>
                lean
            </div>

        )
    }
}
export default LeanJs;