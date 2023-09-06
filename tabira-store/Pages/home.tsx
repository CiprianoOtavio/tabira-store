import React, { useContext, useState, useEffect } from 'react';
import ItemModal from '../Components/ItemModal';
import ItemDetailsModal from '../Components/ItemDetailsModal';
import styles from '../Styles/Home.module.css';
import SearchBar from '../Components/SearchBar';
import Link from 'next/link';
import { CartContext } from '../contexts/CartContext';
import { Product } from '../types/Product';
import mockItems from '../public/mock.data';

export default function Home() {
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isItemDetailsModalOpen, setItemDetailsModalOpen] = useState(false);
  const [addedItem, setAddedItem] = useState<Product>(); 
  const [addedItemName, setAddedItemName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useContext(CartContext);

  const openItemModal = (itemName: string) => {
    setIsItemModalOpen(true);
    setAddedItemName(itemName);
  };

  const closeItemModal = () => {
    setIsItemModalOpen(false);
  };

  const openItemDetailsModal = (item: Product) => {
    setItemDetailsModalOpen(true);
    setAddedItem(item);
  };

  const closeItemDetailsModal = () => {
    setItemDetailsModalOpen(false);
   };

  const filterItems = () => {
    const filtered = mockItems.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filtered;
  };

  useEffect(() => {
    filterItems();
  }, [searchTerm]);

  return (
    <>
      <div className="titulo">
        <h1 className={styles.tabira}>Tabira Store</h1>
      </div>
      <div className={styles.searchBar}>
        <SearchBar onSearch={setSearchTerm} />
      </div>
      <div className="corpo">
        <div className="itemList">
          {filterItems().map((item) => (
            <div key={item.id} className="itemCard">
              <div className="cardContent">
                <div style={{ cursor: 'pointer' }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.product}
                  />
                </div>
                <div className={styles.info}>
                  <h2 className={styles.nomeItem}>{item.name}</h2>
                  <h1 className={styles.nomeItem}>R${item.price.toFixed(2)}</h1>
                </div>
                <div className={styles.info}>
                  <button
                    className={styles.btn}
                    onClick={() => {
                      openItemModal(item.name);
                      addToCart(item);
                    }}
                  >
                    Adicionar ao carrinho
                  </button>
                    <button className={styles.btn2} onClick={() => 
                      openItemDetailsModal(item)}>Ver Produto</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {isItemModalOpen && (
          <ItemModal itemName={addedItemName} onClose={closeItemModal} />
        )}
       {isItemDetailsModalOpen && addedItem && (
  <ItemDetailsModal item={addedItem} onClose={closeItemDetailsModal} />
)}
      </div>
    </>
  );
}
