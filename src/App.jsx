/*Contains all the calls to the different components, app.js is the called by the index files*/

import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'; /*used this package to make a scrollable website: https://www.npmjs.com/package/react-scrollable-anchor*/
import './App.css'; /*CSS for app.jsx*/
import Navbar from './Components/CustomNavbar'; /*Navbar component*/
import Home from './Components/Home'; /*Home Component*/
import About from './Components/About'; /*About Component*/
import Blog from './Components/Blog'; /*Blog Component*/
import Videos from './Components/Videos'; /*Video page component*/
import Merchandise from './Components/Merchandise'; /*Merchandise store component*/
import Training from './Components/Training'; /*Training component */
import Testimonials from './Components/Testimonials';
import Subscribe from './Components/Subscribe'; /*Subscribe component*/
import Footer from './Components/Footer'; /*Footer component (contains the contact information)*/
import Foot from './Components/Foot'; /*Foot component (contains the terms and conditions)*/
import { library } from '@fortawesome/fontawesome-svg-core'; /*import font awesome icons*/
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; /*import Instagram icon*/
import { faTwitter } from '@fortawesome/free-brands-svg-icons'; /*import twitter icon*/
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; /*import envelope icon*/
import Headroom from 'react-headroom'; /*package that hides components till needed: https://www.npmjs.com/package/react-headroom*/
import Main from './Components/Main'; /*function that uses react router to route to terms and conditions page*/
import { Route } from 'react-router-dom'; /*package used to route to terms page and define the sub link of each component: https://www.npmjs.com/package/react-router-dom*/
import Home_Videos from './Components/Home_Video'; /*used in the home component to display main video*/
import Booking from './Components/Booking';

library.add(faInstagram); /*add Instagram icon to website*/
library.add(faEnvelope); /*adds Envelope Icon to website*/
library.add(faTwitter); /*adds Twitter Icon to website*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showBooking: false };
  }

  toggleBooking = () => {
    const { showBooking } = this.state;

    showBooking
      ? this.setState({ showBooking: false })
      : this.setState({ showBooking: true });
  };

  render() {
    const { showBooking } = this.state;

    return (
      <div className="App">
        {showBooking && <Booking toggleBooking={this.toggleBooking} />}
        {/*calls Home component with scrollable anchor*/}
        <ScrollableAnchor id="Home">
          <div>
            <Route exact path="/" component={Home} />
          </div>
        </ScrollableAnchor>

        {/*calls Home_Videos component*/}
        <Home_Videos />

        {/*calls About component with scrollable anchor*/}
        <ScrollableAnchor id="About">
          <div>
            <Route exact path="/" component={About} />
          </div>
        </ScrollableAnchor>

        {/*calls Blog component with scrollable anchor*/}
        <ScrollableAnchor id="Blog">
          <div>
            <Route exact path="/" component={Blog} />
          </div>
        </ScrollableAnchor>

        {/*calls Home component with scrollable anchor with headroom to hide navbar till its needed*/}
        <Headroom
          style={{
            transition: 'all .5s ease-in-out',
          }}
        >
          <div>
            <Route
              exact
              path="/"
              render={props => (
                <Navbar {...props} toggleBooking={this.toggleBooking} />
              )}
            />
          </div>
        </Headroom>

        {/*calls Training component with scrollable anchor*/}
        <ScrollableAnchor id="Training">
          <div>
            <Route
              exact
              path="/"
              render={props => (
                <Training {...props} toggleBooking={this.toggleBooking} />
              )}
            />
          </div>
        </ScrollableAnchor>

        <ScrollableAnchor id="Testimonials">
          <div>
            <Route exact path="/" component={Testimonials} />
          </div>
        </ScrollableAnchor>

        {/*calls Merchandise component with scrollable anchor*/}
        <ScrollableAnchor id="Merchandise">
          <div>
            <Route exact path="/" component={Merchandise} />
          </div>
        </ScrollableAnchor>

        {/*calls videos component with scrollable anchor*/}
        <ScrollableAnchor id="Videos">
          <div>
            <Route exact path="/" component={Videos} />
          </div>
        </ScrollableAnchor>

        {/*calls Subscribe component with scrollable anchor*/}
        <ScrollableAnchor id="Subscribe">
          <div>
            <Route exact path="/" component={Subscribe} />
          </div>
        </ScrollableAnchor>

        {/*calls Footer component with scrollable anchor*/}
        <ScrollableAnchor id="Footer">
          <div>
            <Route exact path="/" component={Footer} />
          </div>
        </ScrollableAnchor>

        {/*calls Foot component with scrollable anchor*/}
        <ScrollableAnchor id="Foot">
          <div>
            <Route exact path="/" component={Foot} />
          </div>
        </ScrollableAnchor>

        {/*calls Main component */}
        <Main />
        {/* <Booking /> */}
      </div>
    );
  }
}

export default App;
