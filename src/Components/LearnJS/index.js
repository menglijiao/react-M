import React, { Component } from 'react';
import {findDOMNode} from 'react-dom'
import ModalHoc from './../Public/HOC/index';
import { Table,Button,Icon } from 'antd';
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
            filteredValue:null
        }
    }

    render(){
        const {filteredValue} = this.state;
        console.log(filteredValue)
        const columns = [
            {
                title: '名称',
                dataIndex: 'title',
                key: 'title',
                onFilter: (value, record) => {
                    return record.title.indexOf(value) > -1
                },
                filters: [{text: '第一章数据', value: '第一章'}, {text: '第二章数据', value: '第二章'}],
                filteredValue:filteredValue,
                filtered:true
            },
            {
                title: '数量',
                dataIndex: 'count',
                key: 'count',
                width: '12%',
            },
            {
                title: '内容',
                dataIndex: 'text',
                key: 'text',
                width: '30%',
            },
        ];
        return (
            <div>
                <Button onClick={()=>this.setState({filteredValue:['第一章']})}>第一章的数据</Button>
                <Button onClick={()=>this.setState({filteredValue:['第一章-第一节']})}>第一章第一节的数据</Button>
                <Button onClick={()=>this.setState({filteredValue:['第二章']})}>第二章的数据</Button>
                <Button onClick={()=>this.setState({filteredValue:[]})}>清空</Button>
                <Table
                    columns={columns}
                    dataSource={Data.tableListData}
                    pagination={false}
                />
            </div>

        )
    }
}
export default LeanJs;


