import React, { useState,useEffect,useLayoutEffect,useMemo,useCallback } from 'react';
import {Button} from "antd";


function ShowArea(props) {
    const {visible} = props;
    const [one,setOne] = useState(0);

    useEffect(()=>{
        console.log('useEffect 1')
    });
    console.log(useState(0))
    if(!visible) return null;

    // useEffect(()=>{
    //     console.log('useEffect 2')
    // });
    return (
        <div>
            子组件
        </div>
    )
}
export default ShowArea