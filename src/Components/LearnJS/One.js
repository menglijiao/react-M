import React, {Component} from 'react';
import {Button } from 'antd';
import PropTypes from 'prop-types';




class One extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:0
        }
    }

    componentWillMount() {
        console.log('one的componentWillMount')

    }

    // componentDidMount() {
    //     console.log('one的componentDidMount')
    //
    // }
    //
    componentWillReceiveProps(nextProps) {
        console.log('one的componentWillReceiveProps')
    }
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('one的shouldComponentUpdate')
    //     return true
    // }
    //
    // componentWillUpdate(nextProps, nextState) {
    //     console.log('one的componentWillUpdate')
    // }
    //
    // componentDidUpdate(prevProps, prevState) {
    //     console.log('one的componentDidUpdate')
    // }
    //
    componentWillUnmount() {
        console.log('one卸载的componentWillUnmount')
    }
    event = ()=>{
        let value = Math.random()
        this.setState({
            value
        },()=>{
            this.handValue(value)
        })
    };
    handValue = (data)=>{
        console.log(data)
    };

    render() {
        return (
            <div style={{fontSize:20,background:"blue"}}>
                one
            </div>
        );
    }
}

One.propTypes = {};

export default One;