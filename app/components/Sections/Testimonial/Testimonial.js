import React from "react";
import styles from "../../../../styles/testimonial.module.css";

const Testimonial = () => {
  return (
    <div className={styles.testimonialParent}>
      <section className={styles.testimonalContainer}>
        <h1 className={styles.mainHeading}>What People Say About Us</h1>
        <div className={styles.praiseContainer}>
          <div className={styles.praiseCard}>
            <div className={styles.starsPack}>
              <img src="/star.png" className={styles.star} alt="" />
              <img src="/star.png" className={styles.star} alt="" />
              <img src="/star.png" className={styles.star} alt="" />
              <img src="/star.png" className={styles.star} alt="" />
            </div>
            <p className={styles.pTag}>
              “I just wanted to share a quick note and let you know that you
              guys do a really good job. I'm glad I decided to work with you.
              It's really great how easy your websites are to update and
              manage."
            </p>
            <img src="/slack.png" className={styles.logo} alt="" />
          </div>
          <div className={styles.praiseCard}>
            <div className={styles.starsPack}>
              <img src="/star.png" className={styles.star} alt="" />
              <img src="/star.png" className={styles.star} alt="" />
              <img src="/star.png" className={styles.star} alt="" />
              <img src="/star.png" className={styles.star} alt="" />
            </div>{" "}
            <p className={styles.pTag}>
              “I just wanted to share a quick note and let you know that you
              guys do a really good job. I'm glad I decided to work with you.
              It's really great how easy your websites are to update and
              manage."
            </p>
            <img src="/trivago.png" className={styles.logo} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
