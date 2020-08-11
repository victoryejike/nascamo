import React from "react";
import BlogItem from "../../Components/BlogItem-component/BlogItem";
import { connect } from "react-redux";
import { fetchPost } from "../../actions/postActions";

class SingleBlogPost extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.postId;
    this.props.fetchPost(id);
  }
  render() {
    const postItems = this.props.posts.map((post) => (
      <BlogItem postId={post.id} title={post.title} postBody={post.body} />
    ));
    return <article>{postItems}</article>;
  }
}

const mapStateToProps = (state) => ({
  post: state.post.post,
});

export default connect(mapStateToProps, { fetchPost })(SingleBlogPost);
