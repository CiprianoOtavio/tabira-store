import { useState } from 'react';
import styles from "../Styles/Cart.module.css";
import mockCart from '../public/mockCart.data ';


export default function Cart() {
    const [cartItems, setCartItems] = useState(mockCart);

    const removeFromCart = (itemId: number) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);
    };

    const calculateTotal = () => {
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        return total.toFixed(2);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <div>
        
            <div className="titulo">
                <h1 className={styles.carrinho}>Carrinho</h1>
            </div>
            <div className={styles.cartContainer}>
                <div>
                {cartItems.map(item => (
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
                            <button className={styles.btn} onClick={() => removeFromCart(item.id)}>Remover</button>
                        </div>
                    </div>
                ))}
                </div>
                
                <div className={styles.totalContainer}>
                    <h1 className={styles.carrinho}>Total: ${calculateTotal()}</h1>
                    <button className={styles.btn}  onClick={clearCart}>Limpar Carrinho</button>
                    <br />
                    <button className={styles.btn2} >Finalizar Compra</button>
                </div>
            </div>
        </div>
    )
}

