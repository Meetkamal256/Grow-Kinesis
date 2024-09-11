import styles from "../styles/programs.module.css";
import { programs } from "./../data";
import Card from "./Card";

const Programs = () => {
  console.log(programs);
  return (
    <section>
      <div className={`container ${styles.programsContainer}`}>
        {programs.map((program) => (
          <Card
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
