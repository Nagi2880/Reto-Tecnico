# Reto-Tecnico

Rutas del API

GET
//Todas las naves que hay en la base de datos
localhost:3001/api/naves 

//Todas las naves tipo lanzadera
localhost:3001/api/naves/lanzaderas

 //Todas las naves tipo no tripuladas
localhost:3001/api/naves/notripuladas

//Todas las naves tipo tripuladas
localhost:3001/api/naves/tripuladas 

POST
localhost:3001/api/add //Agregar naves a la db

PUT
localhost:3001/api/naves/:id //Usando la id creada por mongoose, usamos la ruta para editar una nave en especifico

DELETE
localhost:3001/api/naves/delete/id //Usando la id creada por mongoose, usamos la ruta para eliminar una nave que no queramos

Cosas a tener en cuenta

-typescript fue usado en modo de desarrollo, no utilizar el comando npm run dev para usar el API (Usar ``npm start´´).
-Se usa ´´tsc´´ en consola para que el codigo de typescript sea transformado a javascript y guardado en build
-No utilize Tipado en el frontend por temas de tiempo y incompatibilidad
-El backend se activa en el puerto 3001, mientras que el frontend en el 3000 por temas de puerto con react

Librerias usadas
