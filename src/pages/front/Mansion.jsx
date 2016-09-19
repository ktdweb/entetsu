import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import Parallax from '../../components/Parallax'

export default class MansionDetail extends React.Component {

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
    let IMG = 'imgs/detail/mansion/';

    return (
      <article id="MansionDetail" className="pf-Detail">
        <DocumentTitle title="マンション管理でお困りの方 | 遠鉄アシスト" />

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
            data-depth="0">
          </div>
          
          <div
            id="plx07"
            className="layer"
            data-depth="0">
          </div>
        </div>

        <section>
          <h1 className="effectTitle">地域に溶け込む住まい</h1>
          <div className="effect">
            <p>
              周辺環境に違和感なく溶け込み、人の住まいとしてあり続ける建物。<br />
              そんな中で気持ちよく過ごせる空間。周りとの共存・共栄。<br />
              そんなノウハウを遠鉄アシストはご提供します。
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
            <p value="5" onClick={this.onService.bind(this)} >その他</p>
            <p value="4" onClick={this.onService.bind(this)} >設備管理</p>
            <p value="3" onClick={this.onService.bind(this)} >清掃</p>
            <p value="2" onClick={this.onService.bind(this)} >管理員</p>
            <p value="1" onClick={this.onService.bind(this)} >事務管理</p>
          </div>

          <div className="pf-Detail-services-desc">
            <p className="mgnBtm0"><strong>{this.state.service.title}</strong></p>
            <p>{this.state.service.text}</p>
          </div>
        </section>

        <section>
          <h1 className="effectTitle">遠鉄アシストの取り組み</h1>

          <div className="effect">
            <h3>地域を幅広くサポートする遠鉄グループだからできること。<br /> 
            マンションが担う役割を最大限まで高めます。</h3>
            
            <strong>経験と実績に裏付けられた遠鉄クオリティ</strong>
            <p>
              遠鉄アシストのホームサービス事業は、地域に密着した遠鉄グループの豊富な経験と実績をもとに生まれたサービスです。顧客第一をモットーに、専門スタッフが適材適所で責任を持ってサポート。清掃、設備管理、メンテナンス、機械整備など、マンション管理をトータルで担い、信頼の遠鉄クオリティでお客様のご満足にお応えします。
            </p>
            
            <h3>遠鉄グループの総合力</h3>
            <p>
              弊社ではグループ内の建設業、不動産業と密に連携し、お客様のさまざまなご要望に幅広くお応えします。マンション管理事業の枠を超え、遠鉄グループの総合力を活用して、他にはない力強いサポートを実現します。
            </p>
            
            <strong>顧客第一</strong>
            <p>
              弊社の経営方針は「顧客本位」。お客様からの「ありがとう」のお言葉を最大の喜びと受け止めています。顧客第一の企業風土を大切に育み、今後もたくさんの「ありがとう」に出会いたい、そんな気持ちで取り組んでいます。
            </p>
            
            <strong>緊急時のサービス体制</strong>
            <p>
              夜間・深夜に起こる緊急トラブルにも随時対応。また、大雨や台風などの自然災害が見込まれる場合、関係部署との連携を密に図り対応・対策に務めています。
            </p>
            
            <strong>国交省登録・協会正会員</strong>
            <p>
              遠鉄アシストは、国土交通省から委託を受けて国家資格の試験実施や、業界の基準となっている標準管理規約等を作成している「一般社団法人マンション管理業協会」の正会員です。
            </p>
            
            <strong>いざという時の「保証体制」</strong>
            <p>
              遠鉄アシストが正会員となっている一般社団法人マンション管理業協会は、平成13年8月、国土交通大臣より「マンションの管理の適正化の推進に関する法律」第95条に規定するマンション管理会社の団体（指定法人）に指定されました。協会への加入条件として、直近の決算において自己資本額が資本金額以上であること、営業損失、経常損失、当期損失を計上していないことなど、財務状況の監査を受けると同時に、マンション管理業務実績の有無や、「マン管法（マンションの管理の適正化の推進に関する法律）」を遵守した管理を行っているかどうかなど、一定基準を満たすことが条件となっています。このほか、弊社ではさらに厳格な基準をクリアした保証制度にも加入しており、管理会社の経営破綻による管理組合の金銭的被害の保証、次期管理会社の紹介にも速やかに対応いたします。
            </p>
          </div>
        </section>


        <section className="odd">
          <h1 className="effectTitle">遠鉄アシストの特徴</h1>

          <div className="effect">
            <h3 className="text-right">アフターまで見据えた三位一体の遠鉄クオリティ</h3>
            
            <p>
              遠鉄の不動産と遠鉄アシストが連携し、入居者の皆様の末永い幸せのために、"しっかり造り、きちんと守る"体制を築いています。建物の強度、耐久性を見据えた信頼の構造・工法を採用し、入居後は資産価値の維持と快適な生活を実現すべく、細部にわたって管理を徹底。商品企画販売、品質管理、アフター管理の三位一体体制が生み出す遠鉄クオリティが弊社の強みです。
            
            </p>
            
            <h3>地元の優秀な人材と、地元の協力業者で見守る管理体制</h3>
            <p>
              地域密着だから優秀な人材を確保しています。 いざという時の緊急時も、地元の協力業者との連携をはかり対応しています。
            </p>
          </div>
        </section>

        <section>
          <h1 className="effectTitle">遠鉄アシストのサポート</h1>

          <div className="effect">
            <p>専門の資格を持ったスタッフが、 迅速に対応しているため、安心してご利用頂けます。</p>
            
            <h3>困った時にも安心の24時間365日体制</h3>
            
            <p>日常生活のステージであるマンションは、いざという時も待ったなし。もしもの時には緊急対応が不可欠です。遠鉄アシストでは24時間365日の緊急対応システムを備えるとともに、素早く対応します。</p>
            
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
title: '管理運営がよりスムーズに',
text: '管理組合様のスムーズな管理運営をサポートすべく、会計、出納事務をはじめ、マンションの維持修繕に関する企画、調整業務、理事会・総会支援業務、図書、関連書類の管理等を一括してお引き受けいたします。',
},

{
title: '安全・安心・快適を見据えて',
text: '入居者の皆様が日々、安全・安心・快適に生活できるよう、マンションを訪問される方への対応、ライフラインや設備など各種点検の立ち合いを日常的または定期的に行います。入居者の皆様からのご質問やご相談も承り、必要に応じて管理組合様にご報告いたします。',
},

{
title: '美しく衛生的な居住環境を実現',
text: 'マンションの美観を維持し、清潔で快適な環境を整えるために、マンションの敷地内外や建物、設備などの共用部分の清掃を日常的または定期的に行います。',
},

{
title: '建物設備の異常は迅速に対応',
text: 'マンションの建物や設備の異常をいち早く発見し、トラブルを未然に防ぐために、建物や設備を定期的に点検・検査します。また、これらのデータをもとに、経年劣化を踏まえた修繕や保守の必要性についてご提案します。',
},

{
title: '',
text: 'お客様のニーズに合わせてお部屋の修繕、リフォーム、ハウスクリーニングを行います。また、お部屋を売却（買取含む）又は賃貸されたい方のご相談を遠鉄の不動産で承ります。',
},
]

    this.setState({service: txt[e.target.getAttribute('value')]});
  }
}
