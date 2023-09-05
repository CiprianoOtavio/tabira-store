import React from 'react';
import styles from '../Styles/ItemModal.module.css';

interface ItemModalProps {
    onClose: () => void;
    itemName: string; 
  }

  function ItemModal({ onClose, itemName }: ItemModalProps) {
    return (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={onClose}>
            &times;
          </span>
          <h2 className={styles.item}>Item Adicionado</h2>
          <p className={styles.item}>{itemName} foi adicionado ao carrinho.</p>
        </div>
      </div>
    );
  }

export default ItemModal;