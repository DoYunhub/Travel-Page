document.getElementById("button1").onclick = function () {
  var radio = document.querySelector("input[type=radio][name=acc]:checked");
  radio.checked = false;
};
document.getElementById("button2").onclick = function () {
  var radio = document.querySelector("input[type=radio][name=acc]:checked");
  radio.checked = false;
};

const id = document.getElementById("id");
const password = document.getElementById("password");
const login = document.getElementById("login");
let errStack = 0;

const lb = document.getElementById("loginbtn");
const loginMain = document.querySelector(".login_main");
const closebuttone = document.getElementById("close-button");

login.addEventListener("click", () => {
  if (id.value == "wognskin") {
    if (password.value == "1234") {
      alert("로그인 되었습니다!");
    } else {
      alert("아이디와 비밀번호를 다시 한 번 확인해주세요!");
      errStack++;
    }
  } else {
    alert("존재하지 않는 계정입니다.");
  }
  if (errStack >= 5) {
    alert("비밀번호를 5회 이상 틀리셨습니다. 비밀번호 찾기를 권장드립니다.");
  }
});

function hi() {
  loginMain.classList.add("toggle");
}
lb.addEventListener("click", hi);

function bye() {
  loginMain.classList.remove("toggle");
}
closebuttone.addEventListener("click", bye);
