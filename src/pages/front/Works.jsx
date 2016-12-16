import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import WorkStore from '../../stores/WorkStore'
import WorkActions from '../../actions/WorkActions'

import SearchStore from '../../stores/SearchStore'
import SearchActions from '../../actions/SearchActions'


const BTN_WIDTH = 30;
const AREA_WIDTH = 500;

let drag = false;
let slider_val01 = 0;
let slider_val02 = 75;
let start = 0;
let end = 75;

export default class Works extends React.Component {

  constructor(props) {
    super(props);

    let works = WorkStore.read();
    let search = SearchStore.read();

    this.state = {
      works: works,
      search: search,
      slider: {
        start: start,
        end: end
      },
      total: 0
    }
  }

  componentWillMount() {
    SearchStore.subscribe(this.updateState.bind(this));
    WorkStore.subscribe(this.updateState.bind(this));
  }

  componentDidMount() {
    if (this.props.params.section == 'result') {
      window.scrollTo(0, 820);
    }

    if (this.state.search.category) {
      WorkActions.category(this.state.search.category);
    } else if (this.state.search.keyword) {
      WorkActions.keyword(this.state.search.keyword);
      let el = document.getElementById('keyword');
      el.value = this.state.search.keyword;
    } else if (this.state.search.slider_flag) {
      start = this.state.search.slider_start;
      end = this.state.search.slider_end;
      WorkActions.slider(start, end);
    } else {
      WorkActions.create();
    }
  }

  componentWillUnmount() {
    WorkStore.destroy(this.updateState.bind(this));
    SearchStore.destroy(this.updateState.bind(this));
  }

  render() {
    let IMG = '/imgs/pages/works/';

    let columns;
    if (this.state.works.length > 0) {
      columns = Object.keys(this.state.works).map((i) => {
        return (
          <Column
            key={i}
            data={this.state.works[i]}
            sort={i}
            />
        );
      });
    } else {
      columns = <li className="pf-Works-List-column-empty">検索結果が0件でした</li>;
    }

    let pages = [];
    let cnt = Math.ceil(this.state.search.total / 6);
    for (let i = 0; i < cnt; i++) {
      if (this.state.search.page != i + 1) {
        pages.push(
          <span
            key={i}
            name={parseInt(i) + 1}
            onClick={this.jump.bind(this, parseInt(i) + 1)}
            >
            {parseInt(i) + 1}</span>
        );
      } else {
        pages.push(
          <span key={i} className="current">
            {parseInt(i) + 1}</span>
        );
      }
    }

    return (
      <article id="Works">
        <DocumentTitle title="仕事を探す | 遠鉄アシスト" />

        <nav>
          <div className="pf-Works-Loc">
            <div>
              <img
                src={IMG + 'title_loc.png'}
                width="120"
                height="120"
                alt="img"
                className="pf-Works-Title-loc"
                />

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'loc/banner01.png'}
                  width="170"
                  height="45"
                  name="1"
                  alt="img"
                  />
                </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'loc/banner02.png'}
                  width="170"
                  height="45"
                  name="2"
                  alt="img"
                />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'loc/banner03.png'}
                  width="170"
                  height="45"
                  name="3"
                  alt="img"
                />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'loc/banner04.png'}
                  width="170"
                  height="45"
                  name="4"
                  alt="img"
                />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'loc/banner05.png'}
                  width="170"
                  height="45"
                  name="5"
                  alt="img"
                />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'loc/banner06.png'}
                  width="170"
                  height="45"
                  name="6"
                  alt="img"
                />
              </a>

              <a
                href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'loc/banner07.png'}
                  width="170"
                  height="45"
                  name="7"
                  alt="img"
                />
              </a>

              <a
                href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'loc/banner08.png'}
                  width="170"
                  height="45"
                  name="8"
                  alt="img"
                />
              </a>
            </div>
          </div>

          <div className="pf-Works-Time">
            <div>
              <img
                src={IMG + 'title_time.png'}
                width="120"
                height="120"
                alt="img"
                />

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'time/banner01.png'}
                  height="135"
                  name="9"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'time/banner02.png'}
                  height="135"
                  name="10"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'time/banner03.png'}
                  height="135"
                  name="11"
                  alt="img"
                  />
              </a>

              <br />

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'time/banner04.png'}
                  height="120"
                  name="12"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'time/banner05.png'}
                  height="120"
                  name="13"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'time/banner06.png'}
                  height="120"
                  name="14"
                  alt="img"
                  />
              </a>
            </div>
          </div>

          <div className="pf-Works-Cat">
            <div>
              <img
                src={IMG + 'title_cat.png'}
                width="120"
                height="120"
                alt="img"
                />

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'cat/banner01.png'}
                  height="120"
                  name="15"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'cat/banner02.png'}
                  height="120"
                  name="16"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'cat/banner03.png'}
                  height="120"
                  name="17"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'cat/banner06.png'}
                  height="120"
                  name="18"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'cat/banner07.png'}
                  height="120"
                  name="20"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'cat/banner08.png'}
                  height="120"
                  name="21"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'cat/banner09.png'}
                  height="120"
                  name="19"
                  alt="img"
                  />
              </a>
            </div>
          </div>
        </nav>

        <div className="pf-Works-List">
          <div>
            <div className="pf-Works-List-tab">
              検索結果
            </div>

            <section>
              <div>
                <a
                  href="/works_detail"
                  id="previous"
                  className="navButton disable"
                  onClick={this.previousPage.bind(this)}
                  >
                  <img
                    src={IMG + 'list_column_left.png'}
                    width="30"
                    alt="img"
                    />
                </a>
              </div>

              <ul id="column">{columns}</ul>

             <div>
                <a
                  href="works_detail"
                  id="next"
                  className="navButton"
                  onClick={this.nextPage.bind(this)}
                  >
                  <img
                    src={IMG + 'list_column_right.png'}
                    width="30"
                    alt="img"
                    />
                </a>
              </div>
            </section>

            <nav className="pf-Works-Paging">
              {pages}
            </nav>
          </div>

          <div className="pf-Works-Search">
          <div id="sliderArea" className="pf-Works-Search-slider">
            <h1>自分の好きな時間帯をみつける</h1>

            <p id="sliderLabel"></p>

            <img
              src={IMG + 'list_slider_button.png'}
              width="30"
              alt="img"
              name="first"
              id="sliderFirst"
              onMouseDown={this.onMouseDown.bind(this)}
              onMouseUp={this.onMouseUp.bind(this)}
              onMouseMove={this.onMouseMove.bind(this)}
              onMouseOut={this.onMouseUp.bind(this)}
              />

            <img
              src={IMG + 'list_slider_button.png'}
              width="30"
              alt="img"
              name="second"
              id="sliderSecond"
              onMouseDown={this.onMouseDown.bind(this)}
              onMouseUp={this.onMouseUp.bind(this)}
              onMouseMove={this.onMouseMove.bind(this)}
              onMouseOut={this.onMouseUp.bind(this)}
              />
          </div>

          <div className="pf-Works-Search-advance">
            <input
              type="text"
              id="keyword"
              placeholder="キーワード検索"
              onFocus={this.clearValue.bind(this)}
              />
            <button
              onClick={this.getKeyword.bind(this)}
              >検索</button>
          </div>
        </div>
        </div>
      </article>
    );
  }

  navControl() {
    let cnt = Math.ceil(this.state.search.total / 6);

    let previous = document.getElementById('previous');
    let next = document.getElementById('next');

    previous.classList.remove('disable');
    next.classList.remove('disable');

    if (this.state.search.page == 1) {
      previous.classList.add('disable');
    }

    if (this.state.search.page == cnt) {
      next.classList.add('disable');
    }

    let s = document.getElementById('sliderFirst');
    let e = document.getElementById('sliderSecond');
    let el = document.getElementById('sliderLabel');

    let pos;
    let reg = BTN_WIDTH / 2;
    let start = this.state.search.slider_start;
    let end = this.state.search.slider_end;

    pos = (start * 5 - reg - 1);
    s.style.left = pos + 'px';

    pos = (end * 5 - reg - 1);
    e.style.left = pos + 'px';

    el.style.left =  start * 5 + 'px';
    el.style.width = (end * 5) - (start * 5) + 'px';

    // if (this.state.search.keyword == '') {
    //   let k = document.getElementById('keyword');
    //   k.value = 'フリーワード検索';
    // }
  }

  closeUp(e) {
    e.preventDefault();

    this.scrollMotion(820);

    this.fadeIn(e);
  }

  scrollMotion(to) {
    let t = 0;
    let b = document.body.scrollTop || document.documentElement.scrollTop;
    let c = 820 - b;
    let d = 2000 / 10;

    let interval = setInterval(function() {
      let step = easeInOut(t, b, c, d);
      let y = document.body.scrollTop || document.documentElement.scrollTop;

      if (y < to) {
        window.scrollTo(0, step);
        t++;
      } else {
        clearInterval(interval);
      }

    }, 0);

    function easeInOut(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    }
  }

  onMouseDown(e) {
    e.preventDefault();
    drag = true;
  }

  onMouseUp(e) {
    e.preventDefault();
    drag = false;

    WorkActions.slider(start, end);
    this.setState({ slider: {start: start, end: end} });
  }

  onMouseMove(e) {
    if (drag) {
      // sliderのドラッグ
      let area = document.getElementById('sliderArea');
      let rect = area.getBoundingClientRect();
      let pos = e.clientX - rect.left;

      if (pos >= 0 && pos <= 500) {
        e.target.style.left = (pos - BTN_WIDTH / 2 - 1) + 'px';

        // 100分率に変換
        let v =  parseInt(pos * (100 / AREA_WIDTH));

        // 各ボタンが入れ替えってもOKなように
        if (e.target.name == 'first') {
          slider_val01 = v;
        } else {
          slider_val02 = v;
        }

        if (slider_val01 <= slider_val02) {
          start = slider_val01; 
          end = slider_val02; 
        } else {
          start = slider_val02; 
          end = slider_val01; 
        }

        let el = document.getElementById('sliderLabel');
        el.style.left =  start * 5 + 'px';
        el.style.width = (end * 5) - (start * 5) + 'px';
      }

      SearchActions.updateField('slider_start', start);
      SearchActions.updateField('slider_end', end);
      SearchActions.updateField('slider_flag', true);
      SearchActions.updateField('keyword', '');
      SearchActions.updateField('category', '');
    }
  }

  getCategorySearch(e) {
    e.preventDefault();

    let id = e.target.name;
    SearchActions.updateField('page', 1);
    SearchActions.updateField('category', id);
    SearchActions.updateField('slider_start', 0);
    SearchActions.updateField('slider_end', 75);
    SearchActions.updateField('slider_flag', false);
    SearchActions.updateField('keyword', '');
    WorkActions.category(id);

    this.scrollMotion(820);
  }

  clearValue(e) {
    e.target.value = '';
  }

  getKeyword(e) {
    let el = document.getElementById('keyword');
    console.log(el.value);
    SearchActions.updateField('page', 1);
    SearchActions.updateField('keyword', el.value);
    SearchActions.updateField('slider_start', 0);
    SearchActions.updateField('slider_end', 75);
    SearchActions.updateField('slider_flag', false);
    SearchActions.updateField('category', '');
    WorkActions.keyword(el.value);
  }

  fadeIn() {
    let ul = document.getElementById('column');
    let els = ul.children;

    for (let i = 0; i < els.length; i++) {
      els[i].style.animationDelay = i * 0.15 + 's';
      els[i].addEventListener('animationend', endMotion);
      els[i].classList.add('active');

      function endMotion() {
        els[i].removeEventListener('animationend', endMotion);
        els[i].classList.remove('active');
      }
    }
  }

  removeActive() {
    let ul = document.getElementById('column');
    let els = ul.children;
    for (let i = 0; i < els.length; i++) {
      els[i].classList.remove('active');
    }
  }

  previousPage(e) {
    e.preventDefault();
    let page = this.state.search.page;
    if (page != 1) {
      page = page - 1;
    }
    SearchActions.updateField('page', page);
  }

  nextPage(e) {
    e.preventDefault();
    let page = this.state.search.page;
    if (page * 6 <= this.state.search.total) {
      page = page + 1;
    }
    SearchActions.updateField('page', page);
  }

  jump(page) {
    SearchActions.updateField('page', page);
  }

  paging(res) {
    let paging_start = 6 * (this.state.search.page - 1);
    let paging_end = 6 * this.state.search.page;

    return res.slice(paging_start, paging_end);
  }

  updateState() {
    let res = WorkStore.read();
    let search = SearchStore.read();
    search.total = res.length;
    res = this.paging(res);

    this.setState({
      works: res,
      search: search
    });
    this.navControl();
  }
}

class Column extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    let el = this.refs.el;
    if (el.style) {
      el.style.visibility = 'none';
      el.style.animationDelay = this.props.sort * 0.1 + 's';
      el.addEventListener('animationend', endMotion);
      el.classList.add('active');
    }

    function endMotion() {
      el.removeEventListener('animationend', endMotion);
      el.classList.remove('active');
    }
  }

  render() {
    let IMG = '/imgs/pages/works/';

    let data = this.props.data;

    return (
      <Link
        to={'/works_detail/' + data.id}
        ref='el'
        >
        <li className="pf-Works-List-column">
          <div className="pf-Works-List-column-head">
            <p className="overflow">{data.title}</p>
            <img
              src={IMG + 'list_btn_detail.png'}
              width="40"
              alt="img"
              />
          </div>
        
          <div className="pf-Works-List-column-section">
            <img
              src={'/imgs/works/' + data.img + 's.jpg'}
              width="45"
              height="45"
              alt="img"
              / >
            <p>{this.overflow(data.detail, 64)}</p>
          </div>

          <div className="pf-Works-List-column-footer">
            <span>{data.unit_wage}: {data.abbr_wage}円</span>
            <span>{data.abbr_time}</span>
          </div>
        </li>
      </Link>
    );
  }

  overflow(txt, cnt) {
    if (txt.length > cnt) {
      txt = txt.slice(0, cnt) + '…';
    }
    return txt;
  }

}
