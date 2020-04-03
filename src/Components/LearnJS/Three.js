import React, {Component} from 'react';
import PropTypes from 'prop-types';

class One extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        console.log('one的componentWillMount')

    }

    componentDidMount() {
        console.log('one的componentDidMount')

    }

    componentWillReceiveProps(nextProps) {
        console.log('one的componentWillReceiveProps')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('one的shouldComponentUpdate')
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('one的componentWillUpdate')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('one的componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('one的componentWillUnmount')
    }

    render() {
        return (
            <div>
                one
            </div>
        );
    }
}

One.propTypes = {};

export default One;