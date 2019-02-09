import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap'; /*react-bootstrap is used for better formatting and responsiveness of website: https://react-bootstrap.github.io/ */
import './Subscribe.css';
import Mailchimp from 'react-mailchimp-form'; /*this package uses the Mailchimp API to make a sign up form within the page rather then a pop-up: https://www.npmjs.com/package/react-mailchimp-form */

class Subscribe extends Component {
  render() {
    return (
      <div className="Subscribe">
        <h1>Subscribe</h1>
        <Grid>
          <Row className="Description-wrapper">
            <Col md={3} />
            {/* <Col className="Description" md={6}>
              <p className="Video-description">Want to get in touch with me?</p>
            </Col> */}
            <Col md={3} />
          </Row>
          {/*creates a mailchimp form, check documentation to learn more*/}
          <Row className="Field-wrapper-wrap">
            <Col md={2} />
            <Col className="Form-Wrapper" md={12}>
              <Mailchimp
                action="https://facebook.us19.list-manage.com/subscribe/post?u=f63cb56768fba0c0f62eb7e2b&amp;id=01f405136b"
                fields={[
                  {
                    name: 'FNAME',
                    placeholder: ' First Name',
                    type: 'text',
                    required: true,
                  },
                  {
                    name: 'LNAME',
                    placeholder: ' Last Name',
                    type: 'text',
                    required: true,
                  },
                  {
                    name: 'EMAIL',
                    placeholder: ' Email',
                    type: 'email',
                    required: true,
                  },
                  // {
                  //     name: 'MESSAGE',
                  //     placeholder:'  Message',
                  //     type: 'text',
                  //     required: false
                  // }
                ]}
                message={{
                  sending: 'Sending...',
                  success: 'Thank you for subscribing!',
                  error: 'An unexpected internal error has occurred.',
                  empty: 'You must write an e-mail.',
                  duplicate:
                    'Too many subscribe attempts for this email address',
                  button: 'Submit',
                }}
                className="Form-class"
              />
            </Col>
            <Col md={2} />
          </Row>
        </Grid>
      </div>
    );
  }
}
export default Subscribe;
