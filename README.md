# Proyecto para reforzar TypeScript - ECMAScript 20XX

* Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:

```
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.


* Cuando termine de instalar los node_modules, entonces podemos ejecutar el proyecto con el siguiente comando

```
npm start
```
Para que eso funcione, se debe de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto
Por defecto, el puerto que configuré para este proyecto es el ```8081```, pero si necesitan cambiarlo porque pueda que ese puerto lo use su ordenador, podeis cambiarlo abriendo el ```package.json``` >> scripts. Ahí veis la instrucción que lanza el servidor de desarrollo

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

Simplemente cambiad el puerto por el que necesiten y listo. (lógicamente hay que grabar los cambios antes de ejecutar el ```npm start``` nuevamente)


