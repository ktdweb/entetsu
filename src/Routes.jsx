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
import FrontFooter  from './layouts/front/Footer'

// pages/admin
import AdminHome    from './pages/admin/Home'

// pages/front
import FrontHome      from './pages/front/Home'
import FrontWorks     from './pages/front/Works'
import FrontCleaning  from './pages/front/Cleaning'
import FrontBuilding  from './pages/front/Building'
import FrontMansion   from './pages/front/Mansion'
import FrontDriving   from './pages/front/Driving'
import FrontCompany   from './pages/front/Company'

import FrontBuildingDetail  from './pages/front/BuildingDetail'
import FrontSeisouDetail  from './pages/front/SeisouDetail'
import FrontMansionDetail  from './pages/front/MansionDetail'
import FrontUnkouDetail  from './pages/front/UnkouDetail'

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

      <Route path={root.documentRoot + '/works'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontWorks,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/cleaning'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontCleaning,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/building'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontBuilding,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/mansion'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontMansion,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/driving'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontDriving,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/company'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontCompany,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/building_detail'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontBuildingDetail,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/seisou_detail'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontSeisouDetail,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/building_detail'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontBuildingDetail,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/mansion_detail'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontMansionDetail,
          footer: FrontFooter
        }} />

      <Route path={root.documentRoot + '/unkou_detail'}
        global={root}
        components={{
          header: FrontHeader,
          main: FrontUnkouDetail,
          footer: FrontFooter
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
