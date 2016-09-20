import React from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import DocumentTitle from 'react-document-title'

var page, data;

export default class Top extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page: props.route.page
    };
  }

  componentWillReceiveProps(props) {
    this.updateState(props);
  }

  componentDidMount() {
  }

  componentWillMount() {
    this.updateState();
  }

  updateState(props = null) {
    if (props) {
      page = props.route.page;
    } else {
      page = this.props.route.page;
    }
    let src = 'imgs/pages/' + page + '.jpg';

    this.setState({
      src: src,
      page: page
    });

    data = contents[page];
  }

  toId(str) {
    let first = str.charAt(0).toUpperCase();
    return first + str.slice(1);
  }

  render() {
    return (
        <article
          id={this.toId(page)}
          className="lf-Top"
          >
        <DocumentTitle
          title={data.h1 + ' | 遠鉄アシスト'}
          />

          <div
            className="lf-Top-linkArea"
            onClick={this.onLinkArea.bind(this)}
            >
            <nav>
              <ul>
                <li>
                    {data.h1}
                </li>
                <li>
                    {data.column[0].title}
                </li>
                <li>
                    {data.column[1].title}
                </li>
                <li>
                    {data.column[2].title}
                </li>
                <li>
                    {data.column[3].title}
                </li>
              </ul>
            </nav>
            
            <section>
              <div>
                <h2>{data.column[0].title}</h2>
                <p>{data.column[0].desc}</p>
              </div>
            
              <div>
                <h2>{data.column[1].title}</h2>
                <p>{data.column[1].desc}</p>
              </div>
            
              <div>
                <h2>{data.column[2].title}</h2>
                <p>{data.column[2].desc}</p>
              </div>
            
              <div>
                <h2>{data.column[3].title}</h2>
                <p>{data.column[3].desc}</p>
              </div>
            </section>
          </div>
        </article>
    );
  }

  onLinkArea(e) {
    location.href = page + '_detail';
  }
}

var contents = {
  cleaning: {
    h1: '清掃でお困りの方',
    column: [
      {
        title: 'サービス案内',
        desc:  '遠鉄アシストならではのきめ細かいサービスと、まかせて安心のトータルサポートでお応えします。'
      },
      {
        title: '遠鉄アシストの清掃業務管理',
        desc:  '遠鉄アシストの組織力が、清掃業務を円滑にバックアップします。'
      },
      {
        title: '遠鉄アシストの特徴',
        desc:  '遠鉄アシストの組織力が、清掃業務を円滑にバックアップします。'
      },
      {
        title: '遠鉄アシストのサポート',
        desc:  '専門の資格を持ったスタッフが、迅速に対応。安心してご利用頂けます。'
      }
    ]
  },

  building: {
    h1: 'ビル管理でお困りの方',
    column: [
      {
        title: 'サービス案内',
        desc:  '遠鉄アシストならではのきめ細かいサービスと、まかせて安心のトータルサポートでお応えします。'
      },
      {
        title: '遠鉄アシストの取り組み',
        desc:  '地域を幅広くサポートする遠鉄グループだからできること。ビルが担う役割を最大限まで高めます。遠鉄アシストの組織力が、清掃業務を円滑にバックアップします。'
      },
      {
        title: '遠鉄アシストの特徴',
        desc:  '多種多様な有資格者による高度な技術力と、常にエンドユーザーの視点に立ったきめ細かいサービスで、お客様の満足度アップに貢献します。'
      },
      {
        title: '遠鉄アシストのサポート',
        desc:  '専門の資格を持ったスタッフが、迅速に対応。安心してご利用頂けます。'
      }
    ]
  },

  mansion: {
    h1: 'マンション管理でお困りの方',
    column: [
      {
        title: 'サービス案内',
        desc:  '遠鉄アシストならではのきめ細かいサービスと、まかせて安心のトータルサポートでお応えします。'
      },
      {
        title: '遠鉄アシストの取り組み',
        desc:  '大切な資産を守り、入居者の皆様の期待に応えるために、遠鉄アシストでは安心への取り組みに力を注いでいます。信頼の業務で皆様の豊かな暮らしに貢献します。'
      },
      {
        title: '遠鉄アシストの特徴',
        desc:  'マンションライフを熟知した遠鉄グループの総合力を活かし、入居者の皆様の立場に立ってきめ細かくサポート。ハードとソフトの両面から管理業務を担います。'
      },
      {
        title: '遠鉄アシストのサポート',
        desc:  '専門の資格を持ったスタッフが、迅速に対応。安心してご利用頂けます。'
      }
    ]
  },

  driving: {
    h1: '運転・送迎でお困りの方',
    column: [
      {
        title: 'サービス案内',
        desc:  '遠鉄アシストならではのきめ細かいサービスと、まかせて安心のトータルサポートでお応えします。'
      },
      {
        title: '導入事例',
        desc:  '運行管理事業の導入事例です。お客様のニーズに合わせて、臨機応変に問題を解決いたします。'
      },
      {
        title: '遠鉄アシストの特徴',
        desc:  '遠鉄グループ輸送部門の実績とノウハウ、運転サービス士の確かな安全技術、笑顔の接客・接遇で、多くのお客様から信頼をいただいております。'
      },
      {
        title: '安全・安心・快適への取組',
        desc:  'お客様の安全・安心・快適をモットーに、遠鉄アシストでは 運転サービス士の安全教育を徹底。経験と実績に甘んじることなく、技術と知識の強化を図っています。'
      }
    ]
  }
};
