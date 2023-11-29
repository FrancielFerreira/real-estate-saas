import React from 'react';
import styles from './About.module.css';
import AboutHouse from '../../assets/casa-bonita.avif';
import { NavLink, Route, Routes } from 'react-router-dom';

const About = () => {
  function handleChangeContent(event) {
    event.preventDefault();
  }

  return (
    <section className={`${styles.about} container`}>
      <div className={styles.about__container}>
        <div className={styles.about__container_img}>
          <img src={AboutHouse} alt="Casa Bonita" />
        </div>

        <div className={styles.about__container_content}>
          <nav className={styles.about__container_content_nav}>
            <button className={styles.ativo}>Para proprietários</button>
            <button>Para inquilinos</button>
          </nav>

          <div className={styles.about__container_content_tab}>
            <Routes>
              <Route
                path=""
                element={
                  <>
                    <h1 className="title">
                      Tornamos mais fácil para inquilinos
                    </h1>
                    <p className="teste">
                      Quer seja vender a sua casa atual, obter financiamento ou
                      comprar uma casa nova, tornamos tudo mais fácil e
                      eficiente. A melhor parte? você economizará muito dinheiro
                      e tempo com nossos serviços.
                    </p>
                  </>
                }
              />
              <Route
                path="tenants"
                element={
                  <>
                    <h1 className="title">
                      Tornamos mais fácil para proprietários
                    </h1>
                    <p className="teste">
                      Quer seja vender a sua casa atual, obter financiamento ou
                      comprar uma casa nova, nós tornamos tudo mais fácil e
                      eficiente. A melhor parte? você economizará muito dinheiro
                      e tempo com nossos serviços.
                    </p>
                  </>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
