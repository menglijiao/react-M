import React, { Component } from 'react';
import { Icon } from 'antd';
// import { TopOn, TopOff } from 'src/Data/imgJsx';
import style from './index.less';



function ExpandShrink(WrappedComponent1,WrappedComponent2) {
    return class extends Component{
        constructor(props){
            super(props);
            this.state = {
            }
        }
        static defaultProps = {
            isShow:true,
            topHeight:200,
            bottomHeight:200,
            leftWidth:200,
            rightWidth:200,
            hiddenType:'top',//top、bottom、left、right
            clickCallback:()=>{}
        };
        /**
         * 获取高度
         */
        getWidth = ()=>{
            const {hiddenType,leftWidth,rightWidth,isShow} = this.props;
            let newLeftWidth = leftWidth,newRightWidth = rightWidth;
            if(hiddenType === 'left'){
                newRightWidth = isShow?rightWidth:leftWidth+rightWidth;
            }else if(hiddenType === 'right'){
                newLeftWidth = isShow?leftWidth:leftWidth+rightWidth;
            }
            return {newRightWidth,newLeftWidth}
        };
        /**
         * 获取样式
         */
        getDisplay = ()=>{
            const {hiddenType,isShow} = this.props;
            let topDisplay = 'block', bottomDisplay = 'block';
            if(hiddenType === 'left'){
                topDisplay = isShow?'block':'none';
            }else if(hiddenType === 'right'){
                bottomDisplay = isShow?'block':'none';
            }
            return {topDisplay,bottomDisplay}
        };

        render(){
            const {clickCallback,isShow,hiddenType} = this.props;
            const {newRightWidth,newLeftWidth} = this.getWidth();
            const {topDisplay,bottomDisplay} = this.getDisplay();
            return (
                <div className='init'>

                    {
                        ['left','right'].includes(hiddenType) && (
                            <div className='flexBox'>
                                <div style={{width:newLeftWidth,display:topDisplay}}>
                                    {WrappedComponent1}
                                </div>
                                <div>
                                    <Icon type={'left'} onClick={clickCallback}/>
                                </div>
                                <div style={{width:newRightWidth,display:bottomDisplay}}>
                                    {WrappedComponent2}
                                </div>
                            </div>
                        )
                    }

                </div>
            )
        }
    }
}
export default ExpandShrink;