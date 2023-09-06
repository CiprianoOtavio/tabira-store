import mockItems from '../public/mock.data';
import React, { useContext, useState, useEffect } from 'react';
import ItemModal from '../Components/ItemModal';
import styles from '../Styles/Home.module.css';
import ProductLinkButton from '../Components/ProductLinkButton';
import SearchBar from '../Components/SearchBar';
import Link from 'next/link';
import { CartContext } from '../contexts/CartContext';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Product } from '../types/Product';
import router from 'next/router';

export async function getStaticProps() {
 
  return {
    props: {
      mockItems,
    },
  };
}

interface HomeProps {
  mockItems: Product[];
}

function Home({ mockItems }: HomeProps) {
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [addedItemName, setAddedItemName] = useState('');

  const openItemModal = (itemName: string) => {
    setIsItemModalOpen(true);
    setAddedItemName(itemName);
  };

  const closeItemModal = () => {
    setIsItemModalOpen(false);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(mockItems);

  useEffect(() => {
    // Função para filtrar os itens com base no 'searchTerm'
    const filterItems = () => {
      const filtered = mockItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(filtered);
    };

    // Chame a função de filtragem sempre que o 'searchTerm' mudar
    filterItems();
  }, [searchTerm, mockItems]);

  const { addItemToCart } = useContext(CartContext);

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
          {filteredItems.map((item) => (
            <div key={item.id} className="itemCard">
              <div className="cardContent">
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
                  <button
                    className={styles.btn}
                    onClick={() => {
                      openItemModal(item.name);
                      addItemToCart(item);
                      router.push('/cart')
                    }}
                  >
                    Adicionar ao carrinho
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {isItemModalOpen && (
          <ItemModal itemName={addedItemName} onClose={closeItemModal} />
        )}
      </div>
    </>
  );
}

export default Home;
