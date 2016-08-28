import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

let BTN_WIDTH = 30;
let AREA_WIDTH = 500;
let AREA_PADDING = 14;

let drag = false;
let slider_val01 = 0;
let slider_val02 = 75;
let start = 0;
let end = 75;

export default class Works extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      slider: {
        start: start,
        end: end
      }
    }
  }

  componentDidMount() {
  }

  render() {
    let IMG = 'imgs/pages/works/';

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
                onClick={this.closeUp.bind(this)}
              >
                <img
                  src={IMG + 'loc/banner01.png'}
                  width="170"
                  height="45"
                  alt="img"
                  />
                </a>

              <a href="#"
                onClick={this.closeUp.bind(this)}
              >
                <img
                  src={IMG + 'loc/banner02.png'}
                  width="170"
                  height="45"
                  alt="img"
                />
              </a>

              <a href="#"
                onClick={this.closeUp.bind(this)}
              >
                <img
                  src={IMG + 'loc/banner03.png'}
                  width="170"
                  height="45"
                  alt="img"
                />
              </a>

              <a href="#"
                onClick={this.closeUp.bind(this)}
              >
                <img
                  src={IMG + 'loc/banner04.png'}
                  width="170"
                  height="45"
                  alt="img"
                />
              </a>

              <a href="#"
                onClick={this.closeUp.bind(this)}
              >
                <img
                  src={IMG + 'loc/banner05.png'}
                  width="170"
                  height="45"
                  alt="img"
                />
              </a>

              <a href="#"
                onClick={this.closeUp.bind(this)}
              >
                <img
                  src={IMG + 'loc/banner06.png'}
                  width="170"
                  height="45"
                  alt="img"
                />
              </a>

              <a href="#">
                <img
                  src={IMG + 'loc/banner07.png'}
                  width="170"
                  height="45"
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
                onClick={this.closeUp.bind(this)}
              >
                <img
                  src={IMG + 'time/banner01.png'}
                  height="120"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.closeUp.bind(this)}
              >
                <img
                  src={IMG + 'time/banner02.png'}
                  height="120"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.closeUp.bind(this)}
              >
                <img
                  src={IMG + 'time/banner03.png'}
                  height="120"
                  alt="img"
                  />
              </a>

              <br />

              <a href="#"
                onClick={this.closeUp.bind(this)}
              >
                <img
                  src={IMG + 'time/banner04.png'}
                  height="120"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.closeUp.bind(this)}
              >
                <img
                  src={IMG + 'time/banner05.png'}
                  height="120"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.closeUp.bind(this)}
              >
                <img
                  src={IMG + 'time/banner06.png'}
                  height="120"
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
                onClick={this.closeUp.bind(this)}
              >
                <img
                  src={IMG + 'cat/banner01.png'}
                  height="120"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.closeUp.bind(this)}
              >
                <img
                  src={IMG + 'cat/banner02.png'}
                  height="120"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.closeUp.bind(this)}
              >
                <img
                  src={IMG + 'cat/banner03.png'}
                  height="120"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.closeUp.bind(this)}
              >
                <img
                  src={IMG + 'cat/banner04.png'}
                  height="120"
                  alt="img"
                  />
              </a>

              <a href="#"
                onClick={this.closeUp.bind(this)}
              >
                <img
                  src={IMG + 'cat/banner05.png'}
                  height="120"
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
              <Link to="works_detail">
                <img
                  src={IMG + 'list_column_left.png'}
                  width="30"
                  alt="img"
                  onClick={this.fadeIn.bind(this)}
                  />
              </Link>
            </div>

            <ul id="column">
              <Link to="works_detail">
                <li className="pf-Works-List-column">
                  <div className="pf-Works-List-column-head">
                    <p>ホテル客室整備スタッフ</p>
                    <img
                      src={IMG + 'list_btn_detail.png'}
                      width="40"
                      alt="img"
                      />
                  </div>
                
                  <div className="pf-Works-List-column-section">
                    <img
                      src={IMG + 'list_dummy_photo.png'}
                      width="45"
                      alt="img"
                      / >
                    <p>リゾートホテルのチェックイン後の客室整備・布団敷き 基本和室（約３０部屋程度）での布団敷きの作業です。 </p>
                  </div>
                
                  <div className="pf-Works-List-column-footer">
                    <span>時給: 860円</span>
                    <span>17:00~19:30</span>
                  </div>
                </li>
              </Link>

              <Link to="works_detail">
                <li className="pf-Works-List-column">
                  <div className="pf-Works-List-column-head">
                    <p>ホテル客室整備スタッフ</p>
                    <img
                      src={IMG + 'list_btn_detail.png'}
                      width="40"
                      alt="img"
                      />
                  </div>
                
                  <div className="pf-Works-List-column-section">
                    <img
                      src={IMG + 'list_dummy_photo.png'}
                      width="45"
                      alt="img"
                      / >
                    <p>リゾートホテルのチェックイン後の客室整備・布団敷き 基本和室（約３０部屋程度）での布団敷きの作業です。 </p>
                  </div>
                
                  <div className="pf-Works-List-column-footer">
                    <span>時給: 860円</span>
                    <span>17:00~19:30</span>
                  </div>
                </li>
              </Link>

              <Link to="works_detail">
                <li className="pf-Works-List-column">
                  <div className="pf-Works-List-column-head">
                    <p>ホテル客室整備スタッフ</p>
                    <img
                      src={IMG + 'list_btn_detail.png'}
                      width="40"
                      alt="img"
                      />
                  </div>
                
                  <div className="pf-Works-List-column-section">
                    <img
                      src={IMG + 'list_dummy_photo.png'}
                      width="45"
                      alt="img"
                      / >
                    <p>リゾートホテルのチェックイン後の客室整備・布団敷き 基本和室（約３０部屋程度）での布団敷きの作業です。 </p>
                  </div>
                
                  <div className="pf-Works-List-column-footer">
                    <span>時給: 860円</span>
                    <span>17:00~19:30</span>
                  </div>
                </li>
              </Link>

              <Link to="works_detail">
                <li className="pf-Works-List-column">
                  <div className="pf-Works-List-column-head">
                    <p>ホテル客室整備スタッフ</p>
                    <img
                      src={IMG + 'list_btn_detail.png'}
                      width="40"
                      alt="img"
                      />
                  </div>
                
                  <div className="pf-Works-List-column-section">
                    <img
                      src={IMG + 'list_dummy_photo.png'}
                      width="45"
                      alt="img"
                      / >
                    <p>リゾートホテルのチェックイン後の客室整備・布団敷き 基本和室（約３０部屋程度）での布団敷きの作業です。 </p>
                  </div>
                
                  <div className="pf-Works-List-column-footer">
                    <span>時給: 860円</span>
                    <span>17:00~19:30</span>
                  </div>
                </li>
              </Link>

              <Link to="works_detail">
                <li className="pf-Works-List-column">
                  <div className="pf-Works-List-column-head">
                    <p>ホテル客室整備スタッフ</p>
                    <img
                      src={IMG + 'list_btn_detail.png'}
                      width="40"
                      alt="img"
                      />
                  </div>
                
                  <div className="pf-Works-List-column-section">
                    <img
                      src={IMG + 'list_dummy_photo.png'}
                      width="45"
                      alt="img"
                      / >
                    <p>リゾートホテルのチェックイン後の客室整備・布団敷き 基本和室（約３０部屋程度）での布団敷きの作業です。 </p>
                  </div>
                
                  <div className="pf-Works-List-column-footer">
                    <span>時給: 860円</span>
                    <span>17:00~19:30</span>
                  </div>
                </li>
              </Link>

              <Link to="works_detail">
                <li className="pf-Works-List-column">
                  <div className="pf-Works-List-column-head">
                    <p>ホテル客室整備スタッフ</p>
                    <img
                      src={IMG + 'list_btn_detail.png'}
                      width="40"
                      alt="img"
                      />
                  </div>
                
                  <div className="pf-Works-List-column-section">
                    <img
                      src={IMG + 'list_dummy_photo.png'}
                      width="45"
                      alt="img"
                      / >
                    <p>リゾートホテルのチェックイン後の客室整備・布団敷き 基本和室（約３０部屋程度）での布団敷きの作業です。 </p>
                  </div>
                
                  <div className="pf-Works-List-column-footer">
                    <span>時給: 860円</span>
                    <span>17:00~19:30</span>
                  </div>
                </li>
              </Link>
            </ul>


           <div>
              <Link
                to="works_detail"
                onClick={this.fadeIn.bind(this)}
                >
                <img
                  src={IMG + 'list_column_right.png'}
                  width="30"
                  alt="img"
                  />
              </Link>
            </div>
            </section>
          </div>

          <div className="pf-Works-Search">
            <div className="pf-Works-Search-slider">
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
                onKeyPress={this.fadeIn.bind(this)}
                />
            </div>
          </div>
        </div>
      </article>
    );
  }

  fadeIn(e) {
    e.preventDefault();
    $('#column li').css({opacity: 0});

    $('#column li').each(function(i) {
      $(this).delay(150 * i).animate({opacity: 1}, 300, 'swing').css('visibility','visible');
    });
  }

  closeUp(e) {
    e.preventDefault();

    /*
    let el = e.target;
    let active = document.getElementsByClassName('closeUp');
    
    for (let i = 0; i < active.length; i++) {
      active[i].classList.remove('closeUp'); 
    }

    el.classList.add('closeUp');
    */

    $("html,body").animate({scrollTop:700});
    this.fadeIn(e);
  }

  onMouseDown(e) {
    e.preventDefault();
    drag = true;
  }

  onMouseUp(e) {
    e.preventDefault();
    drag = false;

    this.setState({ slider: {start: start, end: end} });
  }

  onMouseMove(e) {
    if (drag) {
      let el = document.getElementById('sliderLabel');
      let s = this.state.slider;
      AREA_PADDING = el.style.padding-left;
      let pos = (e.clientX - BTN_WIDTH) - AREA_PADDING;
      let v = (pos + BTN_WIDTH / 2) * (100 / AREA_WIDTH);
      start = el.style.left;
      end = el.style.width;

      if (v >= 0 && v <= 100) {
        e.target.style.left = pos + 'px';

        if (e.target.name == 'first') {
          slider_val01 = parseInt(v);
        } else {
          slider_val02 = parseInt(v);
        }

        if (slider_val01 <= slider_val02) {
          start = slider_val01; 
          end = slider_val02; 
        } else {
          start = slider_val02; 
          end = slider_val01; 
        }

        el.style.left = start * 5 + 'px';
        el.style.width = (end * 5) - (start * 5) + 'px';
      }
    }
  }
}
