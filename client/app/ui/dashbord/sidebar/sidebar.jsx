'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { useRouter } from "next/navigation";

// Define your menuItems
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },

      {
        title: "shipping",
        path: "/dashboard/shipping",
        icon: <MdShoppingBag />,
      },
      {
        title: "Orders",
        path: "/dashboard/orders",
        icon: <MdAttachMoney />,
      },
      {
        title: "notification",
        path: "/dashboard/notifcation",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
    ],
  },
];


const Sidebar = () => {
  const route = useRouter();
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const adminObjectString = localStorage.getItem("admin");
    if (adminObjectString) {
      const adminObject = JSON.parse(adminObjectString);
      const storedEmail = adminObject.email;
      setUserEmail(storedEmail);
    }
  }, []);

  const signOut = async (e) => {
    e.preventDefault();
    localStorage.removeItem("admin");
    setUserEmail(null);
    route.push("/");
  };
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span>{userEmail}</span>
          <span>Admin</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((menu) => (
          <li key={menu.title}>
            <span className={styles.cat}>{menu.title}</span>
            {menu.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form onSubmit={signOut}>
        <button type="submit" className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

// Export the Sidebar component
export default Sidebar;
