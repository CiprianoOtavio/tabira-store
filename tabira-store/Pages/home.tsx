import React, { useState } from 'react';
import ItemModal from '../Components/ItemModal';
import styles from '../Styles/Page.module.css';
import mockItems from '../public/mock.data';
import ProductLinkButton from '../Components/ProductLinkButton';
import SearchBar from '../Components/SearchBar';
import Link from 'next/link';

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

  const [filteredItems, setFilteredItems] = useState(mockItems);

  const handleSearch = (searchTerm: string) => {
    const filtered = mockItems.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <>
      <div className="titulo">
        <h1 className={styles.tabira}>Tabira Store</h1>
      </div>
      <div className="corpo">
        <div className="searchBar">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="itemList">
          {filteredItems.map((item) => (
            <div key={item.id} className="itemCard">
              <div className="cardContent">
                {/* Substitua o elemento <a> pelo conteúdo clicável dentro do componente <Link> */}
                <Link href={`/product/${item.id}`}>
                  <div style={{ cursor: 'pointer' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.product}
                    />
                  </div>
                </Link>
                <div className={styles.info}>
                  <h2 className={styles.nomeItem}>{item.name}</h2>
                  <h1 className={styles.nomeItem}>R${item.price.toFixed(2)}</h1>
                </div>
                <div className={styles.info}>
                <button className={styles.btn} onClick={() => openItemModal(item.name)}>
                    Adicionar ao carrinho
                  </button>
                  <ProductLinkButton productId={item.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
        {isItemModalOpen && (<ItemModal itemName={addedItemName} onClose={closeItemModal} />)}
      </div>
    </>
  );
}

export default Home;
