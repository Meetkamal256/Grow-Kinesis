"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Testimonials.module.css";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { reviews } from "@/app/data";

type ExpandedReviews = {
  [key: number]: boolean;
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<ExpandedReviews>({});

  const prevReviewHandler = () => {
    setIndex((prev) => prev - 1);
    if (index <= 0) {
      setIndex(reviews.length - 1);
    }
  };

  const nextReviewHandler = () => {
    setIndex((prev) => prev + 1);
    if (index >= reviews.length - 1) {
      setIndex(0);
    }
  };

  const handleToggleReview = (id: number) => {
    const updatedReviews = { ...expandedReviews, [id]: !expandedReviews[id] };
    setExpandedReviews(updatedReviews);
  };

  const { info, avatar, name, profession } = reviews[index];

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
            height={544}
            className={styles.video}
          />
        </div>

        <div
          className={`${styles.reviewContainer} ${
            expandedReviews[index] ? styles.expanded : ""
          }`}
        >
          <p
            className={`${styles.reviewParagraph} ${
              expandedReviews[index] ? styles.expanded : ""
            }`}
            onClick={() => handleToggleReview(index)}
          >
            {expandedReviews[index] ? info : info.substring(0, 350) + "..."}
          </p>

          <div className={styles.info}>
            <div className={styles.avatarContainer}>
              <Image
                src={avatar}
                alt="avatar-img"
                width={48}
                height={48}
                className={styles.avatarImg}
              />
            </div>

            <div>
              <h4 className={styles.name}>{name}</h4>
              <p className={styles.profession}>{profession}</p>
            </div>
          </div>
          <Image
            src="/images/divider.png"
            alt="divider"
            width={326}
            height={2}
          />
          <div className={styles.btnContainer}>
            <button onClick={prevReviewHandler}>
              <IoIosArrowDropleft
                className={`${styles.arrowIcon} ${styles.leftArrow}`}
              />
            </button>
            <button onClick={nextReviewHandler}>
              <IoIosArrowDropright
                className={`${styles.arrowIcon} ${styles.rightArrow}`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
