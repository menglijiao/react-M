import React, { Component } from 'react';
import {findDOMNode} from 'react-dom'
import ModalHoc from './../Public/HOC/index';
import {Button,Table,message } from 'antd';
import { Resizable } from 'react-resizable';
import moment from 'moment';
import style from './css.less';




class LeanJs extends Component {
    constructor(props){
        super(props);
        this.state= {
            bool:true
        };

    }
    componentWillMount() {
        let arr = [
            {key:'1',data:['aa','bb','cc']},
            {key:'2',data:['11','22','33']},
            {key:'3',data:['qq','ww','ee']},
            {key:'3',data:['qq','ww','ee']},
            {key:'4',data:['true','false','nn']},
            {key:'4',data:['true','false','nn']},
        ];
        arr.forEach((item,index,arr) => {
            for(let i=arr.length-1;i>index;i--){
                if(arr[i].key === item.key){
                    arr.splice(i,1)
                }
            }
        });
        let bool = false;
        let page = '';
        let pageNumber = 10
        // let data = bool?page:pageNumber;
        let data = (bool && page) || pageNumber
        console.log(data)
        // console.log(arr)


    }

    click = ()=>{
        let num = Math.PI
        console.log(num)
    };
    render(){
        const {bool} = this.state;
        return (
            <div className="box">
                <span className="a">测试a</span>
                <span className="b">测试b</span>
            </div>
        )
    }
}
export default LeanJs;


