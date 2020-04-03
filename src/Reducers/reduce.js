
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes'

const defaultState = {
    inputValue:'输入歌词',
    list:[
        '有时候我会问自己',
        '到底为了什么努力',
        '赢得什么才叫胜利',
        '你曾否问自己'
    ]
};
function reducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            let newState1 = JSON.parse(JSON.stringify(state));
            newState1.inputValue = action.value;
            return newState1;
        case ADD_ITEM:
            let newState2 = JSON.parse(JSON.stringify(state));
            newState2.list.push(newState2.inputValue);
            newState2.inputValue = '';
            return newState2;
        case DELETE_ITEM:
            let newState3 = JSON.parse(JSON.stringify(state));
            newState3.list.splice(action.index,1);
            return newState3;
        default:
            return state;
    }
}
export default reducer;
