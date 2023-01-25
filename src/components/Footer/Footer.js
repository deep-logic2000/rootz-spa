import React from "react";

import { ReactComponent as TwitterIcon } from "../../assets/images/icons/socials/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../assets/images/icons/socials/facebook.svg";
import { ReactComponent as LinkedIn } from "../../assets/images/icons/socials/linkedIn.svg";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftSide}>
            <h1>CONTACTS</h1>
            <p>2019 Rootz Foundation.</p>
            <p>All rights reserved</p>
          </div>
          <div className={styles.centerSide}>
            <h2>Headquarters</h2>
            <p>1234 Taliban</p>
            <p>Los Angeles, La 1234567</p>
            <p>(123) 456-7890</p>
          </div>
          <div className={styles.rightSide}>
            <h2>Social media</h2>
            <div className={styles.socialsWrapper}>
              <TwitterIcon />
              <FacebookIcon />
              <LinkedIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
