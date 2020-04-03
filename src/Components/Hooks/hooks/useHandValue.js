import { useState,useEffect } from 'react';

function useHandValue() {
    const [arr, setValue] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!loading) return;
        setTimeout(()=>{
            let newArr = [];
            newArr.push(Math.random());
            setLoading(false);
            setValue(newArr)
        },1000)
    }, []);

    return {arr,loading,setLoading};
}
export default useHandValue