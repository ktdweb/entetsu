import React from 'react'
import { Link } from 'react-router'

import MemberStore from '../../stores/MemberStore'
import MemberActions from '../../actions/MemberActions'

export default class WorksMerit extends React.Component {

  constructor(props) {
    super(props);
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
                width="30"
                height="30"
                alt="close"
                />
            </a>

            <h1>{this.props.title}</h1>

              <p>
当サイトでは会員登録せずとも、ご希望のお仕事に応募することも可能です。<br />会員にご登録頂きますと、都度お客様の情報を入力せずに、<br />メールアドレスとパスワードのみで応募ができるようになります。<br />また会員情報をもとに、有益な情報をお送りする場合もございます。<br />ぜひこの機会にご登録ください。
              </p>
            </div>
          </div>
    );
  }

  disableModal(e = undefined) {
    e.preventDefault();

    let el = document.getElementById(this.props.id);
    el.classList.remove('enable');

    let er = document.getElementById('loginError');
    er.innerHTML = '';
    er.classList.remove('active');
  }
}
