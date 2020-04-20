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
    /**
     *用户手动选择/取消选择某行的回调（只在点击数据的复选框时触发）
     * @param {object} record 此时点击复选框的这一条数据信息
     * @param {Boolean} selected true:该行为选中，false：该行取消选中
     * @param {array} selectedRows 选中的数据数组
     * @param {event} nativeEvent 鼠标事件
     * @return {*}
     */
    onSelect = (record, selected, selectedRows, nativeEvent)=>{
        console.log(record, selected, selectedRows, nativeEvent);
    };
    /**
     * 用户手动选择/取消选择所有行的回调（只在点击标题的复选框时触发）
     * @param {Boolean} selected true:全部选中，false：全部取消
     * @param {array} selectedRows 选中的数据数组
     * @param {array} changeRows 有变化的数据数组
     * @return {*}
     */
    onSelectAll = (selected, selectedRows, changeRows)=>{
        console.log(selected, selectedRows, changeRows)
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
                        //选中项发生变化时的回调
                        onChange: this.selectOnChange,

                        //指定选中项的 key 数组，需要和 onChange 进行配合
                        selectedRowKeys:selectedRowKeys,

                        //用户手动选择/取消选择某行的回调
                        onSelect:this.onSelect,

                        //用户手动选择/取消选择所有行的回调
                        onSelectAll:this.onSelectAll,

                        //自定义列表选择框宽度（string|number,默认60）,复选框也是单独的一列，也拥有自己的列宽度
                        columnWidth:'100',//或"100px"

                        //自定义列表选择框标题：（string|React.ReactNode），默认是全选复选框，设置该属性后，就替换了全选复选框，不再有复选框功能，只是普通的文字
                        columnTitle:<div>选择</div>,

                        //把选择框列固定在左边,配合scroll.x使用，当把内容左右移时，选择宽列固定不动
                        fixed:false,

                        //多选/单选，'checkbox' or 'radio',默认'checkbox',
                        type:'checkbox',

                        //选择框的默认属性配置
                        getCheckboxProps: (record)=>{
                            return {
                                disabled: record.key === '1',//禁用key为1的数据
                                name: record.name,
                            }
                        },

                        //自定义选择项配置项：（object[]|boolean）此时选择项下拉会出现默认的『全选』『反选』以及下面新加的两个自定义选项。 若设为 true ，则使用默认的默认的『全选』『反选』选择项
                        //注意：使用这个属性，就不能使用columnTitle，否则columnTitle会替换selections
                        selections:[
                            {
                                key:'a',//string
                                text:'自定义全选',//string|React.ReactNode
                                onSelect:(changeableRowKeys)=>{console.log(changeableRowKeys)}//点击回调
                            },
                            {
                                key:'b',//string
                                text:'自定义反选',//string|React.ReactNode
                                onSelect:(changeableRowKeys)=>{console.log(changeableRowKeys)}////点击回调
                            }],

                        //（boolean），默认是false，为true时自定义选择项时去掉『全选』『反选』两个默认选项
                        hideDefaultSelections:true,
                    }}
                    scroll={{x:700}}
                />
        )
    }
}
export default LeanJs;


