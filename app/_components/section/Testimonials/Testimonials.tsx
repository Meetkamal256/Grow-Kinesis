import Image from "next/image";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section>
      <h2 className={styles.sectionTitle}>
        Join Over <span className={styles.sectionSpan}>500</span> happy members!
      </h2>
      <p className={styles.sectionParagraph}>
        Join a community of approximately 500 active users who’ve unlocked their
        potential with Grow Kinesis. Are you ready to be next?
      </p>
      <div className={`container ${styles.testimonialsContainer}`}>
        <Image
          src="/images/video.png"
          alt="overlay-img"
          width={914}
          height={444}
          className={styles.video}
        />
        <div className={styles.reviewContainer}>
          <p className={styles.reviewParagraph}>
            &quot;I've been working with GrowKinesis for a long while now, and
            the experience has been nothing short of transformative. Their
            innovative approach to growth strategies has helped my athleticism
            reach new heights. The team is incredibly knowledgeable and
            responsive, always ready to provide insights and support. I
            appreciate how they tailor their services to meet my specific needs,
            making me feel outstanding in the process. I can't wait to see what
            the future holds as we continue this journey together! I highly
            recommend them to anyone looking for top-notch service!&quot;
          </p>
          <div className={styles.info}>
            <Image
              src="/images/avatar1.png"
              alt="avatar1-img"
              width={48}
              height={48}
            />
            <div>
              <h4 className={styles.name}>Michael Okiki</h4>
              <p className={styles.profession}>
                -Professional Basketball Player (National team PG)
              </p>
              <Image src="/images/divider.png" alt="" width={326} height={2} />
              <div className={styles.btnContainer}>
                <Image
                  src="/images/rightarrow.png"
                  alt=""
                  width={34}
                  height={34}
                />
                <Image
                  src="/images/rightarrow.png"
                  alt=""
                  width={34}
                  height={34}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
