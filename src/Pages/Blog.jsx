import React from "react";
import Navbar from "../Components/Navbar-component/Navbar";
import BlogItem from "../Components/BlogItem-component/BlogItem";

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
              width="100px"
              height="100px"
            />
          ),
          postBody:
            // eslint-disable-next-line
            "The tech giant says it is ready to begin planning a quantum \
              computer, a powerful cpu machine that relies on subatomic particles instead \
              of transistors.",
          postCategory: "Text Message",
          postAuthor: "Stanley",
        },
        {
          id: 2,
          postImage: (
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              alt="firstblogpost"
              width="100px"
              height="100px"
            />
          ),
          postBody:
            // eslint-disable-next-line
            "The tech giant says it is ready to begin planning a quantum \
              computer, a powerful cpu machine that relies on subatomic particles instead \
              of transistors.",
          postCategory: "Whatsapp",
          postAuthor: "Erica",
        },
        {
          id: 3,
          postImage: (
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              alt="firstblogpost"
              width="100px"
              height="100px"
            />
          ),
          postBody:
            // eslint-disable-next-line
            "The tech giant says it is ready to begin planning a quantum \
              computer, a powerful cpu machine that relies on subatomic particles instead \
              of transistors.",
          postCategory: "Email",
          postAuthor: "TolaniBaj",
        },
        {
          id: 4,
          postImage: (
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              alt="firstblogpost"
              width="100px"
              height="100px"
            />
          ),
          postBody:
            // eslint-disable-next-line
            "The tech giant says it is ready to begin planning a quantum \
              computer, a powerful cpu machine that relies on subatomic particles instead \
              of transistors.",
          postCategory: "Phone Call",
          postAuthor: "Kennedy",
        },
        {
          id: 5,
          postImage: (
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              alt="firstblogpost"
              width="100px"
              height="100px"
            />
          ),
          postBody:
            // eslint-disable-next-line
            "The tech giant says it is ready to begin planning a quantum \
              computer, a powerful cpu machine that relies on subatomic particles instead \
              of transistors.",
          postCategory: "Cryptos",
          postAuthor: "Stanley",
        },
        {
          id: 6,
          postImage: (
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              alt="firstblogpost"
              width="100px"
              height="100px"
            />
          ),
          postBody:
            // eslint-disable-next-line
            "The tech giant says it is ready to begin planning a quantum \
              computer, a powerful cpu machine that relies on subatomic particles instead \
              of transistors.",
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
        {this.state.blogItems.map((blogItem) => (
          <BlogItem
            image={blogItem.postImage}
            article={blogItem.postBody}
            category={blogItem.postCategory}
            author={blogItem.postAuthor}
          />
        ))}
      </div>
    );
  }
}

export default Blog;
