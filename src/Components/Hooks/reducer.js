import React, { createContext,useReducer } from 'react';

export const CommerContext = createContext({});

export const UPDATE_COLOR = 'UPDATE_COLOR';
export const SIZE = 'size';

const reducer = (state,action)=>{
    switch (action.type) {
        case UPDATE_COLOR:
            return action.color;
        case SIZE:
            return action.size;
        default:
            return state
    }
};

export const ContextComponent = props =>{
    const [color,dispatchColor] = useReducer(reducer,'blue');
    const [size,dispatchSize] = useReducer(reducer,16);
    const valueObj = {
        color,
        dispatchColor,
        size,
        dispatchSize
    };
    return (
        <CommerContext.Provider value={valueObj}>
            {props.children}
        </CommerContext.Provider>
    )
};