import React, { useState,useEffect } from 'react';
import {Button} from "antd";


export default function AsyncDemo(props) {
    const {value,onChange} = props;
    const [count, setCount] = useState(11);

    useEffect(() => {
        value && setCount(value*count);
    }, [value]);

    return (
        <div>
            <div key="a">{count}</div>,
            <Button key="b" onClick={onChange}>
                点击+1
            </Button>
        </div>
    )
}