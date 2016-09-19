import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import WorkStore from '../../../js/stores/WorkStore'
import WorkActions from '../../../js/actions/WorkActions'


export default class WorksDetail extends React.Component {

  constructor(props) {
    super(props);

    let works = WorkStore.read();
    this.state = {
      works: works
    }
  }

  componentWillMount() {
    WorkStore.subscribe(this.updateState.bind(this));
    WorkActions.create();
  }

  componentWillUnmount() {
    WorkStore.destroy(this.updateState.bind(this));
  }

  render() {
    let data = this.state.works[0];

    for (let i = 0; i < this.state.works.length; i++) {
      if (this.state.works[i].id == this.props.params.id) {
        data = this.state.works[i];
      }
    }

    return(
      <article id="Works">
        <DocumentTitle title="求人情報" />
        <h1>
          <i className="fa fa-paperclip" />
          求人情報
        </h1>

        <dl>
          <dt>タイトル</dt>
          <dd>
            <input
              type="text"
              value={data.title}
              className="w-xl"
              />
          </dd>
        </dl>

        <dl>
          <dt>仕事の内容</dt>
          <dd>
            <textarea
              className="w-xl"
              value={data.detail}
              />
          </dd>
        </dl>

        <dl>
          <dt>勤務地</dt>
          <dd>
            <input
              className="w-s"
              value={data.location}
              />
          </dd>
        </dl>

        <dl>
          <dt>時間</dt>
          <dd>
            <input
              className="w-s"
              value={data.time}
              />
          </dd>
        </dl>

        <dl>
          <dt>休憩時間</dt>
          <dd>
            <input
              className="w-s"
              value={data.break}
              />
          </dd>
        </dl>

        <dl>
          <dt>給与</dt>
          <dd>
            <input
              className="w-s"
              value={data.wage}
              />
          </dd>
        </dl>

        <dl>
          <dt>日数</dt>
          <dd>
            <input
              className="w-s"
              value={data.days}
              />
          </dd>
        </dl>

        <dl>
          <dt>休日</dt>
          <dd>
            <input
              className="w-s"
              value={data.holidays}
              />
          </dd>
        </dl>

        <dl>
          <dt>雇用形態</dt>
          <dd>
            <input
              className="w-s"
              value={data.part}
              />
          </dd>
        </dl>

        <dl>
          <dt>雇用期間</dt>
          <dd>
            <input
              className="w-s"
              value={data.term}
              />
          </dd>
        </dl>

        <dl>
          <dt>学歴</dt>
          <dd>
            <input
              className="w-s"
              value={data.career}
              />
          </dd>
        </dl>

        <dl>
          <dt>職場の雰囲気</dt>
          <dd>
            <textarea
              className="w-xl"
              value={data.selling}
              />
          </dd>
        </dl>

        <dl>
          <dt>資格</dt>
          <dd>
            <input
              className="w-s"
              value={data.cert}
              />
          </dd>
        </dl>

        <dl>
          <dt>備考</dt>
          <dd>
            <textarea
              className="w-xl"
              value={data.desc}
              />
          </dd>
        </dl>

        <hr />

        <p>短縮表示用</p>
        <dl>
          <dt>給与 (短縮表示)</dt>
          <dd>
            <input
              className="w-s"
              value={data.abbr_wage}
              />
          </dd>

          <dt>単位 (短縮表示)</dt>
          <dd>
            <select>
              <option>時給</option>
              <option>日給</option>
              <option>月給</option>
            </select>
          </dd>
        </dl>

        <dl>
          <dt>時間 (短縮表示)</dt>
          <dd>
            <input
              className="w-s"
              value={data.abbr_wage}
              />
          </dd>
        </dl>

        <hr />

        <p>期間指定表示用</p>
        <dl>
          <dt>開始時間</dt>
          <dd>
            <input
              className="w-m"
              value={data.time_start}
              />
          </dd>

          <dt>終了時間</dt>
          <dd>
            <input
              className="w-m"
              value={data.time_end}
              />
          </dd>
        </dl>

        <hr />

        <p>スライダー検索用</p>
        <dl>
          <dt>開始時間</dt>
          <dd>
            <input
              className="w-m"
              value={data.time_start}
              />
          </dd>

          <dt>終了時間</dt>
          <dd>
            <input
              className="w-m"
              value={data.time_end}
              />
          </dd>
        </dl>

        <hr />

        <dl>
          <dt>場所で選ぶ用</dt>
          <dd>
            中区 <input type="checkbox" />
            北区 <input type="checkbox" />
            東区 <input type="checkbox" />
            西区 <input type="checkbox" />
            南区 <input type="checkbox" />
            南区 <input type="checkbox" />
            浜北区 <input type="checkbox" />
            天竜区 <input type="checkbox" />
            その他 <input type="checkbox" />
          </dd>
        </dl>

        <dl>
          <dt>時間で選ぶ用</dt>
          <dd>
            フルタイム <input type="checkbox" />
            短時間 <input type="checkbox" />
            短期 <input type="checkbox" />
            午前中 <input type="checkbox" />
            午後 <input type="checkbox" />
            夕方 <input type="checkbox" />
          </dd>
        </dl>

        <dl>
          <dt>業種で選ぶ用</dt>
          <dd>
            清掃職 <input type="checkbox" />
            ドライバー <input type="checkbox" />
            ビル管理スタッフ <input type="checkbox" />
            営業・事務職 <input type="checkbox" />
            その他 <input type="checkbox" />
          </dd>
        </dl>

        <hr />

        <dl>
          <dt>画像</dt>
          <dd>
            <input type="file" />
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
