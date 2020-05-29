import React, {Component} from 'react';
import {Button,Modal } from 'antd';
import PropTypes from 'prop-types';
import One from './One';

















class Two extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:false
        }

    }

    componentWillMount() {
        // console.log('Two的componentWillMount')

    }
    // componentDidMount() {
    //     console.log('Two的componentDidMount')
    //
    // }
    //
    // componentWillReceiveProps(nextProps) {
    //     console.log('Two的componentWillReceiveProps')
    // }
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('Two的shouldComponentUpdate')
    //     return true
    // }
    //
    // componentWillUpdate(nextProps, nextState) {
    //     console.log('Two的componentWillUpdate')
    // }
    //
    // componentDidUpdate(prevProps, prevState) {
    //     console.log('Two的componentDidUpdate')
    // }
    // componentWillUnmount() {
    //     console.log('Two的卸载componentWillUnmount')
    // }

    event = ()=>{

        function wait(ms) {
            return new Promise(function (resolve,reject) {
                setTimeout(function () {
                    resolve(ms);
                },ms)
            })
        }

        wait(1000).then((time)=>{
            console.log(`1已等待${time}毫秒`);
            throw  new Error('我异常了')
        }).then((time)=>{
            console.log(`2已等待${time}毫秒`);
            return wait(time)
        }).catch((err)=>{
            console.log('捕获异常',err);
            return Promise.resolve(1000)
        }).then((time)=>{
            console.log(`3已等待${time}毫秒`);
            return wait(time)
        }).then((time)=>{
            console.log(`4已等待${time}毫秒`)
        })
























    };
    render() {
        // const {visible} = this.state;
        return (
            <div>
                <Button onClick={this.event}>
                    two
                </Button>
                {/*<One*/}
                    {/*ref={el=>this.one = el}*/}
                    {/*type={Math.random()}*/}
                {/*/>*/}
            </div>
        );
    }
}

Two.propTypes = {};

export default Two;