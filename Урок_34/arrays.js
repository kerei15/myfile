// Задание 1
let fruits = ["Яблоко","Банан","Апельсин"]
console.log(fruits)
// Задание 2
console.log(fruits[0])
console.log(fruits[2])
fruits.push("Груша")
console.log(fruits)
// Задание 3
fruits.pop()
fruits.shift()
console.log(fruits)
// Задание 4
fruits.forEach(function(fruit) {
    console.log(fruit)
})
// Задание 5
let lengths = fruits.map(fruit => fruit.length)
console.log(lengths)
// Задание 6
let numbers = [1,2,3,4,5,6,7,8,9,10]
let evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers)
// Задание 7
let sum = numbers.reduce((acc,number) => acc + number)
console.log(sum)
// Задание 8
let moreNumber = numbers.find(number => number > 5)
console.log(moreNumber)
// Задание 9
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let concat = arr1.concat(arr2)
console.log(concat)
// Задание 10
let hasBanana = fruits.includes("Банан")
console.log(hasBanana)
// Задание 11
fruits.reverse()
console.log(fruits)