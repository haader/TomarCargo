
//creamos un objeto en LOCALSTORAGE si no existe



//dependiendo de la "modalidad" se realiza la petición de la lista de cargos al servidor
//creamos el objeto que contendra toda la info de los cargos separados por niveles
//objeto donde se guardan la lista de Cargos traidas del servidor a partir de el array de "niveles seleccionados"
let objetosCargos=[
{"adultos":[]},
{"adultos_y_cens":[]},
{"artistica":[]},
{"educacion_fisica":[]},
{"especial":[]},
{"inicial":[]},
{"primaria":[]},
{"psicologia":[]},
{"secundaria":[]},
{"secundaria_adultos":[]},
{"superior":[]},
{"tecnico_profesional":[]}
];

if(localStorage.getItem('objetoSeleccionCargos')==null){
    
    localStorage.setItem('objetoSeleccionCargos',`[
        {"adultos":[]},
        {"adultos_y_cens":['area quimica cens - adultos (+5y)', 'fines quimica (wqq)', 'area fisica cens - adultos (+5x)']},
        {"artistica":[]},
        {"educacion_fisica":[]},
        {"especial":[]},
        {"inicial":[]},
        {"primaria":[]},
        {"psicologia":[]},
        {"secundaria":['ciencias naturales (cnt)', 'fisico - quimica (fqa)', 'introducción a la química (iaq)', 'fundamentos de la química (fdq)', 'encargado medios apoyo tec-ped.quimica (eqq)', 'preceptor (/pr)', 'bibliotecario (/bi)']},
        {"secundaria_adultos":[]},
        {"superior":[]},
        {"tecnico_profesional":[]}
        ]`);
        var objetoSeleccionCargos=localStorage.getItem('objetoSeleccionCargos');

}else{
    

        var objetoSeleccionCargos=JSON.parse(localStorage.getItem('objetoSeleccionCargos'));
        console.log(objetoSeleccionCargos)
}

function listaCargos(modalidad){//trae la lista de cargos de la modalidad seleccionada

    //tratamiento de la modalidad
    let modalidadTxt=modalidad.replaceAll(' ','%20');
    url='https://servicios3.abc.gob.ar/valoracion.docente/api/apd.oferta.encabezado/select?rows=0&facet=true&facet.limit=-1&facet.mincount=1&json.nl=map&facet.field=cargo&fq=descnivelmodalidad%3A%22'+modalidadTxt+'%22&q=*:*&wt=json&json.wrf=';
    
    //realizamos la petición
    let xml=new XMLHttpRequest();
    xml.open('GET',"https://abccors.herokuapp.com/"+url);
    xml.overrideMimeType('text/xml; charset=iso-8859-1');
    xml.send();

    xml.onreadystatechange=()=>{
        if(xml.status==200 && xml.readyState==4){
            console.log("respuesta listaCargos")
            txt1=xml.responseText;
            
            let txt=txt1.slice(1,-2)//.replaceAll('(','').replaceAll(')','');
            let json=JSON.parse(txt)
            console.log(json);

            let myarray=json.facet_counts.facet_fields.cargo;
            let modalidad2=modalidad.replaceAll(" ","_");
            for (var key in myarray) {
  
                pushToObjetosCargos(key,modalidad2)
                
              }
              
        }
    }

    //obtenemos la respuesta en formato texto (luego se parsea)

}

function pushToObjetosCargos(cargoAgregar,nivel){
    //"objetoCargo" es el array que contiene la lista de CARGOS para elegir traida del servidor para que este acrualizado
    switch (nivel) {
       case "adultos":
            objetosCargos[0].adultos.push(cargoAgregar);
        break;

       case "adultos_y_cens":
        objetosCargos[1].adultos_y_cens.push(cargoAgregar);
        break;

       case "artistica":
        objetosCargos[2].artistica.push(cargoAgregar);
        break;

       case "educacion_fisica":
        objetosCargos[3].educacion_fisica.push(cargoAgregar);
        break;

       case "especial":
        objetosCargos[4].especial.push(cargoAgregar);
        break;

       case "inicial":
        objetosCargos[5].inicial.push(cargoAgregar);
        break;

       case "primaria":
        objetosCargos[6].primaria.push(cargoAgregar);
        break;

       case "psicologia":
        objetosCargos[7].psicologia.push(cargoAgregar);
        break;

       case "secundaria":
        objetosCargos[8].secundaria.push(cargoAgregar);
        break;

       case "secundaria_adultos":
        objetosCargos[9].secundaria_adultos.push(cargoAgregar);
        break;

       case "superior":
        objetosCargos[10].superior.push(cargoAgregar);
        break;

       case "tecnico_profesional":
        objetosCargos[11].tecnico_profesional.push(cargoAgregar);
       break;
    }
}



function windowFiltrarCargo(nivel){

    let nivel2=nivel.replaceAll(' ','_');
    document.getElementById("cuerpo").innerHTML+=`
    
    <div id="windowFiltro" class="windowFiltro">

            <button class="exite" onclick="exite()"><ion-icon name="close-circle-outline"></ion-icon></button>

            <div class="divFiltro">
                <text>Cargo:</text>
                <input class="inputFiltro" id="input2" onkeyup='TeclaCargo("${nivel2}")'></input>
                <div class="listaEmergente" id="listaEmergente2">
                        
                </div>
            </div>

            <button class="btnF" id="btnF2" onclick="variableGetInput(2)" disabled="true">Filtrar</button>

    </div>
    
    <div id="blackID" class="black">
        
    </div>
    
    `;
}
function TeclaCargo(nivel){
//cada vez que se presiona una tecla se debe filtrar la lista y devolver un resultado grafico
//HACER

let tecla=document.getElementById("input2").value;
document.getElementById("listaEmergente2").innerHTML="";
   
    //console.log("*******"+nivel+"*******")
    
let coincidecias=0;
        switch (nivel) {
            case "adultos":
                objetosCargos[0].adultos.forEach((element,index) => {

                    if(element.includes(tecla)){
                        document.getElementById("listaEmergente2").innerHTML+=`
                    <option class=optionEmergente onclick='selectObjetosCargos("${nivel}",${index})'>${element}</option>

                    `;

                    coincidecias++;
                   }
                    
                });
                
             break;
     
            case "adultos_y_cens":
                objetosCargos[1].adultos_y_cens.forEach((element,index) => {
                    if(element.includes(tecla)){
                    document.getElementById("listaEmergente2").innerHTML+=`
                    <option class=optionEmergente onclick='selectObjetosCargos("${nivel}",${index})'>${element}</option>

                    `;   
                    coincidecias++;
                   }
                });
             break;
     
            case "artistica":
                objetosCargos[2].artistica.forEach((element,index) => {
                    if(element.includes(tecla)){
                    document.getElementById("listaEmergente2").innerHTML+=`
                    <option class=optionEmergente onclick='selectObjetosCargos("${nivel}",${index})'>${element}</option>

                    `;  
                   }
                });
             break;
     
            case "educacion_fisica":
                objetosCargos[3].educacion_fisica.forEach((element,index) => {
                    if(element.includes(tecla)){
                    document.getElementById("listaEmergente2").innerHTML+=`
                    <option class=optionEmergente onclick='selectObjetosCargos("${nivel}",${index})'>${element}</option>

                    `; 
                    coincidecias++;
                   }
                });
             break;
     
            case "especial":
                objetosCargos[4].especial.forEach((element,index) => {
                    if(element.includes(tecla)){
                    document.getElementById("listaEmergente2").innerHTML+=`
                    <option class=optionEmergente onclick='selectObjetosCargos("${nivel}",${index})'>${element}</option>

                    `;  
                    coincidecias++;
                   }
                });
             break;
     
            case "inicial":
                objetosCargos[5].inicial.forEach((element,index) => {
                    if(element.includes(tecla)){
                    document.getElementById("listaEmergente2").innerHTML+=`
                    <option class=optionEmergente onclick='selectObjetosCargos("${nivel}",${index})'>${element}</option>

                    `;  
                    coincidecias++;
                   }
                });
             break;
     
            case "primaria":
                objetosCargos[6].primaria.forEach((element,index) => {
                    if(element.includes(tecla)){
                    document.getElementById("listaEmergente2").innerHTML+=`
                    <option class=optionEmergente onclick='selectObjetosCargos("${nivel}",${index})'>${element}</option>

                    `;  
                    coincidecias++;
                   }
                });
             break;
     
            case "psicologia":
                objetosCargos[7].psicologia.forEach((element,index) => {
                    if(element.includes(tecla)){
                    document.getElementById("listaEmergente2").innerHTML+=`
                    <option class=optionEmergente onclick='selectObjetosCargos("${nivel}",${index})'>${element}</option>

                    `;  
                    coincidecias++;
                   }
                });
             break;
     
            case "secundaria":
                objetosCargos[8].secundaria.forEach((element,index) => {
                    if(element.includes(tecla)){
                    document.getElementById("listaEmergente2").innerHTML+=`
                    <option class=optionEmergente onclick='selectObjetosCargos("${nivel}",${index})'>${element}</option>

                    `;  
                    coincidecias++;
                   }
                });
             break;
     
            case "secundaria_adultos":
                objetosCargos[9].secundaria_adultos.forEach((element,index) => {
                    if(element.includes(tecla)){
                    document.getElementById("listaEmergente2").innerHTML+=`
                    <option class=optionEmergente onclick='selectObjetosCargos("${nivel}",${index})'>${element}</option>

                    `;  
                    coincidecias++;
                   }
                });
             break;
     
            case "superior":
                objetosCargos[10].superior.forEach((element,index) => {
                    if(element.includes(tecla)){
                    document.getElementById("listaEmergente2").innerHTML+=`
                    <option class=optionEmergente onclick='selectObjetosCargos("${nivel}",${index})'>${element}</option>

                    `;  
                    coincidecias++;
                   }
                });
             break;
     
            case "tecnico_profesional":
                objetosCargos[11].tecnico_profesional.forEach((element,index) => {
                    if(element.includes(tecla)){
                    document.getElementById("listaEmergente2").innerHTML+=`
                    <option class=optionEmergente onclick='selectObjetosCargos("${nivel}",${index})'>${element}</option>

                    `;
                    coincidecias++;
                   }
                });
            break;
         }

        if(coincidecias==0){
            document.getElementById("listaEmergente2").innerHTML=`
            <option class=optionEmergente onclick="LimpiarImput()">No Hay Coincidencias</option>

            `;  
        }
        
         
    }

    //cuando se selecciona una option se debe agregar (PUSH) a el array de "seleccion de cargo" y LUEGO SE PUEDE renderizar!
function selectObjetosCargos(nivel,idArray){//guarda la seleccion en el "ARRAY"

switch (nivel) {
    case "adultos":
         objetoSeleccionCargos[0].adultos.push( objetosCargos[0].adultos[idArray]);
     break;

    case "adultos_y_cens":
        objetoSeleccionCargos[1].adultos_y_cens.push( objetosCargos[1].adultos_y_cens[idArray]);
     break;

    case "artistica":
        objetoSeleccionCargos[2].artistica.push( objetosCargos[2].artistica[idArray]);
     break;

    case "educacion_fisica":
        objetoSeleccionCargos[3].educacion_fisica.push( objetosCargos[3].educacion_fisica[idArray]);
     break;

    case "especial":
        objetoSeleccionCargos[4].especial.push( objetosCargos[4].especial[idArray]);
     break;

    case "inicial":
        objetoSeleccionCargos[5].inicial.push( objetosCargos[5].inicial[idArray]);
     break;

    case "primaria":
        objetoSeleccionCargos[6].primaria.push( objetosCargos[6].primaria[idArray]);
     break;

    case "psicologia":
        objetoSeleccionCargos[7].psicologia.push( objetosCargos[7].psicologia[idArray]);
     break;

    case "secundaria":
        objetoSeleccionCargos[8].secundaria.push( objetosCargos[8].secundaria[idArray]);
     break;

    case "secundaria_adultos":
        objetoSeleccionCargos[9].secundaria_adultos.push( objetosCargos[9].secundaria_adultos[idArray]);
     break;

    case "superior":
        objetoSeleccionCargos[10].superior.push( objetosCargos[10].superior[idArray]);
     break;

    case "tecnico_profesional":
        objetoSeleccionCargos[11].tecnico_profesional.push( objetosCargos[11].tecnico_profesional[idArray]);
    break;
 }

 //guardamos el objeto en localStorage (objetoSeleccionCargos)
localStorage.setItem('objetoSeleccionCargos',JSON.stringify(objetoSeleccionCargos));


 document.getElementById("filtro"+nivel).innerHTML=""; //LIMPIAMOS LA LISTA DE CARGOS PARA RENDERIZAR
 agregarCargo(nivel);//luego llamamos a renderizar el componente!


 exite();//salimos de la windowsBlack



}


//antes de renderizar se debe limpiar el componente " "=>"_"
//Renderiza los cargos en filtro 2 
//=>>>>document.getElementById("filtro"+nivel).innerHTML="";//LIMPIAMOS LA LISTA DE CARGOS PARA RENDERIZAR



function agregarCargo(nivel){ //"RENDERIZA" los cargos segun el array de niveles
    
//esta  metido dentro de un for
//esta opcion lo renderiza??? y la anterior lo guarda en un array?
    switch (nivel) {

        case "adultos":
             objetoSeleccionCargos[0].adultos.forEach((element,index)=>{//revisar onclick='sacarFiltro("${nivel}",${index})'>X</button> "PENDIENTE"
                document.getElementById("filtro"+nivel).innerHTML+=`
                <div class="rowFiltro">
                        <text>${element}</text>
                        <button onclick='sacarFiltro("${nivel}",${index})'>X</button>
                </div>
                `;
             })
         break;
 
        case "adultos_y_cens":
            objetoSeleccionCargos[1].adultos_y_cens.forEach((element,index)=>{//revisar onclick='sacarFiltro("${nivel}",${index})'>X</button> "PENDIENTE"
                document.getElementById("filtro"+nivel).innerHTML+=`
                
                <div class="rowFiltro">
                        <text>${element}</text>
                        <button onclick='sacarFiltro("${nivel}",${index})'>X</button>
                    </div>
    
                `;
             })
         break;
 
        case "artistica":
            objetoSeleccionCargos[2].artistica.forEach((element,index)=>{//revisar onclick='sacarFiltro("${nivel}",${index})'>X</button> "PENDIENTE"
                document.getElementById("filtro"+nivel).innerHTML+=`
                
                <div class="rowFiltro">
                        <text>${element}</text>
                        <button onclick='sacarFiltro("${nivel}",${index})'>X</button>
                    </div>
    
                `;
             })
         break;
 
        case "educacion_fisica":
            objetoSeleccionCargos[3].educacion_fisica.forEach((element,index)=>{//revisar onclick='sacarFiltro("${nivel}",${index})'>X</button> "PENDIENTE"
                document.getElementById("filtro"+nivel).innerHTML+=`
                
                <div class="rowFiltro">
                        <text>${element}</text>
                        <button onclick='sacarFiltro("${nivel}",${index})'>X</button>
                    </div>
    
                `;
             })
         break;
 
        case "especial":
            objetoSeleccionCargos[4].especial.forEach((element,index)=>{//revisar onclick='sacarFiltro("${nivel}",${index})'>X</button> "PENDIENTE"
                document.getElementById("filtro"+nivel).innerHTML+=`
                
                <div class="rowFiltro">
                        <text>${element}</text>
                        <button onclick='sacarFiltro("${nivel}",${index})'>X</button>
                    </div>
    
                `;
             })
         break;
 
        case "inicial":
            objetoSeleccionCargos[5].inicial.forEach((element,index)=>{//revisar onclick='sacarFiltro("${nivel}",${index})'>X</button> "PENDIENTE"
                document.getElementById("filtro"+nivel).innerHTML+=`
                
                <div class="rowFiltro">
                        <text>${element}</text>
                        <button onclick='sacarFiltro("${nivel}",${index})'>X</button>
                    </div>
    
                `;
             })
         break;
 
        case "primaria":
         objetoSeleccionCargos[6].primaria.forEach((element,index)=>{//revisar onclick='sacarFiltro("${nivel}",${index})'>X</button> "PENDIENTE"
                document.getElementById("filtro"+nivel).innerHTML+=`
                
                <div class="rowFiltro">
                        <text>${element}</text>
                        <button onclick='sacarFiltro("${nivel}",${index})'>X</button>
                    </div>
    
                `;
             })
         break;
 
        case "psicologia":
         objetoSeleccionCargos[7].psicologia.forEach((element,index)=>{//revisar onclick='sacarFiltro("${nivel}",${index})'>X</button> "PENDIENTE"
                document.getElementById("filtro"+nivel).innerHTML+=`
                
                <div class="rowFiltro">
                        <text>${element}</text>
                        <button onclick='sacarFiltro("${nivel}",${index})'>X</button>
                    </div>
    
                `;
             })
         break;
 
        case "secundaria":
         objetoSeleccionCargos[8].secundaria.forEach((element,index)=>{//revisar onclick='sacarFiltro("${nivel}",${index})'>X</button> "PENDIENTE"
                document.getElementById("filtro"+nivel).innerHTML+=`
                
                <div class="rowFiltro">
                        <text>${element}</text>
                        <button onclick='sacarFiltro("${nivel}",${index})'>X</button>
                    </div>
    
                `;
             })
         break;
 
        case "secundaria_adultos":
         objetoSeleccionCargos[9].secundaria_adultos.forEach((element,index)=>{//revisar onclick='sacarFiltro("${nivel}",${index})'>X</button> "PENDIENTE"
                document.getElementById("filtro"+nivel).innerHTML+=`
                
                <div class="rowFiltro">
                        <text>${element}</text>
                        <button onclick='sacarFiltro("${nivel}",${index})'>X</button>
                    </div>
    
                `;
             })
         break;
 
        case "superior":
         objetoSeleccionCargos[10].superior.forEach((element,index)=>{//revisar onclick='sacarFiltro("${nivel}",${index})'>X</button> "PENDIENTE"
                document.getElementById("filtro"+nivel).innerHTML+=`
                
                <div class="rowFiltro">
                        <text>${element}</text>
                        <button onclick='sacarFiltro("${nivel}",${index})'>X</button>
                    </div>
    
                `;
             })
         break;
 
        case "tecnico_profesional":
         objetoSeleccionCargos[11].tecnico_profesional.forEach((element,index)=>{//revisar onclick='sacarFiltro("${nivel}",${index})'>X</button> "PENDIENTE"
                document.getElementById("filtro"+nivel).innerHTML+=`
                
                <div class="rowFiltro">
                        <text>${element}</text>
                        <button onclick='sacarFiltro("${nivel}",${index})'>X</button>
                    </div>
    
                `;
             })
        break;
     }
}

function LimpiarImput(){
    document.getElementById("input2").value="";
    document.getElementById("listaEmergente2").remove();
}


function sacarFiltro(nivel,idArray){
    //nivel: es la modalidad que se tiene encuenta para afectar al array "objetoSeleccionCargos" 
    //idNivel
    //idArray
//elimina cargo por cargo al presionar la "equiz" teniendo en cuenta el nivel y el id que representa
//la ubicación en el array "objetoSeleccionCargos" 

//luego renderiza el filtro"id"

document.getElementById("filtro"+nivel).innerHTML="";
switch (nivel) {
    case "adultos":
         objetoSeleccionCargos[0].adultos.splice(idArray,1);

         objetoSeleccionCargos[0].adultos.forEach(element=>{
            agregarCargo(nivel);
         })
         
     break;

    case "adultos_y_cens":
     objetoSeleccionCargos[1].adultos_y_cens.splice(idArray,1);
     objetoSeleccionCargos[1].adultos_y_cens.forEach(element=>{
            agregarCargo(nivel);
         })
     break;

    case "artistica":
     objetoSeleccionCargos[2].artistica.splice(idArray,1);
     objetoSeleccionCargos[2].artistica.forEach(element=>{
            agregarCargo(nivel);
         })
     break;

    case "educacion_fisica":
     objetoSeleccionCargos[3].educacion_fisica.splice(idArray,1);
     objetoSeleccionCargos[3].educacion_fisica.forEach(element=>{
            agregarCargo(nivel);
         })
     break;

    case "especial":
     objetoSeleccionCargos[4].especial.splice(idArray,1);
     objetoSeleccionCargos[4].especial.forEach(element=>{
            agregarCargo(nivel);
         })
     break;

    case "inicial":
     objetoSeleccionCargos[5].inicial.splice(idArray,1);
     objetoSeleccionCargos[5].inicial.forEach(element=>{
            agregarCargo(nivel);
         })
     break;

    case "primaria":
     objetoSeleccionCargos[6].primaria.splice(idArray,1);
     objetoSeleccionCargos[6].primaria.forEach(element=>{
            agregarCargo(nivel);
         })
     break;

    case "psicologia":
     objetoSeleccionCargos[7].psicologia.splice(idArray,1);
     objetoSeleccionCargos[7].psicologia.forEach(element=>{
            agregarCargo(nivel);
         })
     break;

    case "secundaria":
     objetoSeleccionCargos[8].secundaria.splice(idArray,1);
     objetoSeleccionCargos[8].secundaria.forEach(element=>{
            agregarCargo(nivel);
         })
     break;

    case "secundaria_adultos":
     objetoSeleccionCargos[9].secundaria_adultos.splice(idArray,1);
     objetoSeleccionCargos[9].secundaria_adultos.forEach(element=>{
            agregarCargo(nivel);
         })
     break;

    case "superior":
     objetoSeleccionCargos[10].superior.splice(idArray,1);
     objetoSeleccionCargos[10].superior.forEach(element=>{
            agregarCargo(nivel);
         })
     break;

    case "tecnico_profesional":
     objetoSeleccionCargos[11].tecnico_profesional.splice(idArray,1);
     objetoSeleccionCargos[11].tecnico_profesional.forEach(element=>{
            agregarCargo(nivel);
         })
    break;
 }


 //guardamos el objeto en localStorage (objetoSeleccionCargos)
localStorage.setItem('objetoSeleccionCargos',JSON.stringify(objetoSeleccionCargos));


}