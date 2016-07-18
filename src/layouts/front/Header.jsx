import React from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component {

  constructor(props) {
    super(props);

    /*
    <div>
      <input
        type="text"
        placeholder="サイト内検索"
        />
      <i className="fa fa-search" />
    </div>
    */
  }

  render() {
    let root = this.props.route.global.documentRoot;

    return (
      <header id="Header">
        <div>
          <div>
            <a href="/">
              <img
                src="imgs/logo.png"
                width="170"
                height="40"
                alt="logo"
                />
            </a>
          </div>

          <div>
            <img
              src="imgs/tel.png"
              width="380"
              height="40"
              alt="tel"
              />
          </div>
        </div>
        
        <nav>
          <ul>
            <li>
              <Link to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/works">
                仕事を探す
              </Link>
            </li>
            <li>
              <Link to="/cleaning">
                清掃でお困りの方
              </Link>
            </li>
            <li>
              <Link to="/building">
                ビル管理でお困りの方
              </Link>
            </li>
            <li>
              <Link to="/mansion">
                マンション管理でお困りの方
              </Link>
            </li>
            <li>
              <Link to="/driving">
                運転・送迎でお困りの方
              </Link>
            </li>
            <li>
              <Link to="/company#company05">
                戦略事業
              </Link>
            </li>
            <li>
              <Link to="/company">
                会社案内
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
