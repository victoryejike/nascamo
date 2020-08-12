import React from "react";
import { Link } from "react-router-dom";
//import { connect } from "react-redux";

//import "./Testimony.css";

const BlogItem = ({ post, excerpt }) => {
  return (
    <article
      style={{
        textAlign: "justify",
        backgroundImage: "grey",
        margin: 10,
        width: "80%",
      }}
      className={excerpt ? "post-excerpt" : "post"}
    >
      <div style={{ padding: 10 }}>
        <h2>{post.title}</h2>
        <p>{excerpt ? post.body.substring(0, 100) : post.body}</p>

        <Link
          to={`/blog/${post.id}`}
          style={{
            backgroundColor: "pink",
            color: "black",
            textDecoration: "none",
          }}
          className="button"
        >
          View Post
        </Link>
      </div>
    </article>
  );
};

// export const Post = ({ post, excerpt }) => (
//   <article className={excerpt ? 'post-excerpt' : 'post'}>
//     <h2>{post.title}</h2>
//     <p>{excerpt ? post.body.substring(0, 100) : post.body}</p>

//     {excerpt && (
//       <Link to={`/posts/${post.id}`} className="button">
//         View Post
//       </Link>
//     )}
//   </article>
// )

export default BlogItem;
