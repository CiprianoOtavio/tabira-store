import { AppProps } from 'next/app';
import '../styles/globals.css'; // Importe seu arquivo CSS global aqui
import Navbar from '../Components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  // Você pode adicionar estados globais ou lógica aqui, se necessário.

  return (
    <>
      {/* Componente de layout comum, como um cabeçalho ou menu de navegação */}
      <header>
        {/* Adicione qualquer conteúdo comum do cabeçalho aqui */}
        <Navbar />
      </header>

      {/* Renderiza o componente da página atual */}
      <Component {...pageProps} />

      {/* Componente de layout comum, como um rodapé */}
      <footer>
        {/* Adicione qualquer conteúdo comum do rodapé aqui */}
      </footer>
    </>
  );
}

export default MyApp;