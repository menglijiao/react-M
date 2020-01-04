import React, { Component } from 'react';
import {Button, Input,List} from "antd";
import store from '../../../src/Reducers/index'
import {
    changeInputAction,
    addItemAtcion,
    deleteItemAction
} from '../../../src/Reducers/actionCreators'

export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        //订阅功能：当store有改变的时候，这里要进行获取，必须写subscribe订阅，否则该页面就获取不到改变的store
        store.subscribe(this.storeChange)
    }
    //订阅
    storeChange = ()=>{
        this.setState(store.getState());
    };
    //input变化
    onChange = (e)=>{
        const action = changeInputAction(e.target.value);
        store.dispatch(action)
    };

    //点击增加
    add = ()=>{
        const action = addItemAtcion();
        store.dispatch(action)
    };
    //点击删除
    deleteItem = (index)=>{
        const action = deleteItemAction(index);
        store.dispatch(action)
    };
    render() {
        return (
            <div>
                <div>
                    <Input
                        placeholder={this.state.inputValue}
                        onChange={this.onChange}
                        value={this.state.inputValue}
                    />
                    <Button
                        onClick={this.add}
                    >增加</Button>
                </div>
                <div style={{margin:'20px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index)=> (<List.Item onClick={()=>this.deleteItem(index)}>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}