const usuarioLogin = "matiashortas"
const contraseñaLogin = 123123
let textoLogeo = document.getElementById("texterror")
const usuario = document.getElementById("usuario")
const contraseña = document.getElementById("contraseña")
const boton = document.getElementById("boton")



boton.addEventListener(`click`, (e) => {
    e.preventDefault()
    

    if (usuarioLogin == usuario.value && contraseñaLogin == contraseña.value) {
        window.location = "../index.html"
    } else{
        textoLogeo.innerHTML = "Ingresaste lo datos incorrectos, porfavor ingresar nuevamente."
        textoLogeo.style.color = "red";
        usuario.style.borderColor = "red"
        contraseña.style.borderColor = "red"

    }
    usuario.value = ""
    contraseña.value = ""
})




