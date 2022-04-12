
const welcome = document.querySelector('#welcome');
const button = document.querySelector('button');
function getRandomInt(x) {
    return Math.floor(Math.random() * x);
} 
const complement = document.querySelector('#complement')

button.addEventListener('click', function() {
    const r = getRandomInt(256)
    const g = getRandomInt(256)
    const b = getRandomInt(256)
    const r2 = 255 - r
    const b2 = 255 - b
    const g2 = 255 - g
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    welcome.innerHTML = `Your background color is: ${document.body.style.backgroundColor}` 
    complement.innerHTML = `Your Complement is : rgb(${r2}, ${b2}, ${g2})`
    complement.style.color = `rgb(${r2}, ${b2}, ${g2})`
})