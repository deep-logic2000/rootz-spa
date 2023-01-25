import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { ReactComponent as Logo } from "../../assets/images/logo/logo_main.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/icons/close_icon.svg";

import styles from "./BurgerMenu.module.scss";

const BurgerMenu = ({ items, handleClose }) => {
  return (
    <div className={styles.burgerMenuWrapper}>
      <div className={styles.burgerHeadWrapper}>
        <div>
          <nav>
            <Link to="/" className={styles.logoAndNameWrapper}>
              <Logo />
              <p className={styles.companyName}>Rootz</p>
            </Link>
          </nav>
        </div>
        <div>
          <CloseIcon onClick={handleClose} />
        </div>
      </div>
      <ul className={styles.burgerMenuListWrapper}>
        {items.map((item, index) => (
          <li key={item.name}>
            <Link className={styles.navLink} to={item.to} onClick={handleClose}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <button className={styles.button}>Apply</button>
      </div>
    </div>
  );
};

export default BurgerMenu;


BurgerMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  })).isRequired,
  handleClose: PropTypes.func.isRequired,
};
