import React from "react";
import styles from "../../../../styles/esmp.module.css";

const Esmp = () => {
  return (
    <div className={styles.esmpParent}>
      <section className={styles.esmpContainer}>
        <div className={styles.esmpLeft}>
          <img src="/image.png" className={styles.img} alt="" />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>esmp</h2>
          <p className={styles.pTag}>
            Data security refers to the process of protecting all data from
            unauthorized access and data corruption throughout its lifecycle.
          </p>
          <button className={styles.btn}>download</button>
        </div>
      </section>
    </div>
  );
};

export default Esmp;
