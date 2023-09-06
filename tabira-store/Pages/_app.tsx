import { AppProps } from 'next/app';
import '../styles/globals.css'; 
import Navbar from '../Components/Navbar';
import { CartProvider } from '../contexts/CartContext';

function MyApp({ Component, pageProps }: AppProps) {
 
  return (
    <>
      <CartProvider>
      {}
      
      <header>
        {/* Adicione qualquer conteúdo comum do cabeçalho aqui */}
        <Navbar />
      </header>

      {/* Renderiza o componente da página atual */}
      <Component {...pageProps} />

      {/* Componente de layout comum, como um rodapé */}
      </CartProvider>
      <footer>
        {/* Adicione qualquer conteúdo comum do rodapé aqui */}
      </footer>
    </>
  );
}

export default MyApp;