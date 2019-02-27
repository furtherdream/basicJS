const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList")
// querySelector : 우리가 HTML에서 필요한 것들을 얻었다.

const TODOS_LS = "toDos"

const toDos = []
// document.createElement 무언강를 생성하고 싶다면

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)) // Object를 String으로 만들어줌
}

function paintToDo(text) {
  const li = document.createElement("li")
  const delBtn = document.createElement("button")
  const span = document.createElement("span")
  const newId = toDos.length + 1
  delBtn.innerText = "X"
  span.innerText = text
  li.appendChild(delBtn)
  li.appendChild(span)
  li.id = newId // li 에도 id를 주는 이유는 지울 때 해당 아이디만 지워야 하기 때문
  toDoList.appendChild(li)
  const toDoObj = {
    text: text,
    id: newId
  }
  toDos.push(toDoObj)
  saveToDos()
}

function handleSubmit(event) {
  event.preventDefault()
  const currentValue = toDoInput.value
  paintToDo(currentValue)
  toDoInput.value = "" // 글 입력하고 엔터치면 벨류는 보내고 다시 플레이스 홀더가 나옴
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS)
  if (loadedToDos !== null) {
    // console.log(loadedToDos) // object 형태
    const parsedToDos = JSON.parse(loadedToDos)
    // console.log(parsedToDos) // JSON 형태
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text)
    })
  }
}

function init() {
  loadToDos()
  toDoForm.addEventListener("submit", handleSubmit)
}
init()
