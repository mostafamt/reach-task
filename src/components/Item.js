import React from "react";
import styles from "../styles/Item.module.css";

function Item({ item }) {
  const style = {
    title: {
      fontSize: 9,
    },
  };

  return (
    <div className={styles.item}>
      <div>video</div>
      <div>details</div>
    </div>
  );
}

export default Item;
