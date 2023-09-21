import Link from "next/link";
import Image from "next/image";
import styles from "../../src/styles/Navbar.module.css"
import React from 'react';
import Footer from './Footer';
import Head from 'next/head';


const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.logo}>
        <Image src="/images/pokeball.png" width="30" height="30" alt="PokeNext" charset='utf-8'  />
        <h1>Pokemon</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a>Sobre</a>
          </Link>
        </li>
        {/* Outros links aqui */}
      </ul>
    </nav>
  );
};

export default Navbar;



    