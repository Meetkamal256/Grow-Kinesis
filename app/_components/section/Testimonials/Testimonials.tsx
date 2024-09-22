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
  const [expandedReviews, setExpandedReviews] = useState<ExpandedReviews>({});

  const handleToggleReview = (id: number) => {
    // Create a copy of the current expandedReviews state
    const updatedReviews = { ...expandedReviews };

    // Check if the review with the given ID is currently expanded or not
    if (updatedReviews[id]) {
      // If it's already expanded, set it to false (collapse it)
      updatedReviews[id] = false;
    } else {
      // If it's not expanded, set it to true (expand it)
      updatedReviews[id] = true;
    }

    // Update the state with the modified expandedReviews object
    setExpandedReviews(updatedReviews);
  };
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
        {reviews.map((review) => (
          <div
            key={review.id}
            className={`${styles.reviewContainer} ${
              expandedReviews[review.id] ? styles.expanded : ""
            }`}
          >
            <p
              className={`${styles.reviewParagraph} ${
                expandedReviews[review.id] ? styles.expanded : ""
              }`}
              onClick={() => handleToggleReview(review.id)}
            >
              {expandedReviews[review.id]
                ? review.info
                : review.info.substring(0, 350) + "..."}
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
              </div>
            </div>
            <Image
              src="/images/divider.png"
              alt="divider"
              width={326}
              height={2}
            />
            <div className={styles.btnContainer}>
              <IoIosArrowDropleft
                className={`${styles.arrowIcon} ${styles.leftArrow}`}
              />
              <IoIosArrowDropright
                className={`${styles.arrowIcon} ${styles.rightArrow}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

// Handle toggling the expanded state of each review
// const handleToggleReview = (id: number) => {
//   setExpandedReviews((prev) => ({
//     ...prev,
//     [id]: !prev[id], // Toggle the specific review's expanded state
//   }));
// };
