import styles from './Button.module.css';

const Button = ({ text, classe }) => {
  return (
    <button className={classe ? styles.buttonAlt : styles.button}>
      {text}
    </button>
  );
};

export default Button;
