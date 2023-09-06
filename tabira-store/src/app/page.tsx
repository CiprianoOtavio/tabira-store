// Home.js (ou qualquer outro nome de arquivo que você está usando)
import React from 'react';
import Navbar from '../../Components/Navbar';
import { CartProvider } from '../../contexts/CartContext';
import { AppProps } from 'next/app';


function Page({ Component, pageProps }: AppProps) {
  return (
    <html>
      <body>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Philosopher&display=swap');
        </style>
        <Navbar />
        <CartProvider>
        <Component {...pageProps} />
        </CartProvider>
      </body>
    </html>
  );
}

export default Page;
