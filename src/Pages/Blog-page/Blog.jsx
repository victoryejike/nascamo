import React from "react";
import Navbar from "../../Components/Navbar-component/Navbar";
import BlogItem from "../../Components/BlogItem-component/BlogItem";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postsAction";
import Subscribe from "../../Components/Subscribe-component/Subscribe";
import Footer from "../../Components/Footer-component/Footer";
import "./Blog.css";

class Blog extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    const postItems = this.props.posts.map((post) => (
      <BlogItem postId={post.id} title={post.title} postBody={post.body} />
    ));

    return (
      <section>
        <Navbar />
        <h2 className="blogName">Blog</h2>
        <div className="container2">
          <div className="blogPost2">{postItems}</div>
        </div>
        <Subscribe />
        <Footer />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(Blog);
