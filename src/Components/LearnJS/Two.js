import React, {Component} from 'react';
import {Button } from 'antd';
import PropTypes from 'prop-types';


















class Two extends Component {
    constructor(props) {
        super(props);

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
        //创建promise
        function wait(ms) {
            return new Promise(function (resolve,reject) {
                setTimeout(function () {
                    resolve(ms)
                    reject(ms)
                },ms)
            })
        }
        console.log('开始计时')
        //使用promise
        wait(1000).then((time)=>{
            console.log(`第一次通过${time}毫秒`)
            return Promise.reject
        },(time)=>{
            console.log(`第一次失败${time}`)
        }).then(()=>{
            console.log('第二次通过')
        },()=>{
            console.log('第二次失败')
        })
















    };
    render() {
        return (
            <Button onClick={this.event}>
                two
            </Button>
        );
    }
}

Two.propTypes = {};

export default Two;