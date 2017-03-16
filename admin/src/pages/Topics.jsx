import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import TopicStore from '../../../js/stores/TopicStore'
import TopicActions from '../../../js/actions/TopicActions'

export default class Topics extends React.Component {

  constructor(props) {
    super(props);

    let topics = TopicStore.read();
    this.state = {
      topics: topics
    }
    this.data = this.state.topics[0];
  }

  componentWillMount() {
    if (!window.login) {
      location.href = '/admin/';
    }

    TopicStore.subscribe(this.updateState.bind(this));
    TopicActions.adminGet();
  }

  componentWillUnmount() {
    TopicStore.destroy(this.updateState.bind(this));this
  }

  render() {
    let eachTopic;
    if (this.state.topics.length >= 1) {
      eachTopic = Object.keys(this.state.topics).map((i) => {
        return (
          <EachTopic
            key={i}
            data={this.state.topics[i]}
            handleClick={this.adminDelete.bind(this)}
            />
        );
      });
    } else {
      eachTopic = <tr className="result">
                    <td colSpan="6">
                     <div>登録件数は0件です</div>
                   </td>
                  </tr>;
    }

    return(
      <article id="Topics">
        <DocumentTitle title="新着情報" />
        <Link
          to={'/admin/topics/detail/0'}
          >
          <button className="headerButton">
            新規追加
            <i className="fa fa-plus-circle" />
          </button>
        </Link>

        <h1>
          <i className="fa fa-check-square-o" />
          新着情報
        </h1>

        <table className="sheet">
          <tbody>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>作成日</th>
              <th>-</th>
            </tr>


            {eachTopic}

          </tbody>
        </table>
      </article>
    );
  }

  updateState() {
    let res = TopicStore.read();
    console.log(res);
    this.setState({ topics: res });
  }

  adminDelete(e) {
    e.preventDefault();

    let id = e.target.name;
    let i = 'ID: ' + id + ' ';
    let res = confirm(i + 'を本当に削除しますか?');
    if (res) {
      TopicActions.adminDelete(id);
    } else {
      return false;
    }
  }
}

class EachTopic extends React.Component {
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
            to={'/admin/topics/detail/' + data.id}
            >
            {data.title}
          </Link>
        </td>
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
