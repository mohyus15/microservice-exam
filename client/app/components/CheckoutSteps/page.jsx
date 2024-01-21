
import { Link } from 'react';

import styles from './styles.module.css';
import Shipping from '../shipping/page';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div className="flex justify-center mb-4">
      <div className={styles.stepItem}>
        {step1 ? (
          <Link href='components/login'>
            <p className={styles.stepLink}>Sign In</p>
          </Link>
        ) : (
          <div className={`${styles.stepLink} ${styles.disabled}`}>Sign In</div>
        )}
      </div>

      <div className={styles.stepItem}>
        {step2 ? (
          <Link href='components/shipping'>
            <p className={styles.stepLink}>Shipping</p>
          </Link>
        ) : (
          <div className={`${styles.stepLink} ${styles}`}>Shipping</div>
        
        )}
          <Shipping/>
      </div>

      <div className={styles.stepItem}>
        {step3 ? (
          <Link href='components/payment'>
            <p className={styles.stepLink}>Payment</p>
          </Link>
        ) : (
          <div className={`${styles.stepLink} ${styles.disabled}`}>Payment</div>
        )}
      </div>

      <div className={styles.stepItem}>
        {step4 ? (
          <Link href='components/placeorder'>
            <a className={styles.stepLink}>Place Order</a>
          </Link>
        ) : (
          <div className={`${styles.stepLink} ${styles.disabled}`}>Place Order</div>
        )}
      </div>
    </div>
  );
};

export default CheckoutSteps;
