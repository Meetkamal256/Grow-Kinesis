import Image from "next/image";
import styles from "./FooterSection.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={`container ${styles.footerContainer}`}>
      <hr className={styles.line} />
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/images/logomark.svg"
            alt="Logo Shape"
            width={45.95}
            height={45.95}
            className={styles.logoImage}
          />
          <Image
            src="/images/letters.svg"
            alt="Logo Text"
            width={138.59}
            height={17.08}
            className={styles.logoText}
          />
        </Link>
      </div>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>
          Copyright © Grow Kinesis 2024. All Rights Reserved.
        </p>
        <div className={styles.socialLinks}>
          <a href="#">Instagram</a>
          <a href="#">X (fka. Twitter)</a>
          <a href="#" className={styles.email}>
            support@growkinesis.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
