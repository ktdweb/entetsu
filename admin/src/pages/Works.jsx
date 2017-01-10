import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import WorkStore from '../../../js/stores/WorkStore'
import WorkActions from '../../../js/actions/WorkActions'


export default class Works extends React.Component {

  constructor(props) {
    super(props);

    let works = WorkStore.read();
    this.state = {
      works: works
    }
  }

  componentWillMount() {
    WorkStore.subscribe(this.updateState.bind(this));
    WorkActions.adminGet(this.props.params.id);
  }

  componentWillUnmount() {
    WorkStore.destroy(this.updateState.bind(this));
  }

  componentWillReceiveProps(nextProps) {
    WorkActions.adminGet(nextProps.params.id);
  }

  handleAlert(e) {
    e.preventDefault();

    alert('開発環境では登録できません');
  }

  render() {
    let eachWork;
    if (this.state.works.length > 1) {
      eachWork = Object.keys(this.state.works).map((i) => {
        return (
          <EachWork
            key={i}
            data={this.state.works[i]}
            handleClick={this.adminDelete.bind(this)}
            />
        );
      });
    } else {
      eachWork = <tr className="result">
                    <td colSpan="6">
                     <div>登録件数は0件です</div>
                   </td>
                  </tr>;
    }

    return(
      <article id="Works">
        <DocumentTitle title="求人情報" />
        <a
          onClick={this.handleAlert.bind(this)}
          href="/admin/works/detail/add"
          >
          <button className="headerButton">
            新規追加
            <i className="fa fa-plus-circle" />
          </button>
        </a>

        <h1>
          <i className="fa fa-paperclip" />
          求人情報
        </h1>

        <nav>
          <ul>
            <li>
              <Link to="/admin/works">
                すべて
              </Link>
            </li>
            <li>
              <Link to="/admin/works/1">
                清掃
              </Link>
            </li>
            <li>
              <Link to="/admin/works/2">
                ビル
              </Link>
            </li>
            <li>
              <Link to="/admin/works/3">
                マンション
              </Link>
            </li>
            <li>
              <Link to="/admin/works/4">
                運行
              </Link>
            </li>
            <li>
              <Link to="/admin/works/5">
                指定管理
              </Link>
            </li>
            <li>
              <Link to="/admin/works/6">
                ベンリー
              </Link>
            </li>
            <li>
              <Link to="/admin/works/7">
                食品検査
              </Link>
            </li>
            <li>
              <Link to="/admin/works/8">
                総務
              </Link>
            </li>
          </ul>
        </nav>

        <table className="sheet">
          <tbody>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>時間</th>
              <th>給与</th>
              <th>更新日</th>
              <th>-</th>
            </tr>

            {eachWork}

          </tbody>
        </table>
      </article>
    );
  }

  updateState() {
    let res = WorkStore.read();
    this.setState({ works: res });
  }

  adminDelete(e) {
    e.preventDefault();

    let id = e.target.name;
    let i = 'ID: ' + id + ' ';
    let res = confirm(i + 'を本当に削除しますか?');
    if (res) {
      WorkActions.adminDelete(id);
    } else {
      return false;
    }
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
        <td>
          <Link
            to={'/admin/works/detail/' + data.id}
            >
            {data.title}
          </Link>
        </td>
        <td>{data.abbr_time}</td>
        <td>{data.unit_wage + data.abbr_wage + '円'}</td>
        <td>{data.modified}</td>
        <td>
          <button
            name={data.id}
            onClick={this.props.handleClick.bind(this)}
            >削除</button>
        </td>
      </tr>
    );
  }
}
