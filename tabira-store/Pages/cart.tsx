import { useContext, useState } from 'react';
import styles from "../Styles/Cart.module.css";
import { CartContext } from '../contexts/CartContext';
import { CartProvider } from '../contexts/CartContext';


export default function Cart() {
    const { cart, clearCart, totalPrice, removeItemFromCart } = useContext(CartContext);
    console.log(cart)
    return (
        <CartProvider>
        
            <div className="titulo">
                <h1 className={styles.carrinho}>Carrinho</h1>
            </div>
            <div className={styles.cartContainer}>
                <div>
                {cart.map((item, index) => (
                    <div key={item.id} className={styles.cartItem}>
                        <div className={styles.itemContent}>
                            <div className={styles.productInfo}>
                                
                                <img src={item.image} alt={item.name} className={styles.product}/>
                                <div>
                                <h3  className={styles.carrinho}>{item.name}</h3>
                                <p  className={styles.carrinho}>Price: ${item.price}</p>
                                </div>
                                <div>
                                    
                                </div>
                            
                            </div>
                            <button className={styles.btn} onClick={() => removeItemFromCart(index)}>Remover</button>
                        </div>
                    </div>
                ))}
                </div>
                
                <div className={styles.totalContainer}>
                    <h1 className={styles.carrinho}>Total: $ {totalPrice()}</h1>
                    <button className={styles.btn}  onClick={clearCart}>Limpar Carrinho</button>
                    <br />
                    <button className={styles.btn2} >Finalizar Compra</button>
                </div>
            </div>
        
        </CartProvider>
    )
}

