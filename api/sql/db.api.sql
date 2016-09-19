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

-- users テーブル確認 /*{{{*/
SELECT * FROM `users`;
/*}}}*/

--- 登録テスト用
-- 登録クリア /*{{{*/
TRUNCATE `members`;
TRUNCATE `entries`;
TRUNCATE `tokens`;

SELECT * FROM `members`;
SELECT * FROM `entries`;
SELECT * FROM `tokens`;
/*}}}*/


--- works

-- works テーブル確認 /*{{{*/
DESC `works`;
SELECT * FROM `works`;
SELECT `works`.* FROM `tags` INNER JOIN `works` ON `tags`.`work_id` = `works`.`id` WHERE `tags`.`category_id` = 1
/*}}}*/

-- works テーブル作成 /*{{{*/
DROP TABLE `works`;
CREATE TABLE IF NOT EXISTS `works` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
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
  `unit_wage` VARCHAR(8) NOT NULL,
  `created` DATETIME NOT NULL,
  `modified` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
/*}}}*/

-- works レコード挿入 /*{{{*/
TRUNCATE `works`;
INSERT INTO `works` (
  `id`,
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
  `unit_wage`,
  `created`,
  `modified`
) VALUES

(
1,
'ホテル客室整備スタッフ',
'リゾートホテルのチェックイン後の客室整備・布団敷き・基本和室（約３０部屋程度）での布団敷きの作業ですが、時々洋室でのエキストラベッドの準備をして頂きます。※２～３人１組にて作業',
'浜松市東区',
'17:00~19:30',
'17:00',
'19:30',
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
'時給',
NOW() + INTERVAL 60 second,
NOW() + INTERVAL 60 second
),

(
2,
'クリーンスタッフ',
'温浴施設内の日常清掃（脱衣所・洗い場・階段等）',
'温浴施設（東区天王町）',
'5:30~8:30',
'17:00',
'19:30',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給940~950円　※見習期間3ヶ月は、時給-10円',
'週3~4日（シフト制）',
'',
'パート',
'',
'',
'女性活躍中　未経験者歓迎　丁寧な研修あり♪',
'',
'交通費規定支給、制服貸与、車通勤可',
'002',
'950',
'5:30~8:30',
'時給',
NOW() + INTERVAL 59 second,
NOW() + INTERVAL 59 second
),

(
3,
'クリーンスタッフ',
'事務所・工場内の日常清掃（玄関・通路・トイレ等）',
'事務所・工場ビル（東区常光町）',
'7:30~11:30',
'07:30',
'11:30',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給820~850円　※見習期間3ヶ月は、時給-10円',
'週3日程度（シフト制）',
'土日祝他（工場カレンダーによる）',
'パート',
'',
'',
'女性活躍中　未経験者歓迎　丁寧な研修あり♪',
'',
'交通費規定支給、制服貸与、車通勤可',
'002',
'850',
'7:30~11:30',
'時給',
NOW() + INTERVAL 58 second,
NOW() + INTERVAL 58 second
),

(
4,
'クリーンスタッフ',
'フロア・トイレ等の日常清掃',
'リブロス笠井（東区笠井町）',
'A.8:00~12:00（11:30）　B.13:00~17:00（土日祝は19:00）',
'8:00',
'17:00',
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
'時給',
NOW() + INTERVAL 57 second,
NOW() + INTERVAL 57 second
),

(
5,
'クリーンスタッフ',
'遠鉄電車各駅舎での日常清掃（待合室・ホーム・階段・トイレ等）',
'浜松市内各地',
'7:30~12:00　※シフトによる',
'07:30',
'12:00',
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
'時給',
NOW() + INTERVAL 56 second,
NOW() + INTERVAL 56 second
),

(
6,
'クリーンスタッフ',
'遠鉄電車各駅舎での日常清掃（待合室・ホーム・階段・トイレ等）',
'浜松市内各地',
'12:00~16:30　※シフトによる',
'12:00',
'16:30',
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
'12:00~16:30',
'時給',
NOW() + INTERVAL 55 second,
NOW() + INTERVAL 55 second
),

(
7,
'客室整備・客室の布団敷き',
'A.客室整備　B.客室の布団敷き',
'ホテルウェルシーズン浜名湖',
'A.9:00~13:00（終了時間変動有）　B.17:00~19:30（終了時間変動有）※ア　短期・週3日程度勤務も可',
'09:00',
'19:30',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給A.860円~　B.875円~　※見習い期間3ヶ月は時給-10円　※7/25～8/31時給50円UP　※アは時給A.820円~　B.830円~',
'',
'月8日程度（シフトによる）',
'パート・アルバイト',
'長期または1ヵ月程度の短期もOK',
'',
'女性活躍中　短期も同時募集！　7/25～8/31時給50円UP',
'',
'交通費規定支給、車通勤可、制服貸与',
'001',
'875',
'9:00~19:30',
'時給',
NOW() + INTERVAL 54 second,
NOW() + INTERVAL 54 second
),

(
8,
'客室整備・客室の布団敷き',
'ホテル共用部・温泉施設等の清掃',
'ホテルウェルシーズン浜名湖',
'A.7:45~13:00　B.8:00~12:00　※A.Bシフト制',
'07:45',
'13:00',
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
'時給',
NOW() + INTERVAL 53 second,
NOW() + INTERVAL 53 second
),

(
9,
'客室整備・客室の布団敷き',
'玄関・通路・トイレ・研修室等の日常清掃',
'青少年の家',
'8:30~11:30',
'08:30',
'11:30',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給785円~790円　※見習い期間3ヶ月は時給785円',
'週3~4日',
'月曜日（祝日の場合は翌日、長期休暇時は出勤）、年末年始',
'パート・アルバイト',
'',
'',
'女性活躍中',
'',
'交通費規定支給、車通勤可、制服貸与',
'001',
'790',
'8:30~11:30',
'時給',
NOW() + INTERVAL 52 second,
NOW() + INTERVAL 52 second
),

(
10,
'クリーンスタッフ',
'店内・店外の日常清掃（フロア・トイレ・駐車場・階段等）',
'遠鉄ストア池田店（磐田市池田）',
'7:30~10:00',
'07:30',
'10:00',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給870~880円　※見習い期間3ヶ月は時給860~870円',
'週3~5日',
'',
'パート',
'',
'',
'男女活躍中!!丁寧な研修あり♪未経験者歓迎♪',
'',
'交通費規定支給、車通勤可、制服貸与',
'002',
'880',
'7:30~10:00',
'時給',
NOW() + INTERVAL 51 second,
NOW() + INTERVAL 51 second
),

(
11,
'クリーンスタッフ',
'店内・店外の日常清掃（フロア・トイレ・駐車場・階段等）',
'遠鉄ストア磐田店（磐田市見付）',
'7:30~9:30',
'07:30',
'09:30',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給870~880円　※見習い期間3ヶ月は時給860~870円',
'週3~5日',
'',
'パート',
'',
'',
'男女活躍中!!丁寧な研修あり♪未経験者歓迎♪',
'',
'交通費規定支給、車通勤可、制服貸与',
'002',
'880',
'7:30~9:30',
'時給',
NOW() + INTERVAL 50 second,
NOW() + INTERVAL 50 second
),

(
12,
'クリーンスタッフ',
'工場施設無いの日常清掃（通路・フロア・トイレ等）',
'新平山工業団地（磐田市下野部）　浜北大橋北東／車で10分',
'8:00~12:00',
'08:00',
'12:00',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給785円',
'週3~4日',
'土、日、祝日他（工場カレンダーによる）',
'パート',
'',
'',
'女性活躍中!!丁寧な研修あり♪未経験者歓迎♪',
'',
'交通費規定支給、車通勤可、制服貸与',
'002',
'785',
'8:00~12:00',
'時給',
NOW() + INTERVAL 49 second,
NOW() + INTERVAL 49 second
),

(
13,
'クリーンスタッフ',
'店内・店外の日常清掃（フロア・トイレ・駐車場・階段等）',
'遠鉄ストアフードワン佐鳴台店',
'8:00~10:00、7:30~10:30（日曜日のみ）',
'08:00',
'10:00',
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
'時給',
NOW() + INTERVAL 48 second,
NOW() + INTERVAL 48 second
),

(
14,
'クリーンスタッフ',
'店内・店外の日常清掃（フロア・トイレ・駐車場・階段等）',
'遠鉄ストア富塚店',
'8:00~10:00',
'08:00',
'10:00',
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
'8:00~10:00',
'時給',
NOW() + INTERVAL 47 second,
NOW() + INTERVAL 47 second
),

(
15,
'クリーンスタッフ',
'店内・店外の日常清掃（フロア・トイレ・駐車場・階段等）',
'遠鉄ストア向宿店',
'7:30~9:30',
'07:30',
'09:30',
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
'時給',
NOW() + INTERVAL 46 second,
NOW() + INTERVAL 46 second
),

(
16,
'クリーンスタッフ',
'店内・店外の日常清掃（フロア・トイレ・駐車場・階段等）',
'遠鉄ストア初生店',
'7:30~9:30',
'07:30',
'09:30',
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
'時給',
NOW() + INTERVAL 45 second,
NOW() + INTERVAL 45 second
),

(
17,
'クリーンスタッフ',
'店内・店外の日常清掃（フロア・トイレ・駐車場・階段等）',
'遠鉄ストア大平台店',
'7:30~9:30',
'07:30',
'09:30',
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
'時給',
NOW() + INTERVAL 44 second,
NOW() + INTERVAL 44 second
),

(
18,
'クリーンスタッフ',
'シティホテル内のベッドメイク',
'ホテルコンコルド浜松（中区元城町）',
'9:00~13:00（終了時間変動有）',
'09:00',
'13:00',
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
'時給',
NOW() + INTERVAL 43 second,
NOW() + INTERVAL 43 second
),

(
19,
'クリーンスタッフ',
'シティホテル内共用部の日常清掃',
'ホテルコンコルド浜松（中区元城町）',
'17:00~21:00（実働4h）',
'17:00',
'21:00',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給830円~840円　※見習い期間3ヶ月は時給820円~830円',
'月15日程度（シフトによる）',
'',
'パート・アルバイト',
'',
'',
'☆女性活躍中☆丁寧な研修あり♪未経験者歓迎',
'',
'交通費規定支給、制服貸与、車通勤可',
'002',
'840',
'17:00~21:00',
'時給',
NOW() + INTERVAL 42 second,
NOW() + INTERVAL 42 second
),

(
20,
'クリーンスタッフ',
'遠鉄田町（事務所）ビル・レストランの日常清掃',
'遠鉄田町ビル・レストラン（中区田町）',
'月～土･･･7:00~11:00　日祝･･･7:00~9:30',
'07:00',
'11:00',
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
'時給',
NOW() + INTERVAL 41 second,
NOW() + INTERVAL 41 second
),

(
21,
'クリーンスタッフ',
'日常清掃（フロア・階段・トイレ・外周等）',
'浜松城（中区元城町）',
'8:30~12:00',
'08:30',
'12:00',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給830円~840円　※見習い期間3ヶ月は時給810円~820円',
'勤務日：月・木・日',
'火・土・年末（12/29～31）',
'パート・アルバイト',
'',
'',
'☆女性活躍中☆丁寧な研修あり♪未経験者歓迎',
'',
'交通費規定支給、制服貸与、車通勤可',
'002',
'840',
'8:30~12:00',
'時給',
NOW() + INTERVAL 40 second,
NOW() + INTERVAL 40 second
),

(
22,
'クリーンスタッフ',
'事務所ビル（事務所・店舗）駐車場の機械操作・誘導',
'事務所ビル駐車場（中区田町）',
'7:30~21:30（実働8hシフトによる）',
'7:30',
'21:30',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給910円~920円　※見習い期間3ヶ月は時給900円~910円',
'月15日以下（シフトによる）',
'',
'パート・アルバイト',
'',
'',
'☆男性活躍中☆丁寧な研修あり♪未経験者歓迎',
'普通自動車免許（AT限定不可）',
'交通費規定支給、制服貸与',
'002',
'920',
'7:30~21:30',
'時給',
NOW() + INTERVAL 39 second,
NOW() + INTERVAL 39 second
),

(
23,
'クリーンスタッフ',
'マンション内の温浴施設の日常清掃・水質検査等',
'ブライティ助信（中区助信町）',
'14:45~17:45',
'14:45',
'17:45',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'',
'時給840円~850円　※見習い期間3ヶ月は時給830円~840円',
'週3~4日程度（シフトによる）',
'12/30~1/3',
'パート・アルバイト',
'',
'',
'☆男性活躍中☆丁寧な研修あり♪未経験者歓迎',
'普通自動車免許（AT限定不可）',
'交通費規定支給、制服貸与',
'002',
'850',
'14:45~17:45',
'時給',
NOW() + INTERVAL 38 second,
NOW() + INTERVAL 38 second
),

(
24,
'図書館スタッフ',
'図書館業務全般　カウンター業務（貸出・返却・予約等）、書架整理・点検、資料の装備・補修等',
'浜松市浜北区',
'①8:30~17:30　②10:15~19:15　③9:15~18:15（土・日・祝日）',
'08:30',
'18:30',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'60分',
'時給880円',
'週5日',
'週休2日（シフト制）',
'特定契約従業員',
'～29.3.31（更新あり）',
'不問',
'女性が多数活躍している楽しい職場です',
'司書資格（資格ない方は応相談）',
'簡単なＰＣ操作あり　実務経験あればなおよし',
'001',
'880',
'8:30~17:30',
'時給',
NOW() + INTERVAL 35 second,
NOW() + INTERVAL 35 second
),

(
25,
'幼稚園送迎バスドライバー',
'幼稚園送迎バスのドライバー、朝と午後にきめられた３コースを運行します。現在、バスの車庫（出勤場所）は浜松市西区または南区にあります。',
'浜松市中区',
'6:30～16:30',
'6:30',
'16:30',
'0000-00-00 00:00:00',
'0000-00-00 00:00:00',
'2時間30分',
'日給7000円',
'年間204日程度',
'土、日、祝、春・夏・冬期休暇あり',
'特定契約従業員',
'',
'不問',
'',
'大型自動車運転免許',
'マイクロバス３台で運行しています。',
'003',
'7000',
'6:30～16:30',
'日給',
NOW() + INTERVAL 34 second,
NOW() + INTERVAL 34 second
);
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
TRUNCATE `tags`;
INSERT INTO `tags` (
    `work_id`,
    `category_id`
) VALUES
(1, 3),
(1, 10),
(1, 14),
(1, 15),
(2, 3),
(2, 10),
(2, 12),
(2, 15),
(3, 3),
(3, 12),
(3, 15),
(4, 3),
(4, 3),
(4, 10),
(4, 12),
(4, 15),
(5, 1),
(5, 3),
(5, 6),
(5, 7),
(5, 8),
(5, 12),
(5, 15),
(6, 1),
(6, 3),
(6, 6),
(6, 7),
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
(9, 1),
(9, 12),
(9, 15),
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
(19, 1),
(19, 14),
(19, 15),
(20, 1),
(20, 12),
(20, 15),
(21, 1),
(21, 12),
(21, 15),
(22, 1),
(22, 9),
(22, 15),
(23, 1),
(23, 10),
(23, 13),
(23, 15),
(24, 2),
(24, 9),
(24, 18),
(25, 1),
(25, 9),
(25, 16);
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
(19, 3, 5, 'その他');
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
