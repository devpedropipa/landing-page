const formulario = document.getElementById("form")
formulario.addEventListener("submit", impedirReload)

function impedirReload(evento) {
    evento.preventDefault()
}