import React,{ Component } from 'react';
import { Input } from 'antd';
import './css.less';

export default class Content2 extends Component{
    constructor(){
        super();
        console.log('content2的constructor')
    }
    componentWillMount(){
        console.log('content2的componentWillMount')
    }
    componentDidMount(){
        console.log('content2的componentDidMount')
    }
    componentWillReceiveProps(props){
        console.log('content2的componentWillReceiveProps')
    }
    render(){
        console.log('content2的render')
        return (
            <div>
                <Input value={this.props.value}/>
            </div>
        )
    }
}