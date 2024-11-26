import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Content from "./component/Content";
import { useState } from "react";
import Details from "./component/details";
import Cart from "./component/Cart";

function App(){
    const[search,setSearch]=useState("")
    return(
        <>
        <BrowserRouter>
        <Navbar setSearch={setSearch}/>
        <Routes>
            <Route path="/" element={<Content search={search}/>}></Route>
            <Route path="/details/:id" element  ={<Details/>}/>
            <Route path="/Cart" element  ={<Cart/>}/>
            
            
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App