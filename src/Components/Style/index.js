import React, { Component } from 'react';
import './css.less';
import ExpandShrink from '../ExpandShrink/index';



class Name extends Component {
    constructor(){
        super();
        this.state = {
            isShow:true
        }
    }
    change = ()=>{
        this.setState({
            isShow:!this.state.isShow
        });
    };
    render() {
        const top = (<div style={{height:'100%',background:"red"}}>上面</div>);
        const bottom = (<div style={{height:'100%',background:"blue"}}>下面</div>);
        const Hoc = ExpandShrink(top,bottom);
        return (
            <div style={{height:500}}>
                <Hoc
                    leftWidth={200}
                    rightWidth={200}
                    isShow={this.state.isShow}
                    hiddenType="right"
                    clickCallback={this.change}
                />
            </div>

        );
    }
}

export default Name