import React from 'react';
import styles from './About.module.css';
import AboutHouse from '../../assets/casa-bonita.avif';
import Button from '../../components/Button/Button';

// conteúdo
const tabContent = {
  landlord: {
    title: 'Tornamos mais fácil para locatários',
    text: 'Quer seja vender a sua casa atual, obter financiamento ou comprar uma casa nova, tornamos tudo mais fácil e eficiente. A melhor parte? você economizará muito dinheiro e tempo com nossos serviços.',
  },
  tenant: {
    title: 'Tornamos mais fácil para inquilinos',
    text: 'Texto inquilinos.',
  },
};

const About = () => {
  const [content, setContent] = React.useState();
  const [btnLandlord, setBtnLandlord] = React.useState(true);
  const [btnTenant, setBtnTenant] = React.useState(false);

  React.useEffect(() => {
    setContent(tabContent['landlord']);
  }, []);

  function handleChangeContent(e) {
    e.preventDefault();
    console.log(content);
    if (e.target.id === 'landlord') {
      setContent(tabContent['landlord']);
      setBtnLandlord(!btnLandlord);
      setBtnTenant(!btnTenant);
    } else if (e.target.id === 'tenant') {
      setContent(tabContent['tenant']);
      setBtnTenant(!btnTenant);
      setBtnLandlord(!btnLandlord);
    }
  }

  return (
    <section className={`${styles.about} container`}>
      <div className={styles.about__container}>
        <div className={styles.about__container_imgBox}>
          <picture className={styles.about__container_img}>
            <img src={AboutHouse} alt="Casa Bonita" />
          </picture>

          <div className={`${styles.about__container_bottomBox} shadow`}>
            <p className="text-bold">Encontre o imóvel ideal</p>
            <p>navegue por milhares de propriedades</p>
          </div>
        </div>

        <div className={styles.about__container_content}>
          <nav className={styles.about__container_content_nav}>
            <button
              id="landlord"
              onClick={handleChangeContent}
              data-btn={btnLandlord}
            >
              Para proprietários
            </button>
            <button
              id="tenant"
              onClick={handleChangeContent}
              data-btn={btnTenant}
            >
              Para inquilinos
            </button>
          </nav>

          <div className={styles.about__container_content_tab}>
            {content && (
              <>
                <h1>{content['title']}</h1>
                <p>{content['text']}</p>
                <Button text="Saiba Mais" />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
