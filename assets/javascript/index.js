function borderAdd() {
    let imagen = document.querySelector('#dogImg')
    if (imagen.style.border === 'none') {
        imagen.style.border = '2px solid red'
    } else {
        imagen.style.border = 'none'
    }
}