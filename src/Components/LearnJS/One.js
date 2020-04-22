import React, {Component} from 'react';
import {Button } from 'antd';
import PropTypes from 'prop-types';











// class One extends Component {
//     render() {
//         const {type,data} = this.props;
//         console.log(type,data)
//         return (
//             <div>
//                 {this.props.type}
//             </div>
//
//         );
//     }
// }
function One(props){
    const {type,data} = props;
    console.log(type,data)
    return <h1>one</h1>
}


One.propTypes = {
    type:'type的默认值',
    data:'默认数据'
};

export default One;


