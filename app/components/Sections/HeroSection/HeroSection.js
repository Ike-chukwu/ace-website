import React from "react";
import styles from "../../../../styles/heroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroParent}>
      <section className={styles.heroContainer}>
        <div className={styles.leftSide}>
          <img src="/heroLeft.png" className={styles.img} alt="" />
        </div>

        <div className={styles.textContent}>
          <p className={styles.littleText}>Ensuring maximum security</p>
          <div className={styles.bottomPart}>
            <h2 className={styles.mainHeading}>
              ACE-OAKPARK AFRICAN CENTRE OF EXCELLENCE IN SOFTWARE ENGINEERING
            </h2>
            <p className={styles.brief}>
              Our Mission is to develop a Center of Excellence in ICT as a
              Training Hub in Software Engineering for Nigeria and other
              countries in the sub-region
            </p>
            <button className={styles.btn}>read more</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
