import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import WorkStore from '../../../js/stores/WorkStore'
import WorkActions from '../../../js/actions/WorkActions'


export default class TopicsDetail extends React.Component {

  constructor(props) {
    super(props);

    let works = WorkStore.read();
    this.state = {
      works: works
    }
    this.data = this.state.works[0];
  }

  componentWillMount() {
    WorkStore.subscribe(this.updateState.bind(this));
    WorkActions.create();
  }

  componentWillUnmount() {
    WorkStore.destroy(this.updateState.bind(this));this
  }

  render() {
    let data = this.data;

    for (let i = 0; i < this.state.works.length; i++) {
      if (this.state.works[i].id == this.props.params.id) {
        data = this.state.works[i];
      }
    }

    return(
      <article id="WorksDetail">
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
          <dt>タイトル</dt>
          <dd>
            <input
              type="text"
              value="ホームページが公開されました"
              className="w-xl"
              />
          </dd>
        </dl>

        <dl>
          <dt>内容</dt>
          <dd>
            <textarea
              className="w-xl"
              value=""
              />
          </dd>
        </dl>

        <dl>
          <dt>画像</dt>
          <dd>
            <label className="formFile">
              アップロード
              <input type="file" />
            </label>
          </dd>
        </dl>

        <button className="w-s">更新</button>

      </article>
    );
  }

  updateState() {
    let res = WorkStore.read();
    this.setState({ works: res });
  }
}
