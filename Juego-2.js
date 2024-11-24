// Juego de Adivinanza de Números
let numeroSecreto = Math.floor(Math.random() * 10) + 1; // Número entre 1 y 10

function adivinar() {
    const inputNumero = parseInt(document.getElementById('input-numero').value, 10);
    const mensaje = document.getElementById('mensaje');

    // Validación del número ingresado
    if (isNaN(inputNumero) || inputNumero < 1 || inputNumero > 10) {
        mensaje.textContent = "Por favor, ingresa un número válido entre 1 y 10.";
        return;
    }

    // Verificación del número
    if (inputNumero === numeroSecreto) {
        mensaje.textContent = `¡Felicidades! Has adivinado el número secreto: ${numeroSecreto}.`;
    } else if (inputNumero > numeroSecreto) {
        mensaje.textContent = "El número es menor. ¡Intenta otra vez!";
    } else {
        mensaje.textContent = "El número es mayor. ¡Intenta otra vez!";
    }
}

function reiniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1; // Reinicia con un número entre 1 y 10
    document.getElementById('mensaje').textContent = "";
    document.getElementById('input-numero').value = "";
}
