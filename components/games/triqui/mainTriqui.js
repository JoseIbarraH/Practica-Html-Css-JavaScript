/* Cambio de ventanas */

/* menu buttons */
const btnAlone = document.querySelector("#alone");
const btnCouple = document.querySelector("#couple");

/* frame games */
const game1 = document.querySelector("#game1");
const game2 = document.querySelector("#game2");

/* frame menu */

const menu = document.querySelector("#menu");

/* back button */

const back = document.querySelector("#back");
const back2 = document.querySelector("#back2");

/* reset button */

const reset = document.querySelector("#reset");

/* Celdas a validar :u */

const celda1 = document.querySelector("#celda1");
const celda2 = document.querySelector("#celda2");
const celda3 = document.querySelector("#celda3");
const celda4 = document.querySelector("#celda4");
const celda5 = document.querySelector("#celda5");
const celda6 = document.querySelector("#celda6");
const celda7 = document.querySelector("#celda7");
const celda8 = document.querySelector("#celda8");
const celda9 = document.querySelector("#celda9");

/* changes the frames */


btnAlone.addEventListener('click', () => {
    game1.style.display = 'flex';
    game2.style.display = 'none';
    menu.style.display = 'none';
});

btnCouple.addEventListener('click', () => {
    game1.style.display = 'none';
    game2.style.display = 'flex';
    menu.style.display = 'none';
});

back.addEventListener('click', () => {
    menu.style.display = 'flex';
    game1.style.display = 'none';
    game2.style.display = 'none';
});

back2.addEventListener('click', () => {
    menu.style.display = 'flex';
    game1.style.display = 'none';
    game2.style.display = 'none';
});

/* Drop and drag */

function allowDrop(event) {
    event.preventDefault();

}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    win();
}

/* win and lose */

function win() {
    if (celda1.querySelector('.cross') && celda2.querySelector('.cross') && celda3.querySelector('.cross')) { modal('Equis') }
    else if (celda4.querySelector('.cross') && celda5.querySelector('.cross') && celda6.querySelector('.cross')) { modal('Equis') }
    else if (celda7.querySelector('.cross') && celda8.querySelector('.cross') && celda9.querySelector('.cross')) { console.log('Gano Equis'); }
    else if (celda1.querySelector('.cross') && celda4.querySelector('.cross') && celda7.querySelector('.cross')) { console.log('Gano Equis'); }
    else if (celda2.querySelector('.cross') && celda5.querySelector('.cross') && celda8.querySelector('.cross')) { console.log('Gano Equis'); }
    else if (celda3.querySelector('.cross') && celda6.querySelector('.cross') && celda9.querySelector('.cross')) { console.log('Gano Equis'); }
    else if (celda1.querySelector('.cross') && celda5.querySelector('.cross') && celda8.querySelector('.cross')) { console.log('Gano Equis'); }
    else if (celda3.querySelector('.cross') && celda5.querySelector('.cross') && celda7.querySelector('.cross')) { console.log('Gano Equis'); }

    if (celda1.querySelector('.circle') && celda2.querySelector('.circle') && celda3.querySelector('.circle')) { console.log('Gano Circulo'); }
    else if (celda4.querySelector('.circle') && celda5.querySelector('.circle') && celda6.querySelector('.circle')) { console.log('Gano Circulo'); }
    else if (celda7.querySelector('.circle') && celda8.querySelector('.circle') && celda9.querySelector('.circle')) { console.log('Gano Circulo'); }
    else if (celda1.querySelector('.circle') && celda4.querySelector('.circle') && celda7.querySelector('.circle')) { console.log('Gano Circulo'); }
    else if (celda2.querySelector('.circle') && celda5.querySelector('.circle') && celda8.querySelector('.circle')) { console.log('Gano Circulo'); }
    else if (celda3.querySelector('.circle') && celda6.querySelector('.circle') && celda9.querySelector('.circle')) { console.log('Gano Circulo'); }
    else if (celda1.querySelector('.circle') && celda5.querySelector('.circle') && celda8.querySelector('.circle')) { console.log('Gano Circulo'); }
    else if (celda3.querySelector('.circle') && celda5.querySelector('.circle') && celda7.querySelector('.circle')) { console.log('Gano Circulo'); }
}

function modal(ganador) {
    var modal = document.getElementById("ventanaModal");
    var span = document.getElementsByClassName("cerrar")[0];

    document.querySelector("#win-text").textContent = ganador
    modal.style.display = "block";

    span.addEventListener("click", function () {
        modal.style.display = "none";
        sessionStorage.setItem('currentDiv', 'game2');
        location.reload();
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            sessionStorage.setItem('currentDiv', 'game2');
            location.reload();
        }
    });

}

// Obtener los elementos relevantes
var dropBoxes = document.querySelectorAll('.dropBox');
var crosses = document.querySelectorAll('.cross');
var circles = document.querySelectorAll('.circle');

var nuevoDiv = document.createElement("div");

// Función para reiniciar el juego
function reiniciarJuego() {
    // Limpiar las celdas del tablero
    dropBoxes.forEach(function (dropBox) {
        dropBox.innerHTML = ''; // Eliminar cualquier contenido dentro de la celda
    });

    var n1 = 1;
    var n2 = 1;
    // Crear un objeto para almacenar las referencias a los dragBoxes
    var dragBoxes = {};

    // Iterar sobre los dragBoxes
    for (var i = 1; i <= 5; i++) { 

        // Crear un nuevo div cross
        var nuevoDiv = document.createElement("div");
        nuevoDiv.className = "cross";
        nuevoDiv.setAttribute("draggable", "true");
        nuevoDiv.setAttribute("ondragstart", "drag(event)");
        nuevoDiv.id = 'cross' + n1;

        // Obtener el contenedor padre correspondiente y agregar el nuevo div
        var contenedorPadre = document.querySelector('#dragBox' + n1);
        var divAEliminar = contenedorPadre.querySelector('div');

        // Verificar si se encontró un div hijo
        if (divAEliminar) {
            divAEliminar.remove();
        }
        contenedorPadre.appendChild(nuevoDiv);

        // Almacenar la referencia al dragBox en el objeto dragBoxes
        dragBoxes['cross' + n1] = contenedorPadre;
        n1++;
    }

    for (var i = 1; i <= 5; i++) { 
        // Crear un nuevo div cross
        var nuevoDiv2 = document.createElement("div");
        nuevoDiv2.className = "circle";
        nuevoDiv2.setAttribute("draggable", "true");
        nuevoDiv2.setAttribute("ondragstart", "drag(event)");
        nuevoDiv2.id = 'circle' + n2;

        // Obtener el contenedor padre correspondiente y agregar el nuevo div
        var contenedorPadre = document.querySelector('#dragBoxDos' + n2);
        var divAEliminar = contenedorPadre.querySelector('div');

        // Verificar si se encontró un div hijo y lo elimina si lo encuentra
        if (divAEliminar) {
            divAEliminar.remove();
        }
        contenedorPadre.appendChild(nuevoDiv2);

        // Almacenar la referencia al dragBox en el objeto dragBoxes
        dragBoxes['circle' + n2] = contenedorPadre;
        n2++;
    }

    crosses.forEach(function (cross) {
        cross.classList.remove('colocado');
    });

    circles.forEach(function (circle) {
        circle.classList.remove('colocado');
    });
}

document.getElementById('reset').addEventListener('click', function () {
    reiniciarJuego();
});