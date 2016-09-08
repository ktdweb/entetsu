import React from 'react'
import { Link } from 'react-router'

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

            <button>{this.props.button}</button>
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
