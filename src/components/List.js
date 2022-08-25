import React from "react";
import styles from "../styles/List.module.css";
import Box from "./Box";

function List({ videos }) {
  return (
    <div
      className={[styles.list, videos.length > 0 ? styles.py : ""].join(" ")}
    >
      {videos.map((item, idx) => {
        return <Box key={idx} item={item} />;
      })}
    </div>
  );
}

export default List;
