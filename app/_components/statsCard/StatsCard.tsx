import styles from "./statsCard.module.css";
import Image from "next/image";

type StatsCardProps = {
  title: string;
  imageSrc: string;
  statsValue: number;
  isCurrency?: boolean;
};

const StatsCard = ({
  title,
  imageSrc,
  statsValue,
  isCurrency = false,
}: StatsCardProps) => {
  const formattedValue = isCurrency
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(statsValue)
    : new Intl.NumberFormat("en-US").format(statsValue);
  return (
    <div className={styles.container}>
      <div className={styles.stat}>
        <h4>{title}</h4>
        <Image src={imageSrc} width={40} height={40} alt="statsIcon" />
      </div>
      <h5>{formattedValue}</h5>
    </div>
  );
};

export default StatsCard;
