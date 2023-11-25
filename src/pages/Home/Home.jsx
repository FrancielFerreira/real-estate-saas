import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.home}>
      <div className="container">
        <div className={styles.container__home}>
          <h1>Buy, rent or sell your property easily</h1>
          <p>
            A great platform to buy, sell, or even rent your properties without
            any commissions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
