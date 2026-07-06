document.addEventListener('DOMContentLoaded', () => {
    // Usamos querySelectorAll para obtener TODOS los botones con la clase btn-comprar
    const botonesComprar = document.querySelectorAll('.btn-comprar');
    
    // Verificamos que exista al menos uno en la página
    if (botonesComprar.length > 0) {
        // Recorremos cada botón encontrado y le asignamos la funcionalidad
        botonesComprar.forEach(boton => {
            boton.addEventListener('click', () => {
                
                // Usamos confirm() de JS nativo
                const quiereVerMas = confirm("¡Felicidades, compraste un curso! 🎉\n\n¿Quieres ver más cursos de nuestra plataforma?");
                
                if (quiereVerMas) {
                    window.location.href = './nuestroscursos.html';
                }
            });
        });
    }
});