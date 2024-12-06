import React, { useState } from "react";

const CustomHook=(inhook)=>{
    let [val,setVal]=useState(inhook)
    const incriment=()=>{
        setVal(val+=1)
    }
    const decriment=()=>{
        setVal(val-=1)
    }
    return{val,incriment,decriment}
}

export default CustomHook
