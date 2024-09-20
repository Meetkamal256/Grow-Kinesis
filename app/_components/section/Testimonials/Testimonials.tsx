import Image from "next/image";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section className="container">
      <h2 className={styles.sectionTitle}>
        Join Over <span className={styles.sectionSpan}>500</span> happy members!
      </h2>
      <p className={styles.sectionParagraph}>
        Join a community of approximately 500 active users who&apos;ve unlocked
        their potential with Grow Kinesis. Are you ready to be next?
      </p>
      <div className={styles.testimonialsContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/video2.png"
            alt="overlay-img"
            width={914}
            height={444}
            className={styles.video}
          />
        </div>

        <div className={styles.reviewContainer}>
          <p className={styles.reviewParagraph}>
            &quot;I&apos;ve been working with GrowKinesis for a long while now,
            and the experience has been nothing short of transformative. Their
            innovative approach to growth strategies has helped my athleticism
            reach new heights. The team is incredibly knowledgeable and
            responsive, always ready to provide insights and support. I
            appreciate how they tailor their services to meet my sp...
            {/*ecific needs,
            making me feel outstanding in the process. I can&apos;t wait to see
            what the future holds as we continue this journey together! I highly
            recommend them to anyone looking for top-notch service!&quot; */}
          </p>

          <div className={styles.info}>
            <Image
              src="/images/avatar1.png"
              alt="avatar1-img"
              width={48}
              height={48}
              className={styles.avatarImg}
            />
            <div>
              <h4 className={styles.name}>Michael Okiki</h4>
              <p className={styles.profession}>
                - Professional Basketball Player (National team PG)
              </p>
              <Image
                src="/images/divider.png"
                alt="divider"
                width={326}
                height={2}
              />
              <div className={styles.btnContainer}>
                <Image
                  src="/images/rightarrow.png"
                  alt="right-arrow"
                  width={34}
                  height={34}
                />
                <Image
                  src="/images/rightarrow.png"
                  alt="right-arrow"
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
