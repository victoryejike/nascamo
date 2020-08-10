import React from "react";
import Header from "../../Components/Header-component/Header";
import BlogItem from "../../Components/BlogItem-component/BlogItem";
import Subscribe from "../../Components/Subscribe-component/Subscribe";
import Footer from "../../Components/Footer-component/Footer";
import "./Blog.css";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogItems: [
        {
          id: 1,
          postImage: (
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              alt="firstblogpost"
              width="200px"
              height="200px"
            />
          ),
          postBody:
            // eslint-disable-next-line
            "The tech giant says it is ready to begin.",
          postCategory: "Text Message",
          postAuthor: "Stanley",
        },
        {
          id: 2,
          postImage: (
            <img
              src="http://mrmrs.github.io/photos/whale.jpg"
              alt="firstblogpost"
              width="200px"
              height="200px"
            />
          ),
          postBody:
            // eslint-disable-next-line
            "The tech giant says it is ready to begin",
          postCategory: "Whatsapp",
          postAuthor: "Erica",
        },
        {
          id: 3,
          postImage: (
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              alt="firstblogpost"
              width="200px"
              height="200px"
            />
          ),
          postBody:
            // eslint-disable-next-line
            "The tech giant says it is ready to begin.",
          postCategory: "Email",
          postAuthor: "TolaniBaj",
        },
        {
          id: 4,
          postImage: (
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              alt="firstblogpost"
              width="200px"
              height="200px"
            />
          ),
          postBody:
            // eslint-disable-next-line
            "The tech giant says it is ready to begin.",
          postCategory: "Phone Call",
          postAuthor: "Kennedy",
        },
        {
          id: 5,
          postImage: (
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              alt="firstblogpost"
              width="200px"
              height="200px"
            />
          ),
          postBody:
            // eslint-disable-next-line
            "The tech giant says it is ready to begin .",
          postCategory: "Cryptos",
          postAuthor: "Stanley",
        },
        {
          id: 6,
          postImage: (
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              alt="firstblogpost"
              width="200px"
              height="200px"
            />
          ),
          postBody:
            // eslint-disable-next-line
            "The tech giant says it is ready to begin.",
          postCategory: "Cryptos",
          postAuthor: "Stanley",
        },
        {
          id: 7,
          postImage: (
            <img
              src="http://mrmrs.github.io/photos/whale.jpg"
              alt="firstblogpost"
              width="200px"
              height="200px"
            />
          ),
          postBody:
            // eslint-disable-next-line
            "The tech giant says it is ready to begin.",
          postCategory: "Cryptos",
          postAuthor: "Stanley",
        },
        {
          id: 8,
          postImage: (
            <img
              src="http://mrmrs.github.io/photos/whale.jpg"
              alt="firstblogpost"
              width="200px"
              height="200px"
            />
          ),
          postBody:
            // eslint-disable-next-line
            "The tech giant says it is ready to begin",
          postCategory: "Cryptos",
          postAuthor: "Sandro Willy",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Header />
        <p className="blogName">Blog</p>
        <div className="container2">
          {this.state.blogItems.map((blogItem) => (
            <div className="blogPost2">
              <BlogItem
                className="blog"
                image={blogItem.postImage}
                article={blogItem.postBody}
                category={blogItem.postCategory}
                author={blogItem.postAuthor}
              />
            </div>
          ))}
        </div>
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default Blog;
