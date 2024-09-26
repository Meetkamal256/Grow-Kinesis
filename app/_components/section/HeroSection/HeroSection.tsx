import Link from "next/link";
import Button from "../../Button/Button";
import WaitListBadge from "../../WaistListBadge/WaitListBadge";
import styles from "@/app/_components/section/HeroSection/HeroSection.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <WaitListBadge />
      <div className={`container ${styles.heroContainer}`}>
        <h1 className={styles.heroText}>Fitness made easy, just for you</h1>
        <p className={styles.heroParagraph}>
          Your journey to a stronger, healthier, and more confident you starts
          here.
        </p>
        <Link href="#contact" scroll={true}>
          <Button className={styles.button}>Join the movement</Button>
        </Link>
        
        <Image
          src="/images/heroImage.png"
          alt="hero-img"
          width={972}
          height={598}
          className={styles.heroImg}
        />
      </div>
    </section>
  );
};

export default Hero;
