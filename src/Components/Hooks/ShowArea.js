import React, { useState,useMemo } from 'react';
import {Button} from "antd";


export default function ShowArea({one,two}) {
    const res=useMemo(()=>{
        return {one,two}
    },[one,two]);
    return (
        <div>
            <p>useMemo-one:{res.one}</p>
            <p>useMemo-two:{res.two}</p>
        </div>
    )
}