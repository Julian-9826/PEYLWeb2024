
// Juego de Preguntas y Respuestas
const preguntas = [
    {
        texto: "¿Cuál es la capital de Francia?",
        opciones: ["Madrid", "París", "Roma", "Berlín"],
        correcta: 1
    },
    {
        texto: "¿Cuál es el planeta más grande del sistema solar?",
        opciones: ["Tierra", "Júpiter", "Marte", "Saturno"],
        correcta: 1
    },
    {
        texto: "¿Quién escribió 'Don Quijote de la Mancha'?",
        opciones: ["Miguel de Cervantes", "Shakespeare", "Gabriel García Márquez", "Pablo Neruda"],
        correcta: 0
    }
];

let preguntaActual = 0;

function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    document.getElementById("texto-pregunta").textContent = pregunta.texto;
    const botones = document.querySelectorAll("#pregunta button");
    botones.forEach((boton, index) => {
        boton.textContent = pregunta.opciones[index];
    });
}

function seleccionarRespuesta(indice) {
    const mensaje = document.getElementById("mensaje");
    if (indice === preguntas[preguntaActual].correcta) {
        mensaje.textContent = "¡Correcto!";
    } else {
        mensaje.textContent = "Incorrecto. Intenta otra vez.";
    }
}

function reiniciarJuego() {
    preguntaActual = (preguntaActual + 1) % preguntas.length;
    document.getElementById("mensaje").textContent = "";
    mostrarPregunta();
}

// Iniciar el juego mostrando la primera pregunta
mostrarPregunta();
