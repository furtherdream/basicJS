// document 역시 오브젝트
const title = document.querySelector("#title")
// id로 찾으면 #title, class로 찾으면 .title
title.innerHTML = "Hi From JS"
title.style.color = "red"
document.title = "I owe you"
console.dir(document)

// DOM : Document Object Module
