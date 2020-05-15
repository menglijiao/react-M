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

        // function wait(ms) {
        //     return new Promise(function (resolve,reject) {
        //         setTimeout(function () {
        //             resolve(ms);
        //         },ms)
        //     })
        // }
        //
        // console.log('开始计时');
        // setTimeout(()=>{
        //     console.log('定时器');
        //     wait(1000).then((time)=>{
        //         console.log(`第一次通过${time}毫秒`)
        //     })
        // },1000);

        setTimeout(function() {
            console.log(1)
        }, 0);
        new Promise(function(resolve){
            console.log(2);
            for( var i=0 ; i<10 ; i++ ) {
                i === 9 && resolve();
            }
            console.log(3);
        }).then(function() {
            console.log(4);
        });
        console.log(5);

















    };

    open = ()=>{
        this.one.open()
    };
    close = ()=>{
        this.setState({
            visible:false
        });
    };
    render() {
        // const {visible} = this.state;
        return (
            <div>
                <Button onClick={this.open}>
                    two
                </Button>
                <One
                    ref={el=>this.one = el}
                    type={Math.random()}
                />
            </div>
        );
    }
}

Two.propTypes = {};

export default Two;