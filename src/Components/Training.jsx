import React, {Component} from 'react';
import {Grid, Row, Col, PanelGroup, Panel, Button, Image} from 'react-bootstrap'; /*react-bootstrap is used for better formatting and responsiveness of website: https://react-bootstrap.github.io/ */
import './Training.css';

class Training extends Component {

    /*Back-end code for panel functionality, but Panel is currently not in use*/

/*    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            open: false
        };
    }

    handleSelect(activeKey) {
        this.setState({activeKey});
    }*/

    render() {
        return (
            <div className="Training">
                <h1>Education</h1>
                <Grid>
                    <Row className="Description-wrapper">
                        <Col md={2} />
                        <Col className="Description" md={8}>
                            <p>Whether your goal is to elevate your overall fitness, gain strength, drop body fat, increase
                                lean muscle or simply move better, our personal training is the fastest way to get there.
                                Books us for your free consultation today to get started
                            </p>
                        </Col>
                        <Col md={2} />
                    </Row>
                    <Row className="Button-wrapper-wrap">
                        <Col md={3}/>
                        <Col md={6} className="Button-wrapper">
                            <Button className="Btn" href="https://10to8.com/book/885ff967-6dca-4509-abde-35106ca9cf02/uuid/" target="_blank" block>
                                FREE CONSULTATION - BOOK NOW
                            </Button>
                        </Col>
                        <Col md={3}/>
                    </Row>
                    <Row className="Picture-wrapper">
                        {/* <Col xs={0} sm={0} md={1}  /> */}
                        <Col className="Picture1-wrapper" xs={6} sm={6} md={3}>
                            <Image src="assets/Picture_1.jpg" responsive className="Picture_1"/>
                            <div className="hoverOverlay flex-column flex-justify-center">
                              <p>Adopt a wining mindset. Don't settle for less. Regardless of any obstacle
                                 you might be facing, you can accomplish your goals with a results coach by
                                 your side! SIGN UP FOR A FREE SESSION.
                              </p>
                            </div>
                        </Col>
                        <Col className="Picture2-wrapper" xs={6} sm={6} md={3}>
                            <Image src="assets/Training_2.jpg" responsive className="Picture_2"/>
                            <div className="hoverOverlay flex-column flex-justify-center">
                              <p>Elevate your health and well-being. Challenge the status quo. To live long
                                 must understand the benefits. You can tackle your aim with a qualified coach
                                 by your side! SIGN UP FOR A FREE SESSION.
                              </p>
                            </div>
                        </Col>
                        <Col className="Picture3-wrapper" xs={6} sm={6} md={3}>
                            <Image src="assets/Picture_3_cropped.jpg" responsive className="Picture_3"/>
                            <div className="hoverOverlay flex-column flex-justify-center">
                              <p>Improve your personal life. Rise above adversity. Motivation is essential to
                                 taking action and accomplishing your goals, and a coach can help you navigate
                                 these sensitive roads. SIGN UP FOR A FREE SESSION.
                              </p>
                            </div>
                        </Col>
                        <Col className="Picture4-wrapper" xs={6} sm={6} md={3}>
                            <Image src="assets/Picture_4_cropped.jpg" responsive className="Picture_4"/>
                            <div className="hoverOverlay flex-column flex-justify-center">
                              <p>Create emotional accountability. Create deep abundance. Becoming the hero of
                                 your own life starts with accountability, with someone understanding by your
                                 side, hard emotions become easier to channel. SIGN UP TODAY TO LEARN HOW!
                              </p>
                            </div>
                        </Col>
                        {/* <Col xs={0} sm={0} md={1}  /> */}
                    </Row>

                    {/*Panels that contain the training packages but is currently not in use*/}

                    {/*<Row className="Description-wrapper">*/}
                        {/*<Col md={3}/>*/}
                        {/*<Col className="Description" md={6}>*/}
                            {/*<p className="Training-description">Click on the panels below to*/}
                                {/*learn more about my packages. Contact me for more information</p>*/}
                        {/*</Col>*/}
                        {/*<Col md={3}/>*/}
                    {/*</Row>*/}
                    {/*<Row className="Button-wrapper-wrap">*/}
                        {/*<Col md={1}/>*/}
                        {/*<Col md={10} className="Panel-wrapper">*/}
                            {/*<PanelGroup*/}
                                {/*accordion*/}
                                {/*id="accordion-example"*/}
                                {/*defaultActiveKey="1">*/}

                                {/*<Panel eventKey="1">*/}
                                    {/*<Panel.Heading className="Title-Heading">*/}
                                        {/*<Panel.Title toggle>Session Packs</Panel.Title>*/}
                                    {/*</Panel.Heading>*/}
                                    {/*<Panel.Body collapsible>*/}
                                        {/*<div className="Columns">*/}
                                            {/*<ul className="Price">*/}
{/*/!*                                                <div className="Pack-Heading">*/}
                                                    {/*<li className="Head">10 Sessions Pack</li>*/}
                                                {/*</div>*!/*/}
                                                {/*<div className="Pack-Heading">*/}
                                                    {/*<li className="Head">10 Session Pack /!*<h4 className="Price-text">$ 550.00 (CAD)</h4>*!/</li>*/}
                                                {/*</div>*/}
{/*/!*                                                <Button  onClick={() => this.setState({ open: !this.state.open })}>*/}
                                                    {/*Learn More*/}
                                                {/*</Button>*/}
                                                {/*<Collapse in={this.state.open}>*/}
                                                    {/*<li>*/}
                                                        {/*The private coaching pack is a comprehensive plan for*/}
                                                        {/*individuals who are getting ready to get started on*/}
                                                        {/*achieving strength, and losing weight. This session pack*/}
                                                        {/*outlines intense training sessions with the personal*/}
                                                        {/*trainer you are signing up with. Please be advised that*/}
                                                        {/*you are on your journey to become a better you!*/}
                                                    {/*</li>*/}
                                                {/*</Collapse>*!/*/}
                                            {/*</ul>*/}
                                        {/*</div>*/}
                                        {/*<div className="Columns">*/}
                                            {/*<ul className="Price">*/}
                                               {/*/!* <div className="Pack-Heading">*/}
                                                    {/*<li className="Head">15 Session Pack</li>*/}
                                                {/*</div>*!/*/}
                                                {/*<div className="Pack-Heading">*/}
                                                    {/*<li className="Head">15 Session Pack /!*<h4 className="Price-text">$ 932.00 (CAD)</h4>*!/</li>*/}
                                                {/*</div>*/}
{/*/!*                                                <Button onClick={() => this.setState({ open: !this.state.open })}>*/}
                                                    {/*Learn More*/}
                                                {/*</Button>*/}
                                                {/*<Collapse in={this.state.open}>*/}
                                                {/*<li>*/}
                                                    {/*The private coaching pack is a comprehensive plan for*/}
                                                    {/*individuals who are getting ready to get started on*/}
                                                    {/*achieving strength, and losing weight. This session pack*/}
                                                    {/*outlines intense training sessions with the personal*/}
                                                    {/*trainer you are signing up with. Please be advised that*/}
                                                    {/*you are on your journey to become a better you!*/}
                                                {/*</li>*/}
                                                {/*</Collapse>*!/*/}
                                            {/*</ul>*/}
                                        {/*</div>*/}
                                        {/*<div className="Columns">*/}
                                            {/*<ul className="Price">*/}
                                               {/*/!* <div className="Pack-Heading">*/}
                                                    {/*<li className="Head">25 Sessions Pack</li>*/}
                                                {/*</div>*!/*/}
                                                {/*<div className="Pack-Heading">*/}
                                                    {/*<li className="Head">25 Session Pack /!*<h4 className="Price-text">$ 1,130.00 (CAD)</h4>*!/</li>*/}
                                                {/*</div>*/}
{/*/!*                                                <Button onClick={() => this.setState({ open: !this.state.open })}>*/}
                                                    {/*Learn More*/}
                                                {/*</Button>*/}
                                                {/*<Collapse in={this.state.open}>*/}
                                                {/*<li>*/}
                                                    {/*The private coaching pack is a comprehensive plan for*/}
                                                    {/*individuals who are getting ready to get started on*/}
                                                    {/*achieving strength, and losing weight. This session pack*/}
                                                    {/*outlines intense training sessions with the personal*/}
                                                    {/*trainer you are signing up with. Please be advised that*/}
                                                    {/*you are on your journey to become a better you!*/}
                                                {/*</li>*/}
                                                {/*</Collapse>*!/*/}
                                            {/*</ul>*/}
                                        {/*</div>*/}
                                        {/*<div className="Columns">*/}
                                            {/*<ul className="Price">*/}
                                              {/*/!*  <div className="Pack-Heading">*/}
                                                    {/*<li className="Head">5 Session Pack</li>*/}
                                                {/*</div>*!/*/}
                                                {/*<div className="Pack-Heading">*/}
                                                    {/*<li className="Head">5 Session Pack /!*<h4 className="Price-text">$ 300.00 (CAD)</h4>*!/</li>*/}
                                                {/*</div>*/}
{/*/!*                                                <Button onClick={() => this.setState({ open: !this.state.open })}>*/}
                                                    {/*Learn More*/}
                                                {/*</Button>*/}
                                                {/*<Collapse in={this.state.open}>*/}
                                                {/*<li>*/}
                                                    {/*The private coaching pack is a comprehensive plan for*/}
                                                    {/*individuals who are getting ready to get started on*/}
                                                    {/*achieving strength, and losing weight. This session pack*/}
                                                    {/*outlines intense training sessions with the personal*/}
                                                    {/*trainer you are signing upwith. Please be advised that*/}
                                                    {/*you are on your journey to become a better you!*/}
                                                {/*</li>*/}
                                                {/*</Collapse>*!/*/}
                                            {/*</ul>*/}
                                        {/*</div>*/}
                                    {/*</Panel.Body>*/}
                                {/*</Panel>*/}
                                {/*<Panel eventKey="2">*/}
                                    {/*<Panel.Heading>*/}
                                        {/*<Panel.Title toggle className="Title-Heading">Sports Specific Private*/}
                                            {/*Sessions</Panel.Title>*/}
                                    {/*</Panel.Heading>*/}
                                    {/*<Panel.Body collapsible>*/}
                                        {/*<div className="Column">*/}
                                            {/*<ul className="Price">*/}
                                                {/*/!*<div className="Pack-Heading">*/}
                                                    {/*<li className="Head">Session 8 Pack</li>*/}
                                                {/*</div>*!/*/}
                                                {/*<div className="Pack-Heading">*/}
                                                    {/*<li className="Head">Session 8 Pack/!*<h4 className="Price-text">$ 520.00 (CAD)</h4>*!/</li>*/}
                                                {/*</div>*/}
{/*/!*                                                <li>*/}
                                                    {/*This weightlifting session pack is a one-on-one training program*/}
                                                    {/*where trainer can provide a 50 min technique and strength workout*/}
                                                    {/*with the client to improve weightlifting technique.*/}
                                                {/*</li>*!/*/}
                                            {/*</ul>*/}
                                        {/*</div>*/}
                                    {/*</Panel.Body>*/}
                                {/*</Panel>*/}
                                {/*<Panel eventKey="3">*/}
                                    {/*<Panel.Heading>*/}
                                        {/*<Panel.Title toggle className="Title-Heading">Nutrition Guidance &*/}
                                            {/*Planning</Panel.Title>*/}
                                    {/*</Panel.Heading>*/}
                                    {/*<Panel.Body collapsible>*/}
                                        {/*<div className="Column">*/}
                                            {/*<ul className="Price">*/}
{/*/!*                                                <div className="Pack-Heading">*/}
                                                    {/*<li className="Head">Nutrition Guide</li>*/}
                                                {/*</div>*!/*/}
                                                {/*<div className="Pack-Heading">*/}
                                                    {/*<li className="Head">Nutrition Guide/!*<h4 className="Price-text">$ 100.00 (CAD)</h4>*!/</li>*/}
                                                {/*</div>*/}
{/*/!*                                                <li>*/}
                                                    {/*This workout programming and nutrition guide is for individuals*/}
                                                    {/*who are looking to start a change of lifestyle. This programming*/}
                                                    {/*and nutrition guide will allow it's users to focus on losing weight,*/}
                                                    {/*and being holistic about changing your lifestyle.*/}
                                                {/*</li>*!/*/}
                                            {/*</ul>*/}
                                        {/*</div>*/}
                                    {/*</Panel.Body>*/}
                                {/*</Panel>*/}
                                {/*<Panel eventKey="4">*/}
                                    {/*<Panel.Heading>*/}
                                        {/*<Panel.Title toggle className="Title-Heading">Sample Session Training (1-4 Week*/}
                                            {/*Samples Available)</Panel.Title>*/}
                                    {/*</Panel.Heading>*/}
                                    {/*<Panel.Body collapsible>*/}
                                        {/*<div className="Columns">*/}
                                            {/*<ul className="Price">*/}
{/*/!*                                                <div className="Pack-Heading-lg">*/}
                                                    {/*<li className="Head">Nutrition Guidance & Planning</li>*/}
                                                {/*</div>*!/*/}
                                                {/*<div className="Pack-Heading-lg">*/}
                                                    {/*<li className="Head">Nutrition Guidance & Planning /!*<h4 className="Price-text">$ 35.00 (CAD)</h4>*!/</li>*/}
                                                {/*</div>*/}
                                            {/*</ul>*/}
                                        {/*</div>*/}
                                        {/*<div className="Columns">*/}
                                            {/*<ul className="Price">*/}
                              {/*/!*                  <div className="Pack-Heading-lg">*/}
                                                    {/*<li className="Head">Session + Leg x Core Training Program</li>*/}
                                                {/*</div>*!/*/}
                                                {/*<div className="Pack-Heading-lg">*/}
                                                    {/*<li className="Head">Session + Leg x Core Training Program/!*<h4 className="Price-text">$ 300.00 (CAD)</h4>*!/</li>*/}
                                                {/*</div>*/}
{/*/!*                                                <li>*/}
                                                    {/*This workout programming and session is for individuals who are*/}
                                                    {/*looking to*/}
                                                    {/*keep up with their change of lifestyle. This program will focus on*/}
                                                    {/*developing*/}
                                                    {/*lower body strength and focuses on abs and core work. This 3 times*/}
                                                    {/*per week*/}
                                                    {/*program provides its users to take enough break in the middle to*/}
                                                    {/*recuperate*/}
                                                    {/*mentally. This programming and session guide will allow it's users*/}
                                                    {/*to focus*/}
                                                    {/*on being holistic about changing your lifestyle.*/}
                                                {/*</li>*!/*/}
                                            {/*</ul>*/}
                                        {/*</div>*/}
                                    {/*</Panel.Body>*/}
                                {/*</Panel>*/}
                                {/*<Panel eventKey="5">*/}
                                    {/*<Panel.Heading>*/}
                                        {/*<Panel.Title toggle className="Title-Heading">Subscriptions</Panel.Title>*/}
                                    {/*</Panel.Heading>*/}
                                    {/*<Panel.Body collapsible>*/}
                                        {/*<div className="Columns">*/}
                                            {/*<ul className="Price">*/}
{/*/!*                                                <div className="Pack-Heading-lg">*/}
                                                    {/*<li className="Head">Bi-Weekly Programming</li>*/}
                                                {/*</div>*!/*/}
                                                {/*<div className="Pack-Heading-lg">*/}
                                                    {/*<li className="Head">Bi-Weekly Programming <h4 className="Price-text">$ 38.00 (CAD)</h4></li>*/}
                                                {/*</div>*/}
{/*/!*                                                <li>*/}
                                                    {/*Own It is a combination of strength and functional training that*/}
                                                    {/*will boost*/}
                                                    {/*your overall strength, and improve your body composition. If you are*/}
                                                    {/*looking*/}
                                                    {/*to gain more experience with strength training, and/or getting ready*/}
                                                    {/*for any*/}
                                                    {/*season! This is the program for you. Own it will provide you with*/}
                                                    {/*self-anatomy*/}
                                                    {/*knowledge and help you with boosting your work capacity through*/}
                                                    {/*specific*/}
                                                    {/*movements allowing you to stay ready all year long.*/}
                                                {/*</li>*!/*/}
                                            {/*</ul>*/}
                                        {/*</div>*/}
                                        {/*<div className="Columns">*/}
                                            {/*<ul className="Price">*/}
{/*/!*                                                <div className="Pack-Heading-lg">*/}
                                                    {/*<li className="Head">Monthly Programming</li>*/}
                                                {/*</div>*!/*/}
                                                {/*<div className="Pack-Heading-lg">*/}
                                                    {/*<li className="Head">Monthly Programming <h4 className="Price-text">$ 75.00 (CAD)</h4></li>*/}
                                                {/*</div>*/}
{/*/!*                                                <li>*/}
                                                    {/*Aesthetically Strong A&S is a combination of strength and circuit*/}
                                                    {/*training that will boost your overall strength, and improve your*/}
                                                    {/*body composition. If you are looking to gain more experience with*/}
                                                    {/*strength training, and/or getting ready for any season! This is the*/}
                                                    {/*program for you. A&S works on boosting your work capacity through*/}
                                                    {/*specific movements allowing you to stay ready all year long.*/}
                                                {/*</li>*!/*/}
                                            {/*</ul>*/}
                                        {/*</div>*/}
                                    {/*</Panel.Body>*/}
                                {/*</Panel>*/}
                            {/*</PanelGroup>*/}
                        {/*</Col>*/}
                        {/*<Col md={1}/>*/}
                    {/*</Row>*/}
                </Grid>
            </div>
        );
    }
}

export default Training;
