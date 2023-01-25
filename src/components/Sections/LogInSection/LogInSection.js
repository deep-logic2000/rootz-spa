import React, { useState } from "react";

import leafRed from "../../../assets/images/leaf_red.png";
import leafBlue from "../../../assets/images/leaf_blue.png";

import styles from "./LogInSection.module.scss";

const LoginSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else {
      setEmail(value);
    }
  };

  const onSubmit = (e) => {
    alert(
      `Test message!!! Sended request with data: name: ${name}, email: ${email}`
    );
    e.preventDefault();
    setName("");
    setEmail("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginSectionWrapper}>
        <div className={styles.leftSide}>
          <h1>Get Started Today!</h1>
          <p>
            Learn more about how you can save our planet's nature. From smart
            consumption to switching to renewable energy, each of us can do our
            part to save the planet.
          </p>
        </div>
        <div className={styles.loginFormWrapper}>
          <h1 className={styles.loginTitle}>Log In</h1>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className={styles.nameInput}
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <input
              type="text"
              className={styles.emailInput}
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <button className={styles.submitBtn}>Book a demo</button>
          </form>
          <img src={leafRed} alt="leaf_red" className={styles.leafRed} />
          <img src={leafBlue} alt="leaf_blue" className={styles.leafBlue} />
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
