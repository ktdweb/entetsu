import React from 'react'
import { browserHistory } from 'react-router'
import { Router, Route } from 'react-router'

// layouts
import Default      from './layouts/Default'
import Header       from './layouts/Header'
import Nav          from './layouts/Nav'

// pages
import Home         from './pages/Home'
import NoMatch      from './pages/NoMatch'

const routes = (
  <Router history={browserHistory}>
    <Route component={Default}>
      <Route path={'/admin/'}
        components={{
          header: Header,
          nav: Nav,
          main: Home
        }} />
    </Route>

    <Route path="*" components={NoMatch} />
  </Router>
);

module.exports = routes;
