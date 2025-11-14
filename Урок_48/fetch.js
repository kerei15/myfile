// Задание 1 
fetch('https://jsonplaceholder.typicode.com/posts/1')
 .then(response => response.json()) 
 .then(data => console.log(data.title,data.body))   
 .catch(error => console.error('Ошибка:', error));
// Задание 2
const data = { title: "Новый пост", body: "Содержимое поста", userId: 1};

fetch('https://jsonplaceholder.typicode.com/posts', {
 method: 'POST',
 headers: {
   'Content-Type': 'application/json'
 },
 body: JSON.stringify(data)
})
 .then(response => response.json())
 .then(data => console.log('Успех:', data))
 .catch(error => console.error('Ошибка:', error));
// Задание 3 
fetch('https://jsonplaceholder.typicode.com/nonexistent')
 .then(response => {
   if (!response.ok) {
     throw new Error('Ошибка сети: ' + response.status);
   }
   return response.json();
 })
 .then(data => console.log(data))
 .catch(error => console.error('Обработанная ошибка:', error));
// Задание 4
const updatedData = { title: "asd ewqrvcqwv upowvieut owviputnwpoeitu", body: "wfwie aoignk oweir"};

fetch('https://jsonplaceholder.typicode.com/posts/1', {
 method: 'PUT',
 headers: {
   'Content-Type': 'application/json'
 },
 body: JSON.stringify(updatedData)
})
 .then(response => response.json())
 .then(data => console.log('Обновлено:', data))
 .catch(error => console.error('Ошибка:', error));

 fetch('https://jsonplaceholder.typicode.com/posts/1', {
   method: 'DELETE'
 })
   .then(() => console.log('Пользователь удален'))
   .catch(error => console.error('Ошибка:', error));
// Задание 5 
async function fetchData() {
  try {
    const responce = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const data =  await responce.json()
    console.log(data)
  } catch (error) {
    console.log("Ошибка:", error)
  }
}
fetchData()
// Задание 6
async function fetchData() {
  try {
    const responce = await fetch("https://jsonplaceholder.typicode.com/comments",{
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer example-token'}
    })
    const data =  await responce.json()
    console.log(data)
  } catch (error) {
    console.log("Ошибка:", error)
  }
}
fetchData()