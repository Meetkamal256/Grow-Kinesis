"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./sidebar.module.css";
import { FiMenu } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { CiDumbbell } from "react-icons/ci";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { TbGymnastics } from "react-icons/tb";
import { BsFillPersonPlusFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    id: 1,
    title: "Home",
    path: "/dashboard",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    title: "Workouts",
    path: "/dashboard/workouts",
    icon: <CiDumbbell />,
  },
  {
    id: 3,
    title: "Nutrition",
    path: "/dashboard/nutrition",
    icon: <GiForkKnifeSpoon />,
  },
  {
    id: 4,
    title: "Exercises",
    path: "/dashboard/exercises",
    icon: <TbGymnastics />,
  },
  {
    id: 5,
    title: "Accounts",
    path: "/dashboard/accounts",
    icon: <BsFillPersonPlusFill />,
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.hamburger} onClick={toggleSidebar}>
        <FiMenu />
      </div>
      <div className={`${styles.container} ${isOpen ? styles.open : ""}`}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/images/logomark.svg"
              alt="Logo Shape"
              width={32.82}
              height={32.82}
              className={styles.logoImage}
            />
            <Image
              src="/images/letters.svg"
              alt="Logo Text"
              width={110}
              height={13}
              className={styles.logoText}
            />
          </Link>
        </div>
        <ul className={styles.menu}>
          {menuItems.map((link) => (
            <li key={link.id}>
              <Link
                href={link.path}
                className={`${styles.link} ${
                  pathname === link.path ? styles.active : ""
                }`}
              >
                <span className={styles.icon}>{link.icon}</span> {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
