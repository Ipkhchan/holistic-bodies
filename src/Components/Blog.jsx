/*This component is currently not in use*/

import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Button,
} from 'react-bootstrap'; /*react-bootstrap is used for better formatting and responsiveness of website: https://react-bootstrap.github.io/ */
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = { blogPosts: [] };
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url:
        'https://www.googleapis.com/blogger/v3/blogs/8670205201822457831/posts?key=AIzaSyC2R6Ccd3n9fDzhemeZv05__wUw3fdYxDM',
      headers: { fetchImages: 'true' },
    }).then(results => {
      let blogPosts = [];

      for (let i = 0; i <= 2; i++) {
        const content = results.data.items[i].content;
        const title = results.data.items[i].title;
        const image = /<img.*>/.exec(content)
          ? /src=".*"/
              .exec(/<img.*>/.exec(content)[0])[0]
              .slice(5)
              .split('"')[0]
          : './assets/Default_Blog_Image.png';
        const url = results.data.items[i].url;
        blogPosts.push({ image: image, title: title, url: url });
      }
      this.setState({ blogPosts: blogPosts });
    });
  }

  render() {
    return (
      <div className="Blog">
        <h1>Blog</h1>
        <Grid>
          <Row className="BlogsContainer">
            {this.state.blogPosts.map(blogPost => (
              <Col sm={4} className="blogpost">
                <div className="img-container">
                  <img src={blogPost.image} />
                  <a className="hoverOverlay" href={blogPost.url} />
                </div>
                <div className="blogTitle">
                  <a href={blogPost.url}>{blogPost.title}</a>
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            <Col md={10} />
            <Col md={1}>
              <Button
                className="Bttn"
                href="https://holsiticbodies.blogspot.com/"
              >
                Continue to Blog
              </Button>
            </Col>
            <Col md={1} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Blog;

// </Row>
//   {/*Text for blog*/}
//   <Row className="Description-wrapper">
//       <Col md={3} />
//       <Col className="Description" md={6}>
//           <p>Click on the button below to view some of my blogs</p>
//       </Col>
//       <Col md={3} />
//   </Row>
//   {/*button*/}
//   <Row className="Button-wrapper-wrap">
//       <Col md={3}/>
//       <Col md={6} className="Button-wrapper">
//           <Button className="Btn" href="https://holsiticbodies.blogspot.com/" block>
//               Continue to Blog
//           </Button>
//       </Col>
//       <Col md={3}/>
//   </Row>
