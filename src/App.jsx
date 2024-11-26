import { useMemo, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const inputRef1=useRef()
  const inputRef2=useRef()
const accessRef=()=>{
  console.log(inputRef1.current.value);
  console.log(inputRef2.current.value);

  
}
  return (
    <>
   <input type="text" ref={inputRef1} placeholder='name' />
   <input type="text" ref={inputRef2} placeholder='age' />
<button onClick={accessRef}>CLICK</button>
    </>
  )
}

export default App
