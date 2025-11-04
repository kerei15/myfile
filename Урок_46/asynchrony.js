// Задание 1 
setTimeout(() => {
  console.log("Привет,мир!");
}, 2000)
// Задание 2
var interval = setInterval(()=> { 
var now = new Date()
var hour = now.getHours()
var minute = now.getMinutes()
var second = now.getSeconds()
console.log(`${hour}:${minute}:${second}`)
}, 1000)
// Задание 3
setTimeout(() => {
  clearInterval(interval)
}, 5000)
// Задание 4 
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Данные получены")
      }, 3000)
    })
}
fetchData().then(result => console.log(result))
// Задание 5 
function fetchDataWithError() {
  return new Promise((_,reject) => {
    setTimeout(() => {
      reject("Ошибка загрузки!")
    }, 2000)
  })
}
fetchDataWithError().catch(error => console.log(error))
// Задание 6
async function fetchDataAsync() {
  try {
    var data = await fetchData()
    console.log(data)
} catch (error) {
  console.log(error)
}
}
fetchDataAsync()
// Задание 7 
async function fetchDataWithErrorAsync() {
  try {
    var data = await fetchDataWithError()
    console.log(data)
  } catch (error) {
    console.log(error)
}
}
fetchDataWithErrorAsync()
// Задание 8 
async function task1() {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("task1")
      }, 1000)
    })
  } catch (error) {
    console.log(error)
  }
}
async function task2() {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("task2")
      }, 2000)
    })
  } catch (error) {
    console.log(error)
  }
}
task1().then(result => console.log(result))
task2().then(result => console.log(result))
// Задание 9
async function taskA() {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("taskA")
      }, 2000)
    })
  } catch (error) {
    console.log(error)
  }
}
async function taskB() {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("taskB")
      }, 3000)
    })
  } catch (error) {
    console.log(error)
  }
}
Promise.all([taskA(),taskB()]).then((result) => {console.log(result[0],result[1])})
// Задание 10
async function delayedMessage() {
  try {
    await new Promise((resolve) => {
    setTimeout(
      resolve
    , 500)
    })
    console.log("message")
  } catch (error) {
    console.log(error)
  }
}
delayedMessage()