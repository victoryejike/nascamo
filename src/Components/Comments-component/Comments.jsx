import React from "react";

const Comment = ({ comment }) => {
  return (
    <div>
      <div
        style={{ width: "93%" }}
        // style={{
        //   color: "rgb(255, 94,0)",
        //   padding: 10,
        //   height: 400,
        //   border: "1px solid black",
        //   // overflowY: "scroll",
        // }}
        className="comment"
      >
        <h2>{comment.title}</h2>
        <h5>{comment.email}</h5>
        <p>{comment.body}</p>
      </div>
    </div>
  );
};

export default Comment;
