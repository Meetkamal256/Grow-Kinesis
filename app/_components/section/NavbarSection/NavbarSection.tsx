import styles from "../../section/NavbarSection/NavbarSection.module.css";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/images/logo.png"
            alt="Logo Shape"
            width={45.95}
            height={45.95}
            className={styles.logoImage}
          />
          <Image
            src="/images/letters.png"
            alt="Logo Text"
            width={138.59}
            height={17.08}
            className={styles.logoText}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
