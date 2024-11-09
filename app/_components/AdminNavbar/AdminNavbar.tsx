import styles from "./adminNavbar.module.css";
import Image from "next/image";

const AdminNavbar = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/profileAvatar.png"
        width={40}
        height={40}
        alt="profileAvatar"
      />
      <div className={styles.info}>
        <h4>Brian Omoruyi</h4>
        <p>brianomoroyi@gmail.com</p>
      </div>

      <Image
        src="/images/group.svg"
        width={18}
        height={18}
        alt="groupIcon"
      />
    </div>
  );
};

export default AdminNavbar;
