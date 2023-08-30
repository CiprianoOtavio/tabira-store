// ProductLinkButton.js
import React from 'react';
import Link from 'next/link';
import styles from "../Styles/Page.module.css"; 

interface ProductLinkButtonProps {
  productId: number; // Defina o tipo da prop productId
}

function ProductLinkButton({ productId }: ProductLinkButtonProps) {
  return (
    <Link href={`/product/${productId}`}>
      <button className={styles.btn2}>Ver Produto</button>
    </Link>
  );
}

export default ProductLinkButton;
