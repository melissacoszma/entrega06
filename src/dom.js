import "./style.css";

import { 
    estadoJuego, 

} from "./model";

import {
    generaNumeroAleatorio,
    randomCarta,
    obtenerPuntosCarta,
    sumarPuntos,
    actualizarPuntos,

} from "./motor"

export const botonPedir = document.getElementById("pidoCarta");
export const botonMePlanto = document.getElementById("mePlanto");
export const botonNuevoJuego = document.getElementById("nuevo");
export const botonUnaMas = document.getElementById("unaMas");



export const muestraPuntuacion = () => {
    const puntuacion = document.getElementById("puntuacion");
    if (puntuacion) {
        puntuacion.textContent = estadoJuego.puntos;
    }; 
};

export const bloquearBotonPedir = (estaHabilitado) => {
    const botonPedir = document.getElementById("pidoCarta");

    if (botonPedir) {
        botonPedir.disabled = estaHabilitado;
    };
};

export const bloquearBotonMePlanto = (estaHabilitado) => {
    const botonMePlanto = document.getElementById("mePlanto");

    if (botonMePlanto) {
        botonMePlanto.disabled = estaHabilitado;
    };
}; 

export const esconderNuevoJuego = (estaHabilitado) => {
    const botonNuevo = document.getElementById("nuevo");

    if (botonNuevo) {
        botonNuevo.hidden = estaHabilitado;
    };
};

export const esconderUnaMas = (estaHabilitado) => {
    const botonUnaMas = document.getElementById("unaMas");

    if (botonUnaMas) {
        botonUnaMas.hidden = estaHabilitado;
    };
};


export const muestraMensaje = (mensaje) => {
    const elementoMensaje = document.getElementById("mensaje");

    if (elementoMensaje) {
        elementoMensaje.textContent = mensaje;
    };
};

      
export const mostrarCarta = (urlCarta) => {
    const imgCarta = document.getElementById("imgCarta");

    if (imgCarta) {
        imgCarta.src = urlCarta;
    };
};

export const pidoCarta = () => {                                                                            // no tengo muy claro que pidoCarta, winOrLost y el listener vayan integramente aquí
    const numAleatorio = generaNumeroAleatorio();
    const carta = randomCarta(numAleatorio);
    const punto = obtenerPuntosCarta(carta); // obtengo el valor de la carta
    const puntosSumados = sumarPuntos(punto); // suma los puntos
    actualizarPuntos(puntosSumados); // actualizo la variable global
    muestraPuntuacion(); // muestro la puntuación actualizada
    const urlCarta = obtenerUrlCarta(carta); // obtengo la URL de la carta
    mostrarCarta(urlCarta); // muestro la carta en la interfaz 
};

const winOrLost = () => {                         //lo ejecutaremos cada vez q se pida carta para comprobar si s eha ganado o perdido
    if (estadoJuego.puntos > estadoJuego.MAX_PUNTOS) {
        mensaje.textContent = "Has perdido :(";
        console.log("Has perdido");
        bloquearBotonPedir(true);
        bloquearBotonMePlanto(true);
        esconderNuevoJuego(false);
        esconderUnaMas(true);
    };

    if (estadoJuego.puntos === estadoJuego.MAX_PUNTOS) {
        mensaje.textContent = "¡Enhorabuena, has ganado :D!";
        console.log("Has ganado");
        bloquearBotonPedir(true);
        bloquearBotonMePlanto(true);
        esconderNuevoJuego(false);
        esconderUnaMas(true);
    };
};

document.addEventListener("DOMContentLoaded", () => {
    muestraPuntuacion();
    esconderNuevoJuego(true);
    esconderUnaMas(true); 
    bloquearBotonMePlanto(false);
        
    const desactivaPideCarta = (boton) =>{
        boton.disabled = true;
    };

    if (botonPedir) {
        botonPedir.addEventListener("click", () => {
            pidoCarta();
            winOrLost(); // verifico si el jugador ha ganado o perdido 
        });
    }
    

    if (botonMePlanto) {
        botonMePlanto.addEventListener("click", () => {
            desactivaPideCarta(botonPedir);               
            bloquearBotonMePlanto(true);
            esconderNuevoJuego(false); 
            esconderUnaMas(false);
            gameStatusOnPlantar();
        });
    };

    if (botonNuevoJuego) {
        botonNuevoJuego.addEventListener("click", () => {
            estadoJuego.puntos = 0;
            mensaje.textContent = "";
            const urlCarta = obtenerUrlCarta(0);
            mostrarCarta(urlCarta);
            muestraPuntuacion();
            esconderNuevoJuego(true);
            bloquearBotonPedir(false); 
            esconderUnaMas(true); 
            bloquearBotonMePlanto(false); 
        });
    };

    if (botonUnaMas) {
        botonUnaMas.addEventListener("click", () => {
            muestraPuntuacion();
            pidoCarta();
            esconderUnaMas(true);
        });
    };
    
});

export const obtenerUrlCarta = (carta) => {
    let urlCarta;

    switch (carta) {
        case 0:
            urlCarta = "./img/back.jpg";
            break;
        case 1:
            urlCarta = "./img/1_as-copas.jpg";
            break;
        case 2:
            urlCarta = "./img/2_dos-copas.jpg";
            break;
        case 3:
            urlCarta = "./img/3_tres-copas.jpg";
            break;
        case 4:
            urlCarta = "./img/4_cuatro-copas.jpg";
            break;
        case 5:
            urlCarta = "./img/5_cinco-copas.jpg";
            break;
        case 6:
            urlCarta = "./img/6_seis-copas.jpg";
            break;
        case 7:
            urlCarta = "./img/7_siete-copas.jpg";
            break;
        case 10:
            urlCarta = "./img/10_sota-copas.jpg";   
            break;
        case 11:
            urlCarta = "./img/11_caballo-copas.jpg"; 
            break;
        case 12:
            urlCarta = "./img/12_rey-copas.jpg";
            break;
        default:
            urlCarta = "./img/back.jpg"; // carta boca abajo por defecto
            break;
    };

    return urlCarta; 
};


export const gameStatusOnPlantar = () => {
   

    if (estadoJuego.puntos <= 4) {
        muestraMensaje("Has sido muy conservador u.u");
        

    } else if (estadoJuego.puntos >= 5 && estadoJuego.puntos < 6) {
        muestraMensaje("Te ha entrado el canguelo :S");
       

    } else if (estadoJuego.puntos >= 6 && estadoJuego.puntos <= 7) {
        muestraMensaje("Casi, casi o.o");
        

    } else {
        muestraMensaje("");
    };

};
