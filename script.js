

// Función para actualizar los valores en la tabla 
function actualizarTabla(idCampo, idOutput) {
    const campo = document.getElementById(idCampo);
    const output = document.getElementById(idOutput);
    campo.addEventListener("input", () => {
        output.textContent = campo.value;
    });
}

// Llamadas a actualizarTabla para cada campo
actualizarTabla("nombre", "nombre-output");
actualizarTabla("apellido", "apellido-output");
actualizarTabla("email", "email-output");
actualizarTabla("telefono", "telefono-output");
actualizarTabla("edad", "edad-output");
actualizarTabla("direccion", "direccion-output");
actualizarTabla("provincia", "provincia-output");
actualizarTabla("codigo-postal", "codigo-postal-output");

// Actualización para el método de contacto
document.querySelectorAll("input[name='contacto']").forEach((input) => {
    input.addEventListener("change", () => {
        document.getElementById("contacto-output").textContent = input.value;
    });
});

// Actualización para el tipo de suscripción
document.querySelectorAll("input[name='suscripcion']").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        const seleccionados = Array.from(document.querySelectorAll("input[name='suscripcion']:checked")).map(checkbox => checkbox.value);
        document.getElementById("suscripcion-output").textContent = seleccionados.join(", ");
    });
});
