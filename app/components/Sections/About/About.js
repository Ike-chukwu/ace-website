import React from "react";
import styles from "../../../../styles/about.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.leftArea}>
        <h1 className={styles.mainHeading}>About ACE</h1>
        <p className={styles.pTag}>
          Science, Technology and Innovation have become key factors
          contributing to economic growth in both advanced and developing
          economies. ICT sector plays an important role, notably by contributing
          to rapid technological progress and productivity growth. It is now
          clear that ICT now render international boundaries irrelevant whereby
          several modern activities transcend international boundaries, which,
          connotes that we live in a boundless world that is becoming a smaller
          place.
        </p>
        <p className={styles.pTag}>
          The Centre aims to create a regionally-recognized and acknowledged
          model that is driven by high quality postgraduate education for uptake
          and commercialization of research and technology to advance the growth
          of ICT industry. The Centre will provide the launch pad for start-up
          companies borne out of university research activities, and
          collaboration with partnering ICT companies, who will have the
          competitive advantage of proximity and direct access to the
          intellectual infrastructure and output of the university.
        </p>
        <button className={styles.btn}>read more</button>
      </div>
      <div className={styles.rightArea}>
        <img src="/about.png" className={styles.img} alt="" />
      </div>
    </section>
  );
};

export default About;
