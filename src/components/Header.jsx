import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/logo.png';
import Button from './Button/Button';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <NavLink to="/" aria-label="Real State" title="Real State">
            <img src={Logo} alt="Real State" />
          </NavLink>
        </div>
        <nav className={`d-flex ${styles.header__navmenu}`}>
          <NavLink to={'/rent'}>Rent</NavLink>
          <NavLink to={'/buy'}>Buy</NavLink>
          <NavLink to={'/sell'}>Rent</NavLink>
          <NavLink to={'/properties'}>Properties</NavLink>
          <div className={styles.header__navmenu_dropdown}>
            <NavLink to={'/'}>Submenu</NavLink>
            <NavLink to={'/'}>Submenu</NavLink>
          </div>
        </nav>
        <div className={`d-flex ${styles.header__cta}`}>
          <Button classe="alt" text="Login" />
          <Button text="Sing-Up" />
        </div>
      </div>
    </header>
  );
};

export default Header;
