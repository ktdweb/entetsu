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
  }

  componentWillUnmount() {
    this.parallax.destroy();
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
          <h1>地域に溶け込む住まい</h1>
          <p>
            周辺環境に違和感なく溶け込み、人の住まいとしてあり続ける建物。<br />
            そんな中で気持ちよく過ごせる空間。周りとの共存・共栄。<br />
            そんなノウハウを遠鉄アシストはご提供します。
          </p>
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
          <h1>遠鉄アシストの取り組み</h1>

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
        </section>


        <section className="odd">
          <h1 className="text-right">遠鉄アシストの特徴</h1>

          <h3 className="text-right">アフターまで見据えた三位一体の遠鉄クオリティ</h3>

          <p>
            遠鉄の不動産と遠鉄アシストが連携し、入居者の皆様の末永い幸せのために、"しっかり造り、きちんと守る"体制を築いています。建物の強度、耐久性を見据えた信頼の構造・工法を採用し、入居後は資産価値の維持と快適な生活を実現すべく、細部にわたって管理を徹底。商品企画販売、品質管理、アフター管理の三位一体体制が生み出す遠鉄クオリティが弊社の強みです。
          
          </p>

          <h3>地元の優秀な人材と、地元の協力業者で見守る管理体制</h3>
          <p>
            地域密着だから優秀な人材を確保しています。 いざという時の緊急時も、地元の協力業者との連携をはかり対応しています。
          </p>
        </section>

        <section>
          <h1>遠鉄アシストのサポート</h1>

          <p>専門の資格を持ったスタッフが、 迅速に対応しているため、安心してご利用頂けます。</p>

          <h3>困った時にも安心の24時間365日体制</h3>

          <p>日常生活のステージであるマンションは、いざという時も待ったなし。もしもの時には緊急対応が不可欠です。遠鉄アシストでは24時間365日の緊急対応システムを備えるとともに、素早く対応します。</p>

          <h3>登録・認定</h3>
          <p>
            ・建築物環境衛生総合管理業<br />
            ・建築物飲料水貯水槽清掃業<br />
            ・建築物ねずみ昆虫等防除業<br />
            ・マンション管理業<br />
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
            マンションの保守・管理に努めています。
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
