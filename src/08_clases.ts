/*
    ===== Código de TypeScript =====
*/

class PersonaNormal{
    constructor(public nombre: string, public direccion: string){}
}

class Heroe extends PersonaNormal{
    //alterEgo: string;
    //edad: number;
    //nombreReal: string;

    constructor( public alterEgo : string,
                 public edad: number,
                 public nombre: string)
                {
                    super(nombre, "NY");
                }
}

const spiderman = new Heroe ("spiderman", 30, "Peter");

console.log(spiderman);