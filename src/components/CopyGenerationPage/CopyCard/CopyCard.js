import React from "react";
import styles from "./copy-card.module.css";

import { useRecoilState } from "recoil";
import { finalCopy } from "./../../../shared/recoil";

function CopyCard({ copyText }) {
  const [copy, setCopy] = useRecoilState(finalCopy);
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <p>{copyText}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            setCopy(copyText);
          }}
          class="tooltip"
        >
          Set
          <span class="tooltiptext">
            This will set the text as the final copy.
          </span>
        </button>
      </div>
    </div>
  );
}

export default CopyCard;
