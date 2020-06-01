class ShortcutKey {
    public keyCode: {[s: string]: number} = {
        "enter": 13,
        "shift": 16,
        "ctrl": 17,
        "alt": 18,
        "left": 37,
        "up": 38,
        "right": 39,
        "down": 40,
        "esc": 243,
        "tab": 9,
        "a": 65,
        "b": 66,
        "c": 67,
        "d": 68,
        "e": 69,
        "f": 70,
        "g": 71,
        "h": 72,
        "i": 73,
        "j": 74,
        "k": 75,
        "l": 76,
        "m": 77,
        "n": 78,
        "o": 79,
        "p": 80,
        "q": 81,
        "r": 82,
        "s": 83,
        "t": 84,
        "u": 85,
        "v": 86,
        "w": 87,
        "x": 88,
        "y": 89,
        "z": 90,
        "zero": 48,
        "one": 49,
        "two": 50,
        "three": 51,
        "four": 52,
        "five": 53,
        "six": 54,
        "seven": 55,
        "eight": 56,
        "nine": 57,
        "f1": 112,
        "f2": 113,
        "f3": 114,
        "f4": 115,
        "f5": 116,
        "f6": 117,
        "f7": 118,
        "f8": 119,
        "f9": 120,
        "f10": 121,
        "f11": 122,
        "f12": 123,
    };
    private registerShortcut: {[s: string]: any}[] = [];
    private win: Window;

    /**
     * コンストラクタ
     * @param w Windowインタフェース
     */
    constructor(w: Window){
        this.win = w;
        this.init();
    }

    /**
     * ショートカットキーを登録する
     * @param k ショートカットキー
     * @param f コールバック関数
     */
    public registerKey(k: number[], f: () => void): void{
        this.registerShortcut.push({
            "key": [...k],
            "keyCheck": new Array(k.length).fill(false),
            "func": f
        });
    }

    /**
     * ショートカットキーを解除する
     * @param k ショートカットキー
     */
    public deregistrationKey(k: number[]): void{
        for(let i = 0; i < this.registerShortcut.length; i++) {
            if (this.registerShortcut[i].key.toString() === k.toString()){
                this.registerShortcut.splice(i, 1);
            }
        };
    }

    /**
     * init関数
     * コンストラクタに渡したWindowを使い
     * イベントリスナーを登録する
     */
    private init(): void{
        // keydownのイベント設定
        this.win.addEventListener("keydown", event => {
            this.registerShortcut.forEach(rs => {
                for(var i = 0; i < rs.key.length; i++){
                    if(rs.key[i] === event.keyCode){
                        rs.keyCheck[i] = true;
                    }
                }

                if(rs.keyCheck.every((val: boolean, index: number, sourceArray: {[s: string]: any}[]) => val === true)){
                    rs.func();
                }
            });
        });

        // keyupのイベント設定
        this.win.addEventListener("keyup", event => {
            this.registerShortcut.forEach(rs => {
                for(var i = 0; i < rs.key.length; i++){
                    if(rs.key[i] === event.keyCode){
                        rs.keyCheck[i] = false;
                    }
                }
            })
        })
    }
}
