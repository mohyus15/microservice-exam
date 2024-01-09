import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

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

const  Sidebar =() => {

    return (
        <div className={styles.container}>
        <div className={styles.user}>
          <Image
            className={styles.userImage}
            src= "/noavatar.png"
            alt=""
            width="50"
            height="50"
          />
          <div className={styles.userDetail}>
            <span>mohammed</span>
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
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className={styles.logout}>
            <MdLogout />
            Logout
          </button>
        </form>
      </div>
    )
  }
  
  export default Sidebar