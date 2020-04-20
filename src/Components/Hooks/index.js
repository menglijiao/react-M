import React, { useState,useEffect,useLayoutEffect }from 'react';
import {Button} from "antd";
//引入自定义hooks
import useHandValue from './hooks/useHandValue'
import ShowArea from './ShowArea';


function Hooks(Props) {
    const [one,setOne] = useState(0);
    console.log(1);
    useEffect(()=>{
        console.log('useEffect');
        return ()=>{
            console.log('useEffect-return')
        }
    });
    console.log(2);
    useLayoutEffect(()=>{
        console.log('useLayoutEffect');
        return ()=>{
            console.log('useLayoutEffect-return')
        }
    });
    console.log(3);
    return (
        <div className="container">
            <Button onClick={()=> setOne(one+1)}>one+1</Button>
            <p>one:{one}</p>
        </div>
    )
}

export default Hooks
