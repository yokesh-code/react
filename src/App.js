import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data from the backend
    axios.get('http://localhost:3000/scrape')
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product data', error));
  }, []);

  const handleCreateProduct = () => {
    const newProduct = {
      title: 'New Product',
      rating: 4.5,
      price: 99.99,
      finalPrice: 79.99
    };

    axios.post('http://localhost:3000/scrape', newProduct)
      .then(response => {
        console.log('Product created:', response.data);
        setProduct(response.data);
      })
      .catch(error => console.error('Error creating product', error));
  };

  return (
    <div>
      <h1>Product Information</h1>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>Rating: {product.rating}</p>
          <p>Price: {product.price}</p>
          <p>Final Price: {product.finalPrice}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={handleCreateProduct}>Create Product</button>
    </div>
  );
}

export default App;
