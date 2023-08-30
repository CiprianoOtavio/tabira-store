import { useState } from 'react';
import Navbar from "../Components/Navbar"
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
        return total;
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <div>

            <div className={styles.topo}>
                <h1 className={styles.carrinho}>Carrinho</h1>
            </div>
            <div className={styles.cartContainer}>
                {cartItems.map(item => (
                    <div key={item.id} className={styles.cartItem}>
                        <div className={styles.itemContent}>
                            <div className={styles.productInfo}>
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price}</p>
                            </div>
                            <button onClick={() => removeFromCart(item.id)}>Remover</button>
                        </div>
                    </div>
                ))}
                <div className={styles.totalContainer}>
                    <p>Total: ${calculateTotal()}</p>
                    <button onClick={clearCart}>Limpar Carrinho</button>
                    <button>Finalizar Compra</button>
                </div>
            </div>
        </div>
    )
}
