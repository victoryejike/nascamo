import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar-component/Navbar";
import BlogItem from "../../Components/BlogItem-component/BlogItem";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postsActions";
import Subscribe from "../../Components/Subscribe-component/Subscribe";
import Footer from "../../Components/Footer-component/Footer";
import "./Blog.css";

const Blog = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;
    return posts.map((post) => <BlogItem key={post.id} post={post} />);
  };
  return (
    <section>
      <Navbar />
      <h2 className="blogName">Blog</h2>
      <div className="container2">
        <div className="blogPost2">{renderPosts()}</div>
      </div>
      <Subscribe />
      <Footer />
    </section>
  );
};
const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
});

export default connect(mapStateToProps)(Blog);
