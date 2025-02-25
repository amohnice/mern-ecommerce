import React, { useContext } from 'react';
import ProductCard from '../../components/productcard/ProductCard.jsx';
import { CartContext } from '../../context/CartContext.jsx';
import './productspage.css';

const ProductsPage = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="products-page">
      <h2>All Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;