import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import Parallax from '../../components/Parallax'

export default class SeisougDetail extends React.Component {

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
    let IMG = 'imgs/detail/cleaning/';

    return (
      <article id="Cleaning" className="pf-Detail">
        <DocumentTitle title="清掃でお困りの方 | 遠鉄アシスト" />

        <div
          id="plx01"
          className="layer"
          data-depth="2">
          <img
            src={IMG + 'bg.png'}
            width="75%"
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
          <h1>「キレイ」ってなんだろう？</h1>
          <p>
            日本ではありふれている「美」を<br />
            遠鉄アシストでは今一度考え直し、<br />
            「感じ取れる美」をテーマに<br />
            視える/香る/空気が美味しい/清々しさが聴こえる、<br />
            そして最後に美を肌で感じて頂ける事を<br />
            理想とさせていただいております
          </p>
        </section>

        <section className="odd reverse">
          <h1 className="text-right">遠鉄アシストのサービス</h1>
          <p className="text-right">
            遠鉄アシストならではのきめ細かいサービスと、<br />
            まかせて安心のトータルサポートでお応えします。
          </p>

          <div className="pf-Detail-services">
            <p value="1" onClick={this.onService.bind(this)} >清掃業務</p>
            <p value="2" onClick={this.onService.bind(this)} >植栽管理</p>
            <p value="3" onClick={this.onService.bind(this)} >ベッド<br />メイキング</p>
            <p value="4" onClick={this.onService.bind(this)} >ハウス<br />クリーニング<br />リフォーム</p>
          </div>

          <div className="pf-Detail-services-desc">
            <p className="mgnBtm0"><strong>{this.state.service.title}</strong></p>
            <p>{this.state.service.text}</p>
          </div>
        </section>

        <section>
          <h1>遠鉄アシストの清掃業務管理</h1>

          <h3>高い清掃品質で、美観の維持，清潔な環境を保ちます。</h3>
        </section>

        <section className="odd">
          <h1 className="text-right">遠鉄アシストの特徴</h1>

          <p className="text-right">遠鉄アシストの組織力が、清掃業務を 円滑にバックアップします。</p>

          <strong>日常清掃</strong>

          <p>
            店舗，事務所内，共用スペース，トイレなど日常的に使用する場所を継続して清掃をすることにより
            美観や清潔さを維持することを目的としております。
          </p>

          <strong>定期清掃</strong>
          <p>
            日常清掃では、落としきれない汚れを除去することを目的としております。<br />
            例えば、定期的に床面洗浄及びワックスを塗布することで、床を保護して汚れをつきにくくするなどのメリットなどがあります。他にもガラス清掃，カーペットクリーニングなど建物の状態、お客様のご要望にあわせ、最適なプランをご提案させていただきます。
          </p>

          <strong>人材育成</strong>
          <p>
            弊社では、2016年6月よりお客様に「美」を感じていただけるよう、
            個々の清掃技術，知識の向上を図る目的として、トレーニングセンターを開設いたしました。<br />
            清掃未経験の方でも、当社の指導員がベットメイク，トイレや水廻りの清掃等を基礎から丁寧に指導していきます。
          </p>

          <strong>サービスの標準化</strong>
          <p>
            弊社は、高い清掃品質を全てのお客様に提供できるよう作業方法，
            作業手順，使用する清掃資機材のマニュアルを作成し、清掃品質が一様になるようにつとめています。
            トイレ，洗面台，床等、適切な作業道具またはクロス，
            モップなどの清掃道具を色分けすることで、衛生面に配慮し、清潔な清掃をいたします。
          </p>

          <strong>より良いサービスの提供</strong>
          <p>
            弊社は、清掃品質がより良くなるように、作業方法，
            作業手順の改善点やより良い清掃資機材がないか見直しをする為、
            定期的にミーティングを実施しております。
          </p>
        </section>

        <section>
          <h1>遠鉄アシストのサポート</h1>

          <p>専門の資格を持ったスタッフが、 迅速に対応。安心してご利用頂けます。</p>

          <h3>主な技術有資格者</h3>
          <p>
            ・建築物環境衛生管理技術者<br />
            ・衛生管理者<br />
            ・空気環境測定実施者<br />
            ・貯水槽清掃作業監督者<br />
            ・清掃作業監督者<br />
            ・ビルクリーニング技能士<br />
            ・病院清掃受託責任者<br />
            ・防除作業監督者<br />
            ・排水管清掃作業監督者
          </p>

          <p>
            ※上記のほか、多くの資格保有者が
            清掃業務の保守・管理に努めています。
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
title: '美しく衛生的な居住環境を実現',
text: '美観を維持し、清潔で快適な環境を整えるために、敷地内外や建物、設備などの共用部分の清掃を日常的または定期的に行います。',
},

{
title: '美しく、心が潤う植栽環境を維持します',
text: '植栽は建物の価値とイメージを向上させる重要な要素です。周囲の景観との調和を考え、見た目に美しく、心身をリラックスさせる植栽管理で建物の印象アップに貢献します。',
},

{
title: 'いつも清潔な客室をスピーディーに整えます',
text: 'ネット検索サイトの「清潔項目」で高評価をいただき、ホテルから表彰されるなど、ベッドメイキングの実績は豊富。お客様の満足を第一に、清潔な客室をスピーディーに整えます。',
},

{
title: 'ニーズに合わせてフレキシブルに対応します',
text: '分譲マンション・賃貸アパート・戸建住宅と、建物の構造に精通したスタッフが、隅々まで配慮した安心のハウスクリーニング・リフォーム・リノベーションを提供いたします。',
},
]

    this.setState({service: txt[e.target.getAttribute('value')]});
  }
}
