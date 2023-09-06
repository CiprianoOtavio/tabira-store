import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import styles from '../Styles/Home.module.css';
import mockItems from '../public/mock.data';
import ProductLinkButton from '../Components/ProductLinkButton';
import SearchBar from '../Components/SearchBar';
import Link from 'next/link';

function Home() {
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
        <div className={styles.searchBar}>
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
                  <button className={styles.btn}>Adicionar ao carrinho</button>
                  <ProductLinkButton productId={item.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
