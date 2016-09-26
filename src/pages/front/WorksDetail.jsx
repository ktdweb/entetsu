import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import WorkStore from '../../stores/WorkStore'
import WorkActions from '../../actions/WorkActions'

import MemberStore from '../../stores/MemberStore'
import MemberActions from '../../actions/MemberActions'

import EntryStore from '../../stores/EntryStore'
import EntryActions from '../../actions/EntryActions'

import WorksEntry from './WorksEntry' 
import WorksLogin from './WorksLogin' 
import WorksMerit from './WorksMerit' 

export default class WorksDetail extends React.Component {

  constructor(props) {
    super(props);

    let works = WorkStore.read();
    let members = MemberStore.read();

    this.state = {
      works: works,
      members: members,
      login: {
        id: '',
        name: '',
        status: false
      },
      form: {
        name: { val: '日本語で入力', flag: true },
        furi: { val: 'カタカナで入力', flag: true },
        tel: { val: '日中つながる電話番号', flag: true },
        mail: { val: '半角で入力', flag: true },
        confirm: { val: 'もう一度入力', flag: true }
      }
    }
  }

  componentWillMount() {
    WorkStore.subscribe(this.updateState.bind(this));
    WorkActions.create();
  }

  componentWillUnmount() {
    WorkStore.destroy(this.updateState.bind(this));
  }

  componentDidMount() { window.scrollTo(0, 0); }

  render() {
    let IMG = '/imgs/pages/works/';
    let data = this.state.works[0];

    for (let i = 0; i < this.state.works.length; i++) {
      if (this.state.works[i].id == this.props.params.id) {
        data = this.state.works[i];
      }
    }

    return (
      <article id="WorksDetail">
        <DocumentTitle title="仕事を探す | 遠鉄アシスト" />

        <div className="pf-Works-Detail">
          <div>
            <div className="pf-Works-Detail-tab">
              検索結果
            </div>

            <div className="pf-Works-Detail-login">
              <img
                src={'/imgs/works/' + data.img + 'l.jpg'}
                width="180"
                height="180"
                alt="img"
                />

              <button
                id="loginButton"
                name="modalLogin"
                onClick={this.enableLogin.bind(this)}
              >ログイン</button>

              <p id="loginMessage" className="pf-loginMessage"></p>
              <p id="loginStatus">もしくは…</p>

              <div>
                <dl>
                  <dt>名前</dt>
                  <dd>
                    <input
                      type="text"
                      id="formName"
                      name="name"
                      value={this.state.form.name.val}
                      onFocus={this.formUpdate.bind(this)}
                      onBlur={this.validateName.bind(this)}
                      onChange={this.formUpdate.bind(this)}
                      />
                  </dd>
                </dl>

                <dl>
                  <dt>フリガナ</dt>
                  <dd>
                    <input
                      type="text"
                      id="formFuri"
                      name="furi"
                      value={this.state.form.furi.val}
                      onFocus={this.formUpdate.bind(this)}
                      onBlur={this.validateFuri.bind(this)}
                      onChange={this.formUpdate.bind(this)}
                      />
                  </dd>
                </dl>

                <dl>
                  <dt>電話番号</dt>
                  <dd>
                    <input
                      type="text"
                      id="formTel"
                      name="tel"
                      value={this.state.form.tel.val}
                      onFocus={this.formUpdate.bind(this)}
                      onBlur={this.validateTel.bind(this)}
                      onChange={this.formUpdate.bind(this)}
                      />
                  </dd>
                </dl>

                <label>メールアドレス</label>
                <input
                    type="text"
                    id="formMail"
                    name="mail"
                    value={this.state.form.mail.val}
                    onFocus={this.formUpdate.bind(this)}
                    onBlur={this.validateMail.bind(this)}
                    onChange={this.formUpdate.bind(this)}
                  />

                <label>メールアドレス再入力</label>
                <input
                    type="text"
                    id="formConfirm"
                    name="confirm"
                    value={this.state.form.confirm.val}
                    onFocus={this.formUpdate.bind(this)}
                    onBlur={this.validateConfirm.bind(this)}
                    onChange={this.formUpdate.bind(this)}
                  />

                <p id="error" className="error">
                  赤枠の内容をご確認ください
                </p>

                <button
                  name="modalTel"
                  className="mgnBtm10"
                  onClick={this.enableModal.bind(this)}
                >{modal[0].button}</button>

                <button
                  name="modalMail"
                  className="mgnBtm10"
                  onClick={this.enableModal.bind(this)}
                >{modal[1].button}</button>

                <a
                  href="#"
                  name="modalMerit"
                  onClick={this.enableMerit.bind(this)}
                  >
                会員登録のメリットについて
                </a>
              </div>
            </div>

            <div className="pf-Works-Detail-column">
              <div className="pf-Works-Detail-column-head">
                <p>{data.title}</p>
              </div>

              <div className="pf-Works-Detail-column-section">
                <div>
                  <span>{data.unit_wage}: {data.abbr_wage}円</span>
                  <span>{data.abbr_time}</span>
                </div>

                <div>
                  <dl>
                    <dt>仕事の内容</dt>
                    <dd>{data.detail}</dd>
                  </dl>

                  <dl>
                    <dt>勤務地</dt>
                    <dd>{data.location}</dd>
                  </dl>

                  <dl>
                    <dt>時間</dt>
                    <dd>{data.time}</dd>
                  </dl>

                  <dl>
                    <dt>休憩時間</dt>
                    <dd>{data.break}</dd>
                  </dl>

                  <dl>
                    <dt>給与</dt>
                    <dd>{data.wage}</dd>
                  </dl>

                  <dl>
                    <dt>日数</dt>
                    <dd>{data.days}</dd>
                  </dl>

                  <dl>
                    <dt>休日</dt>
                    <dd>{data.holidays}</dd>
                  </dl>

                  <dl>
                    <dt>雇用形態</dt>
                    <dd>{data.type}</dd>
                  </dl>

                  <dl>
                    <dt>雇用期間</dt>
                    <dd>{data.term}</dd>
                  </dl>

                  <dl>
                    <dt>学歴</dt>
                    <dd>{data.career}</dd>
                  </dl>

                  <dl>
                    <dt>職場の雰囲気</dt>
                    <dd>{data.selling}</dd>
                  </dl>

                  <dl>
                    <dt>資格</dt>
                    <dd>{data.cert}</dd>
                  </dl>

                  <dl>
                    <dt>備考</dt>
                    <dd>{data.desc}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pf-Works-Detail-footer">
          {/*
          <a href="/works/cateogry/7">
            <button>似た仕事を検索</button>
          </a>
          */}
          <Link to="/works/result">
            <button>戻る</button>
          </Link>
        </div>

        <WorksEntry
          key="0"
          id="modalTel"
          body={modal[0].body}
          button={modal[0].button}
          title={modal[0].title}
          name={this.state.form.name.val}
          furi={this.state.form.furi.val}
          tel= {this.state.form.tel.val}
          mail={this.state.form.mail.val}
          workid={data.id}
          worktitle={data.title}
          worktime={data.abbr_time}
          />

        <WorksEntry
          key="1"
          id="modalMail"
          body={modal[1].body}
          button={modal[1].button}
          title={modal[1].title}
          name={this.state.form.name.val}
          furi={this.state.form.furi.val}
          tel= {this.state.form.tel.val}
          mail={this.state.form.mail.val}
          workid={data.id}
          worktitle={data.title}
          worktime={data.abbr_time}
          />

        <WorksLogin
          key="2"
          id="modalLogin"
          changeLoginStatus={this.changeLoginStatus.bind(this)}
          />

        <WorksMerit
          key="3"
          id="modalMerit"
          title={modal[2].title}
          />
      </article>
    );
  }

  /*
   * submit
   */
  onSubmit() {
    let f1 = this.validateName();
    let f2 = this.validateFuri();
    let f3 = this.validateTel();
    let f4 = this.validateMail();
    let f5 = this.validateConfirm();

    return (f1 && f2 && f3 && f4 && f5) ? true : false;
  }

  /*
   * ログインステータス変更  子componentに渡す
   */
  changeLoginStatus(data) {
    let el = document.getElementById('loginButton');
    el.classList.add('pf-loginDone');
    el.innerHTML = '応募する';

    let mes = document.getElementById('loginStatus');
    mes.innerHTML = 'ログイン済: ' + data.name + 'さん';

    let obj = {
      id: data.id,
      name: data.name,
      status: true
    };

    this.setState({ login: obj });
  }

  /*
   * フォーム関連
   */
  txtCount(field, val) {
    let cnt;

    switch(field) {
      case 'name': cnt = 12; break;
      case 'furi': cnt = 24; break;
      case 'tel':  cnt = 13; break;
      case 'mail': cnt = 110; break;
      case 'confirm': cnt = 110; break;
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


  /*
   * バリデート
   */
  validateName() {
    let vals = this.state.form;
    let el = document.getElementById('formName');

    if (
      vals.name.val == '' ||
      vals.name.val == '日本語で入力' ||
      vals.name.val.match(/[A-Za-z0-9]+/)
    ) {
      return this.turnRed(el);
    } else {
      return this.turnGreen(el);
    }
  }

  validateFuri() {
    let vals = this.state.form;
    let el = document.getElementById('formFuri');

    if (
      vals.furi.val == '' ||
      vals.furi.val == 'カタカナで入力' ||
      vals.furi.val.match(/[^ァ-ン\s]+/)
    ) {
      return this.turnRed(el);
    } else {
      return this.turnGreen(el);
    }
  }

  validateTel() {
    let vals = this.state.form;
    let el = document.getElementById('formTel');
    if (
      vals.tel.val == '' ||
      vals.tel.val == '日中つながる電話番号' ||
      vals.tel.val.match(/[^0-9\-\s]+/)
    ) {
      return this.turnRed(el);
    } else {
      return this.turnGreen(el);
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


  /*
   * modalを開く
   */
  enableModal(e) {
    let error = document.getElementById('error');
    window.scroll(0,0);

    if (this.onSubmit()) {
      error.classList.remove('active');

      let el = document.getElementById(e.target.name);
      el.classList.toggle('enable');

      let height = document.documentElement.scrollHeight || document.body.scrollHeight;
      el.style.height = height + 'px'; 
    } else {
      error.classList.add('active');
    }
  }

  /*
   * ログイン
   */
  enableLogin(e) {
    if (!this.state.login.status) {
      let el = document.getElementById(e.target.name);
      el.classList.toggle('enable');

      let height = document.documentElement.scrollHeight || document.body.scrollHeight;
      el.style.height = height + 'px'; 
    } else {
      let mes = document.getElementById('loginMessage');
      mes.innerHTML = '応募しました';
      mes.classList.add('active');

      let obj = {
        id: this.state.login.id,
        workid: this.props.params.id
      };

      EntryActions.insert(obj);
    }
  }

  /*
   * メリット
   */
  enableMerit(e) {
      let el = document.getElementById(e.target.name);
      el.classList.toggle('enable');

      let height = document.documentElement.scrollHeight || document.body.scrollHeight;
      el.style.height = height + 'px'; 
  }

  updateState() {
    let res = WorkStore.read();
    let total = res.length;

    this.setState({
      works: res,
      total: total
    });
  }
}




let modal = new Array();
modal = [
  {
    title: '応募内容のご確認',
    body: '<p>弊社スタッフより、お電話にて1営業日中にご連絡させていただきます。<br />その際にご不明な点などお気軽にお電話口にてお話し下さい。<br />また、あわせて会員情報も登録されます。</p><p>以上の内容でお間違いなければ、個人情報の取扱いについてをご確認の上、<br />「担当者からすぐ連絡を希望する」をクリックしてください。</p>',
    button: '担当者からすぐ連絡を希望する'
  },

  {
    title: '応募内容のご確認',
    body: '<p>弊社スタッフより、お仕事のご紹介、面談日時等、<br />メールにてご連絡させていただきます。<br />また、あわせて会員情報も登録されます。</p><p>以上の内容でお間違いなければ、個人情報の取扱いについてをご確認の上、<br />「メールにて連絡を希望する」をクリックしてください。</p>',
    button: 'メールにて連絡を希望する'
  },

  {
    title: '会員登録のメリットについて',
    body: '当サイトでは会員登録せずとも、ご希望のお仕事に応募することも可能です。<br />会員にご登録頂きますと、都度お客様の情報を入力せずに、<br />メールアドレスとパスワードのみで応募ができるようになります。<br />また会員情報をもとに、有益な情報をお送りする場合もございます。<br />ぜひこの機会にご登録ください。',
    button: null 
  }
];
