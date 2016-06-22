import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

export default class Company extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article id="Company" className="pf-Detail">
        <DocumentTitle title="遠鉄アシスト | 会社概要" />

        <section id="company01">
          <h1>遠鉄アシストについて</h1>
          <p>
            当社は、1999年7月21日、遠州鉄道株式会社の100％子会社として、<br />
            運行管理部門で企業団体や自治体などのアシストをすることを目的に設立されました。<br />
            遠州鉄道のバス部門との連携をとりながら、<br />
            規制が緩和されつつあった人材派遣などの人材ビジネスへの参入を図りました。<br />
          </p>
          <p>
            一方では、グループ内の再編に伴い、2002年7月、株式会社遠鉄総合ビルサービスから<br />
            ビル管理・清掃部門とマンション管理部門を譲り受け、業容を拡大しました。<br />
            運行管理、ビル・マンション管理、清掃、<br />
            指定管理施設運営、食品検査、生活支援サービスを運営しています。
          </p>
        </section>

        <section className="odd odd-white">
          <h1>社長メッセージ</h1>
          <p>
            (サンプルテキスト)<br />
            私たち遠鉄アシストは、「アシスト」という社名が示す通り、<br />
            地域社会のお手伝いをしている「人間中心」の会社です。
          </p>
          <p>
            当社は、遠鉄グループの一員として、静岡県西部地方を中心に、企業や学校、行政等の<br />
            アウトソーシングに対応して、運行管理、ビル・マンション管理、清掃、<br />
            指定管理施設運営、食品検査、生活支援サービスを運営しています。
          </p>
          <p>
            さて、当社の経営ビジョンですが、「時代の変化をとらえ、自ら変革できる会社になる！」です。<br />
            現在は時代の流れが大変速く、高齢化社会を迎え、人々の価値観も日々変わっています。<br />
            したがって、我々は変化の風をしっかりとらえ、その変化に対応して、自ら変わっていかなければ、<br />
            取り残されてしまいます。もし、時代の変化に対応した変革ができなければ、<br />
            社会に必要のない会社になってしまいます。
          </p>
        </section>

        <section id="company02">
          <h1>会社概要</h1>
          <table>
            <tbody>
              <tr>
                <td>称号</td>
                <td>遠鉄アシスト株式会社</td>
              </tr>

              <tr>
                <td>本社</td>
                <td>
                  静岡県浜松市中区旭町12-1　遠鉄百貨店新館　事務所フロア11階
                  <p>TEL.053-450-1511（代）　FAX.053-450-1512</p>

                  <p>
                    ［ビルサービス課］<br />
                    TEL.053-455-3451
                  </p>

                  <p>
                    ［マンション管理サービス課］<br />
                    TEL.053-450-9922
                  </p>
                  <p>
                    ［運行管理サービス課］<br />
                    TEL.053-450-1515
                  </p>
                  <p>
                    ［指定管理サービス課］<br />
                    TEL.053-450-1516
                  </p>
                  <p>
                    ［食品検査センター］<br />
                    TEL.053-450-1533
                  </p>
                  <p>
                    ［ベンリーえんてつ］<br />
                    TEL.053-472-0255
                  </p>
                </td>
              </tr>

              <tr>
                <td>創立</td>
                <td>1999年7月21日</td>
              </tr>

              <tr>
                <td>資本金</td>
                <td>4,000万円（遠州鉄道株式会社100%出資）</td>
              </tr>
              
              <tr>
                <td>代表者</td>
                <td>取締役社長　藤野　聡</td>
              </tr>

              <tr>
                <td>従業員</td>
                <td>647名 （2015年3月31日現在）</td>
              </tr>

              <tr>
                <td>登録許認可・認定</td>
                <td>
                  一般労働者派遣事業（派22-020046）<br />
                  有料職業紹介業（22-ユ-020029）<br />
                  建築物環境衛生総合管理業<br />
                  建築物飲料水貯水槽清掃業<br />
                  建築物ねずみ昆虫等防除業<br />
                  マンション管理業<br />
                  警備業<br />
                  医療関連サービスマーク
                </td>
              </tr>

              <tr>
                <td>加盟団体</td>
                <td>
                  加盟団体	一般社団法人　日本自動車運行管理協会<br />
                  一般社団法人　中部地区自動車管理業協会<br />
                  一般社団法人　日本人材派遣協会<br />
                  一般社団法人　マンション管理業協会<br />
                  一般社団法人　静岡県ビルメンテナンス協会
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h1>沿革</h1>
          <table>
            <tbody>
              <tr>
                <td>1999年7月21日</td>
                <td>
                  資本金10,000千円をもって設立、取締役社長に関利彦就任
                </td>
              </tr>

              <tr>
                <td>2000年8月1日</td>
                <td>
                  特定労働者派遣事業を届出
                </td>
              </tr>

              <tr>
                <td>2000年9月16日</td>
                <td>
                  本社を田町より旭町へ移転
                </td>
              </tr>

              <tr>
                <td>2001年2月1日</td>
                <td>
                  一般労働者派遣事業許可を受ける
                </td>
              </tr>

              <tr>
                <td>2001年6月27日</td>
                <td>
                  取締役社長に村松修就任
                </td>
              </tr>

              <tr>
                <td>2002年6月27日</td>
                <td>
                  取締役社長に斉藤薫就任
                </td>
              </tr>

              <tr>
                <td>2002年7月1日</td>
                <td>
                  遠鉄グループ事業再編により株式会社遠鉄総合ビルサービス（現・遠鉄建設）から
                  ビル管理・清掃部門とマンション管理部門を営業譲受
                </td>
              </tr>

              <tr>
                <td>2004年10月1日</td>
                <td>
                  資本金を40,000千円に増資
                </td>
              </tr>

              <tr>
                <td>2007年6月28日</td>
                <td>
                  取締役社長に内山芳実就任
                </td>
              </tr>

              <tr>
                <td>2008年6月16日</td>
                <td>
                  本社を旭町より伝馬町へ移転
                </td>
              </tr>

              <tr>
                <td>2011年6月29日	</td>
                <td>
                  取締役社長に藤野聡就任
                </td>
              </tr>

              <tr>
                <td>2011年10月24日	</td>
                <td>
                  本社を伝馬町より旭町（現住所）へ移転
                </td>
              </tr>

            </tbody>
          </table>

          <p>
            <img src="imgs/detail/map.jpg" width="640" height="164" alt="map" />
          </p>

          <p>
            [経路] <br />
            JR浜松駅北口を出て、遠鉄バスターミナルの<br />
            西側を北へ約150m。<br />
            遠鉄百貨店新館の東側、<br />
            交番の右手に事務所フロア入口があります。<br />
            受付は11階エレベーターを降り、左手正面となります。
          </p>
        </section>

        <section id="company04" className="odd">
          <h1>指定管理業務</h1>

          <h3>行政の指定管理者として公共事業業務を受託<br />
          市民の立場・目線で地域の暮らしを支えます</h3>

          <p>
            遠鉄アシストのお取引先は、浜松市内を中心に約1300社。<br />
            設備管理、清掃等様々な業務を通じて培った豊富な実績により、<br />
            民間企業だけでなく、浜松市をはじめ多くの行政機関ともお取引をいただいております。 
          </p>
          <p>
            行政機関との関係では、指定管理事業にも取り組みはじめ、<br />
            浜松城公園、浜松まつり会館、浜松市立青少年の家等の管理運営に携わっております。<br />
            静岡県西部地域の観光振興や地域の活性化、青少年の健全育成等、<br />
            遠鉄グループ経営理念の延長線上にある事業に参画しております。
          </p>
          <p>
            地域の皆様に育てられた企業として、今まで培ってきた経験、ノウハウ、実績を持って、<br />
            地域の方々に恩返しができるよう努力しております。
          </p>

          <ul>
            <li><a href="http://www.hamamatsu-navi.jp/shiro/" target="_blank">浜松城公園</a></li>
            <li><a href="http://www.hamamatsu-navi.jp/matsuri/" target="_blank">浜松まつり会館</a></li>
            <li><a href="http://www.h-seisyounen-ie.com/" target="_blank">浜松市立青少年の家</a></li>
            <li><a href="http://www.hamamatsu-navi.jp/busparking/" target="_blank">浜松市観光バス公共駐車場</a></li>
            <li><a href="http://www.hamamatsu-navi.jp/parking/index.html" target="_blank">浜松市営駐車場</a></li>
            <li>浜松市営住宅</li>
            <li>浜松市立浜北図書館</li>
            <li><a href="http://www.ryuyo-kaiyopark.jp/">竜洋海洋センター</a></li>
            <li>遠州灘海浜公園</li>
            <div id="company05"></div>
            <li>佐鳴湖公園</li>
            <li>浜名湖体験学習施設　ウォット</li>
            <li>浜松市茶室　松韻亭</li>
            <li>リベーラ磐田市営駐車場</li>
          </ul>

        </section>

        <section>
          <h1>遠鉄アシストの戦略事業</h1> 
          <p>
            遠鉄アシストでは、新しい業務にも積極的に取り組みます。
          </p>

          <h3>食品検査</h3>
          <p>
            <img src="imgs/detail/company_banner01.jpg" width="260" height="98" alt="食品管理" />
            全国の上場企業をはじめ、地元企業など<br />
            多くの企業からの検査をうけたまわっております
          </p>

          <h3>ベンリー</h3>
          <p>
            <img src="imgs/detail/company_banner02.jpg" width="260" height="98" alt="ベンリ− " />
            暮らしの困った解決!<br />
            ハウスクリーニング、オフィスでの困った、急なトラブルにも対応します
          </p>
        </section>
	
      </article>
    );
  }
}
