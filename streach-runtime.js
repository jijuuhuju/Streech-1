const StreachRuntime = {
    // 「大きさを横に...縦に...伸ばす」ブロックが実行されたときの処理
    stretch_sprite: (args, util) => {
        // 1. ブロックの穴に入力された「横」と「縦」の数字を読み取る
        const widthScale = Number(args.WIDTH) / 100;
        const heightScale = Number(args.HEIGHT) / 100;
        
        // 2. 今動かしているキャラクター（ターゲット）を特定する
        const target = util.target;
        
        if (target) {
            // 3. 【ストリーチの独自機能】スプライトの伸縮率（スケール）を書き換える
            // 本家Scratchは1つのサイズ（size）しか持ちませんが、横と縦を別々に管理します
            target.stretchX = widthScale;
            target.stretchY = heightScale;
            
            // 4. 画面を再描画（レンダリング）する合図を送る
            target.emit('損なわないように更新'); 
            if (target.runtime) {
                target.runtime.requestRedraw();
            }
        }
    },

    // 「プログラムをフリーズする」ブロックが実行されたときの処理
    freeze_program: (args) => {
        const seconds = Number(args.SECONDS);
        const ms = seconds * 1000;
        
        // JavaScriptの同期処理を止める裏ワザ（ビジーループ）
        const startTime = Date.now();
        while (Date.now() - startTime < ms) {
            // 指定されたミリ秒が経過するまで、iPad/PCの処理をここで意図的にストップさせる
        }
    }
};

module.exports = StreachRuntime;
