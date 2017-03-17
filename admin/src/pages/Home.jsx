import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import MemberStore from '../../../js/stores/MemberStore'
import MemberActions from '../../../js/actions/MemberActions'

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      login: {
        id: {
          val: ''
        },
        pw: {
          val: ''
        }
      }
    }
  }

  componentWillMount() {
    console.log(this.props);
  }

  componentWillUnmount() {
  }

  render() {
    return(
      <article id="Home">
        <DocumentTitle title="Login" />
        
        <h1>ログイン</h1>
        <div className="login">
          <label>ID</label>
          <input
            type="text"
            id="loginId"
            name="id"
            value={this.state.login.id.val}
            onChange={this.formUpdate.bind(this)}
            /><br />

          <label>PW</label>
          <input
            type="password"
            id="loginPassword"
            name="pw"
            value={this.state.login.pw.val}
            onChange={this.formUpdate.bind(this)}
            />

          <p id="loginError" className="loginError"></p>
        </div>

        <button
          onClick={this.login.bind(this)}
          >ログインする</button>
      </article>
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
      el.innerHTML = 'ID、パスワードをご確認ください';
      el.classList.add('active');
      window.login = false;
    } else {
      el.innerHTML = 'ログインに成功しました';
      el.classList.add('active');
      // this.props.changeLoginStatus(res);
      window.login = true;
    }
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
      vals.id.val == 'IDを入力' ||
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

  txtCount(field, val) {
    let cnt;

    switch(field) {
      case 'id': cnt = 110; break;
      case 'pw': cnt = 16; break;
      default: break;
    }

    return (val.length <= cnt) ? true : false ;
  }

}
