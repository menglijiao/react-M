import React, { Component } from 'react';
import {findDOMNode} from 'react-dom'
import ModalHoc from './../Public/HOC/index';
import { Table } from 'antd';
// import { Resizable } from 'react-resizable';
import moment from 'moment';
import Data from '../Public/data'
import style from './css.less';

import One from './One';
import Two from './Two'


















class LeanJs extends Component {
    //
    selectOnChange = (selectedRowKeys, selectedRows)=>{
        console.log(selectedRowKeys, selectedRows)
    };
    getCheckboxProps = (record)=>{
        return {
            disabled: record.name === 'Disabled User',
            name: record.name,
        }
    };
    render(){
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
                        onChange: this.selectOnChange,
                        getCheckboxProps: this.getCheckboxProps,
                    }}
                />
        )
    }
}
export default LeanJs;


