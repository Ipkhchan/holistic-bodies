import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  Button,
} from 'react-bootstrap'; /*react-bootstrap is used for better formatting and responsiveness of website: https://react-bootstrap.github.io/ */
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
  render() {
    const { toggleBooking } = this.props;

    return (
      /*Creates a Navbar tag, check react-bootstrap to learn more about how it works*/
      <Navbar collapseOnSelect inverse fluid className="Nav">
        {/*Defines the header for the navbar*/}
        <Navbar.Header>
          <Navbar.Brand>
            <div>
              <a href="#Home" style={{ color: '#9d9d9d' }}>
                Holistic Bodies{' '}
              </a>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        {/*defines each nav item with collapsible feature for responsiveness*/}
        <Navbar.Collapse>
          <Nav pullRight className="SectionLinkContainer">
            <NavItem eventKey={1} href="#Home">
              Home
            </NavItem>
            <NavItem eventKey={2} href="#About">
              About
            </NavItem>
            <NavItem eventKey={3} href="#Training">
              Education
            </NavItem>
            <NavItem eventKey={4} href="#Merchandise">
              Merchandise
            </NavItem>
            <NavItem eventKey={5} href="#Videos">
              Empowerment
            </NavItem>
            {/* <NavItem eventKey={6} href="#Subscribe">
              Subscribe
            </NavItem> */}
            {/* <NavItem eventKey={7} href="#Footer">
              Contact
            </NavItem> */}
            <NavItem eventKey={6} className="BookButtonContainer">
              <Button className="BookButton" onClick={toggleBooking}>
                Book Free Consultation
              </Button>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
