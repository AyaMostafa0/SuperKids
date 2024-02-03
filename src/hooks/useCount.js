import { useState } from "react";


function useCount(inital=0, factor=1) {
    const [count, setCount] = useState(inital);

    const inc = () => {
        setCount(count => count + factor)
    }
    const dec = () => {
        if(count > inital) setCount(count => count - factor)
    }
    
    return[count, inc, dec];
}

export default useCount;
