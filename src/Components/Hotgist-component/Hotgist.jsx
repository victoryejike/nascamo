import React from "react";

const Hotgist = () => {
  return (
    <div
      style={{
        color: "rgb(255, 94,0)",
        padding: 10,
        height: 400,
        border: "1px solid black",
        overflowY: "scroll",
      }}
    >
      <h2>Topic of the day</h2>
      <img src="" alt="topic of the day" />
      <h3>Title</h3>
      <div>Comment Section</div>
    </div>
  );
};

export default Hotgist;
