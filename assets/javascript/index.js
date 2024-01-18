function borderAdd() {
    let imagen = document.querySelector('#dogImg')
    if (imagen.style.border === 'none') {
        imagen.style.border = '2px solid red'
    } else {
        imagen.style.border = 'none'
    }
}

function verificar() {
    // console.log(document.querySelector('#input-1').value)
    let count1 = Number(document.querySelector('#input-1').value);
    let count2 = Number(document.querySelector('#input-2').value);
    let count3 = Number(document.querySelector('#input-3').value);
    let total = count1+count2+count3;
    if (total > 10) {
        document.querySelector('#parrafo').innerHTML = 'Llevas demasiados stickers'
    } else {
        document.querySelector('#parrafo').innerHTML = 'Llevas un total de: '+total
    }
}

function verificarPass() {
    let opction1 = document.querySelector('#select1').value;
    let opction2 = document.querySelector('#select2').value;
    let opction3 = document.querySelector('#select3').value;
    let pass = opction1+opction2+opction3;

    console.log(pass)

    if (pass === '911') {
        alert('password correcto')
    } else if (pass === '714') {
        alert('test')
    } else {
        alert('hola mundo')
    }
}