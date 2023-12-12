import React from "react";
import styles from "../../../../styles/objectives.module.css";
import cardContent from "../../../constants";

const Objectives = () => {
  return (
    <section className={styles.objectivesSection}>
      <h1 className={styles.mainHeading}>Objectives Of The ACE Project</h1>
      <div className={styles.cardPack}>
        <div className={styles.card}>
          <div className={styles.number}>1.</div>
          <div className={styles.textPack}>
            <h3 className={styles.cardTitle}>Centre of Excellence</h3>
            <p className={styles.moreDetail}>
              Develop a center of excellence in ICT as a training hub in
              software engineering for Nigeria and other countries in the
              sub-region.
            </p>
          </div>
        </div>
        <div className={styles.card} >
          <div className={styles.number} style={{ background: "#FABB18" }}>2.</div>
          <div className={styles.textPack}>
            <h3 className={styles.cardTitle}>Research & Grants</h3>
            <p className={styles.moreDetail}>
              Develop the next generation of scientists, researchers, teachers,
              entrepreneurs and product developers in the area of ICT through
              appropriate practice-anchored capacity building measures and
              enrolling new postgraduate students from Nigeria and the
              sub-region.
            </p>
          </div>
        </div>
        <div className={styles.card} >
          <div className={styles.number} style={{ background: "#45C646" }}>3.</div>
          <div className={styles.textPack}>
            <h3 className={styles.cardTitle}>Creativity & Innovation</h3>
            <p className={styles.moreDetail}>
              Stimulate creativity and excellence in research and innovation in
              ICT applicable to other fields and related to regional
              developmental objectives, in postgraduate students, with
              opportunities for industrial research uptake through the Centre
              model.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.number}  style={{ background: "#EF4444" }}>4.</div>
          <div className={styles.textPack}>
            <h3 className={styles.cardTitle}>Postgraduate Studies</h3>
            <p className={styles.moreDetail}>
              Expand learning opportunities for postgraduate students in all the
              sectors, by deploying existing and new developments in ICT, for
              which OAU is leading in the sub-region.
            </p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.twoCols}`}>
          <div className={styles.number}>5.</div>
          <div className={styles.textPack}>
            <h3 className={styles.cardTitle}>Academic - Industry</h3>
            <p className={styles.moreDetail}>
              Leverage on the intellectual infrastructure and output of the
              university to serve as the launch pad for start-up ICT companies
              borne out of university research activities, by partnering
              companies. For example the OAU Phase I Centre of Excellence in
              Software Engineering exhibited two software developed within the
              short space of its existence recently, causing CHAMS Nigeria PLC
              (an industry-partner in this initiative as well) to enter into an
              Agreement to establish its software development hub at the
              University. The Centre will be the natural habitat for moreof such
              developments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
