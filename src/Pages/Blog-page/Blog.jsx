import React from "react";
import Navbar from "../../Components/Navbar-component/Navbar";
import BlogItem from "../../Components/BlogItem-component/BlogItem";
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
              width="400px"
              height="400px"
            />
          ),
          postBody:
            // eslint-disable-next-line
            "The tech giant says it is ready to begin planning a quantum.",
          postCategory: "Text Message",
          postAuthor: "Stanley",
        },
        {
          id: 2,
          postImage: (
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              alt="firstblogpost"
              width="400px"
              height="400px"
            />
          ),
          postBody:
            // eslint-disable-next-line
            "The tech giant says it is ready to begin planning a quantum.",
          postCategory: "Whatsapp",
          postAuthor: "Erica",
        },
        {
          id: 3,
          postImage: (
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              alt="firstblogpost"
              width="400px"
              height="400px"
            />
          ),
          postBody:
            // eslint-disable-next-line
            "The tech giant says it is ready to begin planning a quantum.",
          postCategory: "Email",
          postAuthor: "TolaniBaj",
        },
        {
          id: 4,
          postImage: (
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              alt="firstblogpost"
              width="400px"
              height="400px"
            />
          ),
          postBody:
            // eslint-disable-next-line
            "The tech giant says it is ready to begin planning a quantum.",
          postCategory: "Phone Call",
          postAuthor: "Kennedy",
        },
        {
          id: 5,
          postImage: (
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              alt="firstblogpost"
              width="400px"
              height="400px"
            />
          ),
          postBody:
            // eslint-disable-next-line
            "The tech giant says it is ready to begin planning a quantum .",
          postCategory: "Cryptos",
          postAuthor: "Stanley",
        },
        {
          id: 6,
          postImage: (
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              alt="firstblogpost"
              width="400px"
              height="400px"
            />
          ),
          postBody:
            // eslint-disable-next-line
            "The tech giant says it is ready to begin planning a quantum.",
          postCategory: "Cryptos",
          postAuthor: "Sandro Willy",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Navbar />
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
      </div>
    );
  }
}

export default Blog;
