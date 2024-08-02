let pixel = document.getElementById('pixel');
let rgb = document.getElementById('rgb');

for(i=0;i<8;i++) {
    document.getElementById('red_inputs').innerHTML += getInput('red', i);
    document.getElementById('green_inputs').innerHTML += getInput('green', i);
    document.getElementById('blue_inputs').innerHTML += getInput('blue', i);
}

function getInput(channel, i) {
    return `<input onkeyup='update();' onchange='update();' type='number' min='0' max='1' value='${ Math.floor(Math.random() * 2)}' id='${channel}-${i}'>`;
}

function update() {
    let binaries = {'red': '', 'green': '', 'blue': ''};

    for(i=0;i<8;i++) {
        for (let channel of ['red', 'green', 'blue']) {
            binaries[channel] += document.getElementById(`${channel}-${i}`).value;
        }
    }

    let rgb_string = `rgb(${parseInt(binaries['red'], 2)}, ${parseInt(binaries['green'], 2)}, ${parseInt(binaries['blue'], 2)})`;
    pixel.style.background = rgb_string;
    rgb.innerText = `background: ${rgb_string};`;
}
     
update();
