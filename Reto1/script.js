
// ¿Cuál es la opción que sirve?

const imagenes = document.querySelectorAll('.panel');
//const activo = document.querySelector('.active')
//const panels = document.getElementById('panel')
//const panels = document.getElementsByClassName('.panel')

imagenes.forEach(panel => {
    //console.log(panel)
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    imagenes.forEach(panel => {
        panel.classList.remove('active');
    })
}





















