import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

export default class WorksDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    let IMG = 'imgs/pages/works/';

    return (
      <article id="WorksDetail">
        <DocumentTitle title="仕事を探す | 遠鉄アシスト" />

        <div className="pf-Works-Detail">
          <div>
            <div className="pf-Works-Detail-tab">
              検索結果
            </div>

            <div className="pf-Works-Detail-login">
              <img
                src={IMG + 'detail_dummy_photo.png'}
                width="180"
                alt="img"
                />

              <button
                onClick={this.enableModal.bind(this)}
              >ログイン</button>

              <p>もしくは…</p>

              <div>
                <dl>
                  <dt>名前</dt>
                  <dd>
                    <input
                      type="text"
                      />
                  </dd>
                </dl>

                <dl>
                  <dt>フリガナ</dt>
                  <dd>
                    <input
                      type="text"
                      />
                  </dd>
                </dl>

                <dl>
                  <dt>電話番号</dt>
                  <dd>
                    <input
                      type="text"
                      />
                  </dd>
                </dl>

                メールアドレス
                <input
                  type="text"
                  />

                メールアドレス再入力
                <input
                  type="text"
                  />

                <div className="text-center">
                  <button
                    onClick={this.enableModal.bind(this)}
                  >担当者からすぐ連絡希望する</button>
                  もしくは…
                  <button
                    onClick={this.enableModal2.bind(this)}
                  >応募する</button>
                </div>
              </div>
            </div>

            <div className="pf-Works-Detail-column">
              <div className="pf-Works-Detail-column-head">
                <p>ホテル客室整備スタッフ</p>
              </div>

              <div className="pf-Works-Detail-column-section">
                <div>
                  <span>時給: 860円</span>
                  <span>17:00~19:30</span>
                </div>

                <div>
                  <dl>
                    <dt>仕事の内容</dt>
                    <dd>{data.detail}</dd>
                  </dl>

                  <dl>
                    <dt>勤務地</dt>
                    <dd>{data.location}</dd>
                  </dl>

                  <dl>
                    <dt>時間</dt>
                    <dd>{data.time}</dd>
                  </dl>

                  <dl>
                    <dt>休憩時間</dt>
                    <dd>{data.break}</dd>
                  </dl>

                  <dl>
                    <dt>給与</dt>
                    <dd>{data.wage}</dd>
                  </dl>

                  <dl>
                    <dt>日数</dt>
                    <dd>{data.days}</dd>
                  </dl>

                  <dl>
                    <dt>休日</dt>
                    <dd>{data.holidays}</dd>
                  </dl>

                  <dl>
                    <dt>雇用形態</dt>
                    <dd>{data.type}</dd>
                  </dl>

                  <dl>
                    <dt>雇用期間</dt>
                    <dd>{data.term}</dd>
                  </dl>

                  <dl>
                    <dt>学歴</dt>
                    <dd>{data.career}</dd>
                  </dl>

                  <dl>
                    <dt>職場の雰囲気</dt>
                    <dd>{data.selling}</dd>
                  </dl>

                  <dl>
                    <dt>資格</dt>
                    <dd>{data.cert}</dd>
                  </dl>

                  <dl>
                    <dt>備考</dt>
                    <dd>{data.desc}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pf-Works-Detail-footer">
          <Link to="works">
            <button>似た仕事を検索</button>
          </Link>
          <Link to="works">
            <button>戻る</button>
          </Link>
        </div>

        <div
          id="modal"
          className="modal"
          onClick={this.disableModal.bind(this)}
          >
          <div>
            <h1>応募内容のご確認</h1>
            <div>
              名前:  山田太郎<br />
              フリガナ: ヤマダタロウ<br />
              電話番号: 012-333-4444
            </div>

            <p>
              弊社スタッフより、お仕事のご紹介や、<br />
              ご都合のご確認として、<br />
              お電話・メールにてご連絡させていただきます。<br />
              また、あわせて会員情報も登録されます。
            </p>

            <p>
              以上の内容でお間違いなければ「登録後応募する」クリックしてください。
            </p>

            <button>登録後応募する</button>
          </div>
        </div>

        <div
          id="modal2"
          className="modal"
          onClick={this.disableModal2.bind(this)}
          >
          <div>
            <h1>応募内容のご確認</h1>
            <div>
              名前:  山田太郎<br />
              フリガナ: ヤマダタロウ<br />
              メールアドレス: info@example.com
            </div>

            <p>
              弊社スタッフより、お仕事のご紹介や、<br />
              ご都合のご確認として、<br />
              メールにてご連絡させていただきます。
            </p>

            <p>
              以上の内容でお間違いなければ「応募する」クリックしてください。
            </p>

            <button>応募する</button>
          </div>
        </div>
      </article>
    );
  }

  enableModal() {
    let el = document.getElementById('modal');
    el.classList.toggle('enable');
  }

  enableModal2() {
    let el = document.getElementById('modal2');
    el.classList.toggle('enable');
  }

  disableModal() {
    let el = document.getElementById('modal');
    el.classList.toggle('enable');
  }

  disableModal2() {
    let el = document.getElementById('modal2');
    el.classList.toggle('enable');
  }
}

let data = {
  detail: 'リゾートホテルのチェックイン後の客室整備・布団敷き・基本和室（約３０部屋程度）での布団敷きの作業です が、時々洋室でのエキストラベッドの準備をして 頂きます。※２～３人１組にて作業',
  location: '浜松市東区',
  time: '17:00~19:30',
  break: '0分',
  wage: '時給860円',
  days: '週5日程度',
  holidays: '週休シフト制',
  type: 'パート',
  term: '長期',
  career: '不問',
  selling: '仲の良い楽しい職場です。20~50代の幅広い女性がいます。',
  cert: '普通運転免許',
  desc: 'シフトは融通がききます。'
}
