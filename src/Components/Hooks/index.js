import React, { useState,useEffect,useLayoutEffect,useMemo,useCallback }from 'react';
import {Button} from "antd";
//引入自定义hooks
import useHandValue from './hooks/useHandValue'
import ShowArea from './ShowArea';


function Hooks(Props) {
    const [visible,setVisible] = useState(true);

    return (
        <div className="container">
            <Button key="a" onClick={()=>setVisible(!visible)}>
                显示或隐藏
            </Button>
            <ShowArea visible={visible}/>
        </div>
    )
}

export default Hooks










