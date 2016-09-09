import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import TokenStore from '../../stores/TokenStore'
import TokenActions from '../../actions/TokenActions'

export default class TokenReset extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {
        mail: { val: '半角で入力', flag: true },
        confirm: { val: 'もう一度入力', flag: true }
      }
    }
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
          <h1>パスワード設定ページ再発行</h1>

          <p>
            パスワード設定ページを再発行します。<br />
            メールアドレスを入力し、「再発行する」をクリックしてください。
          </p>

          <dl>
            <dt>メールアドレス</dt>
            <dd>
              <input
                  type="text"
                  id="formMail"
                  name="mail"
                  value={this.state.form.mail.val}
                  onFocus={this.formUpdate.bind(this)}
                  onBlur={this.validateMail.bind(this)}
                  onChange={this.formUpdate.bind(this)}
                />
            </dd>
          </dl>

          <dl>
            <dt>メールアドレス再入力</dt>
            <dd>
              <input
                  type="text"
                  id="formConfirm"
                  name="confirm"
                  value={this.state.form.confirm.val}
                  onFocus={this.formUpdate.bind(this)}
                  onBlur={this.validateConfirm.bind(this)}
                  onChange={this.formUpdate.bind(this)}
                />
            </dd>
          </dl>

          <p id="error" className="error"></p>

          <button
            onClick={this.onSubmit.bind(this)}
            >再発行する
          </button>
        </div>
      </article>
    );
  }

  onSubmit(e) {
    let obj = {
      mail: this.state.form.mail.val
    };

    let f1 = this.validateMail();
    let f2 = this.validateConfirm();

    let el = document.getElementById('error');
    let txt;

    if (f1 && f2) {;
      TokenActions.reset(obj);
      txt = 'パスワード設定ページを再発行しました。メールをご確認ください。';

      el.innerHTML = txt;
      el.classList.add('active');

    } else {
      txt = '赤枠の内容をご確認ください';
      el.innerHTML = txt;
      el.classList.add('active');
    }
  }

  txtCount(field, val) {
    let cnt;

    switch(field) {
      case 'mail': cnt = 24; break;
      case 'confirm': cnt = 24; break;
      default: break;
    }

    return (val.length <= cnt) ? true : false ;
  }

  formUpdate(e) {
    let field = e.target.name;
    let val = e.target.value;

    let form = this.state.form;

    if (form[field].flag) {
      val = '';
      e.target.style.color = 'black';
    }

    form[field] = {
      val: val,
      flag: false
    }

    if (this.txtCount(field, val)) {
      this.setState({
        form: form
      });
    }
  }

  validateMail() {
    let vals = this.state.form;
    let el = document.getElementById('formMail');
    if (
      vals.mail.val == '' ||
      vals.mail.val == '半角で入力' ||
      !vals.mail.val.match(/^[A-Za-z0-9-_\.]+[\w-]+@[\w\.-]+\.\w{2,}$/)
    ) {
      return this.turnRed(el);
    } else {
      return this.turnGreen(el);
    }
  }

  validateConfirm() {
    let vals = this.state.form;
    let el = document.getElementById('formConfirm');
    if (
      vals.confirm.val == '' ||
      vals.confirm.val == '半角で入力' ||
      vals.confirm.val != vals.mail.val
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

  bgFull() {
    let el = document.getElementById('MemberSet');

    let height = document.documentElement.scrollHeight || document.body.scrollHeight;
    el.style.height = height + 'px'; 
  }
}
