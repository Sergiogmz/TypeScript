/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen: number,
    segundo: number,
    cancion: string,
    detalle: Detalles
}

interface Detalles{
    anio: number,
    autor: string
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 32,
    cancion: "Mess",
    detalle: {
        anio: 2016,
        autor: "Ed Sheeran"
    }
}

const {volumen, segundo, cancion, detalle}= reproductor;
const {autor} = detalle;

console.log("El volumen de la cancion es: " + volumen);
console.log("El segundo de la cancion es: " + segundo);
console.log("La cancion actual es: " + cancion);
console.log("El autor de la cancion es: " + autor);

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = dbz;

console.log("El personaje en la posicion 3 es: "+ p3);