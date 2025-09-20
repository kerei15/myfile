// Задание 1
let message = document.getElementById("message")
message.textContent = "Добро пожаловать в JavaScript!"
// Задание 2
let boxes = document.getElementsByClassName("box")
for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "green"
}
// Задание 3
let paragraf = document.querySelector("#text")
paragraf.textContent = "Paragraph"
const divBoxes = document.querySelectorAll(".box")
divBoxes.forEach(div => {
    div.style.border = "3px solid blue"
})
// Задание 4
let highlights = document.querySelectorAll(".highlight")
highlights.forEach(paragraph => {
    paragraph.style.color = "red"
})