window.onload = quadroDePixels;

function quadroDePixels() {
    let quadrado = 5;
    let quadro = document.querySelector('#pixel-board');

    for (let l = 1; l <= quadrado; l += 1) {
        let line = document.createElement('div');
        line.className = 'line';
        quadro.appendChild(line);

        for (let p = 1; p <= quadrado; p += 1) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            line.appendChild(pixel);
        }
    }
}

let color = document.getElementsByClassName('color');

for(let index = 0; index < color.length; index += 1) {
    color[index].addEventListener("click", selectColor);
}

function selectColor(origin) {
    for (let index = 0; index < color.length; index += 1) {
        color[index].classList.remove('selected');
    }
    origin.target.classList.add('selected');
}