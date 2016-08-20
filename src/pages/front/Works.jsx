import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

export default class Works extends React.Component {

  constructor(props) {
    super(props);
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

              <a href="#">
                <img
                  src={IMG + 'loc/banner01.png'}
                  width="170"
                  height="45"
                  alt="img"
                  />
                </a>

              <a href="#">
                <img
                  src={IMG + 'loc/banner02.png'}
                  width="170"
                  height="45"
                  alt="img"
                />
              </a>

              <a href="#">
                <img
                  src={IMG + 'loc/banner03.png'}
                  width="170"
                  height="45"
                  alt="img"
                />
              </a>

              <a href="#">
                <img
                  src={IMG + 'loc/banner04.png'}
                  width="170"
                  height="45"
                  alt="img"
                />
              </a>

              <a href="#">
                <img
                  src={IMG + 'loc/banner05.png'}
                  width="170"
                  height="45"
                  alt="img"
                />
              </a>

              <a href="#">
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

              <a href="#">
                <img
                  src={IMG + 'time/banner01.png'}
                  height="120"
                  alt="img"
                  />
              </a>

              <a href="#">
                <img
                  src={IMG + 'time/banner02.png'}
                  height="120"
                  alt="img"
                  />
              </a>

              <a href="#">
                <img
                  src={IMG + 'time/banner03.png'}
                  height="120"
                  alt="img"
                  />
              </a>

              <br />

              <a href="#">
                <img
                  src={IMG + 'time/banner04.png'}
                  height="120"
                  alt="img"
                  />
              </a>

              <a href="#">
                <img
                  src={IMG + 'time/banner05.png'}
                  height="120"
                  alt="img"
                  />
              </a>

              <a href="#">
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

              <a href="#">
                <img
                  src={IMG + 'cat/banner01.png'}
                  height="120"
                  alt="img"
                  />
              </a>

              <a href="#">
                <img
                  src={IMG + 'cat/banner02.png'}
                  height="120"
                  alt="img"
                  />
              </a>

              <a href="#">
                <img
                  src={IMG + 'cat/banner03.png'}
                  height="120"
                  alt="img"
                  />
              </a>

              <a href="#">
                <img
                  src={IMG + 'cat/banner04.png'}
                  height="120"
                  alt="img"
                  />
              </a>

              <a href="#">
                <img
                  src={IMG + 'cat/banner05.png'}
                  height="120"
                  alt="img"
                  />
              </a>
            </div>
          </div>
        </nav>

        <div className="pf-Works-Search">
          <div>
            <img
              src={IMG + 'search_dummy.png'}
              width="940"
              alt="img"
              onClick={this.fadeIn.bind(this)}
              />
          </div>
        </div>

        <div className="pf-Works-List">
          <div>
            <div className="pf-Works-List-tab">
              検索結果
            </div>

            <section>
            <div>
              <a href="#">
                <img
                  src={IMG + 'list_column_left.png'}
                  width="30"
                  alt="img"
                  onClick={this.fadeIn.bind(this)}
                  />
              </a>
            </div>

            <ul id="column">
              <li className="pf-Works-List-column">
                <div className="pf-Works-List-column-head">
                  <p>ホテル客室整備スタッフ</p>
                  <a href="#">
                    <img
                      src={IMG + 'list_btn_detail.png'}
                      width="40"
                      alt="img"
                      />
                  </a>
                </div>

                <div className="pf-Works-List-column-section">
                  <a href="#">
                    <img
                      src={IMG + 'list_dummy_photo.png'}
                      width="45"
                      alt="img"
                      / >
                  </a>
                  <p>リゾートホテルのチェックイン後の客室整備・布団敷き 基本和室（約３０部屋程度）での布団敷きの作業です。 </p>
                </div>

                <div className="pf-Works-List-column-footer">
                  <span>時給: 860円</span>
                  <span>17:00~19:30</span>
                </div>
              </li>

              <li className="pf-Works-List-column">
                <div className="pf-Works-List-column-head">
                  <p>ホテル客室整備スタッフ</p>
                  <a href="#">
                    <img
                      src={IMG + 'list_btn_detail.png'}
                      width="40"
                      alt="img"
                      />
                  </a>
                </div>

                <div className="pf-Works-List-column-section">
                  <a href="#">
                    <img
                      src={IMG + 'list_dummy_photo.png'}
                      width="45"
                      alt="img"
                      / >
                  </a>
                  <p>リゾートホテルのチェックイン後の客室整備・布団敷き 基本和室（約３０部屋程度）での布団敷きの作業です。 </p>
                </div>

                <div className="pf-Works-List-column-footer">
                  <span>時給: 860円</span>
                  <span>17:00~19:30</span>
                </div>
              </li>

              <li className="pf-Works-List-column">
                <div className="pf-Works-List-column-head">
                  <p>ホテル客室整備スタッフ</p>
                  <a href="#">
                    <img
                      src={IMG + 'list_btn_detail.png'}
                      width="40"
                      alt="img"
                      />
                  </a>
                </div>

                <div className="pf-Works-List-column-section">
                  <a href="#">
                    <img
                      src={IMG + 'list_dummy_photo.png'}
                      width="45"
                      alt="img"
                      / >
                  </a>
                  <p>リゾートホテルのチェックイン後の客室整備・布団敷き 基本和室（約３０部屋程度）での布団敷きの作業です。 </p>
                </div>

                <div className="pf-Works-List-column-footer">
                  <span>時給: 860円</span>
                  <span>17:00~19:30</span>
                </div>
              </li>

              <li className="pf-Works-List-column">
                <div className="pf-Works-List-column-head">
                  <p>ホテル客室整備スタッフ</p>
                  <a href="#">
                    <img
                      src={IMG + 'list_btn_detail.png'}
                      width="40"
                      alt="img"
                      />
                  </a>
                </div>

                <div className="pf-Works-List-column-section">
                  <a href="#">
                    <img
                      src={IMG + 'list_dummy_photo.png'}
                      width="45"
                      alt="img"
                      / >
                  </a>
                  <p>リゾートホテルのチェックイン後の客室整備・布団敷き 基本和室（約３０部屋程度）での布団敷きの作業です。 </p>
                </div>

                <div className="pf-Works-List-column-footer">
                  <span>時給: 860円</span>
                  <span>17:00~19:30</span>
                </div>
              </li>

              <li className="pf-Works-List-column">
                <div className="pf-Works-List-column-head">
                  <p>ホテル客室整備スタッフ</p>
                  <a href="#">
                    <img
                      src={IMG + 'list_btn_detail.png'}
                      width="40"
                      alt="img"
                      />
                  </a>
                </div>

                <div className="pf-Works-List-column-section">
                  <a href="#">
                    <img
                      src={IMG + 'list_dummy_photo.png'}
                      width="45"
                      alt="img"
                      / >
                  </a>
                  <p>リゾートホテルのチェックイン後の客室整備・布団敷き 基本和室（約３０部屋程度）での布団敷きの作業です。 </p>
                </div>

                <div className="pf-Works-List-column-footer">
                  <span>時給: 860円</span>
                  <span>17:00~19:30</span>
                </div>
              </li>

              <li className="pf-Works-List-column">
                <div className="pf-Works-List-column-head">
                  <p>ホテル客室整備スタッフ</p>
                  <a href="#">
                    <img
                      src={IMG + 'list_btn_detail.png'}
                      width="40"
                      alt="img"
                      />
                  </a>
                </div>

                <div className="pf-Works-List-column-section">
                  <a href="#">
                    <img
                      src={IMG + 'list_dummy_photo.png'}
                      width="45"
                      alt="img"
                      / >
                  </a>
                  <p>リゾートホテルのチェックイン後の客室整備・布団敷き 基本和室（約３０部屋程度）での布団敷きの作業です。 </p>
                </div>

                <div className="pf-Works-List-column-footer">
                  <span>時給: 860円</span>
                  <span>17:00~19:30</span>
                </div>
              </li>
            </ul>

            <div>
              <a
                href="#"
                onClick={this.fadeIn.bind(this)}
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
        </div>

        <footer>
          <p>
            &nbsp;エントリーの際ご利用ください<br />
            「個人情報の取扱いに関する採用応募者同意書」
          </p>
          <a href="#">
            ダウンロード
          </a>
        </footer>
      </article>
    );
  }

  fadeIn(e) {
    e.preventDefault();
    let el = document.getElementById('column');

    el.classList.add('fadeIn');
    el.addEventListener('animationend', clear, false);
    
    function clear() {
      el.removeEventListener('animationend', clear, false);
      el.classList.remove('fadeIn');
    }
  }
}
