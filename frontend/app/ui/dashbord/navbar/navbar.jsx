"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdDarkMode,
  MdSearch,
} from "react-icons/md";
import Notification from "@/app/dashboard/notifcation/page";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdNotifications size={20} />
          <MdDarkMode />
        </div>
      </div>
    </div>
  );
};

export default Navbar;