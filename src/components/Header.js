import React from "react";
import styles from "../styles/Header.module.css";
import { FaYoutube } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import imgSrc from "../res/profile.jpg";

function Header({ searchValue, setSearchValue, submitHandler, flag }) {
  console.log(flag);
  return (
    <div className={[styles.header, flag ? styles.shadow : ""].join(" ")}>
      <div className={styles.header_left}>
        <FaYoutube className={styles.logo} />
        <span className={styles.title}>YouTube</span>
      </div>
      <form className={styles.actions} onSubmit={submitHandler}>
        <input
          type="text"
          className={styles.textInput}
          placeholder="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className={styles.searchButton}>
          <FiSearch className={styles.search_logo} />
        </button>
      </form>
      <div className={styles.profile}>
        <img src={imgSrc} alt="profile" className={styles.profile_pic} />
      </div>
    </div>
  );
}

export default Header;
