import React from "react";
import styles from "./Landing.module.scss";
import challenges from "./challenges.js";

const Landing = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>
        This page hosts my solutions to challenges posted on{" "}
        <a href="https://frontendmentor.io" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . I am using this as a way to practice my skills and learn new
        techniques in web development.
      </h1>
      <div className={styles.challenges}>
        {challenges.map((chl) => (
          <div className={styles.challenge}>
            <div className={styles.challengeTitle}>{chl.title}</div>
            <div className={styles.challengeDescription}>{chl.description}</div>
            <hr className={styles.divider} />
            <div className={styles.challengeLinkContainer}>
              <a
                className={styles.challengeLink}
                href={chl.challenge}
                target="_blank"
                rel="noreferrer"
              >
                Challenge
              </a>
              <a
                className={styles.challengeLink}
                href={chl.link}
                target="_blank"
                rel="noreferrer"
              >
                View Solution
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
