import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>Price: KES {product.price.toFixed(2)}</p>
      <p>Description: This is a great product.</p>
    </div>
  );
};

export default ProductDetails;