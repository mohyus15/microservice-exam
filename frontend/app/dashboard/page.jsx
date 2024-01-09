import Card from "../ui/dashbord/Card/page"
import {action} from  "../cards/page"
import styles from "../ui/dashbord/dashbord.module.css"
function DashbortPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {action.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
  }
  
  export default DashbortPage