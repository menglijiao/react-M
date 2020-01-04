import React,{ Component } from 'react';
import { Tabs,Button } from 'antd';
import Content from './Content/index'
import Content1 from './Content1/index'
import Content2 from './content2/index'
import './css.less';

const { TabPane } = Tabs;

export default class Tab extends Component{
    constructor(){
        super();
        this.state = {
            key:'1',
            value:9999
        }
    }

    //如果在修改状态后又进行一次修改状态，则此render渲染两次，content就渲染6次
    onChange = (key)=>{
        this.setState({
           key
        })
    };

    //只要这个组件里用了setState，触发此render重新渲染，render里用了三次content组件，因此这个组件都会被触发三次，无论是否传递参数下去
    changeValue = ()=>{
        this.setState({
            value:Math.random().toString().substr(0,5)
        })
    };

    //初始时，只渲染了第一个content，后面两个还没有渲染，因此tab的componentDidMount，和第一个content的componentDidMount，和第一个content里面的one的componentDidMount执行。
    //点击第二个tab后，此时第一个也会渲染，但此时第一个是content的componentWillReceiveProps和第一个的one的componentWillReceiveProps执行，而第二个content是第一次渲染，因此第二个content是componentDidMount，和第二个content里面的one的componentDidMount执行
    //第三个同样，第三次是第一次渲染，而第一个content是第三次渲染，第二个content是第二次渲染
    render(){
        const {key,value} = this.state;
        return (
            <div>
                <Button onClick={this.changeValue}>爷组件：改变value值</Button>
                <Tabs activeKey={key} onChange={this.onChange}>
                    <TabPane tab="Tab 1" key="1">
                        <Content value={value +'父组件1'}/>
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        <Content1 value={value+'父组件2'}/>
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        <Content2 value={value+'父组件3'}/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}