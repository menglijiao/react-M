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
            selectedRowKeys:[]
        }
    }
    /**
     * 选中项发生变化时的回调(点击所有的复选框都触发)
     * @param {array} selectedRowKeys 选中的key值数组
     * @param {array} selectedRows 选中的数据数组
     * @return {*}
     */
    selectOnChange = (selectedRowKeys, selectedRows)=>{
        console.log(selectedRowKeys, selectedRows);
        this.setState({
            selectedRowKeys:selectedRowKeys
        });
    };
    render(){
        const {selectedRowKeys} = this.state;
        const columns = [
            {
                title: '名称',
                dataIndex: 'title',
                key: 'title',
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
                <Table
                    columns={columns}
                    dataSource={Data.tableListData}
                    pagination={false}
                    rowSelection={{
                        selectedRowKeys,
                        onChange: this.selectOnChange,
                        hideDefaultSelections: true,
                        selections: [
                            {
                                key: 'all-data',
                                text: '选择第一章的数据',
                                onSelect: () => {
                                    const keys = Data.tableListData.map(item=>{
                                        if(item.key.charAt(0) === '1'){
                                            return item.key
                                        }else{
                                            return false
                                        }
                                    })
                                    console.log(keys)
                                    // this.setState({
                                    //     selectedRowKeys: [...Array(46).keys()], // 0...45
                                    // });
                                },
                            }
                        ],
                    }}
                />
        )
    }
}
export default LeanJs;


