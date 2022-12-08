// window.alert('1')
// window.prompt('Как тебя зовут?')
// window.confirm('Как тебя зовут?')

const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('#sub-hello') // Всегда 1 элемент
const heading2 = document.querySelector('H2')
// const heading2 = document.querySelector('.h2-class')


// console.dir(heading2)

// const heading3 = heading2.nextElementSibling
const h2list = document.querySelectorAll('h2')
// console.log(h2list)
const heading3 = h2list[h2list.length - 1]

// console.log(heading3)

setTimeout(() => {
    addStylesTo(heading, 'JavaScript', 'white')
}, 1500)

const link = heading3.querySelector('a')

link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')

    window.location = url
})

    setTimeout(() => {
    addStylesTo(link, 'И всё получится!')
}, 3000)

setTimeout(() => {
    addStylesTo(heading2, 'Практикуйся', 'blue', '2rem')
}, 4500)

// console.dir(heading.textContent)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'yellow'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    // falsy: '', undefined, null, 0, false
    if (fontSize) {
node.style.fontSize = fontSize
    }
}

// https://developer.mozilla.org/ru/docs/Web/Events

heading.onclick = () => {
if (heading.style.color === 'red') {
    heading.style.color = '#000'
    heading.style.background = '#fff'
} else {
    heading.style.color = 'red'
    heading.style.background = '#000'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'red') {
        heading2.style.color = '#0000ff'
        heading2.style.background = 'yellow'
    } else {
        heading2.style.color = 'red'
        heading2.style.background = '#000'
    }
})