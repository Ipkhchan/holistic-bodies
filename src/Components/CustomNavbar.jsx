import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap'; /*react-bootstrap is used for better formatting and responsiveness of website: https://react-bootstrap.github.io/ */
import './CustomNavbar.css';


export default class CustomNavbar extends Component {
    render()
        {
            return (
                /*Creates a Navbar tag, check react-bootstrap to learn more about how it works*/
                <Navbar collapseOnSelect inverse fluid className="Nav">
                    {/*Defines the header for the navbar*/}
                    <Navbar.Header>
                        <Navbar.Brand>
                            <div><a href="#Home" style={{ color: '#9d9d9d'}}>Holistic Bodies </a></div>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    {/*defines each nav item with collapsible feature for responsiveness*/}
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#Home">
                                Home
                            </NavItem>
                            <NavItem eventKey={2} href="#About">
                                About
                            </NavItem>
                            <NavItem eventKey={3} href="#Videos">
                                Videos
                            </NavItem>
                            <NavItem eventKey={4} href="#Training">
                                Training
                            </NavItem>
                            <NavItem eventKey={5} href="#Merchandise">
                                Merchandise
                            </NavItem>
                            <NavItem eventKey={6} href="#Subscribe">
                                Subscribe
                            </NavItem>
                            <NavItem eventKey={7} href="#Footer">
                                Contact
                            </NavItem>
                            <NavItem eventKey={8} href="https://10to8.com/book/885ff967-6dca-4509-abde-35106ca9cf02/uuid/">
                                Consultation
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            );
        }
}



