import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../Styles/Product.module.css';

function Product() {
  const router = useRouter();
  const { productId } = router.query;
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (event: { target: { value: string; }; }) => {
    setQuantity(parseInt(event.target.value));
  };

  const addToCart = () => {
    // Lógica para adicionar o produto ao carrinho com a quantidade selecionada
    console.log(`Product ${productId} added to cart with quantity: ${quantity}`);
  };

  return (
    <div>
      <div className={styles.productContainer}>
        <div className={styles.productImage}>
          <img src={`/images/item${productId}.jpg`} alt="Product" />
        </div>
        <div className={styles.productDetails}>
          <h1 className={styles.productName}>Product Name (ID: {productId})</h1>
          <p className={styles.productDescription}>Product description goes here...</p>
          <p className={styles.productPrice}>Price: $10.99</p>
          <div className={styles.quantityContainer}>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              className={styles.quantitySelector}
              min={0}
            />
            <button onClick={addToCart} className={styles.addToCartButton}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
