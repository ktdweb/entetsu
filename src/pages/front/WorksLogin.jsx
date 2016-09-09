import React from 'react'
import { Link } from 'react-router'

import MemberStore from '../../stores/MemberStore'
import MemberActions from '../../actions/MemberActions'

export default class WorksLogin extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      login: {
        id: { val: 'メールアドレスを入力', flag: true },
        pw: { val: 'パスワードを入力', flag: true }
      }
    }
  }

  componentWillMount() {
  }

  componentWillUnmount() {
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
                id="loginId"
                name="id"
                value={this.state.login.id.val}
                onFocus={this.formUpdate.bind(this)}
                onBlur={this.validateId.bind(this)}
                onChange={this.formUpdate.bind(this)}
                /><br />

              <label>パスワード</label>
              <input
                type="password"
                id="loginPassword"
                name="pw"
                value={this.state.login.pw.val}
                onFocus={this.formUpdate.bind(this)}
                onBlur={this.validatePw.bind(this)}
                onChange={this.formUpdate.bind(this)}
                />

              <p>
                メールアドレスとパスワードを入力し、<br />
                「ログインする」をクリックしてください。
              </p>

              <p id="loginError" className="loginError">
                message
              </p>
            </div>

            <button
              onClick={this.login.bind(this)}
              >ログインする</button>
          </div>
        </div>
    );
  }


  /*
   * submit
   */
  login(e) {
    e.preventDefault();

    let id = document.getElementById('loginId').value;
    let pw = document.getElementById('loginPassword').value;

    let obj = { id: id, password: pw };

    MemberActions.login(
      obj,
      this.loginCallBack.bind(this)
    );
  }

  loginCallBack(res) {
    let el = document.getElementById('loginError');

    if (res === undefined) {
      el.innerHTML = 'メールアドレス、パスワードをご確認ください';
      el.classList.add('active');
    } else {
      el.innerHTML = 'ログインに成功しました';
      el.classList.add('active');
      this.props.changeLoginStatus(res);
    }
  }

  /*
   * フォーム関連
   */
  txtCount(field, val) {
    let cnt;

    switch(field) {
      case 'id': cnt = 110; break;
      case 'pw': cnt = 16; break;
      default: break;
    }

    return (val.length <= cnt) ? true : false ;
  }

  formUpdate(e) {
    let field = e.target.name;
    let val = e.target.value;

    let login = this.state.login;

    if (login[field].flag) {
      val = '';
      e.target.style.color = 'black';
    }

    login[field] = {
      val: val,
      flag: false
    }

    if (this.txtCount(field, val)) {
      this.setState({
        login: login 
      });
    }
  }

  validateId() {
    let vals = this.state.login;
    let el = document.getElementById('loginId');

    if (
      vals.id.val == '' ||
      vals.id.val == 'メールアドレスを入力' ||
      !vals.id.val.match(/^[A-Za-z0-9-_\.]+[\w-]+@[\w\.-]+\.\w{2,}$/)
    ) {
      return this.turnRed(el);
    } else {
      return this.turnGreen(el);
    }
  }

  validatePw() {
    let vals = this.state.login;
    let el = document.getElementById('loginPassword');

    if (
      vals.pw.val == '' ||
      vals.pw.val == 'パスワードを入力' ||
      vals.pw.val.match(/[^A-Za-z0-9]+/)
    ) {
      return this.turnRed(el);
    } else {
      return this.turnGreen(el);
    }
  }


  /*
   * エラー時表示処理
   */
  turnRed(el) {
    el.classList.add('active');;
    return false;
  }; 

  turnGreen(el) {
    el.classList.remove('active');;
    return true;
  };

  disableModal(e = undefined) {
    e.preventDefault();

    let el = document.getElementById(this.props.id);
    el.classList.remove('enable');

    let er = document.getElementById('loginError');
    er.innerHTML = '';
    er.classList.remove('active');
  }
}
