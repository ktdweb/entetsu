import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import WorkStore from '../../stores/WorkStore'
import WorkActions from '../../actions/WorkActions'

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

    this.state = {
      slider: {
        start: start,
        end: end
      },
      page: 1,
      works: works
    }
  }

  componentWillMount() {
    WorkStore.subscribe(this.updateState.bind(this));
    WorkActions.create();
  }

  componentDidMount() {}

  componentWillUnmount() {
    WorkStore.destroy(this.updateState.bind(this));
  }

  render() {
    let IMG = '/imgs/pages/works/';

    let columns = Object.keys(this.state.works).map((i) => {
      return (
        <Column
          key={i}
          data={this.state.works[i]}
          sort={i}
          />
      );
    });

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
                  name="8"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'time/banner02.png'}
                  height="135"
                  name="9"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'time/banner03.png'}
                  height="135"
                  name="10"
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
                  name="11"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'time/banner05.png'}
                  height="120"
                  name="12"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'time/banner06.png'}
                  height="120"
                  name="13"
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
                  name="14"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'cat/banner02.png'}
                  height="120"
                  name="15"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'cat/banner03.png'}
                  height="120"
                  name="16"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'cat/banner04.png'}
                  height="120"
                  name="17"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.getCategorySearch.bind(this)}
              >
                <img
                  src={IMG + 'cat/banner05.png'}
                  height="120"
                  name="18"
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
                <a href="/works_detail">
                  <img
                    src={IMG + 'list_column_left.png'}
                    width="30"
                    alt="img"
                    onClick={this.previousPage.bind(this)}
                    />
                </a>
              </div>

              <ul id="column">{columns}</ul>

             <div>
                <a
                  href="works_detail"
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
              defaultValue="フリーワード検索"
              onKeyDown={this.getKeyword.bind(this)}
              onFocus={this.clearValue.bind(this)}
              />
          </div>
        </div>
        </div>
      </article>
    );
  }

  closeUp(e) {
    e.preventDefault();

    this.scrollMotion(820);

    this.fadeIn(e);
  }

  scrollMotion(to) {
    let t = 0;
    let b = window.scrollY;
    let c = 820 - b;
    let d = 2000 / 10;

    let interval = setInterval(function() {
      let step = easeInOut(t, b, c, d);
      if (window.scrollY < to) {
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

        console.log(start + ':' + end);
        let el = document.getElementById('sliderLabel');
        el.style.left =  start * 5 + 'px';
        el.style.width = (end * 5) - (start * 5) + 'px';
      }
    }
  }

  getCategorySearch(e) {
    e.preventDefault();

    this.state.page = 1;
    let id = e.target.name;
    WorkActions.category(id);

    this.scrollMotion(820);
  }

  clearValue(e) {
    e.target.value = '';
  }

  getKeyword(e) {
    if (e.keyCode == 13) {
      this.state.page = 1;
      WorkActions.keyword(e.target.value);
    }
  }

  updateState() {
    let res = WorkStore.read();
    let total = res.length;
    res = this.paging(res);

    this.setState({
      works: res,
      total: total
    });
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
    let page = this.state.page;
    if (page != 1) {
      page = page - 1;
    }
    this.state.page = page;

    this.updateState();
  }

  nextPage(e) {
    e.preventDefault();
    let page = this.state.page;
    if (page * 6 <= this.state.total) {
      page = page + 1;
    }
    this.state.page = page;

    this.updateState();
  }

  paging(res) {
    let paging_start = 6 * (this.state.page - 1);
    let paging_end = 6 * this.state.page;

    return res.slice(paging_start, paging_end);
  }
}

class Column extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    let el = this.refs.el;
    el.style.visibility = 'none';
    el.style.animationDelay = this.props.sort * 0.1 + 's';
    el.addEventListener('animationend', endMotion);
    el.classList.add('active');

    function endMotion() {
      el.removeEventListener('animationend', endMotion);
      el.classList.remove('active');
    }
  }

  render() {
    let IMG = '/imgs/pages/works/';

    let data = this.props.data;

    return (
      <a
        href={'/works_detail/' + data.id}
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
            <span>時給: {data.abbr_wage}円</span>
            <span>{data.abbr_time}</span>
          </div>
        </li>
      </a>
    );
  }

  overflow(txt, cnt) {
    if (txt.length > cnt) {
      txt = txt.slice(0, cnt) + '…';
    }
    return txt;
  }

}
