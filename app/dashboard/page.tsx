import StatsCard from "../_components/statsCard/StatsCard";
import styles from "./dashboardHome.module.css";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Good Morning, Brian.</h1>
        <div className={styles.cards}>
          <StatsCard
            title="Total Users"
            imageSrc="/images/personIcon.svg"
            statsValue={40689}
          />
          <StatsCard
            title="Total Trainers"
            imageSrc="/images/trainersIcon.svg"
            statsValue={40689}
          />
          <StatsCard
            title="Total Programs"
            imageSrc="/images/cubeIcon.svg"
            statsValue={10293}
          />
          <StatsCard
            title="Total Revenue"
            imageSrc="/images/revenueIcon.svg"
            statsValue={89000}
            isCurrency={true}
          />
        </div>
      </div>
    </>
  );
};

export default page;
