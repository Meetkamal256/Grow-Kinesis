import styles from "../styles/card.module.css";
import Image from "next/image";

interface CardProps {
  id: number;
  title: string;
  info: string;
  image: string;
}

const Card = (props: CardProps) => {
  const { id, title, info, image } = props;
  return (
    <article className={styles.cardContainer}>
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardInfo}>{info}</p>
      <Image src={image} alt={title} width={341.43} height={366} />
    </article>
  );
};

export default Card;
