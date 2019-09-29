import React, { Component } from 'react';
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
        const data = ['item1', [], 'item3'];
        data.forEach((item,index)=>{
            if(index === 1){
                data[index] = 'item2'
                item[0] = 'a'
            }
            console.log(item);
        });
        console.log(data)




    }


    render() {
        return (
            <div className="clearfix">
                aaaaaaaaaa
            </div>
        );
}
}