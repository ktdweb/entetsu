import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import TopicStore from '../../../js/stores/TopicStore'
import TopicActions from '../../../js/actions/TopicActions'


export default class TopicsDetail extends React.Component {

  constructor(props) {
    super(props);

    let topics = TopicStore.read();
    this.state = {
      topics: topics
    }
    this.data = this.state.topics[0];
  }

  componentWillMount() {
    TopicStore.subscribe(this.updateState.bind(this));
    TopicActions.create();
  }

  componentWillUnmount() {
    TopicStore.destroy(this.updateState.bind(this));this
  }

  render() {
    let data = this.data;

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
              className="w-s"
              value={data.term_start}
              />

            <label>終了日時</label>
            <input
              type="text"
              className="w-s"
              value={data.term_end}
              />
          </dd>
        </dl>

        <hr />

        <dl>
          <dt>カテゴリ</dt>
          <dd>
            <select>
              <option value="1">一般</option>
              <option value="2">お仕事を探す</option>
            </select>
          </dd>
        </dl>

        <dl>
          <dt>タイトル</dt>
          <dd>
            <input
              type="text"
              value="ホームページが公開されました"
              className="w-xl"
              />
          </dd>
        </dl>

        <button className="w-s">更新</button>

      </article>
    );
  }

  updateState() {
    let res = TopicStore.read();
    this.setState({ topics: res });
  }
}
