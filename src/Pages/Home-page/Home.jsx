import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar-component/Navbar";
import ScamCatalogue from "../ScamCatalogue-page/ScamCatalogue";
import Hotgist from "../../Components/Hotgist-component/Hotgist";
import SearchBox from "../../Components/SearchBox-component/SearchBox";
import { connect } from "react-redux";
import { fetchComments } from "../../actions/commentsActions";
//import Poster from "../../Components/Poster-component/Poster";
//import About from "../../Components/About-component/About";
//import Footer from "../../Components/Footer-component/Footer";
//import Subscribe from "../../Components/Subscribe-component/Subscribe";
import "./Home.css";
//import BlogItem from "../../Components/BlogItem-component/BlogItem";

const Home = ({ loading, match, dispatch, hasErrors, posts, comments }) => {
  useEffect(() => {
    const { id } = match.params;

    dispatch(fetchComments(id));
    //dispatch(fetchPost(id));
  }, [dispatch, match]);

  const renderComments = () => {
    if (loading.comments) return <p>Loading comments...</p>;
    if (hasErrors.comments) return <p>Unable to display comments.</p>;
    return comments.map((comment) => (
      <Hotgist key={comment.id} comment={comment} />
    ));
  };

  return (
    <div className="home">
      <Navbar />
      <SearchBox />
      <div className="flexContainer">
        <div className="scamContainer">
          <ScamCatalogue />
          <ScamCatalogue />
        </div>
        <div className="gistContainer">{renderComments()}</div>
      </div>

      {/* <Poster /> */}
      {/* <About />
        <Subscribe /> */}
      {/* <Footer /> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  post: state.posts.posts,
  comments: state.comments.comments,
  loading: { comments: state.comments.loading },
  hasErrors: { comments: state.comments.hasErrors },
});

export default connect(mapStateToProps)(Home);
