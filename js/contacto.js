document.addEventListener("DOMContentLoaded", function() {
    const formContacto = document.getElementById("form-contacto");

    formContacto.addEventListener("submit", function(evento) {
        evento.preventDefault(); 

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const mensaje = document.getElementById("mensaje").value;

        const mensajeAlerta = 
            "¡Interacción con el DOM exitosa!\n\n" +
            "Nombre: " + nombre + "\n" +
            "Email: " + email + "\n" +
            "Teléfono: " + telefono + "\n" +
            "Mensaje: " + mensaje;

        alert(mensajeAlerta);
    });
});