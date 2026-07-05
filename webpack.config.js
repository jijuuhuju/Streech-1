// ストリーチ自動合体（ビルド）設定ファイル
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        // 本家Scratchの画面（GUI）の入り口を呼び出す
        gui: './node_modules/scratch-gui/src/index.js'
    },
    output: {
        // index.htmlが探している直下の「chunks」フォルダの中に完成品を書き出す
        path: path.resolve(__dirname, 'chunks'),
        filename: '[name].js'
    },
    // ここであなたが作った独自のブロック設定（streach-blocksなど）を本家に注入します
    plugins: [
        new CopyWebpackPlugin([{
            from: 'node_modules/scratch-gui/dist/static',
            to: '../static'
        }])
    ]
};
