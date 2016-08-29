import React from 'react'
import { Link } from 'react-router'

import Cover from './Cover'

export default class Front extends React.Component {

  constructor(props) {
    super(props);

    document.body.setAttribute('id', 'ready-Front');
  }

  componentWillMount() {}

  componentDidMount() {
    /* ページ読込時にページの先頭へ移動 */
    window.scrollTo(0,0);

    /* フッタの「困ったをありがとう」を表示 */
    let badge = document.getElementById('badge');
    window.addEventListener(
      'scroll',
      this.showBadge.bind(this, badge)
    );
  }

  componentWillUnmount() {
    let badge = document.getElementById('badge');
    window.removeEventListener(
      'scroll',
      this.showBadge.bind(this, badge)
    );
  }

  render() {
    return (
      <div id="Front">
        {this.props.header}
        {this.props.main}
        {this.props.top}
        {this.props.footer}
      </div>
    );
  }

  showBadge(badge) {
    let body = window.document.body;
    let html = window.document.documentElement;
    let scrollTop = body.scrollTop || html.scrollTop;
    let res = html.scrollHeight - html.clientHeight - scrollTop;

    if (260 > res) {
      badge.classList.add('posi');
    } else {
      badge.classList.remove('posi');
    }
  }
}
