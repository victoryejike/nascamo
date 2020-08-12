import React from "react";

const Hotgist = ({ comment }) => {
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
      <aside className="comment">
        <h1>Topic of the day</h1>
        <h2>{comment.title}</h2>
        <h3>{comment.email}</h3>
        <p>{comment.body}</p>
      </aside>
      )
    </div>
  );
};

export default Hotgist;
