import React from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener(
      'resize',
      this.handleChange(),
      false
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      'resize',
      this.handleChange(),
      false
    );
  }

  handleChange() {
    let el = document.getElementById('Nav');
    let header = document.getElementById('Header');
    let cli = document.documentElement.clientHeight;

    el.style.height = cli - header.offsetHeight + 'px';
  }


  render() {
    let root = this.props.route.global.documentRoot;

    return (
      <aside id="Nav">
        <nav>
          <ul>
            <li>
              <i className="fa fa-check-square-o" />
              <Link to={root + '/topics'}>
                新着情報
              </Link>
            </li>

            <li>
              <i className="fa fa-paperclip" />
              <Link to={root + '/works/0'}>
                求人情報
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}
