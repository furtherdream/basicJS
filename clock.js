const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1")

function getTime() {
  const date = new Date()
  const minutes = date.getMinutes()
  const hours = date.getHours()
  const seconds = date.getSeconds()
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`
  console.log(date)
}

function init() {
  getTime()
}

init()
