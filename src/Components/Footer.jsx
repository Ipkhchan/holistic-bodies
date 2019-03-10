import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap'; /*react-bootstrap is used for better formatting and responsiveness of website: https://react-bootstrap.github.io/ */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; /*imports fontAwesome library*/
import { faTwitter } from '@fortawesome/free-brands-svg-icons'; /*imports Twitter icon*/
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; /*imports Envelope Icon*/
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'; /*imports Instagram icon*/
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <Grid>
          <Row>
            <Col md={3} />
            <Col md={6}>
              <h1>Contact</h1>
            </Col>
            <Col md={3} />
          </Row>
          {/*uses the font awesome icons, check documentation to learn more: https://fontawesome.com/how-to-use/on-the-web/using-with/react*/}
          <Row>
            <Col md={3} />
            <Col md={6} className="social-media">
              <a
                href="https://www.instagram.com/huss_life/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="instant fa-fw"
                  icon={faInstagram}
                  color="black"
                />
              </a>
              <a
                href="https://twitter.com/BodiesHolistic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="twitter fa-fw"
                  icon={faTwitter}
                  color="black"
                />
              </a>
              <a href="mailto:hussainbokharifit@gmail.com" target="_blank">
                <FontAwesomeIcon
                  className="mail fa-fw"
                  icon={faEnvelope}
                  color="black"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCbYLRecECOKfHzHNpd7bbhg"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="youtube fa-fw"
                  icon={faYoutube}
                  color="black"
                />
              </a>
            </Col>
            <Col md={3} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Footer;
