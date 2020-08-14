import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar-component/Navbar";
import SearchBox from "../../Components/SearchBox-component/SearchBox";
import { connect } from "react-redux";
import { fetchHomeComments } from "../../actions/homeCommentsAction";
import { fetchPosts } from "../../actions/postsActions";
//import Footer from "../../Components/Footer-component/Footer";
//import Subscribe from "../../Components/Subscribe-component/Subscribe";
import "./Home.css";
import BlogItem from "../../Components/BlogItem-component/BlogItem";
import HomeComment from "../../Components/HomeComments-component/HomeComment";
//import BlogItem from "../../Components/BlogItem-component/BlogItem";

const Home = ({ loading, match, dispatch, hasErrors, posts, homeComments }) => {
  useEffect(() => {
    //const { id } = match.params;
    dispatch(fetchPosts());
    dispatch(fetchHomeComments());
  }, [dispatch, match]);

  const renderComments = () => {
    if (loading.homeComments) return <p>Loading comments...</p>;
    if (hasErrors.homeComments) return <p>Unable to display comments.</p>;
    return homeComments
      .slice(0, 4)
      .map((comment) => <HomeComment key={comment.id} comment={comment} />);
  };

  const renderPosts = () => {
    if (loading.posts) return <p>Loading posts...</p>;
    if (hasErrors.posts) return <p>Unable to display posts.</p>;
    return posts
      .slice(0, 3)
      .map((post) => <BlogItem key={post.id} post={post} />);
  };

  return (
    <div className="home">
      <Navbar />
      <SearchBox />
      <div className="flexContainer">
        <div>
          <h2>Verified Scam</h2>
          <div style={{ display: "flex", marginRight: 5 }}>{renderPosts()}</div>
          <h2>Inconclusive</h2>
          <div style={{ display: "flex", marginRight: 5 }}>{renderPosts()}</div>
        </div>
        <div className="gistContainer">{renderComments()}</div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  homeComments: state.homeComments.homeComments,
  loading: {
    posts: state.posts.loading,
    homeComments: state.homeComments.loading,
  },
  hasErrors: {
    posts: state.posts.hasErrors,
    homeComments: state.homeComments.hasErrors,
  },
});

export default connect(mapStateToProps)(Home);
