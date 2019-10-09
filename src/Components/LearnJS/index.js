import React, { Component } from 'react';
import {Button} from 'antd';
import './css.less';


export default class App extends Component {
    constructor(){
        super();
        this.state = {};
        this.data = [
            {
                key:'1',
                amount:111,
                used:10,
                children:[
                    {key:'1-1',amount:21,used:9},
                    {key:'1-2',amount:22,used:11}
                    ]
            },
            {
                key:'1',
                amount:44,
                used:4,
                children:[
                    {key:'1-1',amount:21,used:9},
                    {key:'2-2',amount:13,used:7}
                    ]
            }
        ]
    }
    componentWillMount(){
        this.event()
    }

    event = (value = '111',text = '222')=>{
        console.log(value,text)
    };

    render() {
        return (
            <div>
                <Button onClick={()=>this.event('sss')}>
                    有参数
                </Button>
                <Button onClick={()=>this.event()}>
                    无参数
                </Button>
                <Button onClick={this.event}>
                    无参数,直接调用
                </Button>
            </div>

        );
}
}