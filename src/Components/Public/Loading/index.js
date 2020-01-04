import React, {Component } from 'react';
import style from './css.less';

export default class Loading extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { error } = this.props;
        if (error) throw error;
        return <div className={style.init}>页面加载中...</div>;
    }
}
