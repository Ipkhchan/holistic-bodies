import React, { Component } from 'react';
import './Booking.css';
import Mailchimp from 'react-mailchimp-form'; /*this package uses the Mailchimp API to make a sign up form within the page rather then a pop-up: https://www.npmjs.com/package/react-mailchimp-form */

class Booking extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     show: true,
  //   };
  // }

  // handleClose = () => {
  //   this.setState({ show: false });
  // };

  // handleShow = () => {
  //   this.setState({ show: true });
  // };

  render() {
    const { handleClick, toggleBooking } = this.props;

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
              placeholder: '  First Name: ',
              type: 'text',
              required: true,
            },
            {
              name: 'LNAME',
              placeholder: '  Last Name: ',
              type: 'text',
              required: true,
            },
            {
              name: 'EMAIL',
              placeholder: '  Email: ',
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
      </div>
    );
  }
}

export default Booking;
