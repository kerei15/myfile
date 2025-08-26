// Задание 1
let name1 = "Kereikhan";
console.log(name1);
name1 = "Amirkhan";
console.log(name1);

// const name2 = "Kereikhan";
// console.log(name);
// name2 = "Amirkhan";
// console.log(name);
// // Переменная const не может быть изменена или повторно обьявлена
// Задание 2
// Использование var все еще допустимо,в основном в старом коде,но для более надежного и предсказуемого поведения рекомендуется использовать let и const
// Задание 3
let number = 123;
console.log(typeof(number));
let string = "Hello";
console.log(typeof(string));
let boolean = true;
console.log(typeof(boolean));
let user = null;
console.log(typeof(user));
let undefinedV;
console.log(typeof(undefinedV));
let notANumber = 0 / 0 ;
console.log(typeof(notANumber));
// Задание 4
let undefinedValue = undefined;
console.log(String(undefinedValue));
console.log(Number(undefinedValue)); // Выводится NaN,так как это некорректная числовая операция
let nullValue = null;
console.log(String(nullValue));
console.log(Number(nullValue));
// Задание 5
let intNum = 456;
let strNum = String(intNum);
console.log(strNum);
// Динамическая типизация это когда переменная не имеет фиксированого типа и может быть изменена в строку или в число
// Задание 6
let nameAge = prompt("Как тебя зовут и сколько тебе лет");
console.log(nameAge)