// HTMLの要素を取得します
const textElement = document.getElementById('text');
const buttonElement = document.getElementById('btn');

// ボタンがクリックされたときの処理
function changeText() {
    textElement.textContent = 'ボタンをクリックしました';
  }
  
  // ボタンにイベントリスナーを追加します
  buttonElement.addEventListener('click', changeText);
  
