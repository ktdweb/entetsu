import React from 'react'
import { browserHistory } from 'react-router'
import { Router, Route } from 'react-router'

// layouts
import NoMatch      from './pages/NoMatch'
import Admin        from './layouts/Admin'
import AdminHeader  from './layouts/Header'

// pages
import AdminHome    from './pages/Home'

const routes = (
  <Router history={browserHistory}>
      <Route path={root.documentRoot + '/admin/'}
        components={{
          header: AdminHeader,
          main: AdminHome
        }} />

    <Route path="*" components={NoMatch} />
  </Router>
);

module.exports = routes;
