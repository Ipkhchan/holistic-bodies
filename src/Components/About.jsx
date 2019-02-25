import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Image,
  Button,
} from 'react-bootstrap'; /*react-bootstrap is used for better formatting and responsiveness of website: https://react-bootstrap.github.io/ */
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <Grid>
          {/*mission statment text and blog button*/}
          <Row className="mission-statement">
            <h2>Mission Statement</h2>
            {/* <Col md={1} /> */}
            <Col md={12} className="mission-statement-wrapper">
              <p className="mission-statement-text">
                <b>
                  "Delivering personalized health and wellness education &
                  services to help you make better life decisions"
                </b>
              </p>
            </Col>
            {/* <Col md={1} className="Bttn-wrapper" >
                            <Button className="Bttn" href="https://holsiticbodies.blogspot.com/">Continue to Blog</Button>
                        </Col> */}
          </Row>
          {/*About text with logo*/}
          <Row className="about-us">
            <h2 className="title">About Us</h2>
            <Col md={6} className="motto-wrapper">
              <div className="triangle-wrapper">
                <Image
                  src="assets/triangle.png"
                  responsive
                  className="triangle"
                />
              </div>
            </Col>
            {/* <Col md={1} />*/}
            <Col md={6} className="About-us-wrapper">
              <p className="about-us-text">
                If you are reading this, it means you are here to change your
                life. We have found that the best way to find the origin of your
                existence- the most effective way to learn, grow, cultivate, and
                progress- is through others. Through connecting with your
                environment on a emotional level.
              </p>
              <p className="about-us-text">
                Holistic Bodies is redefining strength to make better decisions.
                We are here to educate you about the vital role of strength in
                our lives. Our goal is to empower you to make decisions that can
                help you live a fulfilled and purposeful life. We want you to
                enjoy your life through the means of something that already
                exists within you. Strength.
              </p>
              <p className="about-us-text">
                Living holistically involves you making a commitment to growth.
                Growth requires you to understand yourself-keeping an audit of
                your strengths, weaknesses and seizing the opportunities
                provided to you. Holistic Bodies is a space where you can learn
                about yourself, use tools to improve yourself, and make better
                decisions to elevate your life. We believe in empowering
                individuals by helping them explore their ethos, pathos and
                logos.
              </p>
            </Col>
          </Row>

          {/*About me text with picture but currently commented out*/}
          {/* <Row className="about-me">
                        <h2 className="title">About Me</h2>
                        <Col md={1} />
                        <Col md={6} className="person-wrapper">
                            <Image src="assets/Hussain.jpg" responsive className="person"/>
                        </Col>
                        <Col md={6} className="About-me-wrapper">
                            <p className="about-hussain-text"><b>Let me start with something John Gall said,</b> "A complex system that works is invariably found to have evolved from a simple system that worked. The inverse proposition also appears to be true: a complex system designed from scratch never works and cannot be made to work. You have to start over, beginning with a simple system.”</p>
                            <p className="about-hussain-text">My name is Hussain Bokhari.  My wealth of experience comes from the years of learning and applying growth strategies, creating opportunities for people around me to live their version of purposeful life. </p>
                            <p className="about-hussain-text">I have graduated with Ryerson University with a Bachelors and Masters of Engineering (Aerospace). I believe that a purposeful life requires exploration of oneself. There are more than one ways to help people, the best and closest way to my heart has been to help people achieve their goals. I have been grateful in that sense, that my chosen path has allowed me to make some impact on students, colleagues, friends, strangers, fans, and whoever I have connected it. </p>
                            <p className="about-hussain-text">My philosophy of enjoying your journey, and living in the present moment is something that has helped me live my life passionately, and help others continuously.</p>
                        </Col>
                        <Col md={1} />
                    </Row>*/}
        </Grid>
      </div>
    );
  }
}

export default About;
