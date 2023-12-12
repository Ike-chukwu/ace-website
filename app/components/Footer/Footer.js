import React from "react";
import styles from "../../../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerContainer}>
        <div className={styles.category}>
          <p className={styles.firstCategory}>Company</p>
          <div className={styles.remainingCategory}>
            <p className={styles.otherCategory}>About </p>
            <p className={styles.otherCategory}>Features </p>
            <p className={styles.otherCategory}>Works</p>
            <p className={styles.otherCategory}>Career </p>
          </div>
        </div>
        <div className={styles.category}>
          <p className={styles.firstCategory}>Help</p>
          <div className={styles.remainingCategory}>
            <p className={styles.otherCategory}>Customer Support </p>
            <p className={styles.otherCategory}>Delivery Details </p>
            <p className={styles.otherCategory}>Terms & Conditions</p>
            <p className={styles.otherCategory}>Privacy Policy</p>
          </div>
        </div>
        <div className={styles.category}>
          <p className={styles.firstCategory}>Resources</p>
          <div className={styles.remainingCategory}>
            <p className={styles.otherCategory}>Free eBooks </p>
            <p className={styles.otherCategory}>Development Tutorial </p>
            <p className={styles.otherCategory}>How to - Blog</p>
            <p className={styles.otherCategory}>Youtube Playlist </p>
          </div>
        </div>
        <div className={styles.category}>
          <p className={styles.firstCategory}>Extra Links</p>
          <div className={styles.remainingCategory}>
            <p className={styles.otherCategory}>Customer Support </p>
            <p className={styles.otherCategory}>Delivery Details</p>
            <p className={styles.otherCategory}>Terms & Conditions</p>
            <p className={styles.otherCategory}>Privacy Policy </p>
          </div>
        </div>

        <p className={styles.copyright}>
          © Copyright 2021, All Rights Reserved
        </p>
        <div className={styles.iconPack}>
          <img src="/twitter.png" className={styles.logo} alt="" />
          <img src="/fb.png" className={styles.logo} alt="" />
          <img src="/ig.png" className={styles.logo} alt="" />
          <img src="/github.png" className={styles.logo} alt="" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
