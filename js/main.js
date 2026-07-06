// ====== MODO OSCURO ======
// Dejo la lógica en main, para poder usarlo más fácil en todas las páginas.
// 

document.addEventListener('DOMContentLoaded', () => {
    const btnTema = document.getElementById('btn-tema');
    const body = document.body;

    // 1. Leemos si el usuario ya tenía activado el modo oscuro en visitas anteriores
    let modoOscuroGuardado = localStorage.getItem('modo-oscuro');

    // 2. Creamos funciones separadas para activar y desactivar (hace el código más limpio)
    const activarModoOscuro = () => {
        body.classList.add('modo-oscuro');
        // Guardamos la preferencia en el navegador
        localStorage.setItem('modo-oscuro', 'activo');
        
        // Mantenemos la accesibilidad
        btnTema.setAttribute('aria-pressed', 'true');
        btnTema.setAttribute('aria-label', 'Activar modo claro');
    };

    const desactivarModoOscuro = () => {
        body.classList.remove('modo-oscuro');
        // Borramos la preferencia
        localStorage.setItem('modo-oscuro', null);
        
        // Mantenemos la accesibilidad
        btnTema.setAttribute('aria-pressed', 'false');
        btnTema.setAttribute('aria-label', 'Activar modo oscuro');
    };

    // 3. Verificamos el estado inicial al cargar la página
    // Si la última vez lo dejó activo, lo activamos apenas entra
    if (modoOscuroGuardado === 'activo') {
        activarModoOscuro();
    }

    // 4. Manejamos el evento de clic en el botón
    btnTema.addEventListener('click', () => {
        // Volvemos a leer el estado actual del storage por seguridad
        modoOscuroGuardado = localStorage.getItem('modo-oscuro');
        
        // Operador ternario: si no está activo, lo activa. Si está activo, lo desactiva.
        if (modoOscuroGuardado !== 'activo') {
            activarModoOscuro();
        } else {
            desactivarModoOscuro();
        }
    });
});