import React, { useState } from "react";
import styles from "./Feedback.module.scss";
import Star from "./images/icon-star.svg";
import Thanks from "./images/illustration-thank-you.svg";

const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  return (
    <div class={styles.page}>
      <div class={styles.boundingBox}>
        {!submitted ? (
          <>
            <box class={styles.star}>
              <img src={Star} alt="star" />
            </box>
            <box class={styles.questionText}>How did we do?</box>
            <box class={styles.descriptionText}>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </box>
            <box class={styles.ratingCircles}>
              {[1, 2, 3, 4, 5].map((x) => (
                <button
                  class={styles.ratingButton}
                  key={x}
                  onClick={() => setRating(x)}
                >
                  {x}
                </button>
              ))}
            </box>
            <button
              class={styles.submitButton}
              onClick={() => setSubmitted(true)}
            >
              SUBMIT
            </button>
          </>
        ) : (
          <>
            <box class={styles.thanksImage}>
              <img src={Thanks} alt="thanks" />
            </box>
            <box class={styles.selectionText}>
              You selected {rating} out of 5
            </box>
            <box class={styles.thanksText}>Thank you! </box>
            <box class={styles.thanksDescriptionText}>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </box>
          </>
        )}
      </div>

      <div class={styles.attribution}>
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
