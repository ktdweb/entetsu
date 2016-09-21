import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import Parallax from '../../components/Parallax'

export default class BuildingDetail extends React.Component {

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
    let IMG = 'imgs/detail/building/';

    return (
      <article id="BuildingDetail" className="pf-Detail">
        <DocumentTitle title="ビル管理でお困りの方 | 遠鉄アシスト" />

        <div
          id="plx01"
          className="layer"
          data-depth="1">
          <img
            src={IMG + 'bg.jpg'}
            width="120%"
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
        
        <section>
          <h1 className="effectTitle">機能するビルディング</h1>
          <div className="effect">
          <p>
            仕事に集中できる環境。<br />
            始業ベルとともに、一斉にスタートする職場には、<br />
            なにが求められているか?<br />
            オフィスとして求められるもの全てを<br />
            遠鉄アシストはサポートします。
          </p>
          </div>
        </section>

        <section id="h01" className="odd reverse">
          <h1 className="text-right">遠鉄アシストのサービス</h1>
          <p className="text-right">
            遠鉄アシストならではのきめ細かいサービスと、<br /> 
            まかせて安心のトータルサポートでお応えします。
          </p>

          <div className="pf-Detail-services">
            <p value="4" onClick={this.onService.bind(this)} >保安警備</p>
            <p value="3" onClick={this.onService.bind(this)} >駐車場管理</p>
            <p value="2" onClick={this.onService.bind(this)} >環境衛生管理</p>
            <p value="1" onClick={this.onService.bind(this)} >設備管理</p>
          </div>

          <div className="pf-Detail-services">
            <p value="6" onClick={this.onService.bind(this)} >その他</p>
            <p value="5" onClick={this.onService.bind(this)} >管理員業務</p>
          </div>

          <div className="pf-Detail-services-desc">
            <p className="mgnBtm0"><strong>{this.state.service.title}</strong></p>
            <p dangerouslySetInnerHTML={{ __html: this.state.service.text}} />
          </div>
        </section>

        <section id="h02">
          <h1 className="effectTitle">遠鉄アシストの取り組み</h1>

          <div className="effect">
          <h3>経験と実績に裏付けられた遠鉄クオリティ</h3>
          <p>
            遠鉄アシストのビル管理事業は、地域に密着した遠鉄グループの豊富な経験と実績をもとに生まれたサービスです。顧客第一をモットーに、徹底した教育研修を受けた専門スタッフが適材適所で責任を持ってサポート。清掃、設備管理、環境衛生管理、メンテナンス、特殊作業、警備など、ビル管理をトータルで担い、信頼の遠鉄クオリティでお客様のご満足にお応えします。
          </p>

          <strong>遠鉄グループの総合力</strong>
          <p>
            弊社ではグループ内の建設業、不動産業と密に連携し、お客様のさまざまなご要望に幅広くお応えします。ビル管理事業の枠を超え、遠鉄グループの総合力を活用して、他にはない力強いサポートを実現します。
          </p>

          <strong>顧客第一</strong>
          <p>
            弊社は経営方針に「顧客満足」を掲げ、お客様からの「ありがとう」のお言葉を最大の喜びと受け止めています。顧客第一の企業風土を大切に育み、今後もたくさんの「ありがとう」に出会いたいと願っています。
          </p>

          <strong>緊急時のサービス体制</strong>
          <p>夜間・深夜に起こる緊急トラブルにも随時対応します。<br />また、大雨や台風などの自然災害が見込まれる場合、関係部署との連携を密に図り対応・対策に努めます。</p>
          </div>
        </section>

        <section  id="h03" className="odd">
          <h1 className="effectTitle">遠鉄アシストの特徴</h1>

          <div className="effect">
          <p className="text-right">遠鉄アシストの組織力が、ビル管理業務を円滑にバックアップします。</p>

          <h3>アフターまで見据えた三位一体の遠鉄クオリティ</h3>

          <p className="text-right">
            遠鉄の不動産と遠鉄アシストが連携し、入居者の皆様の末永い幸せのために、"しっかり造り、きちんと守る"体制を築いています。建物の強度、耐久性を見据えた信頼の構造・工法を採用し、入居後は資産価値の維持と快適な生活を実現すべく、細部にわたって管理を徹底。商品企画販売、品質管理、アフター管理の三位一体体制が生み出す遠鉄クオリティが弊社の強みです。
          </p>

          <h3>地元の優秀な人材と、地元の協力業者で見守る管理体制</h3>
          <p className="text-right">
            地域密着だから優秀な人材を確保しています。 いざという時の緊急時も、地元の協力業者との連携をはかり対応しています。
          </p>
          </div>
        </section>

        <section id="h04">
          <h1 className="effectTitle">遠鉄アシストのサポート</h1>

          <div className="effect">
          <p>専門の資格を持ったスタッフが、 迅速に対応。安心してご利用頂けます。</p>

          <h3>困った時にも安心の24時間365日体制</h3>

          <p>日常生活のステージであるビル・マンションは、いざという時も待ったなし。日頃から防犯、防災を徹底し、もしもの時には緊急対応が不可欠です。遠鉄アシストでは24時間365日の緊急対応システムを備えるとともに、素早く対応します。</p>

          <h3>登録・認定</h3>
          <p>
            ・建築物環境衛生総合管理業 <br />
            ・建築物飲料水貯水槽清掃業 <br />
            ・建築物ねずみ昆虫等防除業 <br />
            ・マンション管理業 <br />
            ・警備業
          </p>

          <h3>主な技術有資格者</h3>
          <p>
            ・建築物環境衛生管理技術者<br />
            ・消防設備士<br />
            ・衛生管理者<br />
            ・空気環境測定実施者<br /> 
            ・統括管理者<br />
            ・貯水槽清掃作業監督者<br />
            ・清掃作業監督者<br />
            ・電気工事施工管理技士<br />
            ・ビルクリーニング技能士<br />
            ・警備員指導教育責任者<br />
            ・病院清掃受託責任者<br />
            ・空調給排水監督者<br />
            ・防除作業監督者<br />
            ・排水管清掃作業監督者<br />
            ・ボイラー技士<br />
            ・建築設備検査資格者<br /> 
            ・自衛消防業務<br />
            ・電気工事士<br />
            ・電気主任技術者<br />
            ・管理業務主任者<br />
            ・危険物取扱者<br />
            ・冷凍機械責任者<br />
            ・防火管理者<br />
            ・消防設備点検資格者
          </p>

          <p>
            ※上記のほか、多くの資格保有者が
            ビルの保守・管理に努めています。
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
title: '日常の保守と長期的な展望に立った管理業務を行います',
  text: '常に快適な空間の維持に心掛け、ビルの総合管理業として、多様化するニーズに柔軟に対応。<br />安全・安心・快適なサービスの提供により、お客様の満足度を高めます。',
},

{
title: '安心・清潔な建物環境を提供いたします',
  text: 'ビル管理法などの法的基準に基づき、<br />測定・点検を実施し、建物の快適性・安全性を維持管理いたします。',
},

{
title: '安全を基本に、接客・接遇面でもご満足いただけます',
  text: '安全で効率的な駐車場運営と付加価値の高い接客サービスで対応。<br />お客様に安心して気持ちよくご利用いただける駐車場であることを目指し、<br />行き届いた駐車場管理を行います。',
},

{
title: '働く皆様と財産の安全を見守ります',
  text: 'リスクマネジメント意識が高まる現在、お客様と利用者の生命・財産の安全を確保するため、<br />高いモラルと信頼性のある保安警備技術で皆様の安全をしっかり見守ります。',
},

{
title: '安全・安心・快適を見据えて',
  text: '入居者の皆様が日々、安全・安心・快適に生活できるよう、マンションを訪問される方への対応、<br />ライフラインや設備など各種点検の立ち合いを日常的または定期的に行います。<br />入居者の皆様からのご質問やご相談も承り、必要に応じて管理組合様にご報告いたします。',
},

{
title: '物品販売やリースについても承ります',
  text: 'ホスピタリティーを重視し、常に快適な環境でお客様を迎えるため、<br />マットリース、清掃用洗剤などを提供。使用環境や使用頻度などに応じて<br />最適な物品をご提案いたします。お気軽にご相談ください。',
},
]

    this.setState({service: txt[e.target.getAttribute('value')]});
  }
}
