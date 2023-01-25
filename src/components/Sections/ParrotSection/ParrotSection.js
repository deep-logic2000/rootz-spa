import React, { useState } from "react";

import { ReactComponent as LocationIcon } from "../../../assets/images/icons/location_icon.svg";
import headLine from "../../../assets/images/headLine/headLine.png";
import parrot from "../../../assets/images/parrot.png";

import cardAll from "../../../assets/images/header_card_all.png";

import { useViewPort } from "../../../hooks/useViewPort";

import styles from "./ParrotSection.module.scss";

const ParrotSection = () => {
  const [searchValue, setSearchValue] = useState("");

  const { width } = useViewPort();

  const calculateWidthOfCard = () => {
    if (width <= 768) {
      return 216;
    }
    const multiplier = width / 1280;

    const widthOfCard = multiplier * 100;
    return widthOfCard;
  };

  const calculatePositionOfCard = () => {
    if (width <= 768 && width > 600) {
      return 80;
    }
    if (width <= 600) {
      return 0;
    }
    const multiplier = width > 1280 ? 1 : (1280 - width) / 2;
    const positionOfCard = multiplier - 54;
    return positionOfCard < 80 ? positionOfCard : 80;
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftSideWrapper}>
            <div>
              <img src={headLine} alt="headLine" className={styles.headLine} />
            </div>
            <div>
              <p>
                The scale of the challenges facing our planet can seem daunting,
                but we can all do something.
              </p>
            </div>
            <div className={styles.searchWrapper}>
              <LocationIcon className={styles.locationIcon} />
              <input
                value={searchValue}
                type="text"
                placeholder="Find the place to help"
                onChange={handleChange}
              />
              <button>SEARCH</button>
            </div>
          </div>
          <div className={styles.rightSideWrapper}>
            <div
              className={styles.parrotImageWrapper}
            >
              <img src={parrot} alt="parrot" className={styles.parrotImage} />
            </div>
            <div
              className={styles.cardImageWrapper}
              style={{ left: `${calculatePositionOfCard()}px` }}
            >
              <div className={styles.cardImage}>
                <img
                  src={cardAll}
                  alt="card"
                  style={{
                    width: `${calculateWidthOfCard()}%`,
                    maxWidth: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomParrotBlock}></div>
    </section>
  );
};

export default ParrotSection;
