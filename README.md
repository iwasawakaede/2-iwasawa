# sample-02

今回はレスポンシブとなっています。
pcはコンテンツ部分はデザインカンプのコンテンツの最大横幅が1440pxだった場合、両翼にpaddingで+10pxして横幅1460pxまでは縮み、tabサイズまでは1460px以下にはならない。
tabサイズから横幅100%になります。
横幅896pxでtabサイズ、428pxでspサイズになるようにメディアクエリを設定して作成してください。

このフォルダはサンプルコードです。以下のような構造になっています。これを参考にコーディングを行ってください。
※index.htmlのbodyタグの中身を空にしているのでブラウザで開いても何も表示されません。

<pre><code>sample-02/
├── .vscode/←(VS Codeに関する設定)
├── build/
│      └── scss/←(スタイルはここに記述)
│          ├── foundation/
│          ├── layout/
│          └── object/
│              ├── component/
│              ├── project/
│              └── utility/
├── htdocs/
│     ├── common/
│     │   ├── css/←(ここは一切触らない)
│     │   ├── img/
│     │   └── js/
│     └── index.html←(トップページのhtmlはここに記述)
├── .htaccess←("style.css"を読み込むと記述した場合でも"style.min.css"を読み込むよう設定)
├── .gitignore.sample←(Gitの追跡から除外する設定)
└── README.md←(今読んでいるもの)</code></pre>

## 各フォルダの説明

* .vscode

		VS codeに関する設定が記述されています。はじめに読んでください。
		今回はSassに関する設定を記述しています。

### build/

* scss

		このフォルダ内の.scssファイルにSassを記述します。
		ここに記述したことはhtdocs/common/cssフォルダに.cssファイルとしてコンパイルされます。
		フォルダ内はFLOCSSの構造になっています。
		フォルダ内は次のような構造になっています。

	<pre><code>scss/
    ├── foundation/
    │     ├── _base.scss(基本のスタイル)
    │     ├── _defenition.scss(変数の宣言、tabやspのブレイクポイントや色の宣言がある)
    │     ├── _inc.scss(ミックスインの宣言)
    │     └── _reset.scss
    ├── layout/
    │     ├── _contents.scss
    │     ├── _footer.scss
    │     ├── _header.scss
    │     └── _side.scss
    ├── object/
    │    ├── component/
    │    │     ├── _block.scss
    │    │     ├── _btn.scss
    │    │     ├── _img.scss
    │    │     ├── _list.scss
    │    │     ├── _mc.scss
    │    │     ├── _textBox.scss
    │    │     └── _title.scss
    │    ├── project/(中身はプロジェクトによって異なる)
    │    │     └── _***.scss←(トップページなら_top.scss)
    │    └── utility/
    │          ├── _align.scss
    │          ├── _bg.scss
    │          ├── _display.scss
    │          ├── _space.scss
    │          └── _text.scss
    └── style.scss←(上記全ての.scssをここに集約してコンパイル)</code></pre>


### htdocs/

* common/css

		build/scssの.scssに記述した内容がここにコンパイルされます。
		このフォルダの中身は自動生成されているので一切触ることはありません。

* common/img

		マニュアルサイトで解説している「格納フォルダと命名規則」に従い、ここに画像を追加してください。

* common/js

		jQueryの本体(jquery-3.6.0.min.jsなど)はcommon/js/commonに格納します。
		プラグインを追加する場合はcommon/jsに追加してください。
		jsコードはglobal.jsに記述してください。


### phpでコーディング

phpでコーディングするとなった場合は以下の形になります。

<pre><code>sample-02/ ※index.phpでコーディングの場合
├── .vscode/←(VS Codeに関する設定)
├── build/
│      └── scss/←(スタイルはここに記述)
│          ├── foundation/
│          ├── layout/
│          └── object/
│              ├── component/
│              ├── project/
│              └── utility/
├── htdocs/
│     ├── common/
│     │   ├── css/←(ここは一切触らない)
│     │   ├── img/
│     │   └── js/
│     ├── include/←(includeで呼び出すものはここに記述)
│     │   ├── head.php
│     │   ├── header.php
│     │   └── footer.php
│     └── index.php←(トップページのphpはここに記述)
├── .htaccess←("style.css"を読み込むと記述した場合でも"style.min.css"を読み込むよう設定)
├── .gitignore.sample←(Gitの追跡から除外する設定)
└── README.md←(今読んでいるもの)</code></pre>

## include/の説明

* include/

		index.phpで書く場合は、何度も呼び出すフレーム部分などはincludeとして呼び出す。
        <?php include('./include/head.php'); ?>（ヘッド）
        <?php include('./include/header.php'); ?>（ヘッダー）
        <?php include('./include/footer.php'); ?>（フッター）
        このような書き方でincludeフォルダにあるヘッダーなどを呼び出していく。
        フレーム部分の記述はそれぞれのhead.php、header.php、footer.phpにする。
        また、数ページに渡って同じ記述が出てくる場合も、その箇所をincludeして呼び出すようにする。

## References

* [Google Fonts](https://fonts.google.com/)
* [Font Awesome](https://fontawesome.com/)
* [jQuery](https://jquery.com/)
