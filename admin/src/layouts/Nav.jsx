import React from 'react'
import { Link } from 'react-router'

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let root = '/admin';

    return (
      <aside id="Nav">
        <p>Nav</p>

        <nav>
          <ul>
            <li><Link to={root + '/'}
              >home</Link></li>
            <li><a href={root + '/sass/sample/index.html'}
              >sample</a></li>
          </ul>
        </nav>
      </aside>
    );
  }
}
