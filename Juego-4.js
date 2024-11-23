
// Juego de Memoria con Cartas
const cartas = ["🐶", "🐱", "🐰", "🦊", "🐻", "🐶", "🐱", "🐰", "🦊", "🐻"];
let cartasSeleccionadas = [];
let indicesSeleccionados = [];

function mezclarCartas() {
    cartas.sort(() => Math.random() - 0.5);
}

function generarTablero() {
    const tablero = document.getElementById("tablero");
    tablero.innerHTML = "";
    cartas.forEach((_, index) => {
        const carta = document.createElement("div");
        carta.className = "carta";
        carta.dataset.index = index;
        carta.addEventListener("click", girarCarta);
        tablero.appendChild(carta);
    });
}

function girarCarta() {
    const index = this.dataset.index;
    if (cartasSeleccionadas.length < 2 && !indicesSeleccionados.includes(index)) {
        this.textContent = cartas[index];
        cartasSeleccionadas.push(cartas[index]);
        indicesSeleccionados.push(index);

        if (cartasSeleccionadas.length === 2) {
            setTimeout(verificarPareja, 1000);
        }
    }
}

function verificarPareja() {
    const [primera, segunda] = cartasSeleccionadas;
    const tablero = document.getElementById("tablero");

    if (primera === segunda) {
        indicesSeleccionados.forEach((index) => {
            tablero.children[index].style.backgroundColor = "lightgreen";
        });
    } else {
        indicesSeleccionados.forEach((index) => {
            tablero.children[index].textContent = "";
        });
    }

    cartasSeleccionadas = [];
    indicesSeleccionados = [];
}

function reiniciarJuego() {
    cartasSeleccionadas = [];
    indicesSeleccionados = [];
    mezclarCartas();
    generarTablero();
}

// Iniciar el juego
mezclarCartas();
generarTablero();
