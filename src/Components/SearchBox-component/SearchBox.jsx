import React from "react";

const SearchBox = () => {
  return (
    <div>
      <input
        style={{
          height: 30,
          width: 200,
          outline: "none",
          borderColor: "white",
        }}
        className="hover-bg-black hover-white w-100"
        type="search"
        name="searchBox"
        placeholder="Search our extensive catalogue"
      />
      <button
        style={{ height: 30, width: 80 }}
        className=" no-underline grow pv2 ph3 dib mr3"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
