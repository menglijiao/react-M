import React, { useState,useMemo }from 'react';
import {Button} from "antd";
//引入自定义hooks
import useHandValue from './hooks/useHandValue'
import ShowArea from './ShowArea';


function Hooks(Props) {
    const [one,setOne] = useState(0);
    const [two,setTwo] = useState(0);
    const res = useMemo(()=>{
        return {one,two}
    },[one]);
    return (
        <div className="container">
            <Button key="a" onClick={()=>setOne(one+1)}>
                one+1
            </Button>
            <Button key="b" onClick={()=>setTwo(two+1)}>
                two+1s
            </Button>
            <p>变量one:{one}</p>
            <p>变量two:{two}</p>
            <ShowArea one={one} two={two}/>
        </div>
    )
}

export default Hooks
