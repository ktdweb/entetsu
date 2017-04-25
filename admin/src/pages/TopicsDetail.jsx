import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import TopicStore from '../../../js/stores/TopicStore'
import TopicActions from '../../../js/actions/TopicActions'


export default class TopicsDetail extends React.Component {

  constructor(props) {
    super(props);

    let topics = {
      id: '',
      category_id: 1,
      title: '',
      desc: '',
      term_start: '0000-00-00 00:00:00',
      term_end: '0000-00-00 00:00:00',

      created: '',
      modified: ''
    };

    this.state = {
      topics: topics
    }
  }

  componentWillMount() {
    let key = window.sessionStorage.getItem('login');
    if (key != 'added') {
      location.href = '/admin/';
    }

    /*
    if (!window.login) {
      location.href = '/admin/';
    }
    */

    TopicStore.subscribe(this.updateState.bind(this));
    if (this.props.params.id != 0) {
      TopicActions.adminGet(this.props.params.id);
    } else {
      TopicActions.defaults();
    }
  }

  componentWillUnmount() {
    TopicStore.destroy(this.updateState.bind(this));
  }

  render() {
    let data = this.state.topics;

    for (let i = 0; i < this.state.topics.length; i++) {
      if (this.state.topics[i].id == this.props.params.id) {
        data = this.state.topics[i];
      }
    }

    return(
      <article id="TopicsDetail">
        <DocumentTitle title="新着情報" />
        <h1>
          <i className="fa fa-check-square-o" />
          新着情報
        </h1>

        <dl>
          <dt>期間指定</dt>
          <dd>
            <label>開始日時</label>
            <input
              type="text"
              name="term_start"
              className="w-s"
              onChange={this.handleText.bind(this)}
              value={data.term_start}
              />

            <label>終了日時</label>
            <input
              type="text"
              name="term_end"
              className="w-s"
              onChange={this.handleText.bind(this)}
              value={data.term_end}
              />
          </dd>
        </dl>

        <hr />

        <dl>
          <dt>カテゴリ</dt>
          <dd>
            <select
              name="category_id"
              onChange={this.handleText.bind(this)}
              value={data.category_id}
              >
              <option value="1">一般</option>
              <option value="2">お仕事を探す</option>
            </select>
          </dd>
        </dl>

        <dl>
          <dt>
            タイトル
            <span className="warning"> &#8251;</span>
          </dt>
          <dd>
            <input
              type="text"
              name="title"
              value={data.title}
              onChange={this.handleText.bind(this)}
              className="w-xl"
              maxLength="120"
              required={true}
              />
          </dd>
        </dl>

        <dl>
          <dt>備考</dt>
          <dd>
            <textarea
              name="desc"
              className="w-xl"
              onChange={this.handleText.bind(this)}
              value={data.desc}
              />
          </dd>
        </dl>

        <p id="message" className="color-brand-danger"></p>

        <button
          className="w-s"
          onClick={this.handleSubmit.bind(this)}
          >更新</button>

      </article>
    );
  }

  handleSubmit(e) {
    let res = this.state.topics;

    let valid = true;
    let el = document.getElementById('message');

    if (res.title == '') {
      txt = 'タイトルを入力してください'; 
      el.innerHTML = txt;
      valid = false;
    }

    if (res.entry_start == '' || res.entry_end == '') {
      txt = '期間指定が入力されていません。指定しない場合は[0000-00-00 00:00:00]を入力してください'; 
      el.innerHTML = txt;
      valid = false;
    }

    if (valid) {
      el.innerHTML = '';
      if (this.props.params.id == 0) {
        TopicActions.adminInsert(res, this.toIndex.bind(this));
      } else {
        console.log(res);
        TopicActions.adminUpdate(res, this.toIndex.bind(this));
      }
    }
  }

  toIndex() {
    // window.location.href = '/admin/topics/';
  }

  handleText(e) {
    const field = e.target.getAttribute('name');
    const req = e.target.required;
    const value = e.target.value;
    const type = e.target.getAttribute('data-type');
    const mes = e.target.parentNode.querySelector('p.message');

    let isValid = true;
    if (req && !this.isValidRequired(value)) {
      isValid = false;
    }
    if (type == 'int' && !this.isValidInt(value)) {
      isValid = false;
    }
    if (type == 'time' && !this.isValidTime(value)) {
      isValid = false;
    }
    if (type == 'datetime' && !this.isValidDateTime(value)) {
      isValid = false;
    }

    if (!isValid) {
      e.target.style.borderColor = '#D9534F';
      if (mes) mes.classList.add('show');
    } else {
      e.target.style.borderColor = '#CDCDCD';
      if (mes) mes.classList.remove('show');
    }

    let obj = this.state.topics;
    obj[field] = e.target.value;
    this.setState({ topics: obj });
  }

  isValidRequired(str) {
    return (str.length > 0) ? true : false ;
  }

  isValidInt(str) {
    return isFinite(str);
  }

  isValidDateTime(str) {
    if (str == '0000-00-00 00:00:00') {
      return true;
    }
    return m(str, 'YYYY-MM-DD HH:mm:ss', true).isValid();
  }

  isValidDateTime(str) {
    if (str == '0000-00-00 00:00:00') {
      return true;
    }
    return m(str, 'YYYY-MM-DD HH:mm:ss', true).isValid();
  }

  isValidTime(str) {
    return m(str, 'HH:mm:ss', true).isValid();
  }


  updateState() {
    let res = TopicStore.read();
    this.setState({ topics: res[0] });
  }
}
