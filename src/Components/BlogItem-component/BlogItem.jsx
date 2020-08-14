import React from "react";
//import {Route} from 'react-router-dom'
import { Link } from "react-router-dom";
//import { connect } from "react-redux";

//import "./Testimony.css";

const BlogItem = ({ key, post, excerpt }) => {
  // console.log(post);
  return (
    <article
      className="bg-white center mw5 ba b--black-10 mv4"
      id={excerpt ? "post-excerpt" : "post"}
    >
      <div className="pv2 ph3">
        <h1 className="f6 ttu tracked">{post.title}</h1>
      </div>
      <img
        src="http://tachyons.io/img/cat-720.jpg"
        className="w-100 db"
        alt="Closeup of a tabby cat yawning."
      ></img>
      <div className="pa3">
        <p>{excerpt ? post.body.substring(0, 100) : post.body}</p>

        <Link
          // onClick={(id) => pickpost(id)}
          to={`/singleblog/${post.id}`}
          style={{
            padding: 5,
            backgroundColor: "black",
            color: "rgb(255, 94, 0)",
            textDecoration: "none",
          }}
          className="button"
        >
          View Post
        </Link>

        <small className="gray db pv2">
          AMP - <time>6 hours ago</time>
        </small>
      </div>
    </article>
  );
};

export default BlogItem;
