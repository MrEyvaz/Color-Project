const text = document.querySelector('.text')

const body = document.querySelector('body')

text.style.display = 'flex'

text.style.justifyContent = 'center'

text.style.alignItems = 'center'

text.style.padding = '13px';

text.style.borderRadius = '19px';


text.addEventListener('click', function() {
    
const x = Math.floor(Math.random()*255)
const y = Math.floor(Math.random()*255)
const z = Math.floor(Math.random()*255)
body.style.backgroundColor = `rgb(${x},${y},${z})`
})