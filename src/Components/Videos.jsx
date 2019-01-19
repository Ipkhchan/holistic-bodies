import React, { Component } from 'react';
import ReactPlayer from 'react-player'; /*react-player is used to create a versatile video player with many options: https://www.npmjs.com/package/react-player*/
import  {Grid, Row, Col} from 'react-bootstrap'; /*react-bootstrap is used for better formatting and responsiveness of website: https://react-bootstrap.github.io/ */
import './Videos.css';
import axios from 'axios';

class Videos extends Component {
    componentDidMount() {
      console.log("here");
      axios({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDoNAkazWSrZlEnqDZkP4fVT7qfarjP_As',
        headers: {'maxResults': '25',
                 'forMine': 'true',
                 'part': 'snippet',
                 'q': '',
                 'type': 'video'}
      }).then((results) => {
        console.log("youtube", results);
        // let blogPosts = [];
        //
        // for (let i = 0; i <= 2; i++) {
        //   const content = results.data.items[i].content;
        //   const title = results.data.items[i].title;
        //   const image = /<img.*>/.exec(content) ? /src=".*"/.exec(/<img.*>/.exec(content)[0])[0].slice(5).split('"')[0] : "./assets/Default_Blog_Image.png";
        //   const url = results.data.items[i].url;
        //   blogPosts.push({image: image, title: title, url: url});
        // }
        // console.log("blogPosts", blogPosts);
        // this.setState({blogPosts: blogPosts});
      })
    }

    render() {
        return (
            <div className="Videos">
                <h1>Empowerment</h1>
                <Grid>
                    <Row className="Description-wrapper">
                        <Col md={3} />
                        <Col className="Description" md={6}>
                            <p>Check out some videos from my
                            upcoming video series.</p>
                        </Col>
                        <Col md={3} />
                    </Row>
                    {/*contains the style and features of the video player, check documentation for react-player to learn more*/}
                    <Row className="Video-wrapper">
                        <Col md={4} className="Video_1">
                            <ReactPlayer
                                className="player"
                                url="assets/EDUCATE.mp4"
                                width="100%"
                                height="100%"
                                controls />
                        </Col>
                        <Col md={4}>
                          <ReactPlayer
                              className="player"
                              url="assets/EMPOWER.mp4"
                              width="100%"
                              height="100%"
                              controls />
                        </Col>
                        <Col md={4}>
                            <ReactPlayer
                                className="player"
                                url="assets/ENJOY.mp4"
                                width="100%"
                                height="100%"
                                controls />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Videos;

// buildApiRequest('GET',
//                 '/youtube/v3/search',
// );


// "assets/EDUCATE.mp4"
// width="560" height="315"
