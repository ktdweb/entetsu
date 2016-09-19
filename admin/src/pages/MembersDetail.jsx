import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import MemberStore from '../../../js/stores/MemberStore'
import MemberActions from '../../../js/actions/MemberActions'


export default class MembersDetail extends React.Component {

  constructor(props) {
    super(props);

    let members = MemberStore.read();
    this.state = {
      members: members
    }
  }

  componentWillMount() {
    MemberStore.subscribe(this.updateState.bind(this));
    MemberActions.create();
  }

  componentWillUnmount() {
    MemberStore.destroy(this.updateState.bind(this));
  }

  render() {
    let data = this.state.members[0];

    for (let i = 0; i < this.state.members.length; i++) {
      if (this.state.members[i].id == this.props.params.id) {
        data = this.state.members[i];
      }
    }

    return(
      <article id="Members">
        <DocumentTitle title="会員情報" />
        <h1>
          <i className="fa fa-bell-o" />
          会員情報
        </h1>

        <dl>
          <dt>名前</dt>
          <dd>
            <input
              type="text"
              value={data.name}
              className="w-s"
              />
          </dd>
        </dl>

        <dl>
          <dt>フリガナ</dt>
          <dd>
            <input
              className="w-s"
              value={data.furi}
              />
          </dd>
        </dl>

        <dl>
          <dt>電話番号</dt>
          <dd>
            <input
              className="w-s"
              value={data.tel}
              />
          </dd>
        </dl>

        <dl>
          <dt>メールアドレス</dt>
          <dd>
            <input
              className="w-m"
              value={data.mail}
              />
          </dd>
        </dl>

        <dl>
          <dt>パスワード</dt>
          <dd>
            <input
              className="w-m"
              value={data.password}
              />
          </dd>
        </dl>

        <dl>
          <dt>性別</dt>
          <dd>
            <label>男性</label>
            <input
              type="radio"
              name="gender_id"
              className="w-s"
              value={data.gender_id}
              />
            <label>女性</label>
            <input
              type="radio"
              name="gender_id"
              className="w-s"
              value={data.gender_id}
              />
          </dd>
        </dl>

        <dl>
          <dt>年齢</dt>
          <dd>
            <input
              className="w-xs"
              value={data.age}
              />
          </dd>
        </dl>

        <dl>
          <dt>誕生日</dt>
          <dd>
            <input
              className="w-s"
              value={data.birthday}
              />
          </dd>
        </dl>

        <dl>
          <dt>郵便番号</dt>
          <dd>
            <input
              className="w-s"
              value={data.zip}
              />
          </dd>
        </dl>

        <dl>
          <dt>都道府県</dt>
          <dd>
            <input
              className="w-s"
              value={data.prefecture}
              />
          </dd>
        </dl>

        <dl>
          <dt>市区町村</dt>
          <dd>
            <input
              className="w-s"
              value={data.city}
              />
          </dd>
        </dl>

        <dl>
          <dt>住所</dt>
          <dd>
            <textarea
              className="w-xl"
              value={data.address}
              />
          </dd>
        </dl>

        <button className="w-s">更新</button>

      </article>
    );
  }

  updateState() {
    let res = MemberStore.read();
    this.setState({ members: res });
  }
}

class EachWork extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data;
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.abbr_time}</td>
        <td>{data.unit_wage + data.abbr_wage + '円'}</td>
        <td>{data.modified}</td>
      </tr>
    );
  }
}
