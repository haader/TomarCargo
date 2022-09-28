//seccion para probar




//selectDistrito="almirante brown";
// selectDistrito="quilmes";
// selectNivel="secundaria";
// selectCargo="coordinador institucional (coi)";
// selectIge="1168947";
//selectCargo="fisico - quimica (fqa)";


//console.log("El numero devuelto es: "+ObtenerNumFound(selectDistrito,selectNivel,selectCargo));

cargarFiltros();//que hace??

PeticionABC(tratamientoParametros("lomas de zamora","secundaria","ciencias naturales (cnt)"));

funcionBtnAplicarFiltros();
//listaCargos("adultos y cens");//PETICION AL ABC, pushea la lista a objetoCargos
AplicarDistrito(arrayDistrito[0].replaceAll(' ','_'));
AplicarNiveles(arrayNivel[0].replaceAll(' ','_'));

document.getElementById("btnAplicarFiltros").disabled=false;


//AplicarFIltro(selectDistrito,selectNivel,selectCargo);


// let urlIGE='https://servicios3.abc.gob.ar/valoracion.docente/api/apd.oferta.encabezado/select?q=*%3A*&rows=6&sort=finoferta%20desc&json.nl=map&fq=ige%3A1178772&wt=json&json.wrf=';
// PeticionABC(urlIGE);


//read funciona bien

//actualizar ahora funcina (Content-type application/ejson)
//ademas debemos realzar bien el match

//eliminar funciona
