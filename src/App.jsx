import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomHook from './CustomHook'

function App() {
  const {val,incriment,decriment}=CustomHook(0)

  return (
    <>
      <button onClick={incriment}>+</button>
      <span>{val}</span>
      <button onClick={decriment}>-</button>

    </>
  )
}

export default App
