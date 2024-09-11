import { programs } from "../../../data";
import Card from "../../Card/Card";
import styles from "@/app/_components/section/ProgramSection/ProgramSection.module.css";

const Programs = () => {
  console.log(programs);
  return (
    <section>
      <h2 className={styles.programTitle}>
        Why <span className={styles.programSpan}>Grow Kinesis</span>?
      </h2>
      <div className={`container ${styles.programsContainer}`}>
        {programs.map((program) => (
          <Card
            key={program.id}
            id={program.id}
            title={program.title}
            info={program.info}
            image={program.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Programs;
