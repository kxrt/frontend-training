import React, { useEffect, useState } from "react";
import styles from "./Feedback.module.scss";
import Star from "./images/icon-star.svg";
import Thanks from "./images/illustration-thank-you.svg";

const Feedback = () => {
  useEffect(() => {
    document.title = "Feedback";
  });

  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <div className={styles.page}>
      <div className={styles.boundingBox}>
        {!submitted ? (
          <>
            <div className={styles.star}>
              <img src={Star} alt="star" />
            </div>
            <div className={styles.questionText}>How did we do?</div>
            <div className={styles.descriptionText}>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </div>
            <div className={styles.ratingCircles}>
              {[1, 2, 3, 4, 5].map((x) => (
                <button
                  className={styles.ratingButton}
                  key={x}
                  onClick={() => setRating(x)}
                >
                  {x}
                </button>
              ))}
            </div>
            <button
              className={styles.submitButton}
              onClick={() => setSubmitted(true)}
            >
              SUBMIT
            </button>
          </>
        ) : (
          <>
            <div className={styles.thanksImage}>
              <img src={Thanks} alt="thanks" />
            </div>
            <div className={styles.selectionText}>
              You selected {rating} out of 5
            </div>
            <div className={styles.thanksText}>Thank you! </div>
            <div className={styles.thanksDescriptionText}>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </div>
          </>
        )}
      </div>

      <div className={styles.attribution}>
        Design Specification:{" "}
        <a
          href="https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
      </div>
    </div>
  );
};

export default Feedback;
