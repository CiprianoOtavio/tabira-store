import React, { useContext, useState } from 'react';
import styles from '../Styles/ItemModal.module.css';
import { Product } from '../types/Product';
import { CartContext } from '../contexts/CartContext';
import ItemModal from './ItemModal';

interface ItemDetailsModalProps {
    onClose: () => void;
    item: Product; 
  }

  function ItemDetailsModal({ onClose, item }: ItemDetailsModalProps) {

    const [isItemModalOpen, setIsItemModalOpen] = useState(false);
    const [addedItemName, setAddedItemName] = useState('');
    const { addToCart } = useContext(CartContext);
  
    const openItemModal = (itemName: string) => {
      setIsItemModalOpen(true);
      setAddedItemName(itemName);
    };
  
    const closeItemModal = () => {
      setIsItemModalOpen(false);
    };

    return (
      <div className={styles.modal}>
        <div className={styles.modalContentItem}>
          <span className={styles.close} onClick={onClose}>
            &times;
          </span>
          <div>
          <img
          src={item.image}
          alt={item.name}
          className={styles.image}/>
          </div>
          <div className={styles.info}>
            <div>
            <h2 className={styles.item}>{item.name}</h2>
                  <h1 className={styles.item}>R${item.price.toFixed(2)}</h1>
                  <p className={styles.item}>{item.description}</p>
            </div>
                  <button
                    className={styles.btn}
                    onClick={() => {
                      openItemModal(item.name);
                      addToCart(item);
                    }}
                  >
                    Adicionar ao carrinho
                  </button>
                </div>
        </div>
        {isItemModalOpen && (
          <ItemModal itemName={addedItemName} onClose={closeItemModal} />
        )}
      </div>
    );
  }

export default ItemDetailsModal;