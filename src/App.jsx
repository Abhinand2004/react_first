import { useMemo, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [number,setNumber]=useState(0)
 const factorial=useMemo(()=>{
let result=1
for(let i=1;i<=number;i++){
  result*=i
}
return result
 },[number])
  

  return (
    <>
   <input type="text" onChange={(e)=>setNumber(e.target.value)}/>
  <p>Factorial of:{number} is:{factorial}</p>
    </>
  )
}

export default App













