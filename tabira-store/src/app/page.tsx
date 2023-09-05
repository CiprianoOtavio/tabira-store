// Home.js (ou qualquer outro nome de arquivo que você está usando)
import React from 'react';
import Navbar from '../../Components/Navbar';
import styles from "../../Styles/Page.module.css"; 
import mockItems from '../../public/mock.data';
import ProductLinkButton from '../../Components/ProductLinkButton';

function Page() {
  return (
    <html>
      <body>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Philosopher&display=swap');
        </style>
        <Navbar />
      </body>
    </html>
  );
}

export default Page;
