import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useViewPort } from "../../hooks/useViewPort";
import NavMenu from "../NavMenu/NavMenu";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import { ReactComponent as Logo } from "../../assets/images/logo/logo_main.svg";
import { ReactComponent as BurderIcon } from "../../assets/images/icons/burger_icon.svg";

import styles from "./Header.module.scss";

const navMenuItems = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Our mission",
    to: "/our-mission",
  },
  {
    name: "Places    ",
    to: "/places",
  },
  {
    name: "Team",
    to: "/team",
  },
];

const Header = () => {
  const clientWidth = useViewPort();
  const [isOpenMiniMenu, setIsOpenMiniMenu] = useState(false);

  const isMobile = clientWidth.width <= 768;

  useEffect(() => {
    if (clientWidth.width > 768) setIsOpenMiniMenu(false);
  }, [clientWidth]);

  return (
    <header>
      <div className={styles.headerWrapper}>
        <div className={styles.navBarWrapper}>
          <nav>
            <Link to="/" className={styles.logoAndNameWrapper}>
              <Logo />
              <p className={styles.companyName}>Rootz</p>
            </Link>
          </nav>
          <nav className={styles.navBar}>
            <NavMenu items={navMenuItems} />
          </nav>
          <button className={styles.button}>Apply</button>
          {isMobile && !isOpenMiniMenu && (
            <div onClick={() => setIsOpenMiniMenu(true)}>
              <BurderIcon />
            </div>
          )}

          {isOpenMiniMenu && (
            <div>
              <div className={styles.burgerMenuWrapper}>
                <BurgerMenu
                  items={navMenuItems}
                  handleClose={() => setIsOpenMiniMenu(false)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
