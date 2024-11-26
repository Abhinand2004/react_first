import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';

const Details = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(error => console.log(error));
      
  }, [id]);

  if (!product) return <h1 className="loading">Loading...</h1>;

  const addToCar = () => {
   localStorage.setItem(id,JSON.stringify(product))
    
  };

  return (
    <div className="details">
      <div className="details-content">
        <img src={product.thumbnail} alt={product.title} className="details-img" />
        <h2>{product.title}</h2>
        <p>Brand: <strong>{product.brand}</strong></p>
        <p>{product.description}</p>
        <p>Price: <strong>${product.price}</strong></p>
        <p>Discount: <strong>{product.discountPercentage}%</strong></p>
        <p>Rating: <strong>{product.rating} ★</strong></p>
        <div className="details-buttons">
          <button onClick={addToCar}>Add to Cart</button>
          <button >Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
