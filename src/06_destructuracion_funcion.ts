/*
    ===== Código de TypeScript =====
*/

export interface Producto{
    desc: string;
    precio: number
}

const telefono: Producto = {
    desc: "Nokia A1",
    precio: 170
}

const tableta:Producto = {
    desc: "IPad 10",
    precio: 270
}

export function precioISV(productos: Producto[]): [number, number]{
    let total = 0;

    productos.forEach( ({precio}) => {
    total += precio;

    })
    return [total, total * 0.15];
}

const articulos = [telefono, tableta];
const isv = precioISV(articulos);

console.log("ISV: ", isv);