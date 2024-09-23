"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Testimonials.module.css";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { reviews } from "@/app/data";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<{
    [key: number]: boolean;
  }>({});
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };
    
    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const prevReviewHandler = () => {
    setIndex((prev) => (prev <= 0 ? reviews.length - 1 : prev - 1));
  };
  
  const nextReviewHandler = () => {
    setIndex((prev) => (prev >= reviews.length - 1 ? 0 : prev + 1));
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
            {expandedReviews[index] || isMobile
              ? info
              : info.substring(0, 350) + "..."}
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
            className={styles.divider}
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
