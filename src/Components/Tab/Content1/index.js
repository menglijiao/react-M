import React,{ Component } from 'react';
import { Input } from 'antd';
import './css.less';

export default class Content1 extends Component{
    constructor(){
        super();
        console.log('content1的constructor')
    }
    componentWillMount(){
        console.log('content1的componentWillMount')
    }
    componentDidMount(){
        console.log('content1的componentDidMount')
    }
    componentWillReceiveProps(props){
        console.log('content1的componentWillReceiveProps')
    }
    render(){
        console.log('content1的render')
        return (
            <div>
                <Input value={this.props.value}/>
            </div>
        )
    }
}