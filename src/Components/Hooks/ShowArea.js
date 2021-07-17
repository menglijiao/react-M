import React, { useState,useEffect,useLayoutEffect,useMemo,useCallback } from 'react';
import {Button} from "antd";


function ShowArea(props) {
    const {visible} = props;

    useEffect(()=>{
    });
    if(!visible) return null;

    return (
        <div>
            组件
        </div>
    )
}
export default ShowArea