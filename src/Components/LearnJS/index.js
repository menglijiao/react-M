import React, { Component } from 'react';
import {findDOMNode} from 'react-dom'
import ModalHoc from './../Public/HOC/index';
import {Icon,Button,Modal,Progress} from 'antd';
import styles from './css.less';

const ButtonGroup = Button.Group;

class LeanJs extends Component {
    constructor(props){
        super(props);
        this.state= {
            percent: 0,
        }
    };
    //后退
    increase = () => {
        let percent = this.state.percent + 10;
        if (percent > 100) {
            percent = 100;
        }
        this.setState({ percent });
    };

    //快进
    decline = () => {
        let percent = this.state.percent - 10;
        if (percent < 0) {
            percent = 0;
        }
        this.setState({ percent });
    };
    //播放
    start = ()=>{
        const {percent} = this.state;
        if(percent > 99){
            return
        }
        this.timer = setInterval(()=>{
            let percent = this.state.percent + 10;
            if (percent > 100) {
                percent = 100;
                clearInterval(this.timer)
            }
            console.log(percent)
            this.setState({
                percent,
            });
        },1000)
    };

    //暂停
    curStop = ()=>{
        clearInterval(this.timer)
    };

    //停止
    stop = ()=>{
        clearInterval(this.timer);
        this.setState({
            percent:0
        });
    };


    componentWillUnmount () {
        clearInterval(this.timer)
    }


    componentWillMount(){}


    render(){
        return (
            <div style={{width:500,background:'#80ccc7'}}>
                <Progress percent={this.state.percent} />
                <ButtonGroup>
                    <Button onClick={this.decline} children={"后退"} />
                    <Button onClick={this.increase} children={"快进"} />
                    <Button onClick={this.start} children={"播放"}/>
                    <Button onClick={this.curStop} children={"暂停"}/>
                    <Button onClick={this.stop} children={"停止"}/>
                </ButtonGroup>
            </div>

        )
    }
}
export default LeanJs;