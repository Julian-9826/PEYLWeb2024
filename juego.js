
// Lógica del juego Piedra, Papel o Tijera
function playGame(eleccionUsuario) {
    const opciones = ['piedra', 'papel', 'tijera'];
    const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

    let mensaje = '';
    if (eleccionUsuario === eleccionComputadora) {
        mensaje = `Empate! Ambos eligieron ${eleccionUsuario}.`;
    } else if (
        (eleccionUsuario === 'piedra' && eleccionComputadora === 'tijera') ||
        (eleccionUsuario === 'papel' && eleccionComputadora === 'piedra') ||
        (eleccionUsuario === 'tijera' && eleccionComputadora === 'papel')
    ) {
        mensaje = `¡Ganaste! Elegiste ${eleccionUsuario} y la computadora eligió ${eleccionComputadora}.`;
    } else {
        mensaje = `Perdiste. Elegiste ${eleccionUsuario} y la computadora eligió ${eleccionComputadora}.`;
    }

    document.getElementById('mensaje').textContent = mensaje;
}
