/*This component is currently not in use*/

import React, { Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap'; /*react-bootstrap is used for better formatting and responsiveness of website: https://react-bootstrap.github.io/ */
import './Blog.css';

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <h1>Blog</h1>
                <Grid>
                    {/*Text for blog*/}
                    <Row className="Description-wrapper">
                        <Col md={3} />
                        <Col className="Description" md={6}>
                            <p>Click on the button below to view some of my blogs</p>
                        </Col>
                        <Col md={3} />
                    </Row>
                    {/*button*/}
                    <Row className="Button-wrapper-wrap">
                        <Col md={3}/>
                        <Col md={6} className="Button-wrapper">
                            <Button className="Btn" href="https://holsiticbodies.blogspot.com/" block>
                                Continue to Blog
                            </Button>
                        </Col>
                        <Col md={3}/>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Blog;
