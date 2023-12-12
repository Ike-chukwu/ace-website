import React from "react";
import styles from "../../../../styles/desktopNav.module.css";
import Link from "next/link";
import Image from "next/image";

const DesktopNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image
          src="/logo.png"
          alt="Oak Park Obafemi Awolowo University Logo"
          width={50}
          height={66}
        />
      </div>

      <div className={styles.middleSection}>
        <Link className={styles.link} href="/">
          <span>home</span>
        </Link>
        <Link className={styles.link} href="/programmes">
          <span>programmes</span>
        </Link>
        <Link className={styles.link} href="/facilities">
          <span>facilities</span>
        </Link>
        <Link className={styles.link} href="/faqs">
          <span>faqs</span>
        </Link>
        <Link href="/contact" className={styles.link}>
          <span>contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default DesktopNav;
