let untyped = "";

// 必要なHTML要素の取得
const untypedfield = document.getElementById("untyped");

const textLists = [
  "Arctic Monkeys",
  "Beatles",
  "Cream",
  "Deerhunter",
  "Eric Clapton",
  "Foals",
  "Grapevine",
  "Horrors",
  "Into it.Over it.",
];

// ランダムなテキストを表示
const createText = () => {
  // 配列のインデックス数からランダムな数値を生成する
  let random = Math.floor(Math.random() * textLists.length);

  // 配列からランダムにテキストを取得し画面に表示する
  untyped = textLists[random];
  untypedfield.textContent = untyped;
};

createText();

// キー入力の判定
const keyPress = (e) => {};

// タイピングスキルのランクを判定
const rankCheck = (score) => {};

// ゲームを終了
const gameOver = (id) => {};

// カウントダウンタイマー
const timer = () => {};
