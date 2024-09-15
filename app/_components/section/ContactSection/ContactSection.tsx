import styles from "./ContactSection.module.css";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section>
      <div className={styles.contactSection}>
        <div className={styles.contactLeft}>
          <h2 className={styles.title}>Ready to Transform?</h2>
          <p className={styles.description}>
            Don’t wait another day to start your journey. Join our waiting list
            and get notified <strong>IMMEDIATELY</strong> our app launches.
          </p>
          <form className={styles.form}>
            <input
              type="text"
              placeholder="Kindly type your name"
              className={styles.input}
            />
            <input
              type="email"
              placeholder="kindly type your email address"
              className={styles.input}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className={styles.input}
            />
          </form>
          <button className={styles.button} type="submit">
            Join The waitlist
          </button>
        </div>
        <div className={styles.contactRight}>
          <Image
            src="/images/contactimage.png"
            alt="contact-img"
            width={1138}
            height={664}
            className={styles.contactImage}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
