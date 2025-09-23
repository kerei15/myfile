// Задание 2
const button = document.querySelector('#jsButton');

button.addEventListener('click', () => {
   alert("Событие обработано через JS");
   console.log("Событие обработано через JS")
});
// Задание 3
const div = document.querySelector('#myDiv');

div.addEventListener('click', () => {
   div.style.backgroundColor = "blue";
});

const box = document.querySelector('#myDiv');

box.addEventListener('mouseover', () => {
   console.log( "Элемент нажат");
});
// Задание 4
let input = document.querySelector("#textInput") 
input.addEventListener("input",(event) => {
    console.log(input.value)
})
// Задание 5
let click = document.querySelector("#myLink")
click.addEventListener("click",(event) => {
    event.preventDefault()
    console.log("Переход по ссылке отменен")
})
// Задание 6
let list = document.querySelector("#list")
list.addEventListener("click",(event) => {
    console.log(event.target.textContent)
})
// Задание 7
let text = document.querySelector("#keyboardInput")
text.addEventListener("keydown",(event) => {
    console.log(event.code)
})