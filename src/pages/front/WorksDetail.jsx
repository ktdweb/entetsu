import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

export default class WorksDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    data = datas[this.props.params.id];
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    let IMG = '/imgs/pages/works/';

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
                src={'/imgs/works/' + data.img}
                width="180"
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
                  <span>時給: {data.wage}</span>
                  <span>{data.time}</span>
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
          <a href="/works">
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
}

let data;
let datas = new Array();

datas[0] = {
  title: 'ホテル客室整備スタッフ',
  detail: 'リゾートホテルのチェックイン後の客室整備・布団敷き・基本和室（約３０部屋程度）での布団敷きの作業です が、時々洋室でのエキストラベッドの準備をして 頂きます。※２～３人１組にて作業',
  location: '浜松市東区',
  time: '17:00~19:30',
  break: '0分',
  wage: '時給: 860円',
  days: '週5日程度',
  holidays: '週休シフト制',
  type: 'パート',
  term: '長期',
  career: '不問',
  selling: '仲の良い楽しい職場です。20~50代の幅広い女性がいます。',
  cert: '普通運転免許',
  desc: 'シフトは融通がききます。',
  img: '001l.jpg'
};

datas[1] = {
  title: 'クリーンスタッフ',
    detail: '遠鉄電車各駅舎での日常清掃（待合室・ホーム・階段・トイレ等）',
    location: '浜松市内各地',
    time: '12:00~16:30　※シフトによる',
    break: '',
    wage: '時給: 830円',
    wage2: '時給830円　※見習期間3ヶ月は、時給-10円',
    days: '',
    holidays: '月10日程度（シフトによる）',
    type: 'パート',
    term: '',
    career: '',
    selling: '女性活躍中　丁寧な研修あり♪',
    cert: '',
    desc: '交通費規定支給、制服貸与',
  img: '002l.jpg'
};

datas[2] = {
  title: 'クリーンスタッフ',
    detail: '遠鉄電車各駅舎での日常清掃（待合室・ホーム・階段・トイレ等）',
    location: '浜松市内各地',
    time: '12:00~16:30　※シフトによる',
    break: '',
    wage: '時給: 830円',
    wage2: '時給830~840円　※見習期間3ヶ月は、時給-10円',
    days: '',
    holidays: '月10日程度（シフトによる）',
    type: 'パート',
    term: '',
    career: '',
    selling: '女性活躍中　丁寧な研修あり♪',
    cert: '',
    desc: '交通費規定支給、制服貸与',
  img: '002l.jpg'
};

datas[3] = {
  title: 'クリーンスタッフ',
    detail: '遠鉄電車各駅舎での日常清掃（待合室・ホーム・階段・トイレ等）',
    location: '浜松市内各地',
    time: '12:00~16:30　※シフトによる',
    break: '',
    wage: '時給: 830円',
    wage2: '時給830~840円　※見習期間3ヶ月は、時給-10円',
    days: '',
    holidays: '月10日程度（シフトによる）',
    type: 'パート',
    term: '',
    career: '',
    selling: '女性活躍中　丁寧な研修あり♪',
    cert: '',
    desc: '交通費規定支給、制服貸与',
  img: '002l.jpg'
};

datas[4] = {
  title: 'A.客室整備　B.客室の布団敷き',
  location: 'ホテルウェルシーズン浜名湖',
  time: 'A.9:00~13:00（終了時間変動有）　B.17:00~19:30（終了時間変動有）※ア　短期・週3日程度勤務も可',
  break: '',
  wage: '時給: 860円',
  wage2: '時給A.860円~　B.875円~　※見習い期間3ヶ月は時給-10円　※7/25～8/31時給50円UP　※アは時給A.820円~　B.830円~',
  days: '',
  holidays: '月8日程度（シフトによる）',
  type: 'パート・アルバイト',
  term: '長期または1ヵ月程度の短期もOK',
  career: '',
  selling: '女性活躍中　短期も同時募集！　7/25～8/31時給50円UP',
  cert: '',
  desc: '交通費規定支給、車通勤可、制服貸与',
  img: '002l.jpg'
};

datas[5] = {
  title: '駐車場管理業務（浜松市駅南駐車場）',
  detail: '街中の駐車場で、売上金やサービス券の回収・集計、駐車場機械操作、車両誘導などをするお仕事です。未経験者歓迎！',
  location: '浜松市街中',
  time: '5:45~20:00（シフト制）　例：5:45~15:00、10:00~17:30、11:00~19:00など',
  break: '60分',
  wage: '時給: 800円',
  days: '週3日程度',
  holidays: 'シフト制',
  type: 'アルバイト',
  term: '長期または1ヵ月程度の短期もOK',
  career: '不問',
  selling: '60代の男性多数活躍中！',
  cert: '普通運転免許',
  desc: '交通費規定支給、車通勤可、制服貸与、研修有り',
  img: '003l.jpg'
};
