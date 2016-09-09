import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

export default class TokenTimeout extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  componentDidMount() {
    this.bgFull();
  }

  render() {
    return (
      <article id="MemberSet">
        <DocumentTitle title="仕事を探す | 遠鉄アシスト" />
        <div>
          <h1>パスワード設定ページ有効期限切れ</h1>

          <p>
            このページは有効期限が切れているため、削除されました。
            <br />
            パスワードの再発行の手続きが可能です。<br />
            「パスワード設定ページ再発行へ」をクリックして下さい。
          </p>


          <p>
            <a href="/tokens/reset">
              <button>
                パスワード設定ページ再発行へ
              </button>
            </a>
          </p>
        </div>
      </article>
    );
  }

  bgFull() {
    let el = document.getElementById('MemberSet');

    let height = document.documentElement.scrollHeight || document.body.scrollHeight;
    el.style.height = height + 'px'; 
  }
}
