import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchData();
    return () => {};
  }, []);
  return (
    <div>
      <ul className="products">
        {products.map((product) => (
          <li key={product._id}>
            <div className="product" key={product.id}>
              <Link to={'/product/' + product._id}>
                {' '}
                <img
                  className="product-image"
                  src={product.image}
                  alt="product"
                />{' '}
              </Link>
              <div className="product-name">
                <Link to={'/product/' + product._id}>{product.name}</Link>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">{product.price} $</div>
              <div className="product-rating">
                {product.rating} stars/ {product.numReviews} reviews
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeScreen;
