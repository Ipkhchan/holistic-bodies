import React from 'react'
import { Route } from 'react-router-dom' /*used to create a sub url for the terms page, check documentation link in App.jsx*/
import { BrowserRouter as Router } from 'react-router-dom' /*used to make react a multi page website, check documentation link in App.jsx*/
import Terms from './Terms'

const Main = () => (
    <main>
        <Router>
            <Route path='/Terms' component={Terms}/>
        </Router>
    </main>
);

export default Main;