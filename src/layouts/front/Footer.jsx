import React from 'react'
import { a } from 'react-router'

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer id="Footer">
        <nav className="lf-contents">
          <div>
            <p>
              <i className="fa fa-plus-square" />
              <a href="/cleaning">
                清掃</a>
            </p>
            <ul>
              <li>
                <a href="/cleaning_detail">
                  サービス案内<br />
                  清掃業務管理<br />
                  特徴<br />
                  サポート
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p>
              <i className="fa fa-plus-square" />
                <a href="/building">
                ビル管理
                </a>
            </p>
            <ul>
              <li>
                <a href="/building_detail">
                サービス案内<br />
                取り組み<br />
                特徴<br />
                サポート
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p>
              <i className="fa fa-plus-square" />
              <a href="/mansion">
                マンション管理
                </a>
            </p>

            <ul>
              <li>
                <a href="/mansion_detail">
                サービス案内<br />
                取り組み<br />
                特徴<br />
                サポート
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p>
              <i className="fa fa-plus-square" />
              <a href="/driving">
                運行管理
              </a>
            </p>
            <ul>
              <li>
                <a href="/driving_detail">
                  サービス案内<br />
                  導入事例<br />
                  特徴<br />
                  安全・安心・快適の取組
                </a>
                </li>
            </ul>
          </div>

          <div>
            <p>
              <i className="fa fa-plus-square" />
              <a href="/company">
                会社案内
                </a>
            </p>
            <ul>
              <li>
                <a href="/company">
                  遠鉄アシストについて<br />
                  社長メッセージ<br />
                  会社概要<br />
                </a>
                <a href="/company#strategy">
                  戦略事業
                </a>
               </li>
            </ul>
          </div>

          <div>
            <p>
              <i className="fa fa-plus-square" />
              その他
            </p>
            <ul>
              <li>
                <a href="/works">
                お仕事を探す
                </a>
                </li>

              <li >
                <a
                  href="#"
                  onClick={this.enableModal.bind(this)}
                  >
                個人情報の取扱について
                </a>
              </li>

              <li>
                <a
                  href="/pdf/privacy.pdf"
                  target="_blank"
                  >
                個人情報保護方針
                </a>
                </li>

              <li>
                <a
                  href="/pdf/douisho.pdf"
                  target="_blank"
                  >
                採用応募者同意書
                </a>
                </li>

              <li className="twoLine">
                <a
                  href="/pdf/work.pdf"
                  target="_blank"
                  >
                  労働者派遣事業に係る<br />情報提供
                </a>
                </li>

            </ul>
          </div>
        </nav>

        <div className="lf-external">
          <div>
            <span>公共事業リンク</span>
            <p>
              <a
                target="_blank"
                href="http://www.entetsuassist-dms.com/hamamatsu-jyo/"
                >
                <img
                  src="/imgs/banners/01.jpg"
                  width="140"
                  height="35"
                  alt="浜松城公園"
                  />
              </a>

              <a
                target="_blank"
                href="http://www.hamamatsu-navi.jp/matsuri/"
                >
                <img
                  src="/imgs/banners/02.jpg"
                  width="140"
                  height="35"
                  alt="浜松まつり会館"
                  />
              </a>

              <a
                target="_blank"
                href="http://www.ryuyo-kaiyopark.jp/"
                >
                <img
                  src="/imgs/banners/04.jpg"
                  width="140"
                  height="35"
                  alt="竜洋海洋公園"
                  />
              </a>

              <a
                target="_blank"
                href="http://www.h-seisyounen-ie.com/"
                >
                <img
                  src="/imgs/banners/05.jpg"
                  width="140"
                  height="35"
                  alt="青少年の家"
                  />
              </a>
            </p>

            <p>
              <a
                target="_blank"
                href="http://www.entetsuassist-dms.com/busparking/"
                >
                <img
                  src="/imgs/banners/06.jpg"
                  width="140"
                  height="35"
                  alt="観光バス駐車場"
                  />
              </a>

              <a
                target="_blank"
                href="http://www.hamamatsu-navi.jp/parking/"
                >
                <img
                  src="/imgs/banners/07.jpg"
                  width="140"
                  height="35"
                  alt="浜松市営駐車場"
                  />
              </a>
 
              <a
                target="_blank"
                href="http://www.entetsuassist-dms.com/sanaru-park/"
                >
                <img
                  src="/imgs/banners/08.jpg"
                  width="140"
                  height="35"
                  alt="佐鳴湖公園"
                  />
              </a>
            </p>
          </div>

          <div>
            <span>関連リンク</span>
            <p>
              <a
                target="_blank"
                href="https://netsuper.entstore.co.jp/"
                >
                <img
                  src="/imgs/links/01.jpg"
                  width="140"
                  height="35"
                  alt="ネットスーパー"
                  />
              </a>

              <a
                target="_blank"
                href="https://cards.entetsu.co.jp/"
                >
                <img
                  src="/imgs/links/02.jpg"
                  width="140"
                  height="35"
                  alt="えんてつカード"
                  />
              </a>
            </p>

            <p>
              <img
                src="/imgs/links/03.jpg"
                width="140"
                height="35"
                alt="子育て中"
                />

              <a
                target="_blank"
                href="https://cards.entetsu.co.jp/kidsclub/"
                >
                <img
                  src="/imgs/links/04.jpg"
                  width="140"
                  height="35"
                  alt="えんてつカード キッズクラブ"
                  />
              </a>
            </p>
          </div>
        </div>

        <div id="credit" className="lf-credit">
          <div>
            <div>
              <a href="/">
                <img
                  src="/imgs/logo_footer.png"
                  width="140"
                  height="35"
                  alt="logo"
                  />
              </a>

              <p>
                遠鉄アシスト株式会社<br />
                静岡県浜松市中区旭町12-1　遠鉄百貨店新館　事務所フロア11階<br />
                TEL.053-450-1511（代）　FAX.053-450-1512<br />
                Copyright(C) Entetsu Assist Co.,Ltd. All Rights Reserved.
              </p>
            </div>

            <div>
              ビル管理・清掃   - 053-455-3451<br />
              マンション管理   - 053-450-9922<br />
              運行管理請負     - 053-450-1515<br />
              食品検査センター - 053-441-5075
            </div>
          </div>
        </div>

        <div
          id="footerPrivacy"
          className="modal"
          onClick={this.disableModal.bind(this)}
          >
          <div>
            <a
              href="#"
              onClick={this.disableModal.bind(this)}
              >
              <img
                className="modalClose"
                src="/imgs/close.png"
                width="30"
                height="30"
                alt="close"
                />
            </a>

            <h1>個人情報の取り扱いについて</h1>

            <p className="text-left">個人情報に関して、以下の事項を公表致します。
            <h5><strong>１．個人情報の管理者の氏名又は職名、所属及び連絡先</strong></h5>
            <ul>
            遠鉄アシスト株式会社　総務課長　　ＴＥＬ：０５３−４５０−１５１１
            </ul>

            <h5><strong>２．個人情報の利用目的</strong></h5>
            <ul>
            （１）ご本人より書面等（Webページや電子メール等によるものを含む。以下「書面」）で直接取得する個人情報
            <li>　・派遣スタッフ情報</li>
            <li>　　人材派遣及び人材紹介事業における仕事の紹介を行うため。</li>
            <li>　・取引様情報</li>
            <li>　　商談及び業務上の諸連絡、受発注業務、請求支払業務のため。</li>
            <li>　・従業者情報</li>
            <li>　　従業者の人事労務、福利厚生管理のため。</li>
            <li>　・採用応募者に関する個人情報</li>
            <li>　　採用応募者への連絡と当社の採用業務管理のため。</li>
            <li>　・問合せ情報</li>
            <li>　　お問合せのご返答、お知らせをお送りするため。</li>
            </ul>
            <ul>
            （２）ご本人より書面で直接取得する以外の個人情報
            <li> 　受託業務情報</li>
            <li>　・人材サービス業、運行管理請負業、ビル管理業、マンション管理業の事務処理のため。</li>
            <li>　・管理施設の利用に伴う事務処理のため。</li>
            </ul>

            <h5><strong>３．個人情報の第三者提供</strong></h5>
            <ul>
            当社では、次に掲げる場合を除き、取得した個人情報を第三者に提供することはございません。
            <li>（１）あらかじめご本人様の同意を得ている場合</li>
            <li>（２）法令に基づく場合</li>
            <li>（３）人の生命、身体又は財産の保護のために必要がある場合であって、ご本人様の同意を得ることが困難な場合</li>
            <li>（４）公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、ご本人様の同意を得ることが困難な場合</li>
            <li>（５）国の機関もしくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ご本人様の同意を得ることによって当該事務の遂行に支障を及ぼすおそれがある場合</li>
            <li>（６）業務を円滑に遂行するため、利用目的の達成に必要な範囲内で個人情報の取扱いの全部又は一部を委託する場合</li>
            </ul>

            <h5><strong>４．個人情報取扱いの委託</strong></h5>
            <ul>
            当社は事業運営上、お客様により良いサービスを提供するために業務の一部を外部に委託しています。業務委託先に対しては、個人情報を預託する場合があります。この場合、個人情報を適切に取り扱っていると認められる委託先を選定し、契約等において個人情報の適正管理・機密保持などによりお客様の個人情報の漏洩防止に必要な事項を取決め、適切な管理を実施させます。
            </ul>

            <h5><strong>５．個人情報の開示等の請求</strong></h5>
            <ul>
            当社は、ご本人からのご自身の個人情報の開示等（利用目的の通知、開示、内容の訂正・追加・削除、利用の停止または消去、第三者への提供の停止）の求めに応諾いたします。開示等の求めは当社問合わせ窓口にお申し出下さい。その際、当社はご本人を確認させていただいたうえで、合理的な期間内に対応いたします。取引先から委託される個人情報は開示対象個人情報に該当いたしませんが、取引先より特段の指示があった場合はその指示に従います。開示等の申し出の詳細につきましては、下記【個人情報に関するお問い合わせ先】までご連絡ください。
</ul>

            <h5><strong>６．個人情報を提供されることの任意性と結果</strong></h5>
            <ul>
            当社への個人情報の提供は、ご本人の任意によるものです。 ただし、必要な項目をいただけない場合、各サービス等が適切な状態で提供できない場合があります。
            </ul>

            <h5><strong>７．当社Ｗｅｂサイトのおける個人情報の取得について</strong></h5>
            <ul>
            <li><strong>（１）SSLによる暗号化通信について</strong><br />
                当Webサイトは、必要に応じてお客様の個人情報を保護するために「SSL」により暗号化しています。<br />
                SSLによる暗号化とは、お客様がWebサイトにアクセスし、お名前やメールアドレスなどの個人情報を入力した場合に、それらの情報が当社サーバとの間で送受信される時に、お客様がお使いになっているブラウザによって自動的に暗号化され、万一データが第三者に傍受された場合でも、内容が読みとれないようにする技術です。（SSLによる暗号化通信のご利用にはSSL対応ブラウザが必要となります。SSL対応ブラウザでも、設定によりSSLが利用できない場合や、インターネットへの接続環境によりSSLによる暗号化通信ができない場合があります。 
            </li>
            <li><strong>（２）アクセスログについて</strong><br />
                お客様が当Webサイトにアクセスされますと、その情報をアクセスログという形で記録し一定期間保存しています。<br />
                アクセスログは、アクセスされた日時やIPアドレス、使用しているブラウザの種類などが含まれますが、個人を特定できる情報を含むものではありません。収集したアクセスログは、当Webサイトの管理や利用傾向の分析の目的で利用いたします。
            </li>
            <li><strong>（３）クッキー(Cookie)等の利用について</strong><br />
                クッキーとは、ウェブサイトにアクセスした利用者を管理・識別するために文字列情報または管理する仕組みです。<br />
                当社は、当社のサイトにおいて、次のような目的でクッキーを使用することがあります。<br />
                <div class="BOXpolicy2">
                  <ul>
                  <li>a. 当社のサイトの内容を改良したり、ご本人の個々の利用に合わせてカスタマイズするため</li>
                  <li>b. クッキーの利用により入手した情報を統計処理し、集約した情報を公表する場合は、個々のご本人を識別できる情報を含みません。</li>
                  </ul>
                </div>
            </li>
            <li><strong>（４）他のサイトへのリンクについて</strong><br />
                当Webサイトにはお客様の便宜をはかるため、第三者のWebサイトへのリンクがあります。 これら第三者のWebサイトで個人情報収集が行われます場合は、そのサイトの個人情報の取り扱いについての説明をご参照下さい。<br />
            </li>
            </ul>

            </p>

            {/*<a
              className="modalLink"
              href="/pdf/privacy.pdf"
              target="_blank"
              >ダウンロード</a>
            */}
          </div>
        </div>

      </footer>
    );
  }

  enableModal(e) {
    e.preventDefault();
    window.scroll(0, 0);
    let el = document.getElementById('footerPrivacy');
    el.classList.add('enable');

    let height = document.documentElement.scrollHeight || document.body.scrollHeight;
    el.style.height = height + 'px'; 
  }

  disableModal(e) {
    e.preventDefault();
    let el = document.getElementById('footerPrivacy');
    el.classList.remove('enable');
  }
}
