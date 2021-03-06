import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

// jsを詠込むためsrc, admin共にgulpしないと反映不可
import WorkStore from '../../../js/stores/WorkStore'
import WorkActions from '../../../js/actions/WorkActions'

import CommonStore from '../../../js/stores/CommonStore'
import CommonActions from '../../../js/actions/CommonActions'

import m from 'moment'

export default class WorksDetail extends React.Component {

  constructor(props) {
    super(props);
    let works = {
      id: 0, 
      section_id: 1,
      title: '',
      detail: '',
      location: '',
      time: '',
      time_start: '',
      time_end: '',
      entry_start: '0000-00-00 00:00:00',
      entry_end: '0000-00-00 00:00:00',
      break: '',
      wage: '',
      days: '',
      holidays: '',
      type: '',
      term: '',
      career: '',
      selling: '',
      cert: '',
      desc: '',
      img: '',

      abbr_wage: '',
      abbr_time: '',
      unit_wage_id: 1,

      name: '',
      tel: '',
      email: '',
      unit_wage: '',

      created: '',
      modified: ''
    };
    this.state = {
      works: works, 
      commons: [],
      tags: [],
      upload: ''
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

    CommonStore.subscribe(this.updateCommon.bind(this));
    CommonActions.get();

    WorkStore.subscribe(this.updateState.bind(this));

    if (this.props.params.id != 0) {
      WorkActions.adminEach(this.props.params.id);
    } else {
      WorkActions.defaults();
    }
  }

  componentWillUnmount() {
    WorkStore.destroy(this.updateState.bind(this));
    CommonStore.destroy(this.updateState.bind(this));
  }

  handleAlert(e) {
    e.preventDefault();

    alert('開発環境では登録できません');
  }

  render() {
    if (this.props.params.id == 0) {
      if (this.state.commons.length == 0) return false 
    } else {
      if (this.state.tags.length == 0) return false 
    }

    let data = this.state.works;

    let imgpath = '/imgs/works/default/001l.jpg';
    if (data.img != '') {
      imgpath = '/imgs/works/' + data.img + 'l.jpg';
    }
    let imgtag = <p id="imageOutput">
      <img
        src={imgpath}
        width="120"
        alt="img"
        />
    </p>


    const sections = this.generateSelects(
      this.state.commons.sections,
      'sections'
    );

    const wages = this.generateSelects(
      this.state.commons.wages,
      'wages'
    );

    const locations = this.generateCheckbox(
      this.state.commons.categories[1],
      'locations'
    );

    const times = this.generateCheckbox(
      this.state.commons.categories[2],
      'times'
    );

    const categories = this.generateCheckbox(
      this.state.commons.categories[3],
      'categories'
    );

    return(
      <article id="WorksDetail">
        <DocumentTitle title="求人情報" />

        <h1>
          <i className="fa fa-paperclip" />
          求人情報
        </h1>

        <dl>
          <dt>
            担当部署
            <span className="warning"> &#8251;</span>
          </dt>
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
          <dt>
            期間指定
            <span className="warning"> &#8251;</span>
          </dt>
          <dd>
            <label>開始日時</label>
            <input
              type="text"
              name="entry_start"
              className="w-s"
              onChange={this.handleText.bind(this)}
              value={data.entry_start}
              data-type="datetime"
              />

            <label>終了日時</label>
            <input
              type="text"
              name="entry_end"
              className="w-s"
              onChange={this.handleText.bind(this)}
              value={data.entry_end}
              />

            <p className="message">
              必須項目です 0000-00-00 00:00:00の書式で入力してください
            </p>
          </dd>
        </dl>

        <hr />

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

              <p className="message">
                必須項目です
              </p>
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
              maxLength="120"
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
              name="break"
              className="w-l"
              onChange={this.handleText.bind(this)}
              value={data.break}
              maxLength="120"
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
              maxLength="120"
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
              maxLength="120"
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
              maxLength="120"
              />
          </dd>
        </dl>

        <dl>
          <dt>雇用形態</dt>
          <dd>
            <input
              type="text"
              name="type"
              className="w-l"
              onChange={this.handleText.bind(this)}
              value={data.type}
              maxLength="120"
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
              maxLength="120"
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
              maxLength="120"
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
              maxLength="120"
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
          <dt>
            短縮表示
            <span className="warning"> &#8251;</span>
          </dt>
          <dd>
            <div className="abbr">
              <label>給与</label>
              <input
                type="text"
                name="abbr_wage"
                className="w-s"
                value={data.abbr_wage}
                placeholder="860"
                onChange={this.handleText.bind(this)}
                maxLength="8"
                data-type="int"
                required={true}
                />
                <small>円</small>
              
              <p className="message">
                必須項目です 半角数字で入力してください
              </p>
            </div>

            <div className="abbr">
              <label>単位</label>
              <label className="formSelect">
                <select
                  name="unit_wage_id"
                  onChange={this.handleText.bind(this)}
                  value={data.unit_wage_id}
                  >
                  {wages}
                  </select>
              </label>
            </div>

            <div>
              <label>時間</label>
              <input
                type="text"
                name="abbr_time"
                className="w-s"
                value={data.abbr_time}
                placeholder="09:00~17:00"
                onChange={this.handleText.bind(this)}
                maxLength="12"
                required={true}
                />
                <p className="message">必須項目です</p>
            </div>
          </dd>
        </dl>

        <hr />

        <dl>
          <dt>
            場所で選ぶ
            <span className="warning"> &#8251;</span>
          </dt>
          <dd>{locations}</dd>
        </dl>             

        <dl>
          <dt>
            時間で選ぶ
            <span className="warning"> &#8251;</span>
          </dt>
          <dd>{times}</dd>
        </dl>

        <dl>
          <dt>
            業種で選ぶ
            <span className="warning"> &#8251;</span>
          </dt>
          <dd>{categories}</dd>
        </dl>

        <hr />

        <dl>
          <dt>
            スライダー検索用
            <span className="warning"> &#8251;</span>
          </dt>
          <dd>
            <label>開始時間</label>
            <input
              type="text"
              name="time_start"
              className="w-s"
              value={data.time_start}
              onChange={this.handleText.bind(this)}
              data-type="time"
              />

            <label>終了時間</label>
            <input
              type="text"
              name="time_end"
              className="w-s"
              value={data.time_end}
              onChange={this.handleText.bind(this)}
              data-type="time"
              />

              <p className="message">
                必須項目です 00:00:00の書式で入力してください
              </p>
          </dd>
        </dl>

        <hr />

        <dl>
          <dt>画像</dt>
          <dd>
            <label
              className="formFile">
              アップロード
              <input
                type="file"
                name="image"
                onChange={this.handleImage.bind(this)}
                />
            </label>
          </dd>
        </dl>

        {imgtag}
        <p id="imageOutput"></p>
        <p id="message" className="color-brand-danger"></p>

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
    const keys = [
      'locations',
      'times',
      'categories'
    ];

    let tags = new Array();

    Object.keys(keys).map((v) => {
      let arr = document.getElementsByName(keys[v]);
      Object.keys(arr).map((z, i) => {
        if (arr[i].checked == true) {
          tags.push(parseInt(arr[i].value));
        }
      });
    });

    let res = this.state.works;
    res.tags = tags;

    let upload = this.state.upload;
    res.upload = upload;

    delete res.location_id;
    delete res.time_id;
    delete res.category_id;
    delete res.unit_wage;

    let txt;
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

    if (res.abbr_wage == '') {
      txt = '短縮表示の給与を入力してください'; 
      el.innerHTML = txt;
      valid = false;
    }

    if (res.abbr_time == '') {
      txt = '短縮表示の時間を入力してください'; 
      el.innerHTML = txt;
      valid = false;
    }

    if (res.tags.length == 0) {
      txt = '場所・時間・業種の各項目内のいずれか一つは選択して下さい'; 
      el.innerHTML = txt;
      valid = false;
    }

    if (res.time_start == '' || res.time_end == '') {
      txt = 'スライダー検索用の開始時間、終了時間を入力してください'; 
      el.innerHTML = txt;
      valid = false;
    }

    if (valid) {
      el.innerHTML = '';
      if (this.props.params.id == 0) {
        WorkActions.adminInsert(res, this.toIndex.bind(this));
      } else {
        WorkActions.adminUpdate(res, this.toIndex.bind(this));
      }
    }
  }

  toIndex() {
    window.location.href = '/admin/works/' + this.props.params.cat + '/update';
  }

  updateState() {
    let res = WorkStore.read();
    this.setState({ works: res[0], tags: res.tags });
  }

  updateCommon() {
    let res = CommonStore.read();
    this.setState({ commons: res });
  }

  handleSections(e) {
    this.setState(
      { works: { section_id: e.target.value } }
    );
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

    let obj = this.state.works;
    obj[field] = e.target.value;
    this.setState({ works: obj });
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

  generateSelects(arr, key) {
    return Object.keys(arr).map((i) => {
      return <option
        key={key + i}
        value={parseInt(arr[i].id)}
      >{arr[i].name}</option>
    });
  }

  generateCheckbox(arr, key) {
    return Object.keys(arr).map((i) => {
      let checked = '';
      Object.keys(this.state.tags).map((v) => {
        if (arr[i].id == this.state.tags[v]) {
          checked = 'checked';
        }
      });

      /*
      if (
        this.props.params.id == 0 &&
        key == 'categories' &&
        i == 6
      ) {
        checked = 'checked';
      }
      */

      return <label key={key + i}>
        {arr[i].name}
        <input
          name={key}
          type="checkbox"
          value={parseInt(arr[i].id)}
          defaultChecked={checked}
          />
      </label>
    });
  }

  handleImage(e) {
    var tgt = document.getElementById('imageOutput');
    var el = document.getElementById('message');
    let fr = new FileReader();
    let file = e.target.files[0];

    let img = new Image(); 
    let src = window.URL.createObjectURL(file);
    img.src = src;


    let _this = this;
    fr.onload = (function(file) {
      img.onload = function() {
        if (_this.validateImage(file, img, el) != false) {
          initImage();
          let base64 = _this.convertBase64(img);
          _this.setState({ upload: base64 });

          img.width = 180;
          tgt.appendChild(img);

          el.innerHTML = '更新ボタンをクリックすると画像を正方形に加工後保存されます';
          el.classList.add('pa-EventsAdd-fileMsg');
        }
      }
    })(file);

    function initImage() {
      tgt.innerHTML = '';
      // el.classList.remove('pa-EventsAdd-fileMsg');
      el.innerHTML = '';
    }
  }

  convertBase64(img) {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d'); 
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    let base64 = canvas.toDataURL('image/jpeg');
    
    return base64.replace(/^.*,/, '');
  }

  validateImage(file, img, el) {
    var message = '';

    if (file.type != 'image/jpeg') {
      message = 'jpegファイルを選択してください';
    }

    if (img.width < 720) {
      message = '画像の横幅が足りません。720px以上を使用下さい';
    } else if (img.width > 1440) {
      message = '画像の横幅が大きすぎます。720px程度を使用下さい';
    }

    if (img.width < img.height) {
      message = '横長の画像を使用してください';
    }

    if (message) {
      el.innerHTML = message;
      el.classList.add('pa-EventsAdd-fileMsg');
    }

    let res = true;
    if (message != '') {
      res = false;
    }

    return res;
  }

}
