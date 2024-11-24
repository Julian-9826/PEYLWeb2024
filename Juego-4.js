// Juego de Memoria con Cartas
let cartas = ["🐶", "🐱", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯"];
cartas = cartas.concat(cartas); // Duplicamos las cartas para tener parejas
let cartasSeleccionadas = [];
let indicesSeleccionados = [];
let paresEncontrados = 0;
let bloqueado = false;

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
    if (bloqueado) return;

    const index = this.dataset.index;
    if (
        cartasSeleccionadas.length < 2 &&
        !indicesSeleccionados.includes(index)
    ) {
        this.textContent = cartas[index];
        this.classList.add("volteada");
        cartasSeleccionadas.push(cartas[index]);
        indicesSeleccionados.push(index);

        if (cartasSeleccionadas.length === 2) {
            bloqueado = true;
            setTimeout(verificarPareja, 1000);
        }
    }
}

function verificarPareja() {
    const tablero = document.getElementById("tablero");
    const [index1, index2] = indicesSeleccionados.map(Number);

    if (cartasSeleccionadas[0] === cartasSeleccionadas[1]) {
        tablero.children[index1].classList.add("encontrada");
        tablero.children[index2].classList.add("encontrada");
        paresEncontrados++;
        if (paresEncontrados === cartas.length / 2) {
            setTimeout(() => alert("¡Felicidades! Has encontrado todas las parejas."), 500);
        }
    } else {
        indicesSeleccionados.forEach((index) => {
            tablero.children[index].textContent = "";
            tablero.children[index].classList.remove("volteada");
        });
    }

    cartasSeleccionadas = [];
    indicesSeleccionados = [];
    bloqueado = false;
}

function reiniciarJuego() {
    cartasSeleccionadas = [];
    indicesSeleccionados = [];
    paresEncontrados = 0;
    bloqueado = false;
    mezclarCartas();
    generarTablero();
}

// Iniciar el juego
mezclarCartas();
generarTablero();
