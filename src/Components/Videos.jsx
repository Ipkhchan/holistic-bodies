import React, { Component } from 'react';
import ReactPlayer from 'react-player'; /*react-player is used to create a versatile video player with many options: https://www.npmjs.com/package/react-player*/
import  {Grid, Row, Col} from 'react-bootstrap'; /*react-bootstrap is used for better formatting and responsiveness of website: https://react-bootstrap.github.io/ */
import './Videos.css';

class Videos extends Component {
    render() {
        return (
            <div className="Videos">
                <h1>Empowerment</h1>
                <Grid>
                    <Row className="Description-wrapper">
                        <Col md={3} />
                        <Col className="Description" md={6}>
                            <p>This is the video section where you can find some videos from my
                            upcoming video series</p>
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


// "assets/EDUCATE.mp4"
// width="560" height="315"
