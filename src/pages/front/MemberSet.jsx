import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import MemberStore from '../../stores/MemberStore'
import MemberActions from '../../actions/MemberActions'

import TokenStore from '../../stores/TokenStore'
import TokenActions from '../../actions/TokenActions'

import YubinBango from '../../components/YubinBango'


export default class MemberSet extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      status: false,
      form: {
        pw: { val:'12345678', flag: true },
        repw: { val:'12345678', flag: true },
        zip: { val:'半角で入力', flag: true },
        pref: { val:'日本語で入力', flag: true },
        city: { val:'日本語で入力', flag: true },
        addr: { val:'日本語で入力', flag: true },
        age: { val:'半角で入力', flag: true },
        gender: { val: '男性', flag: true },
        birthday: { val:'1970/12/12', flag: true }
      }
    }
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  componentDidMount() {
    let obj = { token: this.props.params.token };
    let _this = this;
    TokenActions.check(obj, (function(res) {
      if (res.length == 0) {
        location.href = '/tokens/timeout';
      } else {
        _this.updateStatus();
      }
    }));
  }

  render() {
    if (!this.state.status) return false;

    let IMG = '/imgs/pages/works/';

    return (
      <article id="MemberSet">
        <DocumentTitle title="仕事を探す | 遠鉄アシスト" />
        <div>
          <h1>パスワード設定</h1>

          <p>
            アクセスありがとうございます。
            パスワードを設定して頂くと会員登録が完了となります。
          </p>

          <form>
            <dl>
              <dt>パスワード</dt>
              <dd>
                <input
                  type="password"
                  id="formPw"
                  name="pw"
                  value={this.state.form.pw.val}
                  onFocus={this.formUpdate.bind(this)}
                  onBlur={this.validatePw.bind(this)}
                  onChange={this.formUpdate.bind(this)}
                  />
              </dd>
            </dl>

            <dl>
              <dt>パスワード再入力</dt>
              <dd>
                <input
                  type="password"
                  id="formRepw"
                  name="repw"
                  value={this.state.form.repw.val}
                  onFocus={this.formUpdate.bind(this)}
                  onBlur={this.validateRepw.bind(this)}
                  onChange={this.formUpdate.bind(this)}
                  />
              </dd>
            </dl>

            <hr />

            <p>
              以下の情報もご入力ください。
            </p>

            <dl>
              <dt>郵便番号</dt>
              <dd>
                <button
                  onClick={this.onZip.bind(this)}
                  >自動入力</button>
                <input
                  type="text"
                  className="width-s"
                  id="formZip"
                  name="zip"
                  value={this.state.form.zip.val}
                  onFocus={this.formUpdate.bind(this)}
                  onBlur={this.validateZip.bind(this)}
                  onChange={this.formUpdate.bind(this)}
                  />
              </dd>
            </dl>

            <dl>
              <dt>都道府県</dt>
              <dd>
                <input
                  type="text"
                  className="width-xs"
                  id="formPref"
                  name="pref"
                  value={this.state.form.pref.val}
                  onFocus={this.formUpdate.bind(this)}
                  onBlur={this.validatePref.bind(this)}
                  onChange={this.formUpdate.bind(this)}
                  />
              </dd>
            </dl>

            <dl>
              <dt>市区町村</dt>
              <dd>
                <input
                  type="text"
                  className="width-s"
                  id="formCity"
                  name="city"
                  value={this.state.form.city.val}
                  onFocus={this.formUpdate.bind(this)}
                  onBlur={this.validateCity.bind(this)}
                  onChange={this.formUpdate.bind(this)}
                  />
              </dd>
            </dl>

            <dl>
              <dt>住所</dt>
              <dd>
                <input
                  type="text"
                  id="formAddr"
                  name="addr"
                  value={this.state.form.addr.val}
                  onFocus={this.formUpdate.bind(this)}
                  onBlur={this.validateAddr.bind(this)}
                  onChange={this.formUpdate.bind(this)}
                  />
              </dd>
            </dl>

            <dl>
              <dt>年齢</dt>
              <dd>
                <input
                  type="text"
                  className="width-xs"
                  id="formAge"
                  name="age"
                  value={this.state.form.age.val}
                  onFocus={this.formUpdate.bind(this)}
                  onBlur={this.validateAge.bind(this)}
                  onChange={this.formUpdate.bind(this)}
                  /> &nbsp;歳
              </dd>
            </dl>

            <dl>
              <dt>性別</dt>
              <dd>
                男性
                <input
                  name="gender1"
                  id="formGender1"
                  type="radio"
                  value={this.state.form.gender.val}
                  onClick={this.formRadioUpdate.bind(this)}
                  />

                女性
                <input
                  name="gender2"
                  id="formGender2"
                  type="radio"
                  value={this.state.form.gender.val}
                  onClick={this.formRadioUpdate.bind(this)}
                  />
              </dd>
            </dl>

            <dl>
              <dt>生年月日</dt>
              <dd>
                <input
                  type="text"
                  className="width-s"
                  id="formBirthday"
                  name="birthday"
                  value={this.state.form.birthday.val}
                  onFocus={this.formUpdate.bind(this)}
                  onBlur={this.validateBirthday.bind(this)}
                  onChange={this.formUpdate.bind(this)}
                  />
              </dd>
            </dl>
          </form>

          <p id="error" className="error"></p>

          <p>
            以上の内容で問題なければ、「設定する」を
            クリックしてください。
          </p>

          <button
            onClick={this.onSubmit.bind(this)}
            >設定する</button>
        </div>
      </article>
    );

    this.bgFull();
    let gender1 = document.getElementById('formGender1');
    gender1.checked = true;
  }

  onSubmit(e) {
    let obj = {
      token: this.props.params.token,
      pw: this.state.form.pw.val,
      zip: this.state.form.zip.val,
      pref: this.state.form.pref.val,
      city: this.state.form.city.val,
      addr: this.state.form.addr.val,
      age: this.state.form.age.val,
      gender: this.state.form.gender.val,
      birthday: this.state.form.birthday.val
    };

    let f1 = this.validatePw();
    let f2 = this.validateRepw();
    let f3 = this.validateZip();
    let f4 = this.validatePref();
    let f5 = this.validateCity();
    let f6 = this.validateAddr();
    let f7 = this.validateAge();
    let f8 = this.validateBirthday();

    let el = document.getElementById('error');
    let txt;

    if (f1 && f2 && f3 && f4 && f5 && f6 && f7 && f8) {;
      MemberActions.set(obj);

      txt = '設定完了です。ありがとうございました。';
      txt += '<br /><a href="/">トップページへ</a>';
    } else {
      txt = '赤枠の内容をご確認ください';
    }

    el.innerHTML = txt;
    el.classList.add('active');
  }

  txtCount(field, val) {
    let cnt;

    switch(field) {
      case 'pw': cnt = 24; break;
      case 'repw': cnt = 24; break;
      case 'zip':  cnt = 8; break;
      case 'pref': cnt = 8; break;
      case 'city': cnt = 16; break;
      case 'addr': cnt = 45; break;
      case 'age': cnt = 2; break;
      case 'birthday': cnt = 10; break;
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

  formRadioUpdate(e) {
    let val = e.target.name;

    let gender1 = document.getElementById('formGender1');
    let gender2 = document.getElementById('formGender2');

    if (val == 'gender1') {
      gender1.checked = true;
      gender2.checked = false;
      this.state.form.gender.val = '男性';
    } else {
      gender1.checked = false;
      gender2.checked = true;
      this.state.form.gender.val = '女性';
    }
  }

  /*
   * バリデート
   */
  validatePw() {
    let vals = this.state.form;
    let el = document.getElementById('formPw');

    if (
      vals.pw.val == '' ||
      vals.pw.val == '12345678' ||
      vals.pw.val.match(/[^A-Za-z0-9]+/)
    ) {
      return this.turnRed(el);
    } else {
      return this.turnGreen(el);
    }
  }

  validateRepw() {
    let vals = this.state.form;
    let el = document.getElementById('formRepw');
    if (
      vals.repw.val == '' ||
      vals.repw.val == '12345678' ||
      vals.repw.val != vals.pw.val
    ) {
      return this.turnRed(el);
    } else {
      return this.turnGreen(el);
    }
  }

  validateZip() {
    let vals = this.state.form;
    let el = document.getElementById('formZip');

    if (
      vals.zip.val == '' ||
      vals.zip.val == '半角で入力' ||
      vals.zip.val.match(/[^A-Za-z0-9-]+/)
    ) {
      return this.turnRed(el);
    } else {
      return this.turnGreen(el);
    }
  }

  validatePref() {
    let vals = this.state.form;
    let el = document.getElementById('formPref');

    if (
      vals.pref.val == '' ||
      vals.pref.val == '日本語で入力' ||
      vals.pref.val.match(/[A-Za-z0-9]+/)
    ) {
      return this.turnRed(el);
    } else {
      return this.turnGreen(el);
    }
  }

  validateCity() {
    let vals = this.state.form;
    let el = document.getElementById('formCity');

    if (
      vals.city.val == '' ||
      vals.city.val == '日本語で入力' ||
      vals.city.val.match(/[A-Za-z0-9]+/)
    ) {
      return this.turnRed(el);
    } else {
      return this.turnGreen(el);
    }
  }

  validateAddr() {
    let vals = this.state.form;
    let el = document.getElementById('formAddr');

    if (
      vals.addr.val == '' ||
      vals.addr.val == '日本語で入力' ||
      vals.addr.val.match(/[A-Za-z0-9]+/)
    ) {
      return this.turnRed(el);
    } else {
      return this.turnGreen(el);
    }
  }

  validateAddr() {
    let vals = this.state.form;
    let el = document.getElementById('formAddr');

    if (
      vals.addr.val == '' ||
      vals.addr.val == '日本語で入力'
    ) {
      return this.turnRed(el);
    } else {
      return this.turnGreen(el);
    }
  }

  validateAge() {
    let vals = this.state.form;
    let el = document.getElementById('formAge');

    if (
      vals.age.val == '' ||
      vals.age.val == '半角で入力' ||
      vals.age.val.match(/[^A-Za-z0-9]+/)
    ) {
      return this.turnRed(el);
    } else {
      return this.turnGreen(el);
    }
  }

  validateBirthday() {
    let vals = this.state.form;
    let el = document.getElementById('formBirthday');

    if (
      vals.birthday.val == '' ||
      vals.birthday.val == '半角で入力' ||
      vals.birthday.val.match(/[^A-Za-z0-9\/]+/)
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

  onZip(e) {
    e.preventDefault();
    let _this = this;

    new YubinBango(
      document.getElementById('formZip').value,
      function(addr) {
        let obj = _this.state.form;
        obj.pref.val = addr.region;
        obj.city.val = addr.locality;
        obj.addr.val = addr.street;
        obj.pref.flag = false;
        obj.city.flag = false;
        obj.addr.flag = false;
        let pref = document.getElementById('formPref');
        let city = document.getElementById('formCity');
        let adds = document.getElementById('formAddr');
        pref.style.color = 'black';
        city.style.color = 'black';
        adds.style.color = 'black';
        _this.setState({ form: obj });
    });
  }

  updateStatus() {
    this.setState({ status: true });
  }
}
