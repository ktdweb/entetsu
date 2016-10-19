import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import Parallax from '../../components/Parallax'

export default class UnkouDetail extends React.Component {

  constructor(props) {
    super(props);

    this.state = { service: { title: '', text: '' } };
  }

  componentDidMount() {
    this.parallax = new Parallax();
    this.parallax.start();

    /* 文字のエフェクト*/
    this.h1s = document.getElementsByClassName(
      'effectTitle'
    );
    this.ps  = document.getElementsByClassName(
      'effect'
    );

    this.h1s[0].classList.add('posi');
    this.ps[0].classList.add('posi');

    window.addEventListener(
      'scroll',
      this.showElement.bind(this)
    );
  }

  componentWillUnmount() {
    this.parallax.destroy();

    window.removeEventListener(
      'scroll',
      this.getScrollTop
    );
  }

  render() {
    let IMG = 'imgs/detail/driving/';

    return (
      <article id="DrivingDetail" className="pf-Detail">
        <DocumentTitle title="運転・送迎でお困りの方 | 遠鉄アシスト" />

        <div
          id="plx01"
          className="layer"
          data-depth="1">
          <img
            src={IMG + 'bg.jpg'}
            width="100%"
            alt="img"
            />
        </div>

        <div
          id="plx02"
          className="layer"
          data-depth="0">
        </div>

        <div className="wrapper">
          <div
            id="plx03"
            className="layer"
            data-depth="3">
            <img
              src={IMG + 'hex01l.png'}
              width="210"
              height="340"
              alt="img"
              />
          </div>
          
          <div
            id="plx03b"
            className="layer"
            data-depth="2">
            <img
              src={IMG + 'hex01r.png'}
              width="210"
              height="340"
              alt="img"
              />
          </div>
          
          <div
            id="plx04"
            className="layer"
            data-depth="3">
            <img
              src={IMG + 'hex02l.png'}
              width="210"
              height="340"
              alt="img"
              />
          </div>
          
          <div
            id="plx04b"
            className="layer"
            data-depth="2">
            <img
              src={IMG + 'hex02r.png'}
              width="210"
              height="340"
              alt="img"
              />
          </div>
          
          <div
            id="plx05"
            className="layer"
            data-depth="3">
            <img
              src={IMG + 'hex03l.png'}
              width="210"
              height="340"
              alt="img"
              />
          </div>
          
          <div
            id="plx05b"
            className="layer"
            data-depth="2">
            <img
              src={IMG + 'hex03r.png'}
              width="210"
              height="340"
              alt="img"
              />
          </div>
          
          <div
            id="plx06"
            className="layer"
            data-depth="1">
          </div>
          
          <div
            id="plx07"
            className="layer"
            data-depth="1">
          </div>
        </div>

        <section>
          <h1 className="effectTitle">子どもたちのヒーローは、私でした。</h1>
          <div className="effect">
            <p>
              ドライバー歴30年。転職したのは5年前だった。<br />
              長距離ドライバーから、学校の送迎ドライバーへ。<br />
              孤独な仕事は、人とふれ合う仕事になった。<br />
            
              子どもたちの笑顔と成長。すぐに天職だと気付いた。<br />
              子どもの憧れは身近にある。<br />
              大きなバスを運転する私は、
              いつの間にか子どもたちのヒーローになった。<br />
              活き方で生き方は、変わる。
              新しい自分を探そう、スタートを切ろう。
            </p>
          </div>
        </section>

        <section className="odd reverse">
          <h1 className="text-right">遠鉄アシストのサービス</h1>
          <p className="text-right">
            遠鉄アシストならではのきめ細かいサービスと、<br />
            まかせて安心のトータルサポートでお応えします。
          </p>

          <div className="pf-Detail-services">
            <p value="5" onClick={this.onService.bind(this)} >企業・工場</p>
            <p value="4" onClick={this.onService.bind(this)} >病院・介護</p>
            <p value="3" onClick={this.onService.bind(this)} >幼稚園</p>
            <p value="2" onClick={this.onService.bind(this)} >スクールバス<br />部活</p>
            <p value="1" onClick={this.onService.bind(this)} >役員車</p>
          </div>

          <div className="pf-Detail-services">
            <p value="7" onClick={this.onService.bind(this)} >官公庁</p>
            <p value="6" onClick={this.onService.bind(this)} >ホテル<br />レストラン</p>
          </div>

          <div className="pf-Detail-services-desc">
            <p className="mgnBtm0"><strong>{this.state.service.title}</strong></p>
            <p dangerouslySetInnerHTML={{ __html: this.state.service.text}} />
          </div>
        </section>

        <section>
          <h1 className="effectTitle">遠鉄アシストの特徴</h1>

          <div className="effect">
            <h3>遠鉄グループ輸送部門の実績とノウハウ、運転サービス士の<br />
              確かな安全技術、笑顔の接客・接遇で、<br />
              多くのお客様から信頼をいただいております。</h3>
            
            <strong>地元に根付いた遠鉄グループだから出来ること</strong>
            <p>
              母体が遠州鉄道株式会社だからこそ、70年以上の旅客運送のノウハウの蓄積を生かし、安全運転のための運転サービス士研修、健康管理体制を取っており、サービス向上のための接客接遇教育を欠かしておりません。 また、グループ各社の総合力を結集し、給油・整備・自動車保険・万が一の事故対応まで、お客様へ安心と満足をお届けする体制を整えております。
            </p>
          </div>
        </section>

        <section className="odd">
          <h1 className="effectTitle">導入事例</h1>

          <div className="effect">
            <p className="text-right">運行管理事業の導入事例です。 <br />お客様のニーズに合わせて、臨機応変に対応いたします。</p>

            <strong>役員車</strong>
              <p>車両の点検、整備、清掃を入念に行い、当日のスケジュールを事前にきちんと把握した上で、支社回り、取引先との会合・会談が行われる目的地へ安全に運行し、ご自宅やご宿泊先までお送りいたします。業務後は車両の点検を行い、報告書を提出します。</p>

              <strong>スクールバス</strong>
              <p>車両の点検、整備、清掃を入念に行い、利便性を考えた運行コースと停車場所を設定します。生徒様を元気な挨拶と笑顔でお迎えし、安全かつ穏やかな運転を励行します。下校時も同様に対応し、挨拶を徹底して生徒の健全育成をサポート。さらに課外授業や部活の遠征も承ります。</p>

              <strong>病院</strong>
              <p>運転サービス士が施設へ出勤し、車両の点検、整備、清掃を行います。担当の方と一緒に当日送迎サービスが必要な利用者様を確認し、それぞれのご自宅までお迎えに上がります。走行中や車いす乗降リフト操作時は、利用者様の心身に負担がかからないよう安全運転を励行し、帰宅時も同様に移動をサポートいたします。</p>

              <strong>ホテル・飲食店</strong>
              <p>運転サービス士がお店へ出勤し、車両の点検、整備、清掃を行います。再度、場所と人数を確認し、お迎え先へ向かいます。お店まで安全運転で快適にお送りします。お帰りの際は社内の清掃や空調を整えてお客様をお迎えし、飲酒後のお客様に配慮した、穏やかなハンドル操作で安全にお送りします。</p>
          </div>
        </section>

        <section>
          <h1 className="effectTitle">安心・安全・快適への取り組み</h1>

          <div className="effect">
            <h3>お客様の安全・安心・快適をモットーに、<br />
              遠鉄アシストでは 運転サービス士の安全教育を徹底。<br />
              経験と実績に甘んじることなく、 技術と知識の強化を図っていきます。</h3>
            
            <strong>定期的な研修会を行い、常に高いクオリティを提供します。</strong>
            <p>
              安全運行の実施と接客サービスの向上を目的として、定期的に年２回の運転サービス士の研修会を実施しております。 万が一事故やクレームがあった場合には、運転サービス士全員で情報を共有し、技術･マナー･意識の見直しをさせていきます。
            </p>
            
            <strong>研修会の内容</strong>
            <p>
              ・運転技術向上のためのケーススタディ<br />
              ・サービス向上のための接客・接遇教育<br />
              ・実際にあった事故事例をもとにしたグループディスカッション
            </p>
            
            <strong>安全・安心・快適を生む管理の徹底</strong>
            <p>
              遠鉄グループのノウハウを活かし、安全・安心・快適の管理を行っています。遠州鉄道株式会社が行う旅客運送事業のノウハウを生かし、他社より一歩進んだ管理を行っております。 運転サービス士は出勤時には必ずアルコールのチェックを行い、月に一度は健康状態を確認しております。また、ご相談頂ければ、車両にドライブレコーダーを搭載させていただき、リアルタイムでの勤務状態の確認、万が一の事故の際の記録等を行っております。
            </p>
          </div>
        </section>
      </article>
    );
  }

  showElement() {
    for (let i = 0; i < this.h1s.length; i++) {
      let h1 = this.h1s[i].getBoundingClientRect().top;

      if (window.innerHeight > h1 && i != 0) {
        this.h1s[i].classList.add('posi');

        if (this.h1s[i].flag != true) {
          this.h1s[i].flag = true;
          this.oneByOne(
            this.h1s[i],
            this.h1s[i].innerHTML,
            0
          );
        }
      }
    }

    for (let i = 0; i < this.ps.length; i++) {
      let ps = this.ps[i].getBoundingClientRect().top;

      if (window.innerHeight > ps) {
        this.ps[i].classList.add('posi');
      }
    }
  }

  oneByOne(e, txt, cnt) {
    // e.innerHTML = txt.substr(0, cnt);
    // let now = e.innerHTML; 
    // cnt++;

    // if (txt.length >= cnt) {
    //   setTimeout(this.oneByOne.bind(this, e, txt, cnt), 60);
    // }
  }

  getScrollTop() {
    let body = window.document.body;
    let html = window.document.documentElement;
    let scrollTop = body.scrollTop || html.scrollTop;

    return scrollTop;
  }

  onService(e) {
      let txt = [
{
title: '',
text: ''
},

{
title: '大切な役員の方を安全･安心にお迎えいたします。',
  text: '企業の役員様に安全で快適な運行サービスをお届けいたします。<br />運転サービス士にはもちろん運転技術だけでなく、お客様へのマナー、守秘義務の徹底等、<br />ハイレベルな教育を施して運行を行います。',
},

{

title: '通学の送迎だけでなく、部活動の遠征などにも幅広く対応いたします',
  text: '貴校の大切な生徒様を、安全･確実に学校までお送りいたします。<br />通学も学校生活の一部です。快適に学校に通うためには、<br />運転サービス士の人柄やきめ細やかなサービスも大切な要素だと考え、<br />たくさんの思い出を一緒に作りあげていきたいと思います。',
},

{
title: '園児も先生も保護者様も、みなさま笑顔の安全運行',
  text: '元気いっぱいの園児の皆さんは、明るい未来の象徴です。<br />大切な命をお預かりするためにも、運転サービス士に対して徹底した技術指導・健康管理を指導。<br />明るい笑顔と挨拶で、安心安全な運行はもちろんのこと保護者様にも、<br />地域のみなさまにも配慮したサービスを提供いたします。',
},
{
title: '笑顔のお出迎え。高齢者に配慮した運転',
  text: '患者様には必要不可欠な移動手段です。<br />ご負担をかけないように、真心を込めて業務を行い、快適な乗車時間のご提供に努めます。',
},

{
title: 'お客様の利便性の向上に尽力いたします',
  text: 'これからお仕事に向かわれるお客様のモチベーションを保つように<br />安全・快適な運転をご提供いたします。通勤車両の駐車スペースを確保しなくても済み、時間に沿った運行を行いますので、御社の効率化・コストダウンに効果的な業務を行います。また、御社のお車での研修時送迎などのご要望にも対応できます。',
},

{
title: '大切な時間を守り、お店まで安全運転を励行します',
  text: '冠婚葬祭、さまざまなシーンに対応した運行を、お客様にご提供いたします。<br />お客様を安心・安全な運行で御社までお届けすることが、<br />更なる付加価値を高める重要な要素だと考えます。',
},

{
title: 'どんなときでも安定した運行業務を提供いたします',
  text: '特別職公用車の運行から、地域のコミュニティーバスの運行まで。<br />地域に根ざした遠鉄グループの弊社だからこそできる、<br />運行に携わらせていただきます。',
},
]

    this.setState({service: txt[e.target.getAttribute('value')]});
  }
}
