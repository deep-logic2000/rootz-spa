import React, { useState, useCallback, useEffect } from "react";

import { ReactComponent as MinusIcon } from "../../../assets/images/icons/minus_icon.svg";
import { ReactComponent as PlusIcon } from "../../../assets/images/icons/plus_icon.svg";

import styles from "./QuestionsSection.module.scss";

const QuestionsSection = ({ items }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    setState(items);
  }, []);

  const onToggleChange = (id) => {
    if (id) {
      const index = state.findIndex((question) => question.id === id);
      const newState = [...state];
      newState[index].isOpen = !newState[index]?.isOpen;
      setState(newState);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.leftSide}>
          <h1>Ready To Get Started?</h1>
          <p>
            When pattern is mentioned in interior design, it is easy to asso-
            ciate it with a geometric patterned wallpaper or colourful prints on
            interior fabrics.
          </p>
          <button>Contact us</button>
        </div>
        <div className={styles.rightSide}>
          {state?.map((question) => (
            <div className={styles.questionWrapper} key={question.id}>
              <div className={styles.questionContentWrapper}>
                <h2>{question.title}</h2>

                <div>
                  <button
                    className={styles.spoilerButton}
                    onClick={() => onToggleChange(question.id)}
                  >
                    {question?.isOpen ? <MinusIcon /> : <PlusIcon />}
                  </button>
                </div>
              </div>
              {question?.isOpen && (
                <p className={styles.questionText}>{question.text}</p>
              )}
              <div className={styles.bottomLine}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionsSection;
