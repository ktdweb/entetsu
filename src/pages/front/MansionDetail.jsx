import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

export default class MansionDetail extends React.Component {

  constructor(props) {
    super(props);

    this.state = { service: { title: '', text: '' } };
  }

  render() {
    return (
      <article id="MansionDetail" className="pf-Detail">
        <DocumentTitle title="遠鉄アシスト | 会社概要" />

        <section id="mansion01">
          <h1>地域に溶け込む住まい</h1>
          <p>
            周辺環境に違和感なく溶け込み、人の住まいとしてあり続ける建物。<br />
            そんな中で気持ちよく過ごせる空間。周りとの共存・共栄。<br />
            そんなノウハウを遠鉄アシストはご提供します。
          </p>
        </section>

        <section id="mansion02" className="odd odd-white">
          <h1>遠鉄アシストのサービス</h1>
          <p>
            遠鉄アシストならではのきめ細かいサービスと、<br /> 
            まかせて安心のトータルサポートでお応えします。
          </p>

          <div id="service">
            <p value="5" onClick={this.onService.bind(this)} >その他</p>
            <p value="4" onClick={this.onService.bind(this)} >設備管理</p>
            <p value="3" onClick={this.onService.bind(this)} >清掃</p>
            <p value="2" onClick={this.onService.bind(this)} >管理員</p>
            <p value="1" onClick={this.onService.bind(this)} >事務管理</p>
          </div>

          <div id="desc">
            
            <p className="mgnBtm0"><strong>{this.state.service.title}</strong></p>
            <p>{this.state.service.text}</p>
          </div>
        </section>

        <section id="mansion03" className="pf-Column">
          <h1>遠鉄アシストの取り組み</h1>

          <h3>経験と実績に裏付けられた遠鉄クオリティ</h3>
          <p>
            遠鉄アシストのビル管理事業は、地域に密着した遠鉄グループの豊富な経験と実績をもとに生まれたサービスです。顧客第一をモットーに、徹底した教育研修を受けた専門スタッフが適材適所で責任を持ってサポート。清掃、設備管理、環境衛生管理、メンテナンス、特殊作業、警備など、ビル管理をトータルで担い、信頼の遠鉄クオリティでお客様のご満足にお応えします。
          </p>
          
          <h3>遠鉄グループの総合力</h3>
          <p>
            弊社ではグループ内の建設業、不動産業と密に連携し、お客様のさまざまなご要望に幅広くお応えします。ビル管理事業の枠を超え、遠鉄グループの総合力を活用して、他にはない力強いサポートを実現します。
          </p>

          <strong>顧客第一</strong>
          <p>
            弊社は経営方針に「顧客満足」を掲げ、お客様からの「ありがとう」のお言葉を最大の喜びと受け止めています。顧客第一の企業風土を大切に育み、今後もたくさんの「ありがとう」に出会いたいと願っています。
          </p>

          <h3>緊急時のサービス体制</h3>
          <p>夜間・深夜に起こる緊急トラブルにも随時対応します。また、大雨や台風などの自然災害が見込まれる場合、関係部署との連携を密に図り対応・対策に努めます。</p>
        </section>


        <section id="mansion04" className="pf-Column odd">
          <h1 className="text-right">遠鉄アシストの特徴</h1>

          <p className="text-right">遠鉄アシストの組織力が、清掃業務を 円滑にバックアップします。</p>

          <h3>アフターまで見据えた三位一体の遠鉄クオリティ</h3>

          <p>
            遠鉄の不動産と遠鉄アシストが連携し、入居者の皆様の末永い幸せのために、“しっかり造り、きちんと守る”体制を築いています。建物の強度、耐久性を見据えた信頼の構造・工法を採用し、入居後は資産価値の維持と快適な生活を実現すべく、細部にわたって管理を徹底。商品企画販売、品質管理、アフター管理の三位一体体制が生み出す遠鉄クオリティが弊社の強みです。
          </p>

          <h3>地元の優秀な人材と、地元の協力業者で見守る管理体制</h3>
          <p>
            地域密着だから優秀な人材を確保しています。 いざという時の緊急時も、地元の協力業者との連携をはかり対応しています。
          </p>
        </section>

        <section id="building05" className="pf-Column">
          <h1>遠鉄アシストのサポート</h1>

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
        </section>

        <div id="add01"><img src="imgs/detail/building/add01.png" width="353" height="400" alt="add01" /></div>
        <div id="add02"><img src="imgs/detail/building/add02.png" width="353" height="400" alt="add02" /></div>
        <div id="add03"><img src="imgs/detail/building/add03.png" width="353" height="400" alt="add03" /></div>
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
title: '日常の保守と長期的な展望に立った管理業務を行います',
text: '常に快適な空間の維持に心掛け、ビルの総合管理業として、多様化するニーズに柔軟に対応。安全・安心・快適なサービスの提供により、お客様の満足度を高めます。',
},

{
title: '',
text: '住みやすいマンションを実現し、資産価値を高めるためのマンション内諸設備のメンテナンスを展開しております。',
},

{
title: '安全を基本に、接客・接遇面でもご満足いただけます',
text: '安全で効率的な駐車場運営と付加価値の高い接客サービスで対応。お客様に安心して気持ちよくご利用いただける駐車場であることを目指し、行き届いた駐車場管理を行います。',
},
{
title: '働く皆様と財産の安全を見守ります',
text: 'リスクマネジメント意識が高まる現在、お客様と利用者の生命・財産の安全を確保するため、高いモラルと信頼性のある保安警備技術で皆様の安全をしっかり見守ります。',
},

{
title: '働く皆様と財産の安全を見守ります',
text: 'リスクマネジメント意識が高まる現在、お客様と利用者の生命・財産の安全を確保するため、高いモラルと信頼性のある保安警備技術で皆様の安全をしっかり見守ります。',
},

]

      this.setState({service: txt[e.target.value]});
  }
}
