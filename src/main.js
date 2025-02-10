import "./style.css";

console.log("Hello from main");

import { 
    estadoJuego, 

} from "./model";

import { 
    botonPedir,
    botonMePlanto,
    botonNuevoJuego,
    botonUnaMas, 

    bloquearBotonPedir,
    bloquearBotonMePlanto,
    esconderNuevoJuego,
    esconderUnaMas,

    muestraMensaje,
    mostrarCarta,
    obtenerUrlCarta,

    muestraPuntuacion,

    pidoCarta,

    gameStatusOnPlantar,

} from "./dom";

import {
    generaNumeroAleatorio,
    randomCarta,
    obtenerPuntosCarta,
    sumarPuntos,
    actualizarPuntos,


} from "./motor"



// document.addEventListener("DOMContentLoaded", () => {
//     muestraPuntuacion();
//     esconderNuevoJuego(true);
//     esconderUnaMas(true); 
//     bloquearBotonMePlanto(false);
        
//     const desactivaPideCarta = (boton) =>{
//         boton.disabled = true;
//     };

//     if (botonPedir) {
//         botonPedir.addEventListener("click", () => {
//             pidoCarta();
//             winOrLost(); // verifico si el jugador ha ganado o perdido 
//         });
//     }
    

//     if (botonMePlanto) {
//         botonMePlanto.addEventListener("click", () => {
//             desactivaPideCarta(botonPedir);               
//             bloquearBotonMePlanto(true);
//             esconderNuevoJuego(false); 
//             esconderUnaMas(false);
//             gameStatusOnPlantar();
//         });
//     };

//     if (botonNuevoJuego) {
//         botonNuevoJuego.addEventListener("click", () => {
//             estadoJuego.puntos = 0;
//             mensaje.textContent = "";
//             const urlCarta = obtenerUrlCarta(0);
//             mostrarCarta(urlCarta);
//             muestraPuntuacion();
//             esconderNuevoJuego(true);
//             bloquearBotonPedir(false); 
//             esconderUnaMas(true); 
//             bloquearBotonMePlanto(false); 
//         });
//     };

//     if (botonUnaMas) {
//         botonUnaMas.addEventListener("click", () => {
//             muestraPuntuacion();
//             pidoCarta();
//             esconderUnaMas(true);
//         });
//     };
    
// });

// const winOrLost = () => {                         //lo ejecutaremos cada vez q se pida carta para comprobar si s eha ganado o perdido
//     if (estadoJuego.puntos > estadoJuego.MAX_PUNTOS) {
//         mensaje.textContent = "Has perdido :(";
//         console.log("Has perdido");
//         bloquearBotonPedir(true);
//         bloquearBotonMePlanto(true);
//         esconderNuevoJuego(false);
//         esconderUnaMas(true);
//     };

//     if (estadoJuego.puntos === estadoJuego.MAX_PUNTOS) {
//         mensaje.textContent = "¡Enhorabuena, has ganado :D!";
//         console.log("Has ganado");
//         bloquearBotonPedir(true);
//         bloquearBotonMePlanto(true);
//         esconderNuevoJuego(false);
//         esconderUnaMas(true);
//     };
// };

// const actualizaWin = () => {                         
//         mensaje.textContent = "Has perdido :(";
//         console.log("Has perdido");
//         bloquearBotonPedir(true);
//         bloquearBotonMePlanto(true);
//         esconderNuevoJuego(false);
//         esconderUnaMas(true);
//     };

// };