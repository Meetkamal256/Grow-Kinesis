import styles from "../styles/hero.module.css";
import Button from "./Button";
import WaitListBadge from "./WaitListBadge";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <WaitListBadge />
      <div className={styles.heroContainer}>
        <h1 className={styles.heroText}>Fitness made easy, just for you</h1>
        <p className={styles.heroParagraph}>
          Your journey to a stronger, healthier, and more confident you starts
          here.
        </p>
        <Button className={styles.button}>Join the movement </Button>
        <Image
          src="/images/heroImage.png"
          alt="hero-img"
          width={972}
          height={598}
        />
      </div>
    </section>
  );
};

export default Hero;
