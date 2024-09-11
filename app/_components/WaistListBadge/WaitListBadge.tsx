import styles from "@/app/_components/WaistListBadge/WaitListBadge.module.css";
import Image from "next/image";

const WaitListBadge = () => (
  <div className={styles.badgeContainer}>
    <div className={styles.badgeText}>
      Approx. 500 active users
      <img src="images/avatars.png" alt="avatars" width={72} height={24} />
      Awaiting launch
    </div>
  </div>
);

export default WaitListBadge;
