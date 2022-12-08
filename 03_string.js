//const name = 'Максимилиано'
// // const age = 28
// //
// // function getAge() {
// //     return age
// // }

// const output = 'Привет меня зовут ' + name + ' и мой возраст: ' + age + ' лет'
// const output = `Привет меня зовут ${name} и мой возраст ${age < 30 ? 'A' : 'B'} лет`
// const output = `
// <div>This is div</div>
// <p>This is  o</p>
// `

// console.log(output)

// const name = 'Максимилиано'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('!'))
// console.log(name.toLowerCase().startsWith('макс'))
// console.log(name.startsWith('Макс'))
// console.log(name.endsWith('ано!'))
// console.log(name.repeat(3))
// const string = '      password       '
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age) {
if (age < 0) {
    age = 'Еще не родился'
}
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Максимилиано'
const personName2 = 'Максим'
const personAge = 28
const personAge2 = -10

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName}, Возраст: ${personAge2}!`

console.log(output)
console.log(output2)








