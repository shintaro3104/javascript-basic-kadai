const btn = document.getElementById("btn");
const txt = document.getElementById("text");

const function01 = () => {
  txt.textContent = "ボタンをクリックしました";
};

btn.addEventListener("click", () => {
  setTimeout(function01, 2000);
});
