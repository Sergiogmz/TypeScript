/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ["Bash", "Counter", "Healing"];

interface personaje{
    nombre:string;
    hp:number;
    habilidades:string[];
    puebloNatal?:string;
}

const personaje : personaje = {
    nombre:"strider",
    hp:100,
    habilidades:["Bash", "Counter","Healing"]
}

personaje.puebloNatal = "Valdepeñas";

console.table(personaje);