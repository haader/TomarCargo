let idRowTabla=0;
let idRowTablaActual=0;


let NivelSelect=arrayNivel[0];
let DistritoSelect=arrayDistrito[0];

function habilitarguardarFiltros(){
    if((selectDistrito!=="")&(selectNivel!=="")&(selectCargo!=="")){
        
        document.getElementById("btnAplicarFiltros").disabled=false;
    }else{
        document.getElementById("btnAplicarFiltros").disabled=true;
    }
}






function funcionBtnAplicarFiltros(){
    
    //renderizamos los distritos partiendo de el array

    document.getElementById("filtroDistrito").innerHTML="";//es un div vacio en el html

    arrayDistrito.forEach((element)=>{
        //se crean botones partiendo de el arrayDistrito
        document.getElementById("filtroDistrito").innerHTML+=`

        <button class="rowFiltro" onclick='AplicarDistrito("${element.replaceAll(' ','_')}")'>
            ${element} 
        </button>
        
        `;
    })

    document.getElementById("filtroNiveles").innerHTML="";

    arrayNivel.forEach((element,index)=>{
        document.getElementById("filtroNiveles").innerHTML+=`
        
        <button class="rowFiltro" onclick='AplicarNiveles("${element.replaceAll(' ','_')}")'>
            ${element}
        </button>
        
        `;
    })



 
}


function AplicarDistrito(dis){

    //limpiamos el div "ofertas"
    document.getElementById("ofertas").innerHTML="";

    limpiarFormatoBtnDistrito(dis);
    DistritoSelect=dis;

    idRowTabla=0;
    document.getElementById("cuerpoTablaFiltro").innerHTML="";
       //renderizamos la TABLA (CON UN FOR EACH) aplicado a arrrayCargo
       
       switch (NivelSelect) {
        case "adultos":
             objetoSeleccionCargos[0].adultos.forEach(elementCargo=>{
    
            auxiliarRenderizarTable(dis.replaceAll('_',' '),"adultos",elementCargo);
    
                })
    
       
         break;
    
        case "adultos_y_cens":
         objetoSeleccionCargos[1].adultos_y_cens.forEach(elementCargo=>{
    
            auxiliarRenderizarTable(dis.replaceAll('_',' '),"adultos y cens",elementCargo);
    
                })
      
         break;
    
        case "artistica":
         objetoSeleccionCargos[2].artistica.forEach(elementCargo=>{
    
            auxiliarRenderizarTable(dis.replaceAll('_',' '),"artistica",elementCargo);
    
                })
      
         break;
    
        case "educacion_fisica":
         objetoSeleccionCargos[3].educacion_fisica.forEach(elementCargo=>{
    
            auxiliarRenderizarTable(dis.replaceAll('_',' '),"educacion fisica",elementCargo);
    
                })
       
         break;
    
        case "especial":
         objetoSeleccionCargos[4].especial.forEach(elementCargo=>{
    
            auxiliarRenderizarTable(dis.replaceAll('_',' '),"especial",elementCargo);
    
                })
    
         break;
    
        case "inicial":
         objetoSeleccionCargos[5].inicial.forEach(elementCargo=>{
    
            auxiliarRenderizarTable(dis.replaceAll('_',' '),"inicial",elementCargo);
    
                })
    
         break;
    
        case "primaria":
         objetoSeleccionCargos[6].primaria.forEach(elementCargo=>{
    
            auxiliarRenderizarTable(dis.replaceAll('_',' '),"primaria",elementCargo);
    
                })
    
         break;
    
        case "psicologia":
         objetoSeleccionCargos[7].psicologia.forEach(elementCargo=>{
    
            auxiliarRenderizarTable(dis.replaceAll('_',' '),"psicologia",elementCargo);
    
                })
    
         break;
    
        case "secundaria":
         objetoSeleccionCargos[8].secundaria.forEach(elementCargo=>{
    
            auxiliarRenderizarTable(dis.replaceAll('_',' '),"secundaria",elementCargo);
    
                })
    
         break;
    
        case "secundaria_adultos":
         objetoSeleccionCargos[9].secundaria_adultos.forEach(elementCargo=>{
    
            auxiliarRenderizarTable(dis.replaceAll('_',' '),"secundaria adultos",elementCargo);
    
                })
     
         break;
    
        case "superior":
         objetoSeleccionCargos[10].superior.forEach(elementCargo=>{
    
            auxiliarRenderizarTable(dis.replaceAll('_',' '),"superior",elementCargo);
    
                })
    
         break;
    
        case "tecnico_profesional":
         objetoSeleccionCargos[11].tecnico_profesional.forEach(elementCargo=>{
    
            auxiliarRenderizarTable(dis.replaceAll('_',' '),"tecnico profesional",elementCargo);
    
                })
    
        break;
     }


       }
      

function AplicarNiveles(niv){
    
    NivelSelect=niv;//niv es lo que se selecciona//NivelSelect es una forma de almacenarlo globalmente
    limpiarFormatoBtnNivel(niv);
    AplicarDistrito(DistritoSelect);
    
}

function auxiliarRenderizarTable(dis,niv,elementCargo){

    document.getElementById("cuerpoTablaFiltro").innerHTML+=`
        
    <tr class="${color}" id="idRowTabla${idRowTabla}">
        <td >${dis}</td>
        <td>${NivelSelect}</td>
        <td class="tdCargo">${elementCargo}</td>
        <td><button class="blacking" onclick="TraerTarjetasABC('${dis}','${niv}','${elementCargo}','${idRowTabla}')"><ion-icon name="eye-outline"></ion-icon>  <span id="span${idRowTabla}" ${ObtenerNumFound(dis,niv,elementCargo,idRowTabla)}></span></button></td>
    </tr>
    
    `;
    if(color=="color1"){
        color="color2";
    }else{
        color="color1";
    }

    idRowTabla++;


}

//EDITAR FILTROS

//ELIMINAR FIRLTROS

function renderizarTablaFiltro(){
    //leemos la base de datos, traemos las filas y las pintamos

    
}

function TraerTarjetasABC(seleccion0,seleccion1,seleccion2,idROW){

    //limpiamos el div "ofertas"
    document.getElementById("ofertas").innerHTML="";

    document.getElementById("idRowTabla"+idROW).style.backgroundColor="rgb(129 211 119)";

    let nameClass=document.getElementById("idRowTabla"+idRowTablaActual).className;
    
    if(nameClass=="color1"){
        document.getElementById("idRowTabla"+idRowTablaActual).style.backgroundColor= "rgb(213, 240, 213)";
    }else{
        document.getElementById("idRowTabla"+idRowTablaActual).style.backgroundColor= "rgb(177 199 177)";
    }
    
    
    idRowTablaActual=idROW;

    let url2=tratamientoParametros(seleccion0,seleccion1,seleccion2);
    PeticionABC(url2);
    
}

function EliminarRow(id){

    let conf=confirm("¿Desea elimiar este filtro?")

    switch(conf){
        case true:
            document.getElementById("idRowTabla"+id).remove();
            break;
        case false:

            break;
    }
    
}

function limpiarFormatoBtnDistrito(seleccion){
    
    document.getElementById("filtroDistrito").innerHTML="";
    arrayDistrito.forEach(elem=>{
        element=elem.replaceAll(' ','_');
        if(seleccion==element){
            
            
            document.getElementById("filtroDistrito").innerHTML+=`
            <button class="rowFiltroColor" onclick='AplicarDistrito("${element}")'>
            ${elem} 
            </button>
            `;
        }else{
            document.getElementById("filtroDistrito").innerHTML+=`
            <button class="rowFiltro" onclick='AplicarDistrito("${element}")'>
            ${elem} 
            </button>
            `;
        }
        
    })
   
}


function limpiarFormatoBtnNivel(seleccion){
    
  
    
    document.getElementById("filtroNiveles").innerHTML="";
    arrayNivel.forEach(elem=>{
        element=elem.replaceAll(' ','_');
        if(seleccion==element){
            
            document.getElementById("filtroNiveles").innerHTML+=`
            <button class="rowFiltroColor" onclick='AplicarNiveles("${element}")'>
            ${elem} 
            </button>
            `;
        }else{
            document.getElementById("filtroNiveles").innerHTML+=`
            <button class="rowFiltro" onclick='AplicarNiveles("${element}")'>
            ${elem} 
            </button>
            `;
        }
        
    })
   
}