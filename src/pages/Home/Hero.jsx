import React from 'react';
import styles from './Hero.module.css';
import Button from '../../components/Button/Button';

const Hero = () => {
  function handleTabSearch(event) {
    event.preventDefault();
    const tabButtonsSearch = document.querySelectorAll('[data-nav-search]');
    tabButtonsSearch.forEach((item) =>
      item.setAttribute('data-nav-search', 'hide'),
    );
    event.target.setAttribute('data-nav-search', 'show');
  }

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
            <nav className={`${styles.hero__search_nav} shadow`}>
              <span
                className="text"
                data-nav-search="show"
                onClick={handleTabSearch}
              >
                Buy
              </span>
              <span
                className="text"
                data-nav-search="hide"
                onClick={handleTabSearch}
              >
                Rent
              </span>
              <span
                className="text"
                data-nav-search="hide"
                onClick={handleTabSearch}
              >
                Sell
              </span>
            </nav>
            <form className={`${styles.hero__search_content} shadow`}>
              <div>
                <label htmlFor="">Localização</label>
                <input placeholder="Cidade, ES" className="text" />
              </div>
              <div>
                <label htmlFor="">Tipo</label>
                <select name="" id="">
                  <option value="apartamento">Apartamento</option>
                  <option value="Casa">Casa</option>
                  <option value="sitio">Sítio</option>
                  <option value="kitnet">Kitnet</option>
                </select>
              </div>
              <Button text="Search" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
