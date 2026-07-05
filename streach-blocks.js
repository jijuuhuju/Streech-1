// ストリーチ専用：隠しブロックの定義
const StreachBlocks = {
    // 1. 【見た目】キャラクターを縦・横に引き伸ばす伝説のブロック
    getStretchBlock: () => {
        return {
            opcode: 'stretch_sprite',       // プログラム上の名前
            blockType: 'command',           // 通常のハサミ型ブロック
            text: '大きさを横に [WIDTH] %、縦に [HEIGHT] % に伸ばす',
            arguments: {
                WIDTH: {
                    type: 'number',
                    defaultValue: 150       // 初期値（横）
                },
                HEIGHT: {
                    type: 'number',
                    defaultValue: 80        // 初期値（縦）
                }
            }
        };
    },

    // 2. 【制御】プログラムの処理を完全に一時停止（フリーズ）させる隠しブロック
    getFreezeBlock: () => {
        return {
            opcode: 'freeze_program',
            blockType: 'command',
            text: 'プログラムを [SECONDS] 秒間フリーズする',
            arguments: {
                SECONDS: {
                    type: 'number',
                    defaultValue: 1
                }
            }
        };
    }
};

module.exports = StreachBlocks;
