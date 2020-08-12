import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPost } from "../../actions/postActions";
//import { fetchComments } from '../actions/commentsActions'

import BlogItem from "../../Components/BlogItem-component/BlogItem";
//import { Comment } from "../components/Comment";

const SingleBlogPost = ({
  match,
  dispatch,
  post,
  comments,
  hasErrors,
  loading,
}) => {
  useEffect(() => {
    const { id } = match.params;

    // dispatch(fetchComments(id));
    dispatch(fetchPost(id));
  }, [dispatch, match]);

  const renderPost = () => {
    if (loading.post) return <p>Loading post...</p>;
    if (hasErrors.post) return <p>Unable to display post.</p>;

    return <BlogItem post={post} />;
  };

  // const renderComments = () => {
  //   if (loading.comments) return <p>Loading comments...</p>;
  //   if (hasErrors.comments) return <p>Unable to display comments.</p>;

  //   return comments.map((comment) => (
  //     <Comment key={comment.id} comment={comment} />
  //   ));
  // };

  return (
    <section>
      {renderPost()}
      <h2>Comments</h2>
      {/* {renderComments()} */}
    </section>
  );
};

const mapStateToProps = (state) => ({
  post: state.post.post,
  //comments: state.comments.comments,
  loading: { post: state.post.loading },
  hasErrors: { post: state.post.hasErrors },
});
//comments: state.comments.loading
//comments: state.comments.hasErrors

export default connect(mapStateToProps)(SingleBlogPost);
