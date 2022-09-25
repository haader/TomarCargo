no te rindas nunca, mira todo lo que avanzamos, falta mucho pero lo vamos a lograr

-esta aplicación sirve para facilitar la busqueda de ofertas laborales

procesos que desarrolla: 

0.proceso para definir usuario y contraseña; =>mostrar el usuario el la parte superior derecha co la opcio "salir"
0.define la database que se usaran en las peticiones

1.calendario docente:
2.filtro de ofertas docentes:

--se elijen los filtros que estan guardados en archivos json (DISTRITOS, NIVEL, CARGO)
--se agrega el filtro "publicadas" por defecto para mostrar ofertas publicadas

--a  medida que se elijen filtros se agregar a la base de datos de "MONGO DB"

--cada vez que se apreta "guardar filtros" 

=> se cargan los filtros de la base de datos y se renderiza en la tabla "filtros"

=> cuando se apreta el btn "ver" se utiliza un endpoint cargados con los filtros
        =>se borran los contenidos de la "seccion OFERTAS"
        =>se cargan los datos en formato .txt se parsea y se renderiza en la "sección OFERTAS"




//AHORA: peticiones funcion obtenernumfound


//objeto para guardar los cargos seleccionados
let a=[];
a.push({"cens":[]});
a.push({"secundaria":[]});

console.log(a);
a[0].cens[0]="s";
a[0].cens[1]="s";

console.log(a);