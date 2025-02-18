
import { 
    pidoCarta,
    cargarPartida,
    unaMas,
    mePlanto,
    nuevoJuego,
    botonPedir,
    
} from "./dom";


export const botonMePlanto = document.getElementById("mePlanto");
export const botonNuevoJuego = document.getElementById("nuevo");
export const botonUnaMas = document.getElementById("unaMas");

document.addEventListener("DOMContentLoaded", () => {
    cargarPartida();

    if (botonPedir) {
        botonPedir.addEventListener("click", () => {
            pidoCarta();
        });
    }

    if (botonMePlanto) {
        botonMePlanto.addEventListener("click", () => {
            mePlanto();
        });
    };

    if (botonNuevoJuego) {
        botonNuevoJuego.addEventListener("click", () => {
            nuevoJuego();
        });
    };

    if (botonUnaMas) {
        botonUnaMas.addEventListener("click", () => {
            unaMas();
        });
    };

});

