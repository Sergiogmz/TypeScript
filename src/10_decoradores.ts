/*
    ===== Código de TypeScript =====
*/

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
    };
  }

@reportableClassDecorator
  class MiSuperClase {
    public miPopiedad: string = "ABC123";

    imprimir(){
        console.log("Hola Mundo!!");
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();
console.log(miClase.miPopiedad);