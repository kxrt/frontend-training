import React, { useState } from "react";
import styles from "./Order.module.scss";
import Music from "./images/icon-music.svg";
import Hero from "./images/illustration-hero.svg";
import BgDesktop from "./images/pattern-background-desktop.svg";
import BgMobile from "./images/pattern-background-mobile.svg";

const Order = () => {
  return (
    <div className={styles.page}>
      <img src={BgDesktop} alt="background" />
      <div className={styles.boundingBox}>
        <div className={styles.heroImage}>
          <img src={Hero} alt="Hero" />
        </div>
        <div className={styles.informationBox}>
          <div className={styles.heading}>Order Summary</div>
          <div className={styles.description}>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </div>
          <div className={styles.orderDetails}>
            <div className={styles.orderDetailsIcon}>
              <img src={Music} alt="Musical Note" />
            </div>
            <div className={styles.orderDetailsText}>
              <div className={styles.orderName}>Annual Plan</div>
              <div className={styles.orderPrice}>$59.99/year</div>
            </div>
            <div className={styles.orderChange}>Change</div>
          </div>
          <div className={styles.proceedButton}>Proceed to Payment</div>
          <div className={styles.cancelButton}>Cancel Order</div>
        </div>
      </div>
    </div>
  );
};

export default Order;
