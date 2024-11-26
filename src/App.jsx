// import { useState } from 'react'

// import './App.css'

// function App() {
// const [val,setval]=useState({
//   name:"",
//   age:"",
//   cls:""

// })

//   const handlechange=(e)=>{
//     // console.log(e.target.name);
//     // console.log(e.target.value);
//     setval((pre)=>({...pre,[e.target.name]:e.target.value}))
//   }
//   const handlesubmit=(e)=>{
// e.preventDefault();
// console.log("hkuhk");
// console.log(val);


//   }
//   return (
//     <>
//        <form action="">
//         <input type="text" name='name' onChange={handlechange}  placeholder='name'/>
//         <input type="text" name='age' onChange={handlechange}  placeholder='age'/>
//         <input type="text" name='cls' onChange={handlechange} placeholder='class'/>
//         <button onClick={handlesubmit}>AddData</button>

//         </form> 
//     </>
//   )
// }

// export default App








import { useState } from 'react'

import './App.css'

function App() {
  const [val, setval] = useState({
    name: "",
    sub: "",
    Cls: "",
    check: []

  })

  const handlechange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setval((pre) => ({ ...pre, [e.target.name]: e.target.value }))
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(val);


  }
  return (
    <>
      <form action="">
        <input type="text" name='name' onChange={handlechange} placeholder='name' />
        <br />
        <label >Choose a Class:</label>
        <select name="sub" id="sub" onChange={handlechange}>
          <option value="">Subject</option>
          <option value={"English"}>English</option>
          <option value={"Malayalam"}>Malayalam</option>
          <option value={"Physics"}>Physics</option>
          <option value={"Maths"}>Maths</option>
        </select>
        <br />
        <label htmlFor="cls7">Class 7</label>
        <input type="radio" name="Cls" id="" value={"class=7"} onChange={handlechange} />
        <label htmlFor="Cls8">Class 8</label>
        <input type="radio" name="Cls" id="" value={"class=8"} onChange={handlechange} />
        <label htmlFor="cls9">Class 9</label>
        <input type="radio" name="Cls" id="" value={"class=9"} onChange={handlechange} />
        <br />
        <label htmlFor="">Teacher=</label>
        <label htmlFor="chek1">Arun</label>
        <input type="checkbox" name="check" id="" value={"Arun"} onChange={handlechange} />
        <label htmlFor="chek2" >Varun</label>
        <input type="checkbox" name="check" id="" value={"Varun"} onChange={handlechange} />
        <label htmlFor="chek2" >Lubin</label>
        <input type="checkbox" name="check" id="" value={"Lubin"} onChange={handlechange} />


      <br /><br />
        <button onClick={handlesubmit}>AddData</button>

      </form>
    </>
  )
}

export default App