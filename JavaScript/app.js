
document.addEventListener("DOMContentLoaded", function () {
    const nombreInput = document.getElementById("nombre");
    const horaInput = document.getElementById("hora");
    const solicitarTurnoBtn = document.getElementById("solicitar-turno");
    const listaTurnos = document.getElementById("lista-turnos");

    solicitarTurnoBtn.addEventListener("click", function () {
        const nombre = nombreInput.value;
        const hora = horaInput.value;

        if (nombre.trim() !== "" && hora.match(/^\d{2}:\d{2}$/)) {
            const turnoItem = document.createElement("li");
            turnoItem.textContent = `Nombre: ${nombre}, Hora: ${hora}`;
            listaTurnos.appendChild(turnoItem);

            
        } else {
            alert("Por favor, ingrese un nombre válido y una hora en el formato HH:MM.");
        }

        nombreInput.value = "";
        horaInput.value = "";
    });
});