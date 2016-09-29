import React from 'react'
import { Link } from 'react-router'

import MemberStore from '../../stores/MemberStore'
import MemberActions from '../../actions/MemberActions'

export default class WorksEntry extends React.Component {

  constructor(props) {
    super(props);
    this.flag = false;
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
                width="30"
                height="30"
                alt="close"
                />
            </a>

            <h1>{this.props.title}</h1>
            <div>
              名前:  {this.props.name}<br />
              フリガナ: {this.props.furi}<br />
              電話番号: {this.props.tel}<br />
              メールアドレス: {this.props.mail}
            </div>

            <span
              dangerouslySetInnerHTML={{__html: this.props.body}}
              />

            <p id={'modalError' + this.props.id} className="loginError"></p>

            <iframe src="../../../privacy.html" width="800" height="200" />
            <div>
              <input
                type="checkbox"
                onChange={this.handleChange.bind(this)}
                />
              <label>
                個人情報の取り扱いについての内容に同意する
              </label>
            </div>

            <div id="Agree">
              <p>あわせて会員への登録をしますか?</p>

              <label>はい</label>
              <input type="radio" name="agree" />
              
              <label>いいえ</label>
              <input type="radio" name="agree" defaultChecked={true}/>
            </div>

            <button
              id="Submit"
              className="agree"
              name={this.props.id}
              onClick={this.onSubmit.bind(this)}
            >{this.props.button}</button>
          </div>
        </div>
    );
  }

  handleChange(e) {
    if (e.target.checked) {
      this.flag = true;
    } else {
      this.flag = false;
    }
    let el = document.getElementById('Submit');
    if (this.flag) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  }

  onSubmit(e) {
    if (this.flag) {
      let el = document.getElementById('modalError' + this.props.id);
      el.innerHTML = 'ご応募ありがとうございました。メールをご確認ください';
      el.classList.add('active');

      let obj = {
        id: this.props.id,
        name: this.props.name,
        furi: this.props.furi,
        tel:  this.props.tel,
        mail: this.props.mail,
        workid: this.props.workid,
        worktitle: this.props.worktitle,
        worktime: this.props.worktime
      };

      MemberActions.add(obj);
    }
  }

  disableModal(e) {
    e.preventDefault();
    let el = document.getElementById(this.props.id);
    el.classList.toggle('enable');

    let er = document.getElementById('modalError' + this.props.id);
    er.innerHTML = '';
    er.classList.remove('active');
  }
}
