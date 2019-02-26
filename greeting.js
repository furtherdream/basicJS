const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings")

const USER_LS = "currentUser",
  SHOWING_CN = "showing"

function saveName(text) {
  localStorage.setItem(USER_LS, text)
}

// 서밋할 때 설정
function handleSubmit(event) {
  event.preventDefault()
  // 우리가 기본 동작을 막는 첫 단계 : 폼은 기본 적으로 엔터시 새로고침인데 엔터를 먹지 않음
  const currentValue = input.value
  paintGreeting(currentValue)
  saveName(currentValue)
}

function askForName() {
  form.classList.add(SHOWING_CN)
  form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN)
  greeting.classList.add(SHOWING_CN)
  greeting.innerText = `Hello ${text}`
}

// 로드네임은 이름을 로딩하라는거지 세이브 하라는 것이 아님
// 세이브는 위의 세이브 네임에서
function loadName() {
  const currentUser = localStorage.getItem(USER_LS)
  if (currentUser === null) {
    askForName()
  } else {
    paintGreeting(currentUser)
  }
}

function init() {
  loadName()
}

init()
