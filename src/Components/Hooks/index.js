import React, { useState,useEffect }from 'react';
import {Button} from "antd";
//引入自定义hooks
import useHandValue from './hooks/useHandValue'
import ShowArea from './ShowArea';


function Hooks(Props) {

    const {arr,loading,setLoading} = useHandValue();
    console.log(arr,loading)


    return (
        <div className="container">
            <Button key="b" onClick={()=>setLoading(true)}>
                点击+1
            </Button>
            {/*<div key="a">{data}</div>*/}
            {/*<ShowArea value={value} onChange={onChange}/>*/}
        </div>
    )
}

export default Hooks
