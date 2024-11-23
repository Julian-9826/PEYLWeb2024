
// Juego de Adivinanza de Números
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

function adivinar() {
    const inputNumero = parseInt(document.getElementById('input-numero').value, 10);
    const mensaje = document.getElementById('mensaje');

    if (inputNumero === numeroSecreto) {
        mensaje.textContent = `¡Felicidades! Has adivinado el número secreto: ${numeroSecreto}.`;
    } else if (inputNumero > numeroSecreto) {
        mensaje.textContent = "El número es menor. ¡Intenta otra vez!";
    } else {
        mensaje.textContent = "El número es mayor. ¡Intenta otra vez!";
    }
}

function reiniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    document.getElementById('mensaje').textContent = "";
    document.getElementById('input-numero').value = "";
}
