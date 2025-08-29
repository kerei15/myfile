// Задание 1
function greet() {
    console.log("Привет, мир!")
}
greet()
// Задание 2
function sayHello(name) {
    console.log("Hello," + name + "!")
}
sayHello("Kereikhan")
sayHello("Amir")
// Задание 3
function sum(num1,num2) {
    console.log(num1 + num2)
}
sum(23,12)
sum(131,234)
// Задание 4
function isEven(number) {
    if (number % 2 == 0) {
        console.log("true")
    } else {
        console.log("false")
    }
}
isEven(123)
isEven(188)
// Задание 5
function max(number1,number2) {
    if (number1 == number2) {
        return("Числа равны")
    } else if (number1 > number2 ) {
        return number1
    } else {
        return number2
    }
}
let a = max(455,455)
console.log(a)
// Задание 6
function getInitials(name,surname) {
    return name[0] + "." + surname[0]
}
let initials = getInitials("Kereikhan","Kabdulla")
console.log(initials)
// Задание 7
function square(square) {
    return square**2
}
function cube(cube) {
    return square(cube)*cube
}
let result1 = square(5)
let result2 = cube(8)
console.log(result1)
console.log(result2)
let result3 = cube(3)
console.log(result3)
// Задание 8
let total = (num1,num2) => num1 + num2;
console.log(total(1245,123))
// Задание 9
function getFactorial(number) {
    if (number == 1) {
        return 1
    } else {
        return(number * getFactorial(number-1)) 
    }    
}
let result = getFactorial(4)
console.log(result)