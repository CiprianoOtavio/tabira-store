import React, { useState } from 'react';
import styles from '../Styles/Page.module.css';
import mockItems from '../public/mock.data';
import ItemModal from '../Components/ItemModal';

function Home() {
    const [isItemModalOpen, setIsItemModalOpen] = useState(false);
    const [addedItemName, setAddedItemName] = useState('');
  
    const openItemModal = (itemName: string) => {
      setIsItemModalOpen(true);
      setAddedItemName(itemName); // Set the added item name
    };
  
    const closeItemModal = () => {
      setIsItemModalOpen(false);
    };

  return (
    <div>
      <div className="titulo">
        <h1 className={styles.tabira}>Tabira Store</h1>
      </div>
      <div className="corpo">
        <div className="itemList">
          {mockItems.map((item) => (
            <div key={item.id} className="itemCard">
              <div className="cardContent">
                <img src={item.image} alt={item.name} className={styles.product} />
                <div className={styles.info}>
                  <h2 className={styles.nomeItem}>{item.name}</h2>
                  <h1 className={styles.nomeItem}>R${item.price.toFixed(2)}</h1>
                </div>
                <div className={styles.info}>
                  <button className={styles.btn} onClick={() => openItemModal(item.name)}>
                    Adicionar ao carrinho
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isItemModalOpen && (<ItemModal itemName={addedItemName} onClose={closeItemModal} />)}
    </div>
  );
}

export default Home;