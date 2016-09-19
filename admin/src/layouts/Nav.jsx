import React from 'react'
import { Link } from 'react-router'

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let root = this.props.route.global.documentRoot;

    return (
      <aside>
        <nav>
          <ul>
            <li>
              <i className="fa fa-check-square-o" />
              <Link to={root + '/'}>
                新着情報
              </Link>
            </li>

            <li>
              <i className="fa fa-paperclip" />
              <Link to={root + '/works'}>
                求人情報
              </Link>
            </li>

            <li>
              <i className="fa fa-bell-o" />
              <Link to={root + '/members'}>
                会員情報
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}
