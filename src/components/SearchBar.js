import React, { useState, useEffect } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onFormSubmit(term);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [term, onFormSubmit]);

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={(e) => e.preventDefault()}>
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
