import React,{ Component } from 'react';
import { Input } from 'antd';
import './css.less';

export default class One extends Component{
    constructor(){
        super();
        // console.log('one的constructor')
    }
    componentWillMount(){
        // console.log('one的componentWillMount')
    }
    componentDidMount(){
        // console.log('one的componentDidMount')
    }
    componentWillReceiveProps(props){
        // console.log('one的componentWillReceiveProps')
    }
    render(){
        // console.log('one的render')
        return (
            <div>这是子组件</div>
        )
    }
}