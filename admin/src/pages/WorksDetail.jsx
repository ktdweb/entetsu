import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import WorkStore from '../../../js/stores/WorkStore'
import WorkActions from '../../../js/actions/WorkActions'


export default class WorksDetail extends React.Component {

  constructor(props) {
    super(props);

    let works = WorkStore.read();
    this.state = { works: works[0] }
  }

  componentWillMount() {
    WorkStore.subscribe(this.updateState.bind(this));
    WorkActions.adminEach(this.props.params.id);
  }

  componentWillUnmount() {
    WorkStore.destroy(this.updateState.bind(this));
  }

  render() {
    let data = this.state.works;
    const arr = [
      '清掃',
      'ビル',
      'マンション',
      '運行',
      '指定管理',
      'ベンリ-',
      '食品',
      '総務'
    ];
    let sectionIds;
    for (var i = 1; i <= 8; i++) {
      var res;
      if (this.state.works.section_id == i) {
        res = true;
      } else {
        res = false;
      }
      sectionIds = <option value={i} key={i}
        ></option>;
    }

    return(
      <article id="WorksDetail">
        <DocumentTitle title="求人情報" />

        <h1>
          <i className="fa fa-paperclip" />
          求人情報
        </h1>

        <dl>
          <dt>担当部署</dt>
          <dd>
            <label className="formSelect">
              <select
                onChange={this.handleChange.bind(this)}
                value={this.state.works.section_id}
                >
                {sectionIds}
              </select>
            </label>
          </dd>
        </dl>

        <dl>
          <dt>期間指定</dt>
          <dd>
            <label>開始日時</label>
            <input
              type="text"
              className="w-s"
              value={data.entry_start}
              />

            <label>終了日時</label>
            <input
              type="text"
              className="w-s"
              value={data.entry_end}
              />
          </dd>
        </dl>

        <hr />

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
              type="text"
              className="w-xl"
              value={data.detail}
              />
          </dd>
        </dl>

        <dl>
          <dt>勤務地</dt>
          <dd>
            <input
              type="text"
              className="w-l"
              value={data.location}
              />
          </dd>
        </dl>

        <dl>
          <dt>時間</dt>
          <dd>
            <input
              type="text"
              className="w-l"
              value={data.time}
              />
          </dd>
        </dl>

        <dl>
          <dt>休憩時間</dt>
          <dd>
            <input
              type="text"
              className="w-l"
              value={data.break}
              />
          </dd>
        </dl>

        <dl>
          <dt>給与</dt>
          <dd>
            <input
              type="text"
              className="w-l"
              value={data.wage}
              />
          </dd>
        </dl>

        <dl>
          <dt>日数</dt>
          <dd>
            <input
              type="text"
              className="w-l"
              value={data.days}
              />
          </dd>
        </dl>

        <dl>
          <dt>休日</dt>
          <dd>
            <input
              type="text"
              className="w-l"
              value={data.holidays}
              />
          </dd>
        </dl>

        <dl>
          <dt>雇用形態</dt>
          <dd>
            <input
              type="text"
              className="w-l"
              value={data.part}
              />
          </dd>
        </dl>

        <dl>
          <dt>雇用期間</dt>
          <dd>
            <input
              type="text"
              className="w-l"
              value={data.term}
              />
          </dd>
        </dl>

        <dl>
          <dt>学歴</dt>
          <dd>
            <input
              type="text"
              className="w-l"
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
              type="text"
              className="w-l"
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

        <dl>
          <dt>短縮表示</dt>
          <dd>
            <p>
              <label>給与</label>
              <input
                type="text"
                className="w-xs"
                value={data.abbr_wage}
                placeholder="860"
                />
                <small>円</small>
              
              <label>単位</label>
              <label className="formSelect">
                <select>
                  <option>時給</option>
                  <option>日給</option>
                  <option>月給</option>
                  </select>
              </label>
            </p>

            <label>時間</label>
            <input
              type="text"
              className="w-s"
              value={data.abbr_time}
              placeholder="09:00~17:00"
              />
          </dd>
        </dl>

        <hr />

        <dl>
          <dt>場所で選ぶ</dt>
          <dd>
            <label>中区</label><input type="checkbox" />
            <label>北区</label><input type="checkbox" />
            <label>東区</label><input type="checkbox" />
            <label>西区</label><input type="checkbox" />
            <label>南区</label><input type="checkbox" /><br />
            <label>浜北区</label><input type="checkbox" />
            <label>天竜区</label><input type="checkbox" />
            <label>その他</label><input type="checkbox" />
          </dd>           
        </dl>             

        <dl>
          <dt>時間で選ぶ</dt>
          <dd>
            <label>フルタイム</label><input type="checkbox" />
            <label>短時間</label><input type="checkbox" />
            <label>短期</label><input type="checkbox" />
            <label>午前中</label><input type="checkbox" />
            <label>午後</label><input type="checkbox" />
            <label>夕方</label><input type="checkbox" />
          </dd>
        </dl>

        <dl>
          <dt>業種で選ぶ</dt>
          <dd>
            <label>清掃職</label><input type="checkbox" />
            <label>ドライバー</label><input type="checkbox" />
            <label>ビル管理スタッフ</label><input type="checkbox" />
            <label>営業・事務職</label><input type="checkbox" />
            <label>その他</label><input type="checkbox" />
          </dd>
        </dl>

        <hr />

        <dl>
          <dt>スライダー検索用</dt>
          <dd>
            <label>開始時間</label>
            <input
              type="text"
              className="w-xs"
              value={data.time_start}
              />

            <label>終了時間</label>
            <input
              type="text"
              className="w-xs"
              value={data.time_end}
              />
          </dd>
        </dl>

        <hr />

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

  handleChange(e) {
  }
  
  updateState() {
    let res = WorkStore.read();
    this.setState({ works: res[0], tags: res.tags });
  }
}
