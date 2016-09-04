import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import WorkStore from '../../stores/WorkStore'
import WorkActions from '../../actions/WorkActions'

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

  componentDidMount() {}

  render() {
    let IMG = '/imgs/pages/works/';
    let data = this.state.works[0];

    for (let i = 0; i < this.state.works.length; i++) {
      if (this.state.works[i].id == this.props.params.id) {
        data = this.state.works[i];
      }
    }

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
                src={'/imgs/works/' + data.img + 'l.jpg'}
                width="180"
                height="180"
                alt="img"
                />

              <button
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
                  >担当者からすぐ連絡を希望する</button>
                  もしくは…
                  <button
                  >メールにて連絡を希望する</button>
                </div>
              </div>
            </div>

            <div className="pf-Works-Detail-column">
              <div className="pf-Works-Detail-column-head">
                <p>{data.title}</p>
              </div>

              <div className="pf-Works-Detail-column-section">
                <div>
                  <span>時給: {data.abbr_wage}円</span>
                  <span>{data.abbr_time}</span>
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
          <a href="/works/cateogry/7">
            <button>似た仕事を検索</button>
          </a>
          <a href="/works">
            <button>戻る</button>
          </a>
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
              電話番号: 012-333-4444<br />
              メールアドレス: info@example.com
            </div>

            <p>
              弊社スタッフより、お電話にて1営業日中にご連絡させていただきます。<br />
その際にご不明な点などお気軽にお電話口にてお話し下さい。<br />
また、あわせて会員情報も登録されます。
            </p>

            <p>
              以上の内容でお間違いなければ「電話にて連絡を希望する」を<br />クリックしてください。
            </p>

            <button>電話にて連絡を希望する</button>
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
              電話番号: 012-333-4444<br />
              メールアドレス: info@example.com
            </div>

            <p>
              弊社スタッフより、お仕事のご紹介や、<br />
              ご都合のご確認として、<br />
              メールにてご連絡させていただきます。<br />
また、あわせて会員情報も登録されます。
            </p>

            <p>
              以上の内容でお間違いなければ「メールにて連絡を希望する」を<br />クリックしてください。
            </p>

            <button>メールにて連絡を希望する</button>
          </div>
        </div>
      </article>
    );
  }

  enableModal() {
    let el = document.getElementById('modal');
    el.classList.toggle('enable');

    let height = document.documentElement.scrollHeight || document.body.scrollHeight;
    el.style.height = height + 'px'; 
  }

  enableModal2() {
    let el = document.getElementById('modal2');
    el.classList.toggle('enable');

    let height = document.documentElement.scrollHeight || document.body.scrollHeight;
    el.style.height = height + 'px'; 
  }

  disableModal() {
    let el = document.getElementById('modal');
    el.classList.toggle('enable');
  }

  disableModal2() {
    let el = document.getElementById('modal2');
    el.classList.toggle('enable');
  }

  updateState() {
    let res = WorkStore.read();
    let total = res.length;

    this.setState({
      works: res,
      total: total
    });
  }
}
