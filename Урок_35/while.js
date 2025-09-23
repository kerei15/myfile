// Задание 1
let number = 0
while (number <= 10) {
    console.log(number)
    number++
}
// Задание 2
let count = 0
while (count <= 10) {
    count++
    if (count === 5) {
        continue
    }
    if (count === 8) {
        break
    }
    console.log(count)
}
// Задание 3
let doWhile = 1
do {
    console.log(doWhile)
    doWhile++
} while (doWhile <= 5)
// Главное отличие цикла do while от while,то что у цикла do while тело будет выполнено хотя бы один раз даже если условие сразу ложное
// Задание 4
let num = Number(prompt("Введите число:"))
while (true) {
    console.log("Это бесконечный цикл")
    if (num === 10) {
        console.log("Цикл остановлен")
        break
    }
}
// Задание 5
for (let a = 1; a <= 10; a++) {
    console.log(a)
}
// Задание 6
let i = 0
for (;;) {
    console.log(i)
    if (i === 100) {
        break
    }
    i++
} 
// Задание 7
let numbers = [1,2,3,4,5]
for (let b = 0; b < numbers.length; b++) {
    console.log(numbers[b])
}
// Задание 8
// Цикл while,когда нам неизвестно кол-во итераций и условие проверяется перед каждой итерацией
// Цикл for,когда кол-во итераций известно
let input = 0;
while (input < 20) {
   input = prompt("Введите число больше 20 для завершения");
   console.log("Вы ввели: " + input);
};

let array = ["banana","apple","melon","cherry"];
for (let i = 0; i < array.length; i++) {
   console.log(array[i]);
};
// Задание 9
for (let i = 10; i >= 1; i--) {
    console.log(i)
}
// Задание 10
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
        continue
    } else {
        console.log(i)
    }
}