/*
    ===== Código de TypeScript =====
*/

import { precioISV, Producto } from "./06_destructuracion_funcion";

const carritoCompras: Producto[] = [
    {
        desc: "Telefono1",
        precio: 100

    },

    {
        desc: "Telefono2",
        precio: 300

    }
];

const [total, isv] = precioISV (carritoCompras);

console.log("Total: ", total);
console.log("ISV: ", isv);