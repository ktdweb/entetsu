 /*
  * mysqlを起動すること
  * mysql.server start
  * <Leader> se で実行
  */


-- profile for local database;
-- profile名、DB名を変更すること ユーザ情報は変更する必要なし
let g:dbext_default_profile_assist = 'type=mysql:user=api:passwd=api012:host=0.0.0.0:port=3306:dbname=ad110xb4ir_assist:extra=-vvv'
DBSetOption profile=assist

-- profile for local testing database;
-- profile名、DB名を変更すること ユーザ情報は変更する必要なし
let g:dbext_default_profile_assist_test = 'type=mysql:user=api:passwd=api012:host=0.0.0.0:port=3306:dbname=ad110xb4ir_test:extra=-vvv'
DBSetOption profile=assist_test

SHOW databases;
SHOW tables;

SELECT * FROM `works` WHERE `unit_wage_id` = 2;

--- works

-- works テーブル確認 /*{{{*/
DESC `works`;
SELECT * FROM `works`;
/*}}}*/

-- works テーブル作成 /*{{{*/
DROP TABLE `works`;
CREATE TABLE IF NOT EXISTS `works` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `section_id` INT(2) NOT NULL,
  `title` VARCHAR(120) NOT NULL,
  `detail` TEXT NULL,
  `location` VARCHAR(120) NULL,
  `time` VARCHAR(120) NULL,
  `time_start` TIME NULL,
  `time_end` TIME NULL,
  `entry_start` DATETIME NULL,
  `entry_end` DATETIME NULL,
  `break` VARCHAR(120) NULL,
  `wage` VARCHAR(120) NULL,
  `days` VARCHAR(120) NULL,
  `holidays` VARCHAR(120) NULL,
  `type` VARCHAR(120) NULL,
  `term` VARCHAR(120) NULL,
  `career` VARCHAR(120) NULL,
  `selling` TEXT NULL,
  `cert` VARCHAR(120) NULL,
  `desc` TEXT NULL,
  `img` VARCHAR(45) NULL,
  `abbr_wage` VARCHAR(8) NOT NULL,
  `abbr_time` VARCHAR(16) NOT NULL,
  `unit_wage_id` INT(2) NOT NULL,
  `created` DATETIME NOT NULL,
  `modified` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
/*}}}*/

-- works レコード挿入 /*{{{*/
-- 2017年 12月 20日 火曜日 15時07分25秒 JST スナップショット

TRUNCATE `works`;
INSERT INTO `works` (
  `id`,
  `section_id`,
  `title`,
  `detail`,
  `location`,
  `time`,
  `time_start`,
  `time_end`,
  `entry_start`,
  `entry_end`,
  `break`,
  `wage`,
  `days`,
  `holidays`,
  `type`,
  `term`,
  `career`,
  `selling`,
  `cert`,
  `desc`,
  `img`,
  `abbr_wage`,
  `abbr_time`,
  `unit_wage_id`,
  `created`,
  `modified`
) VALUES

(
1,
1,
'浜松市内ホテル客室整備スタッフ',
'リゾートホテルのチェックイン後の客室整備・布団敷き・基本和室（約３０部屋程度）での布団敷きの作業ですが、時々洋室でのエキストラベッドの準備をして頂きます。※２～３人１組にて作業',
'浜松市東区',
'17:00~19:30',
'17:00:00',
'19:30:00',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'0分',
'時給860円',
'週5日程度',
'週休シフト制',
'パート',
'長期',
'不問',
'仲の良い楽しい職場です。20~50代の幅広い女性がいます。',
'普通運転免許',
'シフトは融通がききます。',
'001',
'860',
'17:00~19:30',
1,
'2016-09-26 17:10:12',
'2016-09-26 17:10:12'
),

(
3,
1,
'浜松市内事務所・工場内クリーンスタッフ',
'事務所・工場内の日常清掃（玄関・通路・トイレ等）',
'事務所・工場ビル（東区常光町）',
'7:30~11:30',
'07:30:00',
'11:30:00',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給820~830円　※見習期間3ヶ月は、時給-10円',
'週3日程度（シフト制）',
'土日祝他（工場カレンダーによる）',
'パート',
'',
'',
'女性活躍中　未経験者歓迎　丁寧な研修あり♪',
'',
'交通費規定支給、制服貸与、車通勤可',
'002',
'830',
'7:30~11:30',
1,
'2016-09-26 17:10:10',
'2016-09-26 17:10:10'),

(
4,
1,
'リブロス笠井クリーンスタッフ',
'フロア・トイレ等の日常清掃',
'リブロス笠井（東区笠井町）',
'A.8:00~12:00（11:30）　B(9/12).13:00~17:00（土日祝は19:00）',
'08:00:00',
'17:00:00',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給830~840円　※見習期間3ヶ月は、時給-10円',
'',
'月7日（シフトによる）',
'パート',
'',
'',
'女性活躍中　未経験者歓迎　丁寧な研修あり♪',
'',
'交通費規定支給、制服貸与、車通勤可',
'002',
'840',
'8:00~17:00',
1,
'2016-09-26 17:10:09',
'2016-09-26 17:10:09'),

(
5,
1,
'遠鉄電車各駅舎クリーンスタッフ',
'遠鉄電車各駅舎での日常清掃（待合室・ホーム・階段・トイレ等）',
'浜松市内各地',
'7:30~12:00　※シフトによる',
'07:30:00',
'12:00:00',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給830~840円　※見習期間3ヶ月は、時給-10円',
'',
'月10日程度（シフトによる）',
'パート',
'',
'',
'女性活躍中　丁寧な研修あり♪',
'',
'交通費規定支給、制服貸与',
'002',
'840',
'7:30~12:00',
1,
'2016-09-26 17:10:08',
'2016-09-26 17:10:08'),

(
7,
1,
'舘山寺地区ホテル客室整備・客室の布団敷き',
'A.客室整備　B.客室の布団敷き',
'ホテルウェルシーズン浜名湖',
'A.9:00~13:00（終了時間変動有）　B.17:00~19:30（終了時間変動有）※ア　短期・週3日程度勤務も可',
'09:00:00',
'19:30:00',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給A.860円~　B.870円~　※見習い期間3ヶ月は時給-10円　※7/25~8/31時給50円UP　※アは時給A.820円~　B.830円~',
'',
'月8日程度（シフトによる）',
'パート・アルバイト',
'長期または1ヵ月程度の短期もOK',
'',
'女性活躍中　短期も同時募集！　12/29~1/3は年末年始特別手当あり1日1,000円',
'',
'交通費規定支給、車通勤可、制服貸与',
'001',
'870',
'9:00~19:30',
1,
'2016-09-26 17:10:06',
'2016-09-26 17:10:06'),

(
8,
1,
'舘山寺地区ホテル客室整備・客室の布団敷き',
'ホテル共用部・温泉施設等の清掃',
'ホテルウェルシーズン浜名湖',
'A.7:45~13:00　B.8:00~12:00　※A.Bシフト制',
'07:45:00',
'13:00:00',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給860円~　※見習い期間3ヶ月は時給-10円　※7/25～8/31時給50円UP',
'',
'月8日程度（シフトによる）',
'パート・アルバイト',
'',
'',
'女性活躍中　7/25～8/31時給50円UP',
'',
'交通費規定支給、車通勤可、制服貸与',
'001',
'860',
'7:45~13:00',
1,
'2016-09-26 17:10:05',
'2016-09-26 17:10:05'),

(
12,
1,
'磐田市内工場内クリーンスタッフ',
'工場施設内の日常清掃（通路・フロア・トイレ等）',
'新平山工業団地（磐田市下野部）　浜北大橋北東／車で10分',
'8:00~12:00',
'08:00:00',
'12:00:00',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給840~850円',
'週3~4日',
'土、日、祝日他（工場カレンダーによる）',
'パート',
'',
'',
'女性活躍中!!丁寧な研修あり♪未経験者歓迎♪',
'',
'交通費規定支給、車通勤可、制服貸与',
'002',
'850',
'8:00~12:00',
1,
'2016-09-26 17:10:01',
'2016-09-26 17:10:01'),

(
13,
1,
'遠鉄ストアフードワン佐鳴台クリーンスタッフ',
'店内・店外の日常清掃（フロア・トイレ・駐車場・階段等）',
'遠鉄ストアフードワン佐鳴台店',
'8:00~10:00、7:30~10:30（日曜日のみ）',
'08:00:00',
'10:00:00',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給870円~880円　※見習い期間3ヶ月は時給860円~870円',
'週4~5日程度（シフトによる）',
'1/1、他2日',
'パート・アルバイト',
'',
'',
'丁寧な研修あり♪未経験者歓迎',
'',
'交通費規定支給、制服貸与、車通勤可',
'002',
'880',
'8:00~10:00',
1,
'2016-09-26 17:10:00',
'2016-09-26 17:10:00'),

(
15,
1,
'遠鉄ストア向宿店クリーンスタッフ',
'店内・店外の日常清掃（フロア・トイレ・駐車場・階段等）',
'遠鉄ストア向宿店',
'7:30~9:30',
'07:30:00',
'09:30:00',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給870円~880円　※見習い期間3ヶ月は時給860円~870円',
'週3~5日程度（シフトによる）',
'1/1、他2日',
'パート・アルバイト',
'',
'',
'丁寧な研修あり♪未経験者歓迎',
'',
'交通費規定支給、制服貸与、車通勤可',
'002',
'880',
'7:30~9:30',
1,
'2016-09-26 17:09:58',
'2016-09-26 17:09:58'),

(
16,
1,
'遠鉄ストア初生店クリーンスタッフ',
'店内・店外の日常清掃（フロア・トイレ・駐車場・階段等）',
'遠鉄ストア初生店',
'7:30~9:30',
'07:30:00',
'09:30:00',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給870円~880円　※見習い期間3ヶ月は時給860円~870円',
'週3~5日程度（シフトによる）',
'1/1、他2日',
'パート・アルバイト',
'',
'',
'丁寧な研修あり♪未経験者歓迎',
'',
'交通費規定支給、制服貸与、車通勤可',
'002',
'880',
'7:30~9:30',
1,
'2016-09-26 17:09:57',
'2016-09-26 17:09:57'),

(
18,
1,
'浜松市内ホテルベッドメイク',
'シティホテル内のベッドメイク',
'ホテルコンコルド浜松（中区元城町）',
'9:00~13:00（終了時間変動有）',
'09:00:00',
'13:00:00',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給830円~840円　※見習い期間3ヶ月は時給820円~830円',
'',
'月8~9日程度（シフトによる）',
'パート・アルバイト',
'',
'',
'☆女性活躍中☆丁寧な研修あり♪未経験者歓迎',
'',
'交通費規定支給、制服貸与',
'002',
'840',
'9:00~13:00',
1,
'2016-09-26 17:09:55',
'2016-09-26 17:09:55'),

(
20,
1,
'浜松市内事務所ビル・レストランクリーンスタッフ',
'遠鉄田町（事務所）ビル・レストランの日常清掃',
'遠鉄田町ビル・レストラン（中区田町）',
'月～土･･･7:00~11:00　日祝･･･7:00~9:30',
'07:00:00',
'11:00:00',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給820円~830円　※見習い期間3ヶ月は時給810円~820円',
'',
'月7日（シフトによる）',
'パート・アルバイト',
'',
'',
'☆女性活躍中☆丁寧な研修あり♪未経験者歓迎',
'',
'交通費規定支給、制服貸与',
'002',
'830',
'7:00~11:00',
1,
'2016-09-26 17:09:53',
'2016-09-26 17:09:53'),

(
45,
1,
'遠鉄ストア新橋店クリーンスタッフ',
'店内・店外の日常清掃（フロア・トイレ・駐車場・階段等）',
'遠鉄ストア新橋店',
'7:30~9:30',
'07:30:00',
'09:30:00',
'2015-01-01 00:00:00',
'0000-00-00 00:00:00',
'',
'時給870円~880円　※見習い期間3ヶ月は時給860円~870円',
'週3~5日程度（シフトによる）',
'',
'パート・アルバイト',
'',
'',
'空いた時間を有効活用♪男女活躍中!',
'',
'交通費規定支給、制服貸与、車通勤可',
'001',
'870',
'7:30~9:30',
1,
'2016-11-16 14:48:26',
'2016-11-16 14:48:26'),

(
46,
1,
'遠鉄ストア立野店クリーンスタッフ',
'店内・店外の日常清掃（フロア・トイレ・駐車場・階段等）',
'遠鉄ストア立野店',
'7:30~9:30',
'07:30:00',
'09:30:00',
'2015-01-01 00:00:00',
'0000-00-00 00:00:00',
'',
'時給870円~880円　※見習い期間3ヶ月は時給860円~870円',
'週3~5日程度（シフトによる）',
'',
'パート・アルバイト',
'',
'',
'空いた時間を有効活用♪男女活躍中!',
'',
'交通費規定支給、制服貸与、車通勤可',
'001',
'870',
'7:30~9:30',
1,
'2016-11-16 14:48:26',
'2016-11-16 14:48:26'),

(
57,
4,
'スクールバス（高校）の運転業務（三方原町）',
'私立高校のスクールバス（大型）の運転業務です。浜松市・湖西市（全8コース）を1ヶ月毎にローテーションしていきます。',
'浜松市北区三方原町3453',
'(1)05:50~08:20　(2)15:40~21:10 （1）（2）両方の勤務',
'05:50:00',
'21:10:00',
'2015-01-01 00:00:00',
'0000-00-00 00:00:00',
'',
'日給9800円~10300円',
'月21.7日',
'日・祝他　夏季休暇・年末年始',
'特定契約従業員',
'~29.3.31（更新あり）',
'不問',
'50~60代の方が元気に活躍中！',
'大型1種免許以上',
'通勤手当　日額300円まで、マイカー通勤可、無料駐車場あり',
'003',
'10300',
'5:50~21:10',
2,
'2016-11-16 14:48:26',
'2016-11-16 14:48:26'),

(
58,
4,
'幼稚園送迎バスの運転業務及び施設管理等用務業務全般（幸）',
'（請負業務）幼稚園バスの送迎はマイクロバスを運転し高台地区を回ります。先生が1名同乗します。運転以外では迎えと送りの中間で園内清掃用務業務を行います。',
'',
'(1)07:40~10:00　(2)14:00~16:10 （1）（2）両方の勤務',
'07:40:00',
'16:10:00',
'2015-01-01 00:00:00',
'0000-00-00 00:00:00',
'',
'日給6000円',
'週5日(年間200日程度)',
'土・日・祝　春・夏・冬の長期休みあり',
'パート',
'29.4.1~30.3.31（更新あり）',
'不問',
'50~60代の方が元気に活躍中！',
'大型1種免許以上',
'通勤手当　日額400円まで、マイカー通勤可、無料駐車場あり',
'003',
'6000',
'7:40~16:10',
2,
'2016-11-16 14:48:26',
'2016-11-16 14:48:26'),

(
59,
4,
'幼稚園送迎バスの運転及び付帯業務（湖東町）',
'（請負業務）浜松市西地区で幼稚園までの園児を送迎バスの運転業務です。車両は幼児用マイクロバスで幼稚園の先生が同乗します。車両維持管理の点検・清掃業務を含みます。',
'浜松市西区湖東町1169-179',
'(1)07:30~09:40　(2)13:45~15:45 （1）（2）両方の勤務',
'07:30:00',
'15:45:00',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'日給5600円~6600円',
'週5日(年間200日程度)',
'土・日・祝　幼稚園の閉園日　春夏冬の長期休みあり',
'パート',
'29.4.1~30.3.31（更新あり）',
'不問',
'50~60代の方が元気に活躍中！',
'大型1種免許以上',
'通勤手当　毎月6000円まで、マイカー通勤可、無料駐車場あり',
'003',
'6600',
'7:30~15:45',
2,
'2016-11-16 14:48:26',
'2016-11-16 14:48:26'),

(
60,
4,
'高校スクールバスの運転業務（下池川町）',
'（請負業務）高校のスクールバスの送迎はマイクロバスを運転し、主に浜松市内（都田方面）を回ります。主業務は高校生の送迎です。',
'浜松市中区下池川町34-3',
'(1)06:00~08:00　(2)16:30~19:10 （1）（2）両方の勤務',
'06:00:00',
'19:10:00',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'日給6600円',
'週5日',
'土・日・祝　長期休暇あり　春・夏・冬休みあり',
'パート',
'29.4.1~30.3.31（更新あり）',
'不問',
'50~60代の方が元気に活躍中！',
'中型免許限定解除（1種）以上',
'通勤手当　毎月6000円まで、マイカー通勤可、無料駐車場あり',
'003',
'6600',
'6:00~19:10',
2,
'2016-11-16 14:48:26',
'2016-11-16 14:48:26'),

(
61,
4,
'幼稚園送迎バスの運転業務（馬郡町）',
'（請負業務）幼稚園バス（マイクロバス）の運転業務です。主に浜松市西区エリアを回ります。先生が同乗してくれます。',
'浜松市西区馬郡町2560',
'(1)07:20~09:50　(2)14:00~16:00 （1）（2）両方の勤務',
'07:20:00',
'16:00:00',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'日給6100円',
'週5日(年間200日程度)',
'土・日・祝　幼稚園の閉園日　春・夏・冬の長期休みあり',
'パート',
'29.4.1~30.3.31（更新あり）',
'不問',
'50~60代の方が元気に活躍中！',
'中型免許限定解除以上',
'通勤手当　日額300円まで、マイカー通勤可、無料駐車場あり',
'003',
'6100',
'7:20~16:00',
2,
'2016-11-16 14:48:26',
'2016-11-16 14:48:26'),

(
62,
4,
'幼稚園送迎バスの運転業務（栄町）',
'（請負業務）幼稚園バスの送迎はマイクロバスを運転し浜松市内を回ります。先生が1名同乗します。',
'浜松市中区栄町118',
'(1)06:20~09:00　(2)14:00~16:30 （1）（2）両方の勤務',
'06:20:00',
'16:30:00',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'日給7600円',
'週5日(年間200日程度)',
'土・日・祝　春・夏・冬の長期休みあり',
'パート',
'29.4.1~30.3.31（更新あり）',
'不問',
'50~60代の方が元気に活躍中！',
'大型1種免許以上',
'通勤手当　毎月6000円まで、マイカー通勤可、無料駐車場あり',
'003',
'7600',
'6:20~16:30',
2,
'2016-11-16 14:48:26',
'2016-11-16 14:48:26'),

(
63,
4,
'幼稚園送迎バスの運転業務（蜆塚）',
'（請負業務）学校送迎用のマイクロバス（8m）を運転し、生徒の送迎をします。主に浜松北区～西区方面の決まったコースを走ります。その他車輌の給油、清掃等付帯業務も行います。',
'浜松市中区蜆塚3丁目14-1',
'(1)06:30~08:10　(2)12:30~13:55　（3）16:35~20:30 （1）＋（3）、土曜日等のみ（1）＋（2）シフト制になります。',
'06:30:00',
'20:30:00',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'日給7000円~8000円',
'週5日程度',
'隔週で土曜日休み。長期休暇：春、夏、冬',
'パート',
'~29.3.31（更新あり）',
'不問',
'50~60代の方が元気に活躍中！',
'中型自動車免許（一種・限定解除以上）',
'通勤手当　日額400円まで、マイカー通勤可、無料駐車場あり',
'003',
'8000',
'6:30~20:30',
2,
'2016-11-16 14:48:26',
'2016-11-16 14:48:26'),

(
65,
1,
'遠鉄ストアフードワン南浅田クリーンスタッフ',
'店内・店外の日常清掃（フロア・トイレ・駐車場・階段等）',
'遠鉄ストアフードワン南浅田店',
'7:30~9:30',
'07:30:00',
'09:30:00',
'2015-01-01 00:00:00',
'0000-00-00 00:00:00',
'',
'時給870円~880円　※見習い期間3ヶ月は時給860円~870円',
'週3~5日程度（シフトによる）',
'',
'パート・アルバイト',
'',
'',
'空いた時間を有効活用♪男女活躍中!',
'',
'交通費規定支給、制服貸与、車通勤可',
'001',
'870',
'7:30~9:30',
1,
'2016-11-16 14:48:26',
'2016-11-16 14:48:26'
);
/*}}}*/

-- works tempカラムの追加・削除 /*{{{*/
ALTER TABLE `works` DROP COLUMN `location_id`;
ALTER TABLE `works` DROP COLUMN `time_id`;
ALTER TABLE `works` DROP COLUMN `category_id`;

ALTER TABLE `works` ADD `location_id` INT(2) NULL;
ALTER TABLE `works` ADD `time_id` INT(2) NULL;
ALTER TABLE `works` ADD `category_id` INT(2) NULL;
/*}}}*/


--- tags

-- tags テーブル確認 /*{{{*/
DESC `tags`;
SELECT * FROM `tags`;
/*}}}*/

-- tags テーブル作成 /*{{{*/
DROP TABLE `tags`;
CREATE TABLE IF NOT EXISTS `tags` (
`id` INT(11) NOT NULL AUTO_INCREMENT,
`work_id` INT(11) NOT NULL,
`category_id` INT(3) NOT NULL,
PRIMARY KEY (`id`));
/*}}}*/

-- tags レコード挿入 /*{{{*/
-- 2017年 12月 20日 火曜日 15時07分25秒 JST スナップショット

TRUNCATE `tags`;
INSERT INTO `tags` (
    `work_id`,
    `category_id`
) VALUES
(1, 3),
(1, 10),
(1, 14),
(1, 15),
(3, 3),
(3, 12),
(3, 15),
(4, 3),
(4, 10),
(4, 12),
(4, 13),
(4, 15),
(5, 1),
(5, 3),
(5, 6),
(5, 8),
(5, 12),
(5, 15),
(6, 1),
(6, 3),
(6, 6),
(6, 8),
(6, 13),
(6, 15),
(7, 4),
(7, 9),
(7, 11),
(7, 15),
(8, 4),
(8, 12),
(8, 15),
(10, 8),
(10, 10),
(10, 12),
(10, 15),
(11, 8),
(11, 10),
(11, 12),
(11, 15),
(12, 8),
(12, 12),
(12, 15),
(13, 1),
(13, 10),
(13, 12),
(13, 15),
(14, 1),
(14, 10),
(14, 12),
(14, 15),
(15, 1),
(15, 10),
(15, 12),
(15, 15),
(16, 2),
(16, 10),
(16, 12),
(16, 15),
(17, 4),
(17, 10),
(17, 12),
(17, 15),
(18, 1),
(18, 12),
(18, 15),
(20, 1),
(20, 12),
(20, 15),
(24, 2),
(24, 9),
(24, 18),
(45, 5),
(45, 10),
(45, 12),
(45, 15),
(46, 5),
(46, 10),
(46, 12),
(46, 15),
(57, 2),
(57, 9),
(57, 16),
(58, 1),
(58, 9),
(58, 16),
(59, 4),
(59, 9),
(59, 16),
(60, 1),
(60, 9),
(60, 16),
(61, 4),
(61, 9),
(61, 16),
(62, 1),
(62, 9),
(62, 16),
(63, 1),
(63, 9),
(63, 16),
(64, 3),
(64, 10),
(64, 12),
(64, 15),
(65, 1),
(65, 10),
(65, 12),
(65, 15);
/*}}}*/


--- sections

-- sections テーブル確認 /*{{{*/
DESC `sections`;
SELECT * FROM `sections`;
/*}}}*/

-- sections テーブル作成 /*{{{*/
DROP TABLE `sections`;
CREATE TABLE IF NOT EXISTS `sections` (
  `id` INT(2) NOT NULL,
  `sort` INT(2) NULL DEFAULT 0,
  `name` VARCHAR(20) NOT NULL,
  `tel` VARCHAR(15) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
/*}}}*/

-- sections レコード挿入 /*{{{*/
TRUNCATE `sections`;
INSERT INTO `sections` (
    `id`,
    `sort`,
    `name`,
    `tel`,
    `email`
) VALUES
(1, 1, '清掃', '053-455-3451', 'cleaning@entetsu-assist.co.jp'),
(2, 2, 'ビル', '053-455-3451', 'building@entetsu-assist.co.jp'),
(3, 3, 'マンション', '053-450-9922', 'mansion@entetsu-assist.co.jp'),
(4, 4, '運行', '053-450-1515', 'driving@entetsu-assist.co.jp'),
(5, 5, '指定管理', '053-450-1516', 'strategy@entetsu-assist.co.jp'),
(6, 6, 'ベンリー', '053-472-0255', 'benry@entetsu-assist.co.jp'),
(7, 7, '食品検査', '053-441-5075', 'foods@entetsu-assist.co.jp'),
(8, 8, '総務', '053-472-0255', 'recruit@entetsu-assist.co.jp'),
(9, 9, 'その他', '053-450-1511', 'recruit@entetsu-assist.co.jp')
/*}}}*/


--- wages

-- wages テーブル確認 /*{{{*/
DESC `wages`;
SELECT * FROM `wages`;
/*}}}*/

-- sections テーブル作成 /*{{{*/
DROP TABLE `wages`;
CREATE TABLE IF NOT EXISTS `wages` (
  `id` INT(2) NOT NULL,
  `sort` INT(2) NULL DEFAULT 0,
  `name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
/*}}}*/

-- sections レコード挿入 /*{{{*/
TRUNCATE `wages`;
INSERT INTO `wages` (
    `id`,
    `sort`,
    `name`
) VALUES
(1, 1, '時給'),
(2, 2, '日給'),
(3, 3, '月給')
;
/*}}}*/


--- categories

-- categories テーブル確認 /*{{{*/
DESC `categories`;
SELECT * FROM `categories`;
/*}}}*/

-- categories テーブル作成 /*{{{*/
DROP TABLE `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` INT(3) NOT NULL,
  `category_group_id` VARCHAR(45) NOT NULL,
  `sort` INT(3) NOT NULL,
  `name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
/*}}}*/

-- categories レコード挿入 /*{{{*/
TRUNCATE `categories`;
INSERT INTO `categories` (
    `id`,
    `category_group_id`,
    `sort`,
    `name`
) VALUES
(1, 1, 1, '中区'),
(2, 1, 2, '北区'),
(3, 1, 3, '東区'),
(4, 1, 4, '西区'),
(5, 1, 5, '南区'),
(6, 1, 6, '浜北区'),
(7, 1, 7, '天竜区'),
(8, 1, 8, '市外'),
(9, 2, 1, 'フルタイム'),
(10, 2, 2, '短時間'),
(11, 2, 3, '短期'),
(12, 2, 4, '午前中'),
(13, 2, 5, '午後'),
(14, 2, 6, '夕方'), 
(15, 3, 1, '清掃職'),
(16, 3, 2, 'ドライバー'),
(17, 3, 3, 'ビル管理スタッフ'),
(18, 3, 4, '営業・事務職'),
(19, 3, 7, 'その他'),
(20, 3, 5, '食品検査技師'),
(21, 3, 6, '新卒');
/*}}}*/


--- category_groups

-- category_groups テーブル確認 /*{{{*/
DESC `category_groups`;
SELECT * FROM `category_groups`;
/*}}}*/

-- category_groups テーブル作成 /*{{{*/
DROP TABLE `category_groups`;
CREATE TABLE IF NOT EXISTS `ad110xb4ir_assist`.`category_groups` (
  `id` INT(1) NOT NULL,
  `name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
/*}}}*/

-- category_groups レコード挿入 /*{{{*/
TRUNCATE `category_groups`;
INSERT INTO `category_groups` (
    `id`,
    `name`
) VALUES
(1, '場所'),
(2, '時間'),
(3, '業種');
/*}}}*/


--
-- 以下は仕様変更により未使用
--

--- 登録テスト用
-- 登録クリア /*{{{*/
TRUNCATE `members`;
TRUNCATE `entries`;
TRUNCATE `tokens`;

SELECT * FROM `members`;
SELECT * FROM `entries`;
SELECT * FROM `tokens`;
/*}}}*/

--- members

-- members テーブル確認 /*{{{*/
DESC `members`;
SELECT * FROM `members`;
/*}}}*/

-- members テーブル作成 /*{{{*/
DROP TABLE `members`;
CREATE TABLE IF NOT EXISTS `members` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(12) NOT NULL,
  `furi` VARCHAR(24) NOT NULL,
  `tel` VARCHAR(13) NOT NULL,
  `mail` VARCHAR(110) NOT NULL,
  `password` VARCHAR(16) NULL,
  `gender` INT(1) NULL,
  `age` INT(2) NULL,
  `birthday` DATE NULL,
  `zip` INT(8) NULL,
  `prefecture` VARCHAR(8) NULL,
  `city` VARCHAR(16) NULL,
  `address` VARCHAR(45) NULL,
  `detail_flag` TINYINT(1) NULL,
  `created` DATETIME NULL,
  `modified` DATETIME NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `mail_UNIQUE` (`mail` ASC))
ENGINE = InnoDB
/*}}}*/

-- members レコード挿入 /*{{{*/
TRUNCATE `members`;
INSERT INTO `members` (
  `name`,
  `furi`,
  `tel`,
  `mail`,
  `password`,
  `gender`,
  `age`,
  `birthday`,
  `zip`,
  `prefecture`,
  `city`,
  `address`,
  `detail_flag`,
  `created`,
  `modified`
) VALUES
('山田太郎', 'ヤマダタロウ', '09068074649', 'taro@seeknetusa.com', '', 1, '42', '0000-00-00', NULL, NULL, '', '', NULL, NOW(), NOW()),
('山田花子', 'ヤマダハナコ', '09011112222', 'hanako@seeknetusa.com', '0123', 2, 24, '1993-04-01', 4201234, '静岡県', '浜松市南区', '遠鉄町1-4', 1, NOW(), NOW());
/*}}}*/

--- entries

-- entries テーブル確認 /*{{{*/
DESC `entries`;
SELECT * FROM `entries`;
/*}}}*/

-- entries テーブル作成 /*{{{*/
DROP TABLE `entries`;
CREATE TABLE IF NOT EXISTS `entries` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `member_id` INT(11) NOT NULL,
  `work_id` INT(11) NOT NULL,
  `hired_flag` TINYINT(1) NULL,
  `close_flag` TINYINT(1) NULL,
  `created` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
/*}}}*/

-- entries レコード挿入 /*{{{*/
TRUNCATE `entries`;
INSERT INTO `entries` (
  `member_id`,
  `work_id`,
  `flag`,
  `created`
) VALUES
(1, 1, NULL, NOW());
/*}}}*/

--- tokens

-- tokens テーブル確認 /*{{{*/
DESC `tokens`;
SELECT * FROM `tokens`;
/*}}}*/

-- tokens テーブル作成 /*{{{*/
DROP TABLE `tokens`;
CREATE TABLE IF NOT EXISTS `tokens` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `member_id` INT(11) NOT NULL,
  `token` VARCHAR(255) NOT NULL,
  `created` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
/*}}}*/

-- tokens レコード挿入 /*{{{*/
TRUNCATE `tokens`;
INSERT INTO `tokens` (
  `member_id`,
  `token`,
  `created`
) VALUES
(1, '2157d1c1995ed74', NOW());
/*}}}*/


--- topics

-- topics テーブル確認 /*{{{*/
DESC `topics`;
SELECT * FROM `topics`;
/*}}}*/

-- topics テーブル作成 /*{{{*/
DROP TABLE `topics`;
CREATE TABLE IF NOT EXISTS `topics` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category_id` INT(1) NOT NULL,
  `title` VARCHAR(30) NOT NULL,
  `link` VARCHAR(255) NULL,
  `desc` TEXT NULL,
  `term_start` DATETIME NULL,
  `term_end` DATETIME NULL,
  `created` DATETIME NOT NULL,
  `modified` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
/*}}}*/

-- topics レコード挿入 /*{{{*/
TRUNCATE `topics`;
INSERT INTO `topics` (
  `member_id`,
  `token`,
  `created`
) VALUES
(1, '2157d1c1995ed74', NOW());
/*}}}*/
