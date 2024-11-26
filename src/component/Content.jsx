import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'



 function  Content( {search}) {
const [products,setProducts]=useState([])
const [cat,setCat]=useState([])
const [filter,setFilter]=useState("")
useEffect(()=>{
  FetchData()
},[])
const FetchData=async()=>{
  fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=>{
  setProducts([...data.products])
}).catch((error)=>{
  console.log(error);
  
})

const rescat=await fetch('https://dummyjson.com/products/categories')
const cat=await rescat.json()
// console.log(cat);
setCat([...cat])
console.log(cat);


}
// console.log(products);
if (products.length==0) {
  return <h1 className='loading'>loading ....</h1>
}

  return (
    <>
   


      <div style={{display:"flex",overflowY:"hidden"}} className='cat' >
        <button onClick={()=>setFilter("")} style={{padding:"10px",margin:"20px", color:"white"}}>All</button>
        {
          cat.map((ct)=><button onClick={()=>setFilter(ct.name)} style={{padding:"10px",margin:"20px", color:"white"}} key={ct.name}>{ct.name}</button>)
        }
      </div>
      <div className="card-container">
        {products.filter((i)=>i.title.toLowerCase().includes(search.toLowerCase())) .filter((i)=>i.category.includes(filter.toLowerCase())). map((product) => (
         <Link className='asd' to={`/details/${product.id}` }  key={product.id}>
          <div className="card">
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-category"><strong>Category:</strong> {product.category}</p>
            <p className="product-price">
              <strong>Price:</strong> ${product.price} 
              <span className="discount"> ({product.discountPercentage}% off)</span>
            </p>
            <p className="product-rating">
              <strong>Rating:</strong> {product.rating} ⭐
            </p>
          </div>
         </Link>
        ))}
      </div>
   
    </>
  )
}


export default Content
