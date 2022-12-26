import React, { useEffect } from "react";
import styles from "./Template.module.scss";

const Template = () => {
  useEffect(() => {
    document.title = "Template";
  });

  return (
    <div className={styles.page}>
      <div className={styles.header}></div>
    </div>
  );
};

export default Template;
