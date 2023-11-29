import React from 'react';
import Page404Img from '../../assets/404-error-rafiki.png';
import styles from './Page404.module.css';

const Page404 = () => {
  return (
    <section className={styles.page404}>
      <h1 className="title">Erro 404 - Página não encontra</h1>
      <div>
        <img src={Page404Img} alt="Erro 404 - Página não encontra" />
      </div>
    </section>
  );
};

export default Page404;
