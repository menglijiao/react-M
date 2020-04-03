import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Two extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        console.log('Two的componentWillMount')

    }

    componentDidMount() {
        console.log('Two的componentDidMount')

    }

    componentWillReceiveProps(nextProps) {
        console.log('Two的componentWillReceiveProps')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Two的shouldComponentUpdate')
        return true
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Two的componentWillUpdate')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Two的componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('Two的componentWillUnmount')
    }

    render() {
        return (
            <div>
                Two
            </div>
        );
    }
}

Two.propTypes = {};

export default Two;