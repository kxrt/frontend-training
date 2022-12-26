import React, { useEffect } from "react";
import styles from "./Order.module.scss";
import Music from "./images/icon-music.svg";
import Hero from "./images/illustration-hero.svg";
import BgDesktop from "./images/pattern-background-desktop.svg";
import BgMobile from "./images/pattern-background-mobile.svg";

const Order = () => {
  useEffect(() => {
    document.title = "Order Summary";
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.bgSvg}>
        <img src={BgDesktop} alt="Background Illustration" />
      </div>
      <div className={styles.boundingBox}>
        <div className={styles.heroImage}>
          <img src={Hero} alt="Hero" />
        </div>
        <div className={styles.informationBox}>
          <div className={styles.heading}>Order Summary</div>
          <div className={styles.orderDescription}>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </div>
          <div className={styles.orderDetails}>
            <div className={styles.orderDetailsLeft}>
              <div className={styles.orderDetailsIcon}>
                <img src={Music} alt="Musical Note" />
              </div>
              <div className={styles.orderDetailsText}>
                <div className={styles.orderName}>Annual Plan</div>
                <div className={styles.orderPrice}>$59.99/year</div>
              </div>
            </div>
            <button className={styles.orderChangeButton}>Change</button>
          </div>
          <button className={styles.proceedButton}>Proceed to Payment</button>
          <button className={styles.cancelButton}>Cancel Order</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
