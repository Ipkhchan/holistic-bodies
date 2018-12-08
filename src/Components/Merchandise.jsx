import React, { Component } from 'react';
import  {Grid, Row, Col} from 'react-bootstrap'; /*react-bootstrap is used for better formatting and responsiveness of website: https://react-bootstrap.github.io/ */
import './Merchandise.css';

class Merchandise extends Component {
    render() {
        return (
            <div className="Merchandise">
                <h1>Merchandise</h1>
                <Grid>
                    {/*contains Ecwid store, learn more from the Ecwid website*/}
                    <Row className="Store-Wrapper">
                        <Col md={2} />
                        <Col md={8} className="Store">
                            <div id="my-store-15086025"/>
                        </Col>
                        <Col md={2} />
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Merchandise;
