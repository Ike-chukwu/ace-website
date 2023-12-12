import React from "react";
import styles from "../../../../styles/video.module.css"
const Video = () => {
  return (
    <section className={styles.videoSection}>
      <h1 className={styles.mainHeading}>Video Walkthrough</h1>

      <img className={styles.mainImg} src="/vid.png" alt="" />
    </section>
  );
};

export default Video;
