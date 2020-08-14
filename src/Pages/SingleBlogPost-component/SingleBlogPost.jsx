import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../../actions/postsActions";
import { fetchPost } from "../../actions/postActions";
import { fetchComments } from "../../actions/commentsActions";

import Footer from "../../Components/Footer-component/Footer";
import Navbar from "../../Components/Navbar-component/Navbar";
import BlogPostItem from "../../Components/BlogPostItem/BlogPostItem";
import BlogItem from "../../Components/BlogItem-component/BlogItem";
import Comment from "../../Components/Comments-component/Comments";

const SingleBlogPost = ({
  match,
  dispatch,
  post,
  posts,
  comments,
  hasErrors,
  loading,
}) => {
  useEffect(() => {
    const { id } = match.params;
    dispatch(fetchPosts(id));
    dispatch(fetchComments(id));
    dispatch(fetchPost(id));
  }, [dispatch, match]);

  // const pickpost = (id, postn) => {
  //   let find = post.filter((cur, i) => cur.id === id);
  //   console.log(find);
  // };

  const renderPost = () => {
    if (loading.post) return <p>Loading post...</p>;
    if (hasErrors.post) return <p>Unable to display post.</p>;

    return <BlogPostItem post={post} />;
  };

  const renderComments = () => {
    if (loading.comments) return <p>Loading comments...</p>;
    if (hasErrors.comments) return <p>Unable to display comments.</p>;

    return comments.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ));
  };

  const renderAsidePosts = () => {
    const { id } = match.params;
    if (loading.comments) return <p>Loading comments...</p>;
    if (hasErrors.comments) return <p>Unable to display comments.</p>;
    return posts
      .filter((asidePost) => asidePost.id !== id)
      .slice(0, 3)
      .map((newPosts) => <BlogItem key={post.id} post={post} />);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <section
        style={{ margin: 10, display: "flex", justifyContent: "space-around" }}
      >
        <div>
          <div>{renderPost()}</div>
          <h2>Comments</h2>
          {renderComments()}
        </div>
        <div>{renderAsidePosts()}</div>
      </section>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  post: state.post.post,
  posts: state.posts.posts,
  comments: state.comments.comments,
  loading: { post: state.post.loading, comments: state.comments.loading },
  hasErrors: { post: state.post.hasErrors, comments: state.comments.hasErrors },
});

export default connect(mapStateToProps)(SingleBlogPost);
