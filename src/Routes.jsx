import React from 'react'
import { browserHistory } from 'react-router'
import { Router, Route } from 'react-router'

const root = {
  documentRoot: '',
  login: {
    status: false,
    name: ''
  }
};

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
import FrontFooter  from './layouts/front/Footer'
import Cover        from './layouts/front/Cover'
import Top          from './layouts/front/Top'

// pages/admin
import AdminHome    from './pages/admin/Home'

// pages/front
import FrontHome      from './pages/front/Home'
import FrontWorks     from './pages/front/Works'
import FrontWorksDetail from './pages/front/WorksDetail'
import FrontMemberSet from './pages/front/MemberSet'
import FrontTokenReset from './pages/front/TokenReset'
import FrontTokenTimeout from './pages/front/TokenTimeout'
import FrontCompany   from './pages/front/Company'

import FrontCleaning  from './pages/front/Cleaning'
import FrontBuilding  from './pages/front/Building'
import FrontMansion   from './pages/front/Mansion'
import FrontDriving   from './pages/front/Driving'

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
          main: FrontHome,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/works/:section'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontWorks,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/works'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontWorks,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/works_detail'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontWorksDetail,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/works_detail/:id'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontWorksDetail,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/cleaning'}
        global={root}
        page={'cleaning'}
        components={{
          header: FrontHeader,
          main: Cover,
          top: Top,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/building'}
        global={root}
        page={'building'}
        components={{
          header: FrontHeader,
          main: Cover,
          top: Top,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/mansion'}
        global={root}
        page={'mansion'}
        components={{
          header: FrontHeader,
          main: Cover,
          top: Top,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/driving'}
        global={root}
        page={'driving'}
        components={{
          header: FrontHeader,
          main: Cover,
          top: Top,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/company/:page'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontCompany,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/company'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontCompany,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/cleaning_detail'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontCleaning,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/building_detail'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontBuilding,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/mansion_detail'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontMansion,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/driving_detail'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontDriving,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/members/set/:token'}
        global={root}
        components={{
          main: FrontMemberSet,
        }} />

      <Route path={root.documentRoot + '/tokens/reset'}
        global={root}
        components={{
          main: FrontTokenReset,
        }} />

      <Route path={root.documentRoot + '/tokens/timeout'}
        global={root}
        components={{
          main: FrontTokenTimeout,
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
