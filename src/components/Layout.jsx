import React from 'react';
import Footer from './Footer';
import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        {
         }<link rel="shortcut icon" href='/images/favicon.icon '/>
         <title>Pokenext</title>
      </Head>
      <Navbar/>
      {/* Conteúdo do layout */}
      <main className='main-container'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;




