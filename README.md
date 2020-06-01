# ショートカットキーを簡単に作れるクラス
## 使い方
### JavaScript
``` javascript
// newする
const sk = new ShortcutKey(window);
// 登録したいショートカットキー
const key = [sk.keyCode.ctrl, sk.keyCode.e];

// ショートカットキーの登録
function touroku(){
    // ショートカットキーと処理を引数で渡す
    sk.registerKey(key, btnClick);
}

// ショートカットキーの解除
function kaijo(){
    // ショートカットキーを引数で渡す
    sk.deregistrationKey(key);
}

// ショートカットキーが押された時の処理
function btnClick(){
    console.log("ショートカットキー");
}
```
