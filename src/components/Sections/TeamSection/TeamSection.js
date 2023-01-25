import React, { useContext } from "react";
import { useViewPort } from "../../../hooks/useViewPort";

import teamMate_1 from "../../../assets/images/team/team_01.png";
import teamMate_2 from "../../../assets/images/team/team_02.png";
import teamMate_3 from "../../../assets/images/team/team_03.png";
import line01 from "../../../assets/images/team/line01.png";
import line02 from "../../../assets/images/team/line02.png";

import styles from "./TeamSection.module.scss";

const TeamSection = () => {
  const { width } = useViewPort();

  const handleRotateLine01 = () => {
    if (width >= 1000) {
      return "rotate(0)";
    }
    if (width < 1000 && width > 768) {
      const rotate = (1000 - width) / 7;
      return `rotate(${rotate}deg)`;
    }
    if (width <= 768) {
      return `rotate(40deg)`;
    }
  };

  const handleTopLine01 = () => {
    if (width >= 1000) {
      return "0px";
    }
    if (width < 1000 && width > 768) {
      const top = (1000 - width) / 3;
      return `${top}px`;
    }
    if (width <= 768 && width > 400) {
      const top = (width - 400) / 2 + 95;
      return `${top}px`;
    }
    if (width <= 400) {
      return `95px`;
    }
  };

  const handleXPositionLine01 = () => {
    if (width > 768) {
      return "162px";
    }
    if (width <= 768 && width > 400) {
      const left = (width - 400) / 2.5 + 119;
      return `${left}px`;
    }
    if (width <= 400) {
      return `95px`;
    }
  };

  const handleRotateLine02 = () => {
    if (width >= 1000) {
      return "rotate(0)";
    }
    if (width < 1000 && width > 768) {
      const rotate = -(1000 - width) / 15;
      return `rotate(${rotate}deg)`;
    }
    if (width <= 768 && width > 500) {
      return `rotate(125deg)`;
    }
    if (width <= 500) {
      return `rotate(115deg)`;
    }
  };

  const handleTopLine02 = () => {
    if (width >= 950) {
      return "28px";
    }
    if (width < 950 && width >= 900) {
      const top = (950 - width) / 8 + 28;
      return `${top}px`;
    } else if (width > 768) {
      return "44px";
    }
    if (width <= 768 && width > 500) {
      return "150px";
    }
    if (width <= 500) {
      return "111px";
    }
  };

  const handleXPositionLine02 = () => {
    if (width >= 1120) {
      return "227px";
    }
    if (width < 1120 && width >= 900) {
      const left = -(1120 - width) / 3 + 227;
      return `${left}px`;
    } else if (width > 768) {
      return "154px";
    }
    if (width <= 768) {
      return "25px";
    }
  };

  const stylesLine01 = () => {
    return {
      transform: handleRotateLine01(),
      top: handleTopLine01(),
      left: handleXPositionLine01(),
    };
  };

  const stylesLine02 = () => {
    return {
      transform: handleRotateLine02(),
      top: handleTopLine02(),
      left: handleXPositionLine02(),
    };
  };

  return (
    <div className={styles.container}>
      <h1>Our Top Team</h1>
      <h2>Learn more about how you can save our planet's nature.</h2>
      <div className={styles.imgsWrapper}>
        <div className={styles.teamMate1Wrapper}>
          <img src={teamMate_1} alt="teamMate_1" className={styles.teamMate1} />
          <img
            src={line01}
            alt="line_01"
            className={styles.line01}
            style={{ ...stylesLine01() }}
          />
        </div>
        <div className={styles.teamMate2Wrapper}>
          <img src={teamMate_2} alt="teamMate_2" className={styles.teamMate2} />
          <img
            src={line02}
            alt="line_02"
            className={styles.line02}
            style={{ ...stylesLine02() }}
          />
        </div>
        <div className={styles.teamMate3Wrapper}>
          <img src={teamMate_3} alt="teamMate_3" className={styles.teamMate3} />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
