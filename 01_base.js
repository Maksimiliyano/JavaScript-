// 1 Переменные
// camelCase
// const firstName = 'Maximiliyano'
// // const age = 26 // number
// const isProgrammer = true //boolean

// const _ = 'private'
// const $ = 'some value'
//
// const if = 'mkef // error
// const withNun5 = '5'
// const 5withNum = 5 //eroor

// 2 Мутирование
// console.log('Имя человека: ' + firstName + ', а возраст человека ' + age)
// alert('Имя человека: ' + firstName + ', а возраст человека ' + age)

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы
// let currentYear = 2022
// const birthYear = 1994

// const age = currentYear - birthYear
//
// const a = 10
// const b = 5

// let c = 32
// c = c + a
// c = c - a
// c = c * a
// c = c / a
// c += a
// c -= a
// c *= a
// c /= a
//
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c

// 4 Типы данных
// const isProgrammer = true
// const name = 'Maksimiliyano'
// const age = 28
// let x
// null
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5 Приоритет операторов
// const fullAge = 28
// const birthYear = 1994
// const currentYear = 2022

// > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge // 28 >= 28 => true
// console.log(isFullAge)

// 6    Условные операторы
// const courseStatus = 'fail' // ready, fail, pending
//
// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в процессе разработки')
// } else {
//     console.log('Курс не получился')
// }

// const isReady = true

// if (isReady) {
//     console.log('Всё готово!')
// } else {
//     console.log('Всё не готово!')
// }
// Тернарное выражение
// isReady ? console.log('Всё готово!') : console.log('Всё не готово!')

// const num1 = 42 // number
// const num2 = '42' // string
//
// console.log(num1 === num2)

// 7 Булевая логика
// https://material.goit.ua/javascript/logic-gates.html

// 8 Функции

// function calculateAge(year) {
//     return 2022 - year
// }
//
// // console.log(calculateAge( 1994))
// // console.log(calculateAge( 2019))
// // console.log(calculateAge( 1999))
//
// function logInfoAbout (name, year) {
//     const age = calculateAge(year)
//
//     if (age > 0) {
//     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
// } else {
//         console.log('Вообще-то это уже будущее!')
//     }
//
// }
//
// logInfoAbout( 'Максимилиано', 1994)
// logInfoAbout( 'Елена', 1997)
// logInfoAbout( 'Елена', 2023)

// 9    Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд']
// const cars = new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])
//
// cars[0] = 'Porsche'
// cars[cars.length] = 'Мазда'
// console.log(cars)

// 10 Циклы
const cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche']
// for (let i = 0; i < cars.length; i++) {
//  const car = cars[i]
//     console.log(car)
// }
//
// for (let car of cars) {
//     console.log(car)
// }

// 11  Объекты
const  person = {
    firstName: 'Maksimiliyano',
    lastName: 'Gazaryan',
    year: 1994,
    languages: ['RU', 'ARM', 'EN'],
    hasWife: false,
    greet: function () {
        console.log('greet from person')
    }
     }

console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
console.log(person)
person.isProgrammer = true
console.log(person)

person.greet()






