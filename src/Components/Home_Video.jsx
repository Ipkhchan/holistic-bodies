import React, { Component } from 'react';
import {
  Col,
  Grid,
  Row,
} from 'react-bootstrap'; /*react-bootstrap is used for better formatting and responsiveness of website: https://react-bootstrap.github.io/ */
import './Home.css';
// import ReactPlayer from 'react-player'; /*react-player is used to create a versatile video player with many options: https://www.npmjs.com/package/react-player*/

class Home_Videos extends Component {
  constructor(props) {
    super(props);
  }

  togglePlay = e => {
    const vid = e.target;

    if (vid.paused) {
      vid.pause();
    } else {
      vid.play();
    }
  };

  render() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    return (
      <div className="Home_Videos">
        <Grid className="video_container">
          {/*contains the style and features of the video player, check documentation for react-player to learn more*/}
          <Row className="show-grid text-center Video-row">
            <Col md={12} className="Video-wrapper">
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {/* {!isMobile && !isPlaying && (
                  <div className="PlayButton">
                    <img
                      className="Play"
                      src="/assets/playButton.svg"
                      alt="Play Button"
                    />
                  </div>
                )} */}
                <video
                  autoPlay
                  muted
                  width="100%"
                  height="100%"
                  controls
                  className="Player"
                  onClick={this.togglePlay}
                >
                  <source src="/assets/LandingPageVideo.mp4" type="video/mp4" />
                </video>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home_Videos;
