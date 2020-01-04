import React, { Component } from 'react';
import {findDOMNode} from 'react-dom'
import ModalHoc from './../Public/HOC/index';
import {Button,Table,message } from 'antd';
// import { Resizable } from 'react-resizable';
import moment from 'moment';
import style from './css.less';




class LeanJs extends Component {
    constructor(props){
        super(props);
        this.state= {
            type: 'one'
        };

    }
    componentWillMount() {


    }

    cutType = (type)=>{
        this.setState({
            type:type
        });
    };
    nodeRender = (type)=>{
        switch (type) {
            case 'one':
                return (
                    <div className="a">
                        <h3>类型一</h3>
                        <h3>啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</h3>
                    </div>
                );
            case 'two':
                return (
                    <div className="b">
                        <div>类型二</div>
                        <div>额的热</div>
                        <div>发发发</div>
                        <div>哎哎哎</div>
                        <div>滚滚滚</div>
                        <div>哈哈哈</div>
                    </div>
                );
            case 'three':
                return (
                    <div>
                        <span>类型三</span>
                    </div>
                );
            default:
                return null
        }
    };
    render(){
        const {type} = this.state;
        let allHide = false;//是否隐藏
        let isHide = false;//是否隐藏
        let show1 = true;//是否显示
        let show2 = true;//是否显示
        return (
            <div className="box">
                <Button.Group>
                    <Button onClick={()=>this.cutType('one')}>切换1</Button>
                    <Button onClick={()=>this.cutType('two')}>切换2</Button>
                    <Button onClick={()=>this.cutType('three')}>切换3</Button>
                </Button.Group>
                {this.nodeRender(type)}
                <hr/>
                {
                    !allHide && !isHide && (show1 || show2)?
                        <div>组件</div>:null
                }
            </div>
        )
    }
}
export default LeanJs;


