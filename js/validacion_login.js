$('#login').validate({
    "rules": {
        "correo":{
            required: true,
        },
        "constraseña":{
            required: true
        }
    },
    "message": {
        "correo":{
            required: "Correo es un campo obligatorio",
        },
        "constraseña":{
            required: "Contraseña es un campo obligatorio"
        }
    },
});
/*
let btn = document.getElementById("validacion");
btn.addEventListener("click", function() {
    let correo = document.getElementById("correo");
    let constraseña = document.getElementById("contraseña");
})
*/