function borderAdd() {
    let imagen = document.querySelector('#dogImg')
    if (imagen.style.border === 'none') {
        imagen.style.border = '2px solid red'
        console.log(imagen.style.border)
    } else {
        imagen.style.border = 'none'
    }
}