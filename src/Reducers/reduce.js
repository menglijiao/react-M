/** @format */
import { createStore } from 'redux';

/*下面这个方法是一个Reducer函数*/
/*每个defaultState属性必须加注释和正确的初始值*/
const defaultState = {
    //路由
    history: null,
    //用户信息
    userInfo: {},
    reduxChange: false //当修改redux对象里面的属性时并没有引起render，则修改这个属性
};
function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'history':
            return Object.assign({}, state, {
                history: action.history
            });
        case 'userInfo':
            return Object.assign({}, state, {
                userInfo: action.userInfo
            });
        case 'reduxChange':
            return Object.assign({}, state, {
                reduxChange: action.reduxChange
            });
        default:
            return state;
    }
}
// let store = createStore(reducer);
// 监听state，变化执行函数
// store.subscribe(()=>alert(1));
// let unsubscribe = store.subscribe(()=>(
//     console.log(store.getState())
// ));
// unsubscribe(); //解除监听

export default reducer;
