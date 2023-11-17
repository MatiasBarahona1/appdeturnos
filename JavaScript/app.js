document.addEventListener("DOMContentLoaded", function () {
    const nombreInput = document.getElementById("nombre");
    const horaInput = document.getElementById("hora");
    const solicitarTurnoBtn = document.getElementById("solicitar-turno");
    const listaTurnos = document.getElementById("lista-turnos");

    // array para almacenar los turnos
    const turnos = [];

    solicitarTurnoBtn.addEventListener("click", function () {
        const nombre = nombreInput.value;
        const hora = horaInput.value;

        const esHoraValida = (nombre.trim() !== "" && hora.match(/^\d{2}:\d{2}$/)) ? true : false;

        if (esHoraValida) {
            const nuevoTurno = { nombre, hora };
            turnos.push(nuevoTurno);
        
           
            Toastify({
                text: "Turno agregado con éxito",
                duration: 1500, 
                close: false,
                gravity: "top", 
                position: 'right', 
                backgroundColor: "green",
            }).showToast();
        
            actualizarListaTurnos();
            console.log("Array de Turnos:", turnos);
        }
        
        else {
            
            Swal.fire({
                icon: "error",
                title: "ERROR...",
                text: "Por favor, ingrese un nombre válido y una hora en el formato HH:MM.",
              });
        }

        nombreInput.value = "";
        horaInput.value = "";
    });

    
    function actualizarListaTurnos() {
       
        listaTurnos.innerHTML = "";

        
        turnos.forEach(turno => {
            const turnoItem = document.createElement("li");
            turnoItem.textContent = `Nombre: ${turno.nombre}, Hora: ${turno.hora}`;
            listaTurnos.appendChild(turnoItem);
        });
    }
});
