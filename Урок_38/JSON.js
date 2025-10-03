// Задание 1
localStorage.setItem("greeting","Привет, мир!")
const greeting = localStorage.getItem("greeting")
console.log(greeting)
// Задание 2
localStorage.removeItem("greeting")
const removeItem = localStorage.getItem("greeting")
console.log(removeItem) // Выводится значение null 
// Задание 3
const user = {name:"Kereikhan",age:15,city:"Almaty"}
const userJSON = JSON.stringify(user)
localStorage.setItem("user",userJSON)
const getUser = localStorage.getItem("user")
const parseUser = JSON.parse(getUser)
console.log(parseUser)
// Задание 4
let User = localStorage.getItem("user")
let JSONUser = JSON.parse(User)
JSONUser.country = "Kazakhstan"
let stringifyUser = JSON.stringify(JSONUser)
localStorage.setItem("User",JSONUser)
console.log(JSONUser)
// Задание 5
if ("user" in localStorage) {
    let user = JSON.parse(localStorage.getItem("user"))
    console.log(user)
} else {
    let newUser = {
        name:"Timur",
        age:16,
        city:"Astana"
    }
    let stringifyUser = JSON.stringify(newUser)
    localStorage.setItem("user",newUser)
}
// Задание 6
localStorage.clear()
let age = localStorage.getItem("age")
// Задание 7
const tasks = [
    {title:"Убраться дома",completed: true},
    {title:"Помыть посуду",completed: false},
    {title:"Постирать вещи",completed: false}
]
let savedTasks = JSON.stringify(tasks)
localStorage.setItem("tasks",savedTasks)
const getTasks = localStorage.getItem("tasks")
console.log(getTasks)
// Задание 8
const getTasks1 = localStorage.getItem("tasks")
const parseTasks = JSON.parse(getTasks1)
parseTasks[0].completed = false
savedTasks = JSON.stringify(parseTasks)
localStorage.setItem("tasks",savedTasks)