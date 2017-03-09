import React from 'react'
import { browserHistory } from 'react-router'
import { Router, Route } from 'react-router'

const root = {
  documentRoot: '/admin',
  login: {
    status: false,
    name: ''
  }
};

// layouts
import Default      from './layouts/Default'
import Header       from './layouts/Header'
import Nav          from './layouts/Nav'

// pages
import Home         from './pages/Home'
import Topics       from './pages/Topics'
import TopicsDetail from './pages/TopicsDetail'
import Works        from './pages/Works'
import WorksDetail  from './pages/WorksDetail'
import Members      from './pages/Members'
import MembersDetail      from './pages/MembersDetail'
import NoMatch      from './pages/NoMatch'

const routes = (
  <Router history={browserHistory}>
    <Route
      global={root}
      component={Default}
      >

      <Route path={root.documentRoot + '/'}
        global={root}
        components={{
          header: Header,
          nav: Nav,
          main: Topics
        }} />

      <Route path={root.documentRoot + '/topics'}
        global={root}
        components={{
          header: Header,
          nav: Nav,
          main: Topics
        }} />

      <Route path={root.documentRoot + '/topics/detail/:id'}
        global={root}
        components={{
          header: Header,
          nav: Nav,
          main: TopicsDetail
        }} />

      <Route path={root.documentRoot + '/works/detail/add'}
        global={root}
        components={{
          header: Header,
          nav: Nav,
          main: WorksDetail
        }} />

      <Route path={root.documentRoot + '/works/detail/:id(/:cat)'}
        global={root}
        components={{
          header: Header,
          nav: Nav,
          main: WorksDetail
        }} />

      <Route path={root.documentRoot + '/works/:id(/:update)'}
        global={root}
        components={{
          header: Header,
          nav: Nav,
          main: Works
        }} />

      <Route path={root.documentRoot + '/members/detail/:id'}
        global={root}
        components={{
          header: Header,
          nav: Nav,
          main: MembersDetail
        }} />

      <Route path={root.documentRoot + '/members'}
        global={root}
        components={{
          header: Header,
          nav: Nav,
          main: Members
        }} />

    </Route>

    <Route path="*" components={NoMatch} global={root} />
  </Router>
);

module.exports = routes;
