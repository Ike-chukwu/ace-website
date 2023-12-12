import React from "react";
import styles from "../../../../styles/partner.module.css";

const Partners = () => {
  return (
    <div className={styles.partnerParent}>
      <section className={styles.partnerSection}>
        <h1 className={styles.heading}>Our Partners</h1>

        <div className={styles.partnersPack}>
          <img src="/axon.png" className={styles.logoPic} alt="" />
          <img src="/jet.png" className={styles.logoPic} alt="" />
          <img src="/es.png" className={styles.logoPic} alt="" />
          <img src="/tL.png" className={styles.logoPic} alt="" />
          <img src="/ita.png" className={styles.logoPic} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Partners;
