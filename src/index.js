import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN'; //新的语音包引入地址
import reducers from './Reducers/reduce';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const store = createStore(reducers);
// import * as serviceWorker from './serviceWorker';

//全局设置antd语言为中文<ConfigProvider locale={zh_CN}>
ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider locale={zh_CN}>
            <App />
        </ConfigProvider>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//如果您想让您的应用程序离线工作并更快地加载，您可以将unregister()更改为register()。注意，这有一些陷阱。了解更多关于服务工作者的信息:https://bit.ly/CRA-PWA
// serviceWorker.unregister();
