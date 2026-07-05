// ストリーチ自動起動・配信プログラム
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');

// あなたが作った webpack.config.js の合体設計図を読み込む
const compiler = webpack(config);

// ブラウザにストリーチの画面を配信するサーバーの設定
const server = new WebpackDevServer(compiler, {
    contentBase: __dirname,
    publicPath: '/',
    compress: true,
    // 画面が真っ白なときに、ブラウザの「開発者コンソール」にエラーを出して原因を教えてくれる機能
    stats: { colors: true }
});

// サーバーを起動（手元のテスト環境用）
server.listen(8601, 'localhost', function (err) {
    if (err) {
        console.log('ストリーチの起動に失敗しました: ', err);
    }
    console.log('ストリーチ起動成功！ http://localhost:8601 で動いています。');
});
