import React from "react";
import styles from "../styles/Box.module.css";
import Iframe from "react-iframe";

function Box({ item }) {
  return (
    <div className={styles.box}>
      <div className={styles.video}>
        <Iframe
          url={`https://www.youtube.com/embed/${item.id.videoId}`}
          width="360px"
          height="201px"
          allowFullScreen
        ></Iframe>
      </div>
      <div className={styles.box_description}>
        <h4>{item.snippet.title}</h4>
        <p>{item.snippet.description}</p>
      </div>
    </div>
  );
}

export default Box;
