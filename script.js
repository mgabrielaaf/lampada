const img = document.getElementById('lamp')
const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')

turnOn.addEventListener('click', on)
turnOff.addEventListener('click', off)
img.addEventListener ('dblclick', broken);

function on() {
    img.src = "./assets/ligada.jpg"
}

function off() {
    img.src = "./assets/desligada.jpg"
}

function broken() {
    img.src = './assets/quebrada.jpg';
}