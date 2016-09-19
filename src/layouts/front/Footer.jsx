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
                width="50"
                height="50"
                alt="close"
                />
            </a>

            <h1>個人情報の取り扱いについて</h1>

            <p>
遠鉄アシスト株式会社は、以下に示す個人情報保護方針を定め、社全体で個人情報保護に取り組みます。
            </p>

            <p className="text-left">
              個人情報保護に関する法令、国が定める指針、その他の規範を遵守します。<br />
個人情報の利用目的を明示し、適切に個人情報の取得、利用および提供を行います。取得した個人情報は、法令で定める場合を除き、明示した利用目的の範囲内でのみ利用します。<br />
取得した個人情報は、法令で定める場合を除き、本人の同意なしに第三者への提供は行いません。<br />
個人情報保護に関して、組織的、物理的、人的、技術的に適切な対策を実施し、安全管理措置を行います。<br />
個人情報保護に関するルールを策定、周知し、個人情報を適切に取り扱うよう教育、啓発を行います。<br />
個人情報の取り扱い、管理体制および取り組みに関する点検を実施し、継続的に改善・見直しを行います。<br />
外部委託を行う際には、適格性を十分に審査し、情報管理を徹底するよう指導、監督します。<br />
本人の求めによる個人情報の開示、訂正、追加、削除、もしくは利用目的の通知を法令に従い行うとともに、ご意見、ご相談に関して適切に対応します。
            </p>

            <p>
              「個人情報の取扱いに関する採用応募者同意書」<br />
               エントリーの際ご利用ください
            </p>

            <a
              className="modalLink"
              href="/pdf/privacy.pdf"
              target="_blank"
              >ダウンロード</a>
          </div>
        </div>

      </footer>
    );
  }

  enableModal(e) {
    e.preventDefault();
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
