
import { useState } from 'react'
import React from 'react';
const Child=()=>{
    const [count, setCount] = useState(0)
    console.log("Child");
    
      return (
        <>
          <button onClick={()=>setCount(count+1)}>parentCounter{count}</button>
        </>
      )
}

export default React.memo(Child)