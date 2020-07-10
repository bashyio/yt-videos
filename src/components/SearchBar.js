import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const searchSubmit = (e) => {
    onFormSubmit(term);
    e.preventDefault();
  };

  return (
    <div className={`${styles.searchBar} ui segment`}>
      <form className="ui form" onSubmit={(e) => searchSubmit(e)}>
        <div className="field">
          <label htmlFor="search">Search For a Video</label>
          <input
            id="search"
            type="text"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            placeholder="Type and hit enter..."
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
