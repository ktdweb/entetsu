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
  }

  componentWillUnmount() {
    this.parallax.destroy();
  }

  render() {
    let IMG = 'imgs/detail/driving/';

    return (
      <article id="Driving" className="pf-Detail">
        <DocumentTitle title="遠鉄アシスト | 会社概要" />

        <div
          id="plx01"
          className="layer"
          data-depth="2">
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
          <img
            src={IMG + 'bg_detail.png'}
            width="100%"
            alt="img"
            />
        </div>

        <div
          id="plx03"
          className="layer"
          data-depth="2">
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
          data-depth="3">
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
          data-depth="2">
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
          data-depth="3">
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
          data-depth="2">
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
          data-depth="3">
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
          data-depth="0">
          <img
            src={IMG + 'bg_header.jpg'}
            width="100%"
            alt="img"
            />
        </div>

        <div
          id="plx07"
          className="layer"
          data-depth="0">
          <img
            src={IMG + 'bg_footer.jpg'}
            width="100%"
            alt="img"
            />
        </div>

        <section>
          <h1>子どもたちのヒーローは、私でした。</h1>
          <p>
            ドライバー歴30年。転職したのは5年前だった。<br />
            長距離ドライバーから、学校の送迎ドライバーへ。
            孤独な仕事は、人とふれ合う仕事になった。<br />
<br />
            子どもたちの笑顔と成長。すぐに天職だと気付いた。<br />
            子どもの憧れは身近にある。<br />
            大きなバスを運転する私は、
            いつの間にか子どもたちのヒーローになった。<br />
            活き方で生き方は、変わる。
            新しい自分を探そう、スタートを切ろう。
          </p>
        </section>

        <section className="odd reverse">
          <h1>遠鉄アシストのサービス</h1>
          <p>
            遠鉄アシストならではのきめ細かいサービスと、<br />
            まかせて安心のトータルサポートでお応えします。
          </p>

          <div id="pf-Detail-services">
            <p value="1" onClick={this.onService.bind(this)} >役員車</p>
            <p value="2" onClick={this.onService.bind(this)} >スクールバス<br />部活</p>
            <p value="3" onClick={this.onService.bind(this)} >幼稚園</p>
            <p value="4" onClick={this.onService.bind(this)} >病院・介護</p>
            <p value="5" onClick={this.onService.bind(this)} >企業・工場</p>
          </div>

          <div id="pf-Detail-services">
            <p value="6" onClick={this.onService.bind(this)} >ホテル<br />レストラン</p>
            <p value="7" onClick={this.onService.bind(this)} >官公庁</p>
          </div>

          <div id="pf-Detail-services-desc">
            <p className="mgnBtm0"><strong>{this.state.service.title}</strong></p>
            <p>{this.state.service.text}</p>
          </div>
        </section>

        <section>
          <h1>遠鉄アシストの特徴</h1>

          <h3>遠鉄グループ輸送部門の実績とノウハウ、運転士の確かな安全技術、<br />
笑顔の接客・接遇で、多くのお客様から信頼をいただいております。</h3>

          <strong>地元に根付いた遠鉄グループだから出来ること</strong>
          <p>
            母体が遠州鉄道株式会社だからこそ、70年以上の旅客運送のノウハウの蓄積を生かし、安全運転のための運転士研修、健康管理体制を取っており、サービス向上のための接客接遇教育を欠かしておりません。 また、グループ各社の総合力を結集し、給油・整備・自動車保険・万が一の事故対応から代車の手配まで、お客様へ安心と満足をお届けする体制をとっております。
          </p>
        </section>

        <section className="odd">
          <h1 className="text-right">導入事例</h1>

          <p className="text-right">運行管理事業の導入事例です。 <br />お客様のニーズに合わせて、臨機応変に問題を解決いたします。</p>
        </section>

        <section>
          <h1>安心・安全・快適への取り組み</h1>

          <h3>お客様の安全・安心・快適をモットーに、遠鉄アシストでは 運転士の安全教育を徹底。<br />
             経験と実績に甘んじることなく、 技術と知識の強化を図っています。</h3>

          <strong>定期的な研修会を行い、常に高いクオリティを提供します。</strong>
          <p>
            安全運行の実施と接客サービスの向上を目的として、定期的に年２回の運転士の研修会を実施しております。 もしも事故やクレームがあった場合には、運転士全員で情報を共有し、意識を共有し、技術･マナー･意識の見直しをさせています。
          </p>

          <strong>研修会の内容</strong>
          <p>
            ・運転技術向上のためのケーススタディ<br />
            ・サービス向上のための接客・接遇教育<br />
            ・実際にあった事故をもとにしたグループディスカッション
          </p>

          <strong>安全・安心・快適を生む管理の徹底</strong>
          <p>
            遠鉄グループのノウハウを活かし、安全・安心・快適の管理を行っています。遠州鉄道株式会社が行う旅客運送事業のノウハウを生かし、他社より一歩進んだ管理を行なっております。 運転士は出勤時には必ずアルコールのチェックを行い、月に一度は健康状態を確認しております。また、ご相談頂ければ、車両にドライブレコーダーを搭載させていただき、リアルタイムでの勤務状態の確認、万が一の事故の際の記録等を行っております。
          </p>
        </section>
      </article>
    );
  }

  onService(e) {
      let txt = [
{
title: '',
text: ''
},

{
title: '大切な役員の方を安全･安心にお迎えいたします。',
text: '企業の役員様に安全で快適な運行をお届けいたします。運転士にはもちろん運転技術だけでなく、お客様へのマナー、守秘義務の徹底等、ハイレベルな教育を施して運行を行います。',
},

{

title: '通学の送迎だけでなく、部活動の遠征などにも幅広く対応いたします',
text: '貴校の大切な生徒様を、安全･確実に学校までお送りいたします。通学も学校生活の一部です。快適に学校に通うためには、安全･確実な運行だけでなく、運転士の人柄や決め細やかなサービスも大切な要素だと考え、たくさんの思い出を一緒に作りあげていきたいと思います。',
},

{
title: '園児も先生も保護者様も、みなさま笑顔の安全運行',
text: '元気いっぱいの園児の皆さんは、明るい未来の象徴です。大切な命をお預かりするためにも、運転士に対して徹底した技術指導・健康管理を指導。明るい笑顔と挨拶で、安心安全な運行はもちろんの事保護者様にも地域の皆様にも配慮したサービスを提供いたします。',
},
{
title: '笑顔のお出迎え。足が悪い方にも配慮した運転',
text: '患者様に負担をかけないように、真心を込めて業務を行います。患者様の必要不可欠な移動手段です。車に乗車することが負担に感じたりや不安にならない、快適な乗車時間のご提供に務めます。',
},

{
title: 'お客様の利便性の向上に尽力いたします',
text: 'これからお仕事に向かわれるお客様のモチベーションを保つように安全・快適な運転をご提供いたします。従業員様用の駐車スペースを確保しなくても済み、時間に沿った運行を行いますので、御社の効率化・コストダウンに効果的な業務を行います。また、御社のお車で社員旅行や研修などのご要望にも対応可能です。',
},

{
title: '時間を守り、お店までしっかり運転します',
text: '冠婚葬祭、さまざまなシーンに対応した運行を、お客様にご提供いたします。お客様を安心・安全な運行で御社までお届けする事が、更なる付加価値を高める重要な要素だと考えます。',
},

{
title: 'どんなときでも安定した運行業務を提供いたします',
text: '首長の専用車の運行から、地域のコミュニティーバスの運行まで。地域に根ざした遠鉄グループの弊社だからこそ、地域のお客様のために。地域密着の運行に携わらせていただきます。',
},
]

    this.setState({service: txt[e.target.getAttribute('value')]});
  }
}
