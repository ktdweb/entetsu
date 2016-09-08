import React from 'react'
import { Link } from 'react-router'

export default class WorksLogin extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div id={this.props.id} className="modal">
          <div>
            <a
              href="#"
              onClick={this.disableModal.bind(this)}
              >
              <img
                className="modalClose"
                src="/imgs/close.png"
                width="50"
                height="50"
                alt="close"
                />
            </a>

            <h1>ログイン</h1>
            <div className="login">
              <label>メールアドレス</label>
              <input
                type="text"
                id="formName"
                name="name"
                /><br />

              <label>パスワード</label>
              <input
                type="text"
                id="formName"
                name="name"
                />

                <p>
                  メールアドレスとパスワードを入力し、<br />
                  「ログインする」をクリックしてください。
                </p>
            </div>

            <button>ログインする</button>
          </div>
        </div>
    );
  }

  disableModal(e) {
    e.preventDefault();
    let el = document.getElementById(this.props.id);
    el.classList.toggle('enable');
  }
}
