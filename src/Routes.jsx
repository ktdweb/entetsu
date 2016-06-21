import React from 'react'
import { browserHistory } from 'react-router'
import { Router, Route } from 'react-router'

const root = { documentRoot: '' };

// components
import Count        from './components/Count'

// layouts
import NoMatch      from './layouts/NoMatch'

// layouts/admin
import Admin        from './layouts/admin/Admin'
import AdminHeader  from './layouts/admin/Header'

// layouts/front
import Front        from './layouts/front/Front'
import FrontHeader  from './layouts/front/Header'

// pages/admin
import AdminHome    from './pages/admin/Home'

// pages/front
import FrontHome    from './pages/front/Home'
import FrontSample  from './pages/front/Sample'

const routes = (
  <Router history={browserHistory}>
    <Route
      global={root}
      component={Front}
      >
      <Route path={root.documentRoot + '/'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontHome
        }} />

      <Route path={root.documentRoot + '/sample'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontSample
        }} />
    </Route>

    <Route
      global={root}
      component={Admin}
      >
      <Route path={root.documentRoot + '/admin/'}
        global={root}
        components={{
          header: AdminHeader,
          main: AdminHome
        }} />

      <Route path={root.documentRoot + '/admin/count'}
        global={root}
        components={{
          header: AdminHeader,
          main: Count
        }} />
    </Route>

    <Route path="*" components={NoMatch} global={root} />
  </Router>
);

module.exports = routes;
