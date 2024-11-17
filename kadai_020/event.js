//HTML要素を取得
const jsBtn = document.getElementById('btn');

//要素にイベントのとき、変化つける
jsBtn.addEventListener('click', () => {
    const newText = document.getElementById('text');
    newText.textContent="ボタンをクリックしました";
  });