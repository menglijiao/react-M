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

        function wait(ms) {
            return new Promise(function (resolve,reject) {
                setTimeout(function () {
                    reject(ms);
                },ms)
            })
        }

        wait(1000)
            .then((time)=>{
                console.log(`第一次通过${time}毫秒`);
            },()=>{
                console.log('第1次调用失败')
                return wait(1000)
            })
            .then(()=>{
                console.log('第2次调用then')
            },()=>{
                console.log('第2次调用失败')
                return wait(1000)
            })
            .then(()=>{
                console.log('第3次调用then');
            },()=>{
                console.log('第3次调用失败')
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