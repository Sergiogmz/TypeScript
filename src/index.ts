/*
    ===== Código de TypeScript =====
*/

class PersonaNormal{
    constructor(public nombre: string, public direccion: string){}
}

class Heroe{
    //alterEgo: string;
    //edad: number;
    //nombreReal: string;

    constructor( public alterEgo : string,
                 public edad: number,
                 public nombre: string)
                {}
}

const spiderman = new Heroe ("spiderman", 30, "Peter");

console.log(spiderman);