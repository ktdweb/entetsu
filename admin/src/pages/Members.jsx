import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import MemberStore from '../../../js/stores/MemberStore'
import MemberActions from '../../../js/actions/MemberActions'

export default class Members extends React.Component {

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

    let eachMember;
    if (this.state.members.length > 0) {
      eachMember = Object.keys(this.state.members).map((i) => {
        return (
          <EachMember key={i} data={this.state.members[i]} />
        );
      });
    }

    return(
      <article id="Members">
        <DocumentTitle title="会員情報" />
        <h1>
          <i className="fa fa-bell-o" />
          会員情報
        </h1>

        <table className="sheet">
          <tbody>
            <tr>
              <th>ID</th>
              <th>名前</th>
              <th>フリガナ</th>
              <th>メールアドレス</th>
              <th>詳細情報</th>
              <th>更新日</th>
            </tr>

            {eachMember}

          </tbody>
        </table>
      </article>
    );
  }

  updateState() {
    let res = MemberStore.read();
    this.setState({ members: res });
  }
}

class EachMember extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data;
    return (
      <tr>
        <td>{data.id}</td>
        <td>
          <Link
            to={'/admin/members/detail/' + data.id}
            >
            {data.name}
          </Link>
        </td>
        <td>{data.furi}</td>
        <td>{data.mail}</td>
        <td>{this.changeFlag(data.detail_flag)}</td>
        <td>{data.created}</td>
      </tr>
    );
  }

  changeFlag(val) {
    let res;
    if (val == 1) {
      res = 'あり'
    } else {
      res = 'なし'
    }

    return res;
  }
}
