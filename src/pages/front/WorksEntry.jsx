import React from 'react'
import { Link } from 'react-router'

import MemberStore from '../../stores/MemberStore'
import MemberActions from '../../actions/MemberActions'

export default class WorksEntry extends React.Component {

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

            <button
              name={this.props.id}
              onClick={this.onSubmit.bind(this)}
            >{this.props.button}</button>
          </div>
        </div>
    );
  }

  onSubmit(e) {
    let el = document.getElementById('modalError' + this.props.id);
    el.innerHTML = 'ご応募ありがとうございました。メールをご確認ください';
    el.classList.toggle('active');

    let obj = {
      name: this.props.name,
      furi: this.props.furi,
      tel:  this.props.tel,
      mail: this.props.mail,
    };

    MemberActions.add(obj);
  }

  disableModal(e) {
    e.preventDefault();
    let el = document.getElementById(this.props.id);
    el.classList.toggle('enable');
  }
}
