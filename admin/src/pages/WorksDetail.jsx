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

  handleAlert(e) {
    e.preventDefault();

    alert('開発環境では登録できません');
  }

  render() {
    let data = this.state.works;

    const sections = this.generateSections();

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
                name="section_id"
                onChange={this.handleText.bind(this)}
                value={data.section_id}
                >
                {sections}
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
              name="entry_start"
              className="w-s"
              onChange={this.handleText.bind(this)}
              value={data.entry_start}
              />

            <label>終了日時</label>
            <input
              type="text"
              name="entry_end"
              className="w-s"
              onChange={this.handleText.bind(this)}
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
              name="title"
              value={data.title}
              onChange={this.handleText.bind(this)}
              className="w-xl"
              />
          </dd>
        </dl>

        <dl>
          <dt>仕事の内容</dt>
          <dd>
            <textarea
              type="text"
              name="detail"
              className="w-xl"
              onChange={this.handleText.bind(this)}
              value={data.detail}
              />
          </dd>
        </dl>

        <dl>
          <dt>勤務地</dt>
          <dd>
            <input
              type="text"
              name="location"
              className="w-l"
              onChange={this.handleText.bind(this)}
              value={data.location}
              />
          </dd>
        </dl>

        <dl>
          <dt>時間</dt>
          <dd>
            <input
              type="text"
              name="time"
              className="w-l"
              onChange={this.handleText.bind(this)}
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
              onChange={this.handleText.bind(this)}
              value={data.break}
              />
          </dd>
        </dl>

        <dl>
          <dt>給与</dt>
          <dd>
            <input
              type="text"
              name="wage"
              className="w-l"
              onChange={this.handleText.bind(this)}
              value={data.wage}
              />
          </dd>
        </dl>

        <dl>
          <dt>日数</dt>
          <dd>
            <input
              type="text"
              name="days"
              className="w-l"
              onChange={this.handleText.bind(this)}
              value={data.days}
              />
          </dd>
        </dl>

        <dl>
          <dt>休日</dt>
          <dd>
            <input
              type="text"
              name="holidays"
              className="w-l"
              onChange={this.handleText.bind(this)}
              value={data.holidays}
              />
          </dd>
        </dl>

        <dl>
          <dt>雇用形態</dt>
          <dd>
            <input
              type="text"
              name="part"
              className="w-l"
              onChange={this.handleText.bind(this)}
              value={data.part}
              />
          </dd>
        </dl>

        <dl>
          <dt>雇用期間</dt>
          <dd>
            <input
              type="text"
              name="term"
              className="w-l"
              onChange={this.handleText.bind(this)}
              value={data.term}
              />
          </dd>
        </dl>

        <dl>
          <dt>学歴</dt>
          <dd>
            <input
              type="text"
              name="career"
              className="w-l"
              onChange={this.handleText.bind(this)}
              value={data.career}
              />
          </dd>
        </dl>

        <dl>
          <dt>職場の雰囲気</dt>
          <dd>
            <textarea
              name="selling"
              className="w-xl"
              onChange={this.handleText.bind(this)}
              value={data.selling}
              />
          </dd>
        </dl>

        <dl>
          <dt>資格</dt>
          <dd>
            <input
              type="text"
              name="cert"
              className="w-l"
              onChange={this.handleText.bind(this)}
              value={data.cert}
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

        <hr />

        <dl>
          <dt>短縮表示</dt>
          <dd>
            <p>
              <label>給与</label>
              <input
                type="text"
                name="abbr_wage"
                className="w-xs"
                value={data.abbr_wage}
                placeholder="860"
                onChange={this.handleText.bind(this)}
                />
                <small>円</small>
              
              <label>単位</label>
              <label className="formSelect">
                <select
                  name="unit_wage"
                  onChange={this.handleText.bind(this)}
                  value={data.unit_wage}
                  >
                  <option value="1">時給</option>
                  <option value="2">日給</option>
                  <option value="3">月給</option>
                  </select>
              </label>
            </p>

            <label>時間</label>
            <input
              type="text"
              name="abbr_time"
              className="w-s"
              value={data.abbr_time}
              placeholder="09:00~17:00"
              onChange={this.handleText.bind(this)}
              />
          </dd>
        </dl>

        <hr />

        <dl>
          <dt>場所で選ぶ</dt>
          <dd>
            <select
              name="location_id"
              onChange={this.handleText.bind(this)}
              value={data.location_id}
              >
              <option value="1">中区</option>
              <option value="2">北区</option>
              <option value="3">東区</option>
              <option value="4">西区</option>
              <option value="5">南区</option>
              <option value="6">浜北区</option>
              <option value="7">天竜区</option>
              <option value="8">その他</option>
              </select>
          </dd>           
        </dl>             

        <dl>
          <dt>時間で選ぶ</dt>
          <dd>
            <select
              name="time_id"
              onChange={this.handleText.bind(this)}
              value={data.time_id}
              >
              <option value="1">フルタイム</option>
              <option value="2">短時間</option>
              <option value="3">短期</option>
              <option value="4">午前中</option>
              <option value="5">午後</option>
              <option value="6">夕方</option>
              </select>
          </dd>
        </dl>

        <dl>
          <dt>業種で選ぶ</dt>
          <dd>
            <select
              name="category_id"
              onChange={this.handleText.bind(this)}
              value={data.category_id}
              >
              <option value="1">清掃職</option>
              <option value="2">ドライバー</option>
              <option value="3">ビル管理スタッフ</option>
              <option value="4">営業・事務職</option>
              <option value="5">その他</option>
              </select>
          </dd>
        </dl>

        <hr />

        <dl>
          <dt>スライダー検索用</dt>
          <dd>
            <label>開始時間</label>
            <input
              type="text"
              name="time_start"
              className="w-s"
              value={data.time_start}
              onChange={this.handleText.bind(this)}
              />

            <label>終了時間</label>
            <input
              type="text"
              name="time_end"
              className="w-s"
              value={data.time_end}
              onChange={this.handleText.bind(this)}
              />
          </dd>
        </dl>

        <hr />

        <dl>
          <dt>画像</dt>
          <dd>
            <label
              onClick={this.handleAlert.bind(this)}
              className="formFile">
              アップロード
              <input type="file" />
            </label>
          </dd>
        </dl>

        <button
          className="w-s"
          onClick={this.handleSubmit.bind(this)}
          >更新</button>

      </article>
    );
  }

  handleChange(e) {
  }

  handleSubmit(e) {
    WorkActions.adminUpdate(this.state.works);
    location.href('/admin/works/');
  }

  updateState() {
    let res = WorkStore.read();
    this.setState({ works: res[0], tags: res.tags });
  }

  handleSections(e) {
    this.setState(
      { works: { section_id: e.target.value } }
    );
  }

  handleText(e) {
    const field = e.target.getAttribute('name');
    let obj = this.state.works;
    obj[field] = e.target.value;
    this.setState({ works: obj });
  }
  
  generateSections() {
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

    return Object.keys(arr).map((i) => {
      return <option
        key={'section' + i}
        value={parseInt(i) + 1}
      >{arr[i]}</option>
    });
  }
}
