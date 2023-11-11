import React from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p className="description">{product.description}</p>
      <p><b>Precio:</b> ${product.price}</p>
      <p><b>SKU:</b> {product.sku}</p>
      <p><b>Cantidad disponible:</b> {product.quantity}</p>
    </div>
  );
};

export default ProductDetail;