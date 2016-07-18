import React from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let root = this.props.route.global.documentRoot;
    console.log(root);

    return (
      <header id="Header">
        <p>Header</p>

        <ul>
          <li><Link to={root + '/'}
            >front home</Link></li>
          <li><Link to={root + '/sample'}
            >front sample</Link></li>
          <li><Link to={root + '/admin/'}
            >admin home</Link></li>
          <li><Link to={root + '/admin/count'}
            >admin count</Link></li>
        </ul>
      </header>
    );
  }
}
