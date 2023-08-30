import React from 'react';
import Link from 'next/link';
import Navbar from '../../Components/Navbar';
import styles from "../../Styles/Page.module.css"; 

const items = [
  { id: 1, name: 'Item 1', price: 10.99, image: 'https://guiademarketing.com.br/wp-content/uploads/2017/04/produtos.jpg' },
  { id: 2, name: 'Item 2', price: 19.99, image: 'https://guiademarketing.com.br/wp-content/uploads/2017/04/produtos.jpg' },
  { id: 3, name: 'Item 3', price: 5.99, image:  'https://guiademarketing.com.br/wp-content/uploads/2017/04/produtos.jpg' },
  { id: 4, name: 'Item com nome grande', price: 7.49, image:  'https://guiademarketing.com.br/wp-content/uploads/2017/04/produtos.jpg' },
  { id: 5, name: 'Item com um nome muito absurdamente grande', price: 15.99, image:  'https://guiademarketing.com.br/wp-content/uploads/2017/04/produtos.jpg' },
  { id: 6, name: 'Item 6', price: 15.99, image:  'https://guiademarketing.com.br/wp-content/uploads/2017/04/produtos.jpg' },

  // ... Add more items
];

function Home() {

  return (
    <html >
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
            {items.map(item => (
              <div key={item.id} className="itemCard">
                <div className="cardContent">
                  <img src={item.image} alt={item.name} className={styles.product}/>
                  <div className={styles.info}>
                  <h2 className={styles.nomeItem}>{item.name}</h2>
                  <h1 className={styles.nomeItem}>R${item.price.toFixed(2)}</h1>
                  </div>
                  <div className={styles.info}>
                  <button className={styles.btn}>Adicionar ao carrinho</button>
                  <Link href={`/product/${item.id}`} passHref>
                    <button className={styles.btn2}>Ver Produto</button>
                  </Link>
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
