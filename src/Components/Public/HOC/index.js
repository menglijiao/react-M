import React, { Component} from 'react';
import { Modal} from 'antd';
import styles from './css.less';

const ModalHoc = function(WrapComponent){
    return class Name extends Component {
        constructor(props){
            super(props);
            this.state = {
                visible: false,
            };
        };
        /**
         * 打开弹框
         * @return {*}
         */
        onOpen=()=>{
            this.setState({visible: true});
        };
        /**
         * 关闭弹框
         * @return {*}
         */
        onCancel=(e)=>{
            e&&e.stopPropagation();
            this.setState({visible: false});
        };
        render(){
            const {
                title,
                width,
                onOkText,
                isFooter,
                top,
                bodyStyle,
                ...props
            } = this.props;
            const {
                visible
            } = this.state;
            return (
                <Modal
                    centered={isFooter}
                    destroyOnClose
                    footer={null}
                    maskClosable={false}
                    title={title}
                    visible={visible}
                    width={width}
                    onCancel={this.onCancel}
                    style={top?{top,paddingBottom:0}:undefined}
                    bodyStyle={bodyStyle}
                >
                    <WrapComponent
                        ref={(el)=>(this.wrapRef = el)}
                        {...props}
                        onCancel={this.onCancel}
                    />
                </Modal>
            );
        }
    }
};
export default ModalHoc;