// Задание 1
let person = {
    name: "Kereikhan",
    age: 15,
    city: "Almaty"
}
console.log(person)
// Задание 2
console.log(person.name,person["age"])
person.city = "Astana"
console.log(person)
// Задание 3
person.greet = function() {
    console.log("Привет, меня зовут " + (this.name) + " мне " + (this.age) + " лет!")
}
person.greet()
// Задание 4
let obj1 = { a: 10, b: 20 }
let obj2 = { a: 10, b: 20 }
console.log(obj1 == obj2)
console.log(obj1 === obj2)
// В двух случаях выводится False,так как у двух обьектов разные ссылки
// Задание 5
let book = {
    title: "Война и мир",
    author: "Л.Н.Толстой",
    details: {
        year: 1869,
        pages: 1470
    }
}
let copyBook = Object.assign({}, book)
book.details.year = 1870
console.log(book)
console.log(copyBook)
// Задание 6
let calculator = {
    a: 15,
    b: 15,
    sum() {
        console.log((this.a) + (this.b))
    },
    multiply() {
        console.log((this.a) * (this.b))
    }
}
calculator.sum()
calculator.multiply()
// Задание 7
const car = {
    brand: "BMW",
    model: "X5"
}
car.model = "X6"
console.log(car)
// С использование const мы можем изменять свойства внутри обьекта,но не можем переназначить константу