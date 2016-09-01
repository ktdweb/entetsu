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
                src="/imgs/logo.png"
                width="170"
                height="40"
                alt="logo"
                />
            </a>
          </div>

          <div>
            <img
              src="/imgs/tel.png"
              width="380"
              height="40"
              alt="tel"
              />
          </div>
        </div>
        
        <nav>
          <ul>
            <li>
              <a href="/">
                HOME
              </a>
            </li>
            <li>
              <a href="/works">
                仕事を探す
              </a>
            </li>
            <li>
              <a href="/cleaning">
                清掃でお困りの方
              </a>
            </li>
            <li>
              <a href="/building">
                ビル管理でお困りの方
              </a>
            </li>
            <li>
              <a href="/mansion">
                マンション管理でお困りの方
              </a>
            </li>
            <li>
              <a href="/driving">
                運転・送迎でお困りの方
              </a>
            </li>
            <li>
              <a href="/company/strategy">
                戦略事業
              </a>
            </li>
            <li>
              <a href="/company">
                会社案内
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
