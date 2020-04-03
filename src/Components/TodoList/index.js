import React, { Component } from 'react';
import {Button, Input,List} from "antd";
import {connect} from 'react-redux'
import {
    changeInputAction,
    addItemAtcion,
    deleteItemAction
} from '../../../src/Reducers/actionCreators'

class TodoList extends Component {
    onChange = (e)=>{
        const action = changeInputAction(e.target.value);
        this.props.dispatch(action)
    };
    add = ()=>{
        const action = addItemAtcion();
        this.props.dispatch(action)
    };
    deleteItem = (index)=>{
        const action = deleteItemAction(index);
        this.props.dispatch(action)
    };
    render() {
        return (
            <div>
                <div>
                    <Input
                        onChange={this.onChange}
                        value={this.props.inputValue}
                    />
                    <Button
                        onClick={this.add}
                    >增加</Button>
                </div>
                <div style={{margin:'20px'}}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item,index)=> (
                            <List.Item
                                onClick={()=>this.deleteItem(index)}
                            >{item}</List.Item>
                        )
                        }
                    />
                </div>
            </div>
        );
    }
}
const stateToProps = (state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
};
const dispatchToProps = (dispatch)=>{
    return {
        dispatch:dispatch
    }
};
export default connect(stateToProps,dispatchToProps)(TodoList)