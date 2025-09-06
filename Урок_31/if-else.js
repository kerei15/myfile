// Задание 1
let num = Number(prompt('Напишите любое число:'));
if (num > 10) {
    console.log('Число больше 10');
} else {
    console.log('Число меньше или равно 10');
};
// Задание 2
let userConfirmed = confirm('Вы хотите удалить файл?');
if (userConfirmed) {
    console.log('Файл удален');
} else {
    console.log('Удаление отменено');
};
// Задание 3
let age = Number(prompt('Укажите ваш возраст:'))
if (age < 18) {
    console.log('Вы еще подросток')
} else if (age >= 18 || age <= 30) {
    console.log('Вы молодой взрослый')
} else {
    console.log('Вы взрослый')
}
// Задание 4
let number = Number(prompt('Укажите число:'));
let evenOddNum = (number % 2 == 0) ? 'Четное число' : 'Нечетное число';
console.log(evenOddNum);
// Задание 5
let day = Number(prompt('Укажите любой день недели от 1 до 7:'));
let message;
switch (day) {
    case '1':
        message = 'Понедельник';
        break;
    case '2':
        message = 'Вторник';
        break;
    case '3':
        message = 'Среда';
        break;
    case '4':
        message = 'Четверг';
        break;
    case '5':
        message = 'Пятница';
        break;
    case '6':
        message = 'Суббота';
        break;
    case '7':
        message = 'Воскресенье';
        break;
    default:
        message = 'Некорректное значение';
}
console.log(message);
// Задание 6
let num1 = Number(prompt('Укажите любое число'));
let num2 = Number(prompt('Укажите любое число'));
if (num1 == num2) {
    console.log('Числа равны');
} else {
    console.log((num1 > num2) ? 'Первое число больше' : 'Второе число больше')
}
// Задание 7
let month = Number(prompt('Укажите любой месяц от 1 до 12'));
let info;
switch (month) {
    case '1':
        info = 'Зима';
        break;
    case '2':
        info = 'Зима';
        break;   
    case '3':
        info = 'Весна';
        break; 
    case '4':
        info = 'Весна';
        break; 
    case '5':
        info = 'Весна';
        break;
    case '6':
        info = 'Лето';
        break;
    case '7':
        info = 'Лето';
        break;
    case '8':
        info = 'Лето';
        break;
    case '9':
        info = 'Осень';
        break;
    case '10':
        info = 'Осень';
        break;
    case '11':
        info = 'Осень';
        break;
    case '12':
        info = 'Зима';
        break;
    default:
        info = 'Некорректное значение';
}
console.log(info);