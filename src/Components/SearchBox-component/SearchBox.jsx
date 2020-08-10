import React from "react";

const SearchBox = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <input
        style={{
          height: 30,
          width: 200,
          outline: "none",
          borderColor: "rgb(255, 94, 0)",
        }}
        type="search"
        name="searchBox"
        placeholder="Search our extensive catalogue"
      />
      <button
        style={{
          height: 30,
          width: 80,
          backgroundColor: "rgb(255, 94, 0)",
          borderColor: "rgb(255, 94, 0)",
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
