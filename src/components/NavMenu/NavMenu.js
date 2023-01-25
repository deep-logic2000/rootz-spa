import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

import styles from "./NavMenu.module.scss";

const NavMenu = ({ items }) => {
  return (
    <ul className={styles.navMenuWrapper}>
      {items.map((item, index) => (
        <li key={item.name}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
            to={item.to}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;


NavMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  })).isRequired,
};