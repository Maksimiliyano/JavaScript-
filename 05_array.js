const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']
// const people = [
//     {name: 'Maksimiliyano', budget: 4200},
//     {name: 'Andrei', budget: 6000},
//     {name: 'Victoria', budget: 1700},
// ]
const fib = [1, 1, 2, 3, 5, 8, 13]

// Function
function addItemToEnd() {

}
// Method
// cars.push('Mini')
// cars.unshift('Kia')
//
// const firstCar = cars.shift()
// const lastCar = cars.pop()
//
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)
//
// console.log(cars.reverse())
// console.log(cars)

// cars[index] = 'ЛАДА'
// console.log(cars)
// const index = cars.indexOf('BMW')
// let findedPerson
// for (const person of people) {
//     if (person.budget === 6000) {
//         findedPerson = person
//     }
// }

// console.log(findedPerson)

// const index = people.findIndex(function(person) {
//     return person.budget === 6000
// })
// const person = people.find(function(person) {
//     return person.budget === 60000
// })
// console.log(person)
// const person = people.find (person => person.budget === 6000)
// console.log(person)

// console.log(cars.includes('Mazda'))

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
//
const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
//
// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib)

// console.log(upperCaseCars)
// console.log(cars)
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filteredNumbers)

// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

const people = [
    {name: 'Maksimiliyano', budget: 4200},
    {name: 'Andrei', budget: 3500},
    {name: 'Victoria', budget: 1700},
]

const allBudget = people
    .filter(person =>person.budget > 2000)
    .reduce((acc, person) => {
    acc += person.budget
    return acc
    }, 0)

console.log(allBudget)

// const displayItems = allIcons.filter(item => item.name.indexOf(phone) !== -1)

