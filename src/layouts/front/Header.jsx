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
        <div>
          <a href="/">
            <img
              src="imgs/logo.png"
              width="170"
              height="40"
              alt="logo"
              />
          </a>

          <div>
            <input
              type="text"
              placeholder="サイト内検索"
              />
            <i className="fa fa-search" />
          </div>

          <img
            src="imgs/tel.png"
            width="380"
            height="40"
            alt="tel"
            />
        </div>
        
        <nav>
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-home" />
                &nbsp;HOME
              </a>
            </li>
            <li>
              <a href="#">
                仕事を探す
              </a>
            </li>
            <li>
              <a href="#">
                ビル管理でお困りの方
              </a>
            </li>
            <li>
              <a href="#">
                マンション管理でお困りの方
              </a>
            </li>
            <li>
              <a href="#">
                運転・送迎でお困りの方
              </a>
            </li>
            <li>
              <a href="#">
                戦略事業
              </a>
            </li>
            <li>
              <a href="#">
                会社案内
              </a>
            </li>
            <li>
              <a href="#">
                遠鉄アシストの魅力
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
