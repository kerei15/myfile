// Задание 1
// AJAX - это методика для создания асинхронных веб-приложений.Преимущества:Повышение интерактивности и отзывчивости веб-страницы,улучшение пользовательского опыта за счет мгновеннного обновления контента
// Примеры приложений,сайтов,где используется AJAX:Instagram,YouTube,Gmail.
// Задание 2 
const XML = new XMLHttpRequest()
XML.open("GET","https://jsonplaceholder.typicode.com/posts",true)
XML.onload = function() {
    if (XML.status === 200) {
        const data = JSON.parse(XML.responseText)
        data.forEach(item => console.log(item.title)) 
    } else {
        console.error("Ошибка загрузки:",XML.status)
    }
}
XML.onerror = function() {
    console.error("Ошибка соединения")
}
XML.send()
// Задание 3-4
const xhr = new XMLHttpRequest()
function renderUserList(users) {
    const userList = document.getElementById("userList2")
    users.forEach(user => {
        const listItem = document.createElement("ul")
        listItem.innerHTML = `Запись:<ul>
        <li>Заголовок:${user.title}</li>
        <li>userId:${user.userId}</li>
        </ul>`
        userList.appendChild(listItem)
    })
}   
xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true)
xhr.onload = function() {
    if (xhr.status === 200) {
        const users = JSON.parse(xhr.responseText)
        renderUserList(users)
    } else {
        console.error("Ошибка загрузки",xhr.status)
    }
}
xhr.onerror = function() {
    console.error("Ошибка соединения")
}
xhr.send()
// Задание 5 
const GET = new XMLHttpRequest()
GET.open("GET","https://jsonplaceholder.typicode.com/posts",true)
GET.onload = function() {
    if (GET.status === 404) {
        console.error("Введен некорректный URL",GET.status)
    } else if (GET.status === 500) {
        console.error("Ошибка сервера:", GET.status)
    } else if (GET.status !== 200) {
        console.error("Сервер не отвечает")
    } 
    return
}
// Задание 6
const loading = document.getElementById("loading") 
const GET2 = new XMLHttpRequest()
GET2.open("GET","https://jsonplaceholder.typicode.com/posts",true)
function renderUserList(users) {
    const userList = document.getElementById("userList2")
    users.forEach(user => {
        const listItem = document.createElement("ul")
        listItem.innerHTML = `Запись:<ul>
        <li>Заголовок:${user.title}</li>
        <li>userId:${user.userId}</li>
        </ul>`
        userList.appendChild(listItem)
    })
}
GET2.onload = function() {
    if (GET2.status === 200) {
        loading.remove()
        const users = JSON.parse(GET2.responseText)
        renderUserList(users)
    } else {
        console.error("Ошибка загрузки",GET2.status)
    }
}
GET2.send()