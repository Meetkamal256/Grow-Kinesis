import styles from "../styles/hero.module.css";
import WaitListBadge from "./WaitListBadge";

const Hero = () => {
  return (
    <section id="hero">
      <div className={styles.heroContainer}>
        <WaitListBadge />
      </div>
    </section>
  );
};

export default Hero;
