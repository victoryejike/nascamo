import React from "react";

const BlogPostItem = ({ post }) => {
  console.log(post.id);
  return (
    <div>
      <h1 style={{ textAlign: "left" }} className="f6 ttu tracked">
        {post.title}
      </h1>
      <article className="bg-white center mw5 ba b--black-10 mv4">
        <div className="pv2 ph3">
          <h1 className="f6 ttu tracked">{post.title}</h1>
        </div>
        <img
          src="http://tachyons.io/img/cat-720.jpg"
          className="w-100 db"
          alt="Closeup of a tabby cat yawning."
        ></img>
        <div className="pa3">
          <p>{post.body}</p>
          <small className="gray db pv2">
            AMP - <time>6 hours ago</time>
          </small>
        </div>
      </article>
      <label>Add Comment</label>
      <br></br>
      <textarea
        id={post.id}
        type="text"
        style={{
          height: 90,
          paddingBottom: 10,
          paddingRight: 10,
          paddingTop: 0,
        }}
      />
      <br></br>
      <button type="submit">Submit</button>
    </div>
  );
};

export default BlogPostItem;
