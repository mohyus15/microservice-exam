"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import MenuLink from './menuLink/menuLink';
import styles from './sidebar.module.css';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from 'react-icons/md';
import { useRouter } from 'next/navigation';

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
        title: "Orders",
        path: "/dashboard/orders",
        icon: <MdAttachMoney />,
      },
      {
        title: "Notification",
        path: "/dashboard/notification",
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
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  const route = useRouter();
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const adminObjectString = localStorage.getItem('admin');
    if (adminObjectString) {
      const adminObject = JSON.parse(adminObjectString);
      const storedEmail = adminObject.email;
      setUserEmail(storedEmail);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('admin');
    setUserEmail(null);
    route.push("/");
  };

  return (
    <div className={styles.container}>
      {userEmail && (
        <div className={styles.user}>
          <Image
            className={styles.userImage}
            src="/noavatar.png"
            alt=""
            width="50"
            height="50"
          />
          <div className={styles.userDetail}>
            <span>Email: {userEmail}</span>
            <span>Admin</span>
          </div>
        </div>
      )}
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
      {userEmail && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogout();
          }}
        >
          <button type="submit" className={styles.logout}>
            <MdLogout />
            Logout
          </button>
        </form>
      )}
    </div>
  );
};

export default Sidebar;
