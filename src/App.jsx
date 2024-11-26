// import { useState } from 'react'
// import './App.css'
// import Child from './Child';

// function App() {
//   const [count, setCount] = useState(0)
// console.log("parent");

//   return (
//     <>
//       <button onClick={()=>setCount(count+1)}>parentCounter{count}</button>
//       <Child/>
//     </>
//   )
// }

// export default App


import { useCallback, useState } from 'react'
import './App.css'
import Child from './Child';

function App() {
  const [count, setCount] = useState(0)

const incriment=useCallback(()=>{
  console.log("parant");
  setCount(count+1)
  
},[count])

  return (
    <>
      <button onClick={incriment}>parentCounter{count}</button>
      
    </>
  )
}

export default App
