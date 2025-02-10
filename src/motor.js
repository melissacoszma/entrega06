import { 
    estadoJuego, 

} from "./model";



export const generaNumeroAleatorio = () => {
    return Math.floor(Math.random() * 10) + 1; // +1 (nuestro mínimo) para excluir el 0 en el resultado
};

export const randomCarta = (numAleatorio)=> {
   if(numAleatorio > 7){
       return numAleatorio += 2;
    }
    return numAleatorio;
};

export const obtenerPuntosCarta = (carta) => {
   if (carta >= 7) {
       return 0.5;
   }
   return carta;
};

export const sumarPuntos = (puntoCarta) => {
    return estadoJuego.puntos + puntoCarta;
};

export const actualizarPuntos = (nuevosPuntos) => {
    estadoJuego.puntos = nuevosPuntos;
};



