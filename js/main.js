    // ==========================================================================
    // main para ser utilizado en todas las páginas, para el menú hamburguesa y 
    // el modo oscuro
    // ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. LÓGICA DEL MENÚ HAMBURGUESA
    // ==========================================================================
    const btnMenu = document.getElementById('btn-menu');
    const menuPrincipal = document.getElementById('menu-principal');

    // Verificamos que los elementos existan antes de asignar eventos (Buena práctica)
    if (btnMenu && menuPrincipal) {
        btnMenu.addEventListener('click', () => {
            // Alternamos la clase que mostrará/ocultará el menú en el CSS
            // (Asegurate de tener .menu-abierto definido en tu header.css)
            menuPrincipal.classList.toggle('menu-abierto'); 
            
            // Accesibilidad: Le indicamos al lector de pantalla el nuevo estado del menú
            const estaExpandido = btnMenu.getAttribute('aria-expanded') === 'true';
            btnMenu.setAttribute('aria-expanded', !estaExpandido);
        });
    }
    

    // ==========================================================================
    // 2. LÓGICA DEL MODO OSCURO (Persistencia y Accesibilidad)
    // ==========================================================================
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
    if (modoOscuroGuardado === 'activo') {
        activarModoOscuro();
    }

    // 4. Manejamos el evento de clic en el botón
    if (btnTema) {
        btnTema.addEventListener('click', () => {
            // Volvemos a leer el estado actual del storage por seguridad
            modoOscuroGuardado = localStorage.getItem('modo-oscuro');
            
            // Operador ternario (Lógica if/else): 
            if (modoOscuroGuardado !== 'activo') {
                activarModoOscuro();
            } else {
                desactivarModoOscuro();
            }
        });
    }
});