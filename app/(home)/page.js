import React from "react";
import styles from "../../styles/homepage.module.css";
import HeroSection from "../components/Sections/HeroSection/HeroSection";
import About from "../components/Sections/About/About";
import Esmp from "../components/Sections/Esmp/Esmp";
import Testimonial from "../components/Sections/Testimonial/Testimonial";
import Video from "../components/Sections/Video/Video";
import Partners from "../components/Sections/Partners/Partners";
import Footer from "../components/Footer/Footer";
import Objectives from "../components/Sections/Objectives/Objectives";

const page = () => {
  return (
    // <div className={styles.heroParent}>
    <>
      <div className={styles.heroContainer}>
        <HeroSection />
      </div>
      <About />
      <Esmp />
      <Objectives/>
      <Testimonial />
      <Video />
      <Partners />
    </>
    // </div>
  );
};

export default page;
