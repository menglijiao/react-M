/** @format */
import { createStore } from 'redux';
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes'

/*下面这个方法是一个Reducer函数*/
/*每个defaultState属性必须加注释和正确的初始值*/
const defaultState = {
    inputValue:'输入内容',
    list:[
        'aaaaaaaaaaaaaaaa',
        'bbbbbbbbbbbbbbbbb',
        'ccccccccccccccccc'
    ]
};
//reduce里只能接收state，不能改变state
//action接收组件通过dispatch传递进来的对象，根据属性type改变对应的state值，再返回出去给store，相当于这里是进行管理store
function reducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            //进行一个深拷贝
            //let newstate = JSON.parse(JSON.stringify(state))
            // newState.inputValue = action.value;
            // return newState
            //或者：
            return Object.assign({}, state, {
                inputValue: action.value
            });
        case ADD_ITEM:
            let newState = JSON.parse(JSON.stringify(state));
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
            return newState;
        case DELETE_ITEM:
            let deleteState = JSON.parse(JSON.stringify(state));
            deleteState.list.splice(action.index,1);
            return deleteState

        default:
            return state;
    }
}
export default reducer;
