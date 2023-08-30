import styles from '../Styles/Navbar.module.css'; 

const Navbar: React.FC = () => {
  return (
        <div className='nav'>
        <nav className={styles.navbar}>
            
        <a href="/" className='ahome' ><h3 className={styles.textohome}>Tabira Store</h3></a>
        <ul className={styles.navLinks}>
        <li>
            <a href='/about'>About</a>
        </li>
        <li>
            <a href="/services">Services</a>
        </li>
        <li>
            <a href="/contact">Contact</a>
        </li>
        <li>
            <a href="/cart">Carrinho</a>
        </li>
        </ul>
    </nav>
    </div>

  );
};

export default Navbar;
