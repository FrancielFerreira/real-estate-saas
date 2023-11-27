import React from 'react';
import styles from './Hero.module.css';
import Button from '../../components/Button/Button';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={`animeLeft ${styles.hero__content}`}>
          <div className={styles.hero__content_title}>
            <h1 className="title-big">
              Uma solução completa para você{' '}
              <span className="text-dec">comprar, alugar ou vender </span> seu
              imóvel com facilidade
            </h1>

            <p className="text-big">
              A great platform to buy, sell, or even rent your properties
              without any commissions
            </p>
          </div>

          <div className={`${styles.hero__numbers}`}>
            <p>
              <span className="title" data-hero-number>
                50k+
              </span>
              <span>locatários</span>
            </p>
            <p>
              <span className="title" data-hero-number>
                10k+
              </span>
              <span>propriedades</span>
            </p>
          </div>

          <div className={styles.hero__search}>
            <nav className={styles.hero__search_nav}>
              <span className="text" data-nav-search="show">
                Rent
              </span>
              <span className="text" data-nav-search="hide">
                Buy
              </span>
              <span className="text" data-nav-search="hide">
                Sell
              </span>
            </nav>
            <div className={styles.hero__search_content}>
              <p>
                Localização<span className="text-bold">Cidade, ES</span>
              </p>
              <p>
                Tipo<span className="text">Apartamento</span>
              </p>
              <Button text="Search" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
