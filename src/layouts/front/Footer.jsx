import React from 'react'
import { Link } from 'react-router'

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let root = this.props.route.global.documentRoot;

    return (
      <footer id="Footer">
        <div id="footerLink">
          <nav className="lf-contents">
            <div>
              <p>
                <i className="fa fa-plus-square" />
                清掃
              </p>
              <ul>
                <li>サービス案内</li>
                <li>清掃業務管理</li>
                <li>特徴</li>
                <li>サポート</li>
              </ul>
            </div>

            <div>
              <p>
                <i className="fa fa-plus-square" />
                ビル管理
              </p>
              <ul>
                <li>サービス案内</li>
                <li>取り組み</li>
                <li>特徴</li>
                <li>サポート</li>
              </ul>
            </div>

            <div>
              <p>
                <i className="fa fa-plus-square" />
                マンション管理
              </p>
              <ul>
                <li>サービス案内</li>
                <li>取り組み</li>
                <li>特徴</li>
                <li>サポート</li>
              </ul>
            </div>

            <div>
              <p>
                <i className="fa fa-plus-square" />
                運行管理
              </p>
              <ul>
                <li>サービス案内</li>
                <li>導入事例</li>
                <li>特徴</li>
                <li>安全・安心・快適への取組</li>
              </ul>
            </div>

            <div>
              <p>
                <i className="fa fa-plus-square" />
                会社案内
              </p>
              <ul>
                <li>遠鉄アシストについて</li>
                <li>社長メッセージ</li>
                <li>会社概要</li>
                <li>戦略事業</li>
              </ul>
            </div>

            <div>
              <p>
                <i className="fa fa-plus-square" />
                その他
              </p>
              <ul>
                <li>お仕事を探す</li>
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
                    src="imgs/banners/01.jpg"
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
                    src="imgs/banners/02.jpg"
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
                    src="imgs/banners/04.jpg"
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
                    src="imgs/banners/05.jpg"
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
                    src="imgs/banners/06.jpg"
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
                    src="imgs/banners/07.jpg"
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
                    src="imgs/banners/08.jpg"
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
                    src="imgs/links/01.jpg"
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
                    src="imgs/links/02.jpg"
                    width="140"
                    height="35"
                    alt="えんてつカード"
                    />
                </a>
              </p>

              <p>
                <img
                  src="imgs/links/03.jpg"
                  width="140"
                  height="35"
                  alt="子育て中"
                  />

                <a
                  target="_blank"
                  href="https://cards.entetsu.co.jp/kidsclub/"
                  >
                  <img
                    src="imgs/links/04.jpg"
                    width="140"
                    height="35"
                    alt="えんてつカード キッズクラブ"
                    />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div id="credit" className="lf-credit">
          <div>
            <div>
              <a href="/">
                <img
                  src="imgs/logo_footer.png"
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
              ビル管理・清掃  - 053-455-3451<br />
              マンション管理  - 053-450-9922<br />
              運行管理請負    - 053-450-1515
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
