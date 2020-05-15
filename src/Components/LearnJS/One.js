import React, {Component} from 'react';
import {Button,Modal } from 'antd';
// import PropTypes from 'prop-types';











class One extends Component {
    constructor(){
        super();
        this.state = {
            visible:false
        }
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
    componentWillUnmount() {
        console.log('one的卸载componentWillUnmount')
    }
    open = ()=>{
        this.setState({
            visible:true
        });
    };
    close = ()=>{
        this.setState({
            visible:false
        });
    };
    render() {
        const {type} = this.props;
        const {visible} = this.state;
        let style = {
            width:600,
            height:600,
            border:"1px solid #000",
        };
        let style1 = {
            width:'100%',
            height:'100%',
            backgroundImage:"url(http://thumbs.dreamstime.com/t/%E9%9D%9E-%E5%8A%A8%E7%89%A9%E5%89%AA%E5%BD%B1-25139371.jpg)",
            backgroundRepeat:"no-repeat",
            backgroundSize:'cover',
            backgroundPosition: 'center center'

        }
        return (
            <div style={style}>
                one
            </div>

        );
    }
}
// function One(props){
//     const {type,data} = props;
//     console.log(type,data)
//     return <h1>one</h1>
// }


// One.propTypes = {
//     type:'type的默认值',
//     data:'默认数据'
// };

export default One;


