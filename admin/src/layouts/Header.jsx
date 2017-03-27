import React from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let root = this.props.route.global.documentRoot;

    return (
      <header id="Header">
        <div
          className="logout"
          >
            <a href="#"
              onClick={this.onClose.bind(this)}
              >ログアウト</a>
        </div>

        <p>
        <img
          src="/admin/imgs/logo.png"
          alt="entets-assist.co.jp"
          width="300" />
        </p>

      </header>
    );
  }

  onClose(e) {
    window.sessionStorage.clear();
    window.login = false;
    location.href = '/admin/';
  }
}
