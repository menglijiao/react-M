import React, { Component } from 'react';
import {findDOMNode} from 'react-dom'
import ModalHoc from './../Public/HOC/index';
import imgList from './../Public/imgList'
import {Button,Modal} from 'antd';
import styles from './css.less';

class ImgShow extends Component {
    constructor(props){
        super(props);
        this.state= {
            visibleImg: false,
            largeUrl: imgList[0].url,
            uid:imgList[0].uid,
            fileList: imgList,
            left:0
        }
    };
    componentWillMount(){

    }

    openAndClose = (bool = false)=>{
        this.setState({
            visibleImg:bool
        });
    };
    /**
     *
     * @param {string} type 'left' 'right'
     * @return {*}
     */
    move = (type)=>{
        const {left,fileList} = this.state;
        if(fileList.length > 5){
            let newLeft = left;
            let imgListLeft = findDOMNode(this.imgList).offsetLeft;
            const imgListWidth = findDOMNode(this.imgList).offsetWidth;
            const showWidth = findDOMNode(this.showDiv).offsetWidth;
            let differWidth = imgListWidth-showWidth-20;
            if(differWidth > 0){
                if(type === "left"){
                    newLeft = imgListLeft < 0?left + 150:left;
                }else if(type === "right"){
                    newLeft = (differWidth + imgListLeft) > 0?left - 150:left;
                }
                this.setState({
                    left:newLeft
                });
            }
        }
    };
    cutImg = (uid,url)=>{
        this.setState({
            largeUrl: url,
            uid
        });
    };
    render(){
        const {left,uid} = this.state;
        return (
            <div>
                <Button onClick={()=>this.openAndClose(true)}>多图展示</Button>
                <Modal
                    visible={this.state.visibleImg}
                    onCancel={()=>this.openAndClose(false)}
                    maskClosable={false}
                    footer={null}
                    centered
                    width={824}
                    style={{height:710,backgroundColor: '#fff',padding:0}}
                    bodyStyle={{padding:20}}
                    wrapClassName={'modalStyle'}
                >
                    <div className="large">
                        <img alt="example" style={{ width: '100%' }} src={this.state.largeUrl}/>
                    </div>
                    <div className="small">
                        <span className="icon" onClick={()=>this.move('left')}>
                            <Button>左边</Button>
                        </span>
                        <div className="center" ref={ref => this.showDiv = ref}>
                            <ul
                                className="imgList"
                                ref={ref => this.imgList = ref}
                                style={{top:0,left:left}}
                            >
                                {imgList.map(item=>{
                                    return <li
                                        key={item.uid}
                                        className={uid === item.uid?'selectLi':null}
                                        onClick={()=> this.cutImg(item.uid,item.url)}
                                    >
                                        <img src={item.url} alt=""/>
                                    </li>
                                })}
                            </ul>
                        </div>
                        <span className="icon" onClick={()=>this.move('right')}>
                        <Button>右边</Button>
                        </span>
                    </div>
                </Modal>
            </div>

        );
    }
}
export default ImgShow;