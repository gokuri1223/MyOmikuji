(function() {
    'use strict';
  
    var btn = document.getElementById('btn'); //要素の取得
  
    btn.addEventListener('click', function() { //クリック時のイベント
        var results = ['大吉','中吉','小吉','凶'];
        var n = Math.floor(Math.random() * results.length);   //Math.floorは小数点切下げ。Math.randam() * 1とすると0から1未満のランダムな数値が出力
        this.textContent = results[n];
        
        // Math.randamとif文で確率操作
        // var n = Math.random();
        // if (n < 0.05) {
        //   this.textContent = '大吉'; // 5%
        // } else if (n < 0.2) {
        //   this.textContent = '中吉'; // 15%
        // } else {
        //   this.textContent = '凶'; // 80%
        
        // if文の場合
        // if(n === 0) {
        //     this.textContent = '大吉'; 
        // }else if(n === 1){
        //     this.textContent = '中吉'; 
        // }else{
        //     this.textContent = '凶'; 
        // }
      
      //this.textContent = n;               //文字列を変更
    });

    btn.addEventListener('mousedown', function() {  //クリック時のイベント
      this.className = 'pushed';                    //pushedクラスの追加
    });

    btn.addEventListener('mouseup', function() {    //クリック時のイベント
      this.className = '';                          //クリックを話したらpushedクラスを外す

    });

})();