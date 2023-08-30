// Home.js (ou qualquer outro nome de arquivo que você está usando)
import React from 'react';
import Navbar from '../../Components/Navbar';
import styles from "../../Styles/Page.module.css"; 
import mockItems from '../../public/mock.data';
import ProductLinkButton from '../../Components/ProductLinkButton';

function Home() {
  return (
    <html>
      <body>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Philosopher&display=swap');
        </style>
        <Navbar />
        <div className="titulo">
          <h1 className={styles.tabira}>Tabira Store</h1>
        </div>
        <div className="corpo">
          <div className="itemList">
            {mockItems.map(item => (
              <div key={item.id} className="itemCard">
                <div className="cardContent">
                  <img src={item.image} alt={item.name} className={styles.product}/>
                  <div className={styles.info}>
                    <h2 className={styles.nomeItem}>{item.name}</h2>
                    <h1 className={styles.nomeItem}>R${item.price.toFixed(2)}</h1>
                  </div>
                  <div className={styles.info}>
                    <button className={styles.btn}>Adicionar ao carrinho</button>
                    {/* Renderiza o novo componente passando o productId */}
                    <ProductLinkButton productId={item.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </body>
    </html>
  );
}

export default Home;
