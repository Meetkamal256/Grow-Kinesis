import AdminNavbar from "../_components/AdminNavbar/AdminNavbar";
import Sidebar from "../_components/Sidebar/Sidebar";
import styles from "./dashboard.module.css";
import "../_components/Sidebar/sidebar.module.css"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <AdminNavbar />
        {children}
      </div>
    </div>
  );
}
