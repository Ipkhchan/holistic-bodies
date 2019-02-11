import React, { Component } from 'react';
import './Booking.css';
import Mailchimp from 'react-mailchimp-form'; /*this package uses the Mailchimp API to make a sign up form within the page rather then a pop-up: https://www.npmjs.com/package/react-mailchimp-form */

class Booking extends React.Component {
  componentDidMount() {
    const formButton = document.querySelector('.BookingPopup form button');
    formButton.textContent = 'Submit';
  }

  render() {
    const { toggleBooking } = this.props;

    return (
      <div className="BookingPopup">
        <button type="button" className="ClosePopup" onClick={toggleBooking}>
          x
        </button>
        <p className="BookingPopupText">
          Enter your information below. We'll send you an email with a link to
          schedule your free consulation.
        </p>
        <Mailchimp
          action="https://facebook.us19.list-manage.com/subscribe/post?u=f63cb56768fba0c0f62eb7e2b&amp;id=01f405136b"
          fields={[
            {
              name: 'FNAME',
              placeholder: 'First Name:',
              type: 'text',
              required: true,
            },
            {
              name: 'LNAME',
              placeholder: 'Last Name:',
              type: 'text',
              required: true,
            },
            {
              name: 'EMAIL',
              placeholder: 'Email:',
              type: 'email',
              required: true,
            },
          ]}
          message={{
            sending: 'Sending...',
            success: 'Thank you for subscribing!',
            error: 'An unexpected internal error has occurred.',
            empty: 'You must write an e-mail.',
            duplicate: 'Too many subscribe attempts for this email address',
            button: 'Submit',
          }}
          className="Form-class"
        />

        {/* <div id="mc_embed_signup">
          <form
            action="https://facebook.us19.list-manage.com/subscribe/post?u=f63cb56768fba0c0f62eb7e2b&amp;id=01f405136b"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <h2>Subscribe to our mailing list</h2>
              <div className="indicates-required">
                <span className="asterisk">*</span> indicates required
              </div>
              <div className="mc-field-group">
                <label for="mce-EMAIL">
                  Email Address
                  <span class="asterisk">*</span>
                </label>
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  class="required email"
                  id="mce-EMAIL"
                />
              </div>
              <div className="mc-field-group">
                <label for="mce-FNAME">First Name </label>
                <input
                  type="text"
                  value=""
                  name="FNAME"
                  className=""
                  id="mce-FNAME"
                />
              </div>
              <div className="mc-field-group">
                <label for="mce-LNAME">Last Name </label>
                <input
                  type="text"
                  value=""
                  name="LNAME"
                  className=""
                  id="mce-LNAME"
                />
              </div>
              <div id="mce-responses" className="clear">
                <div
                  className="response"
                  id="mce-error-response"
                  style="display:none"
                />
                <div
                  className="response"
                  id="mce-success-response"
                  style="display:none"
                />
              </div>
              <div
                style={{ position: 'absolute', left: '-5000px' }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_f63cb56768fba0c0f62eb7e2b_01f405136b"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div className="clear">
                <input
                  type="submit"
                  value="Submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
              </div>
            </div>
          </form>
        </div> */}
      </div>
    );
  }
}

export default Booking;
