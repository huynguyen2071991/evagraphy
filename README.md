# 概要
https://github.com/ritaworks/s3-template<br>
上記のテンプレートをカスタマイズしたシステム開発用のテンプレートです。<br>
gulpコマンドを利用して、sassの自動コンパイル化、autoprefix、出力されるcssファイルのminify化を行います。

## 動作環境(sassコンパイル)
### Node.js、npmのインストール済みであること<br>
https://nodejs.org/ja/<br>
上記のurlもしくは、macの方はhomebrewなどでもインストールすることが可能です。

### gulpのグローバルインストール済みであること
```
npm install -g gulp
```

## 手順
1. 本テンプレートのダウンロードし、ローカルの作業フォルダへ移動
2. cmd、terminal等で手順1で移動したフォルダを開く
3. 下記コマンドを実行
```
npm install
```
4. 下記コマンドを実行（sassコンパイル）
```
gulp
```

手順４を行うことで、sassファイルが変更されるたびに、cssが自動コンパイルされます。
