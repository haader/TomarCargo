
/*
https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors/43268098#43268098
*/
/*
    PARAMETROS

    rows
    facet
    facet.limit
    facet.mincount
    json.nl=map
    facet.field=descdistrito
    q=*:*
    wt=json
    json.wrf=jQuery35109618661661334462_1661982684158&_=1661982684160

*/
//transiciones de horarios
//creamos la variable contadorHorario
let contadorHorario=0;
//funtion aparecer desaparecer
document.getElementById("btnShowHorario").addEventListener("click",()=>{
    //girar icono

    
    //mostramos el panel
    if (contadorHorario==0) {
        
        ocultarPanelFiltro();
        // cambiamos el color de fondo del btn desplegable a violeta (seleccionado)
        document.getElementById("btnShowHorario").style.backgroundColor="rgb(176, 64, 168)";
        //cambiamos el color del border del panel a violeta
        document.getElementById("IDhorarioContenedor").style.borderColor="rgb(176, 64, 168)";
        
        document.getElementById("IDtabla").style.display="flex";
        document.getElementById("arrowHorario").style.rotate='0deg';
        document.getElementById("textoHorario").innerText=`Ocultar Horarios`;
        contadorHorario=1;
        
       
    }else{//display none
        
        ocultarPanelHorario();
    }
})

function ocultarPanelHorario(){
     // cambiamos el color de fondo del btn desplegable a verde (No seleccionado)
     document.getElementById("btnShowHorario").style.backgroundColor="rgb(56, 200, 168)";
     //cambiamos el color del border del panel a GRIS (no seleccionado)
     document.getElementById("IDhorarioContenedor").style.borderColor="rgb(188, 188, 188)";
        
     document.getElementById("IDtabla").style.display="none";
     document.getElementById("arrowHorario").style.rotate='180deg';
     document.getElementById("arrowHorario").style.transition='rotate 1s';
     document.getElementById("textoHorario").innerText="Ver Horarios";
     
     contadorHorario=0;
}

function ocultarPanelFiltro(){

        // cambiamos el color de fondo del btn desplegable a verde (No seleccionado)
        document.getElementById("btnShowFitros").style.backgroundColor="rgb(56, 200, 168)";
        //cambiamos el color del border del panel a GRIS (no seleccionado)
     document.getElementById("IDfiltrarContenedor").style.borderColor="rgb(188, 188, 188)";
        


        document.getElementById("filtrarContenedorFila").style.display="none";
        document.getElementById("arrowFiltro").style.rotate='180deg';
        document.getElementById("arrowFiltro").style.transition='rotate 1s';
        document.getElementById("textoFitro").innerText="Ver Filtros";
        
        contadorFiltro=0;
}


//transiciones de filtros
//creamos la variable contadorFiltro
let contadorFiltro=0;
//funtion aparecer desaparecer
document.getElementById("btnShowFitros").addEventListener("click",()=>{
    //girar icono

    
    //mostramos el panel
    if (contadorFiltro==0) {
                
        ocultarPanelHorario();

        // cambiamos el color de fondo del btn desplegable a violeta (Seleccionado)
        document.getElementById("btnShowFitros").style.backgroundColor="rgb(176, 64, 168)";
        //cambiamos el color del border del panel a violeta
        document.getElementById("IDfiltrarContenedor").style.borderColor="rgb(176, 64, 168)";
        

        document.getElementById("filtrarContenedorFila").style.display="flex";
        document.getElementById("arrowFiltro").style.rotate='0deg';
        document.getElementById("textoFitro").innerText=`Ocultar Filtros`;
        contadorFiltro=1;


    }else{//display none
        
        ocultarPanelFiltro();
    }
})




//variable coincidencias recorre los string de los arreglos
let coincidecias=0;

let jsonDistritos;

//variable que determina el color de la tabla de filtros
let color="color1";//puede ser color="color2"

//array distrito
//let arrayDistrito=[];

if(localStorage.getItem('arrayNivel')==null){
    var arrayNivel=["adultos y cens","secundaria","secundaria adultos","tecnico profesional"];
}else{
    var arrayNivel=localStorage.getItem('arrayNivel');
}


if(localStorage.getItem('arrayDistrito')==null){

    var arrayDistrito=["almirante brown","lomas de zamora", "quilmes", "san vicente", "presidente peron"]

}else{
    var arrayDistrito=localStorage.getItem('arrayDistrito');
}
// let arrayCargo=[
//     "ciencias naturales cnt",
//     "fisico - quimica fqa",
//     "INTRODUCCIÓN A LA QUÍMICA (IAQ)",
//     "FUNDAMENTOS DE LA QUÍMICA (FDQ)",
//     "QUÍMICA ORGÁNICA (QO)",
//     "LABORATORIO DE QUÍMICA (LQI)",

//     "AREA QUIMICA CENS - ADULTOS (+5Y)",
//     "AREA FISICA CENS - ADULTOS (+5X) (fijarse en el nomenclador)",
//     "FINES QUIMICA (WQQ)",

//     "Coordinador Institucional (COI)",
//     "PRECEPTOR (/PR)",
//     "BIBLIOTECARIO (/BI)",];






//declaramos las cariables donde se almacenaran los string selelccionados
let selectDistrito="";
let selectNivel="";
let selectCargo="";

//declaramos una variable que guardara el orden
let orden;

let URLcomun="https://servicios3.abc.gob.ar/valoracion.docente/api/apd.oferta.encabezado/select?";
let URLAnexo="rows=0&facet=true&facet.limit=-1&facet.mincount=1&json.nl=map&";

let urlDistrito=URLcomun+URLAnexo+"facet.field=descdistrito&q=*:*&wt=json&json.wrf=";
let urlModalidades=URLcomun+URLAnexo+"facet.field=descnivelmodalidad&q=*:*&wt=json&json.wrf=jQuery35109618661661334462_1661982684161&_=1661982684162";
let urlCargo=URLcomun+URLAnexo+"facet.field=cargo&q=*:*&wt=json&json.wrf=jQuery35109618661661334462_1661982684163&_=1661982684164";
let urlOfertas=URLcomun+"q=*%3A*&rows=6&sort=finoferta%20desc&json.nl=map&wt=json&json.wrf=jQuery35109618661661334462_1661982684158&_=1661982684159";
let urlEstado=URLcomun+URLAnexo+"facet.field=estado&q=*:*&wt=json&json.wrf=jQuery35109618661661334462_1661982684165&_=1661982684166"




//funciones que agrega a la pantalla la ventana para filtrar distritos nivel y cargo
function filtroDistrito(){

    document.getElementById("cuerpo").innerHTML+=`
    
    <div id="windowFiltro" class="windowFiltro">
        
        <button class="exite" onclick="exite()"><ion-icon name="close-circle-outline"></ion-icon></button>

        <div class="divFiltro">
            <text>Distrito:</text>
            <input class="inputFiltro" id="input0" onkeyup="Tecla(0)" onclick="LimpiarInput(0)"></input>
            <div class="listaEmergente" id="listaEmergente0">
                    
            </div>

        </div>

        <button class="btnF" id="btnF0" onclick="variableGetInput(0)" >Filtrar</button>
    </div>

    <div id="blackID" class="black">
        
    </div>
    
    `;
}

function filtroNivel(){

    document.getElementById("cuerpo").innerHTML+=`
    
    <div id="windowFiltro" class="windowFiltro">

            <button class="exite" onclick="exite()"><ion-icon name="close-circle-outline"></ion-icon></button>

            <div class="divFiltro">
                <text>Niveles o Modalidades:</text>
                <input class="inputFiltro" id="input1" onkeyup="Tecla(1)" onclick="LimpiarInput(1)"></input>
                <div class="listaEmergente" id="listaEmergente1">
                        
                </div>
            </div>

            <button class="btnF" id="btnF1" onclick="variableGetInput(1)" disabled="true">Filtrar</button>

    </div>

    <div id="blackID" class="black">
        
    </div>
    
    `;
}


function filtroCargo(){

    //PeticionABC(urlCargo);

    document.getElementById("cuerpo").innerHTML+=`
    
    <div id="windowFiltro" class="windowFiltro">

            <button class="exite" onclick="exite()"><ion-icon name="close-circle-outline"></ion-icon></button>

            <div class="divFiltro">
                <text>Cargo:</text>
                <input class="inputFiltro" id="input2" onkeyup="Tecla(2)" onclick="LimpiarInput(2)"></input>
                <div class="listaEmergente" id="listaEmergente2">
                        
                </div>
            </div>

            
            <button class="btnF" id="btnF2" onclick="variableGetInput(2)" disabled="true">Filtrar</button>

    </div>
    
    <div id="blackID" class="black">
        
    </div>
    
    `;
}



function exite(){
    document.getElementById("windowFiltro").remove();
    document.getElementById("blackID").remove();
    
}


function Tecla(num){
    document.getElementById("listaEmergente"+num).innerHTML="";
    let entrada=document.getElementById("input"+num).value;

    if(entrada==""){
        document.getElementById("btnF"+num).disabled=true; 
    }
    
    //coincidecias=0;
    
      recorrerArreglos(num,entrada);
    
    if(coincidecias==0){
        document.getElementById("listaEmergente"+num).innerHTML=`
        
        <option class=optionEmergente onclick="seleccionar(2000,${num})">No hay coincidencias</option>
        `;
        document.getElementById("btnF"+num).disabled=true; 

    }else{
        document.getElementById("btnF"+num).disabled=false; 
    }

    
    
}


function seleccionar(index,num){//cuando haces click en algun valor de la lista emergente

    if(index==2000){

        document.getElementById("listaEmergente"+num).innerHTML="";
        document.getElementById("input"+num).value="";

    }else{
        document.getElementById("listaEmergente"+num).innerHTML="";
        document.getElementById("input"+num).value="";

//agregamos un switch!!!!!!!!!!!!!!!1
        switch (num) {
            case 0:
                selectDistrito=distritos[index];
                arrayDistrito.push(selectDistrito);
                //document.getElementById("selectFiltro"+num).innerHTML="";
                document.getElementById("selectFiltro"+num).innerHTML+=`
                    <div class="rowFiltro">
                        <text>${selectDistrito}</text>
                        <button onclick="sacar(0,${(arrayDistrito.length-1)})">X</button>
                    </div>
                `;
                
                break;
            case 1:
                selectNivel=niveles[index];
                arrayNivel.push(selectNivel);
                //document.getElementById("selectFiltro"+num).innerHTML="";
                document.getElementById("selectFiltro"+num).innerHTML="";
                arrayNivel.forEach((element,index)=>{

                    document.getElementById("selectFiltro"+num).innerHTML+=`
                    <div class="rowFiltro">
                        <text>${selectNivel}</text>
                        <button onclick="sacar(1,${(arrayNivel.length-1)})">X</button>
                    </div>
                `;
                })
                document.getElementById("selectFiltro2").innerHTML="";

                arrayNivel.forEach((element,index)=>{
                
                    document.getElementById("selectFiltro2").innerHTML+=`
                    <fieldset class="cargoBorde" id="cargoBorde${index}">
                        <legend>${element}</legend>
                        <div class="rowFiltro" id=filtro${index}>

                        </div>
                        <button onclick='windowFiltrarCargo("${element}")'>Filtrar</button>
                    </fieldset>
                    
                    `;  
                    agregarCargo(element,index);//


                    })
                break;
            case 2:
                selectCargo=cargos[index];
                arrayCargo.push(selectCargo);
                //document.getElementById("selectFiltro"+num).innerHTML="";
                document.getElementById("selectFiltro"+num).innerHTML+=`
                    <div class="rowFiltro">
                        <text>${selectCargo}</text>
                        <button onclick="sacar(2,${(arrayCargo.length-1)})">X</button>
                        
                    </div>
                `;
                break;
            
            default:
                break;
        }
        exite();
    }
}


function LimpiarInput(num){//al hacer onclick limpia el input
        document.getElementById("input"+num).value="";
        document.getElementById("btnF"+num).disabled=true;
        document.getElementById("listaEmergente"+num).innerHTML="";
}



function variableGetInput(num){
    switch (num) {
        case 0:
            selectDistrito=document.getElementById("input"+num).value;
            break;
        case 1:
            selectNivel=document.getElementById("input"+num).value;
            break;
        case 2:
            selectCargo=document.getElementById("input"+num).value;
            break;
        default:
            break;
    }
    Filtro(num);//renderizamos los filtros

    //cerramos ventana
    exite();//salimos de la ventana para ingresar el valor del filtro

    habilitarguardarFiltros();//comprovamos si hay valores en los 3 filtros y habilitamos el btn guardar filtros de ser positivo
}
//creamos una funcion que guarde variables de los filtro
//la misma ejecutara por dentro la función renderizarFIltro


//FILTROS DE DISTRITO NIVEL Y CARGO todo junto

function Filtro(num){//funcion que es aplicada al btn "filtro" de la ventana emergente!!!

    //segun el valor de num agrega un banner con el valor de seleccion
    switch (num) {
        case 0:
            //creamos un sub banner con el valor seleccionado
            arrayDistrito.push(selectDistrito);
            document.getElementById("selectFiltro"+num).innerHTML+=`

                <div class="rowFiltro">
                    <text>${selectDistrito}</text>
                    <button onclick="sacar(0,${(arrayDistrito.length-1)})">X</button>
                </div>
            
            `;
            break;
        case 1:
            
            //creamos un sub banner con el valor seleccionado
            arrayNivel.push(selectNivel);
            document.getElementById("selectFiltro"+num).innerHTML+=`
                
                <div class="rowFiltro">
                    <text>${selectNivel}</text>
                    <button onclick="sacar(1,${(arrayNivel.length-1)})">X</button>
                </div>
            
            `;
            break;    
        case 2:
            
            arrayCargo.push(selectCargo);
            //creamos un sub banner con el valor seleccionado
            document.getElementById("selectFiltro"+num).innerHTML+=`
                
                <div class="rowFiltro">
                    <text>${selectCargo}</text>
                    <button onclick="sacar(2,${(arrayCargo.length-1)})">X</button>
                </div>
                    
            `;
            break;
                
        default:
            break;
    }
}

function sacar(num,id){//elimina el filtro seleccionado
    document.getElementById("selectFiltro"+num).innerHTML="";
    switch (num) {
        case 0:

            //elimina el valor del array
            selectDistrito="";
            arrayDistrito.splice(id,1);//elimina el elemento del array
            document.getElementById("selectFiltro"+num).innerHTML="";
            
            //renderiza el array 
            arrayDistrito.forEach((element,index)=>{
              
                document.getElementById("selectFiltro"+num).innerHTML+=`
                
                <div class="rowFiltro">
                    <text>${arrayDistrito[index]}</text>
                    <button onclick="sacar(0,${index})">X</button>
                </div>
                    
            `;
            })
            localStorage.setItem('arrayDistrito',JSON.stringify(arrayDistrito));
           
            break;



            document.getElementById("btnAplicarFiltros").disabled=false;
            break;

        case 1:  

            selectNivel="";

            arrayNivel.splice(id,1);//elimina el elemento del array
            document.getElementById("cargoBorde"+id).remove();//removemos el "filtro CArgo"
            document.getElementById("selectFiltro2").innerHTML="";
            document.getElementById("selectFiltro"+num).innerHTML="";
            
            arrayNivel.forEach((element,index)=>{
                document.getElementById("selectFiltro"+num).innerHTML+=`
                <div class="rowFiltro">
                    <text>${arrayNivel[index]}</text>
                    <button onclick="sacar(1,${index})">X</button>
                </div>         
            `;
            })
            //tenemos que vaciar tambien el objeto que contiene los
            //cargos seleccionados para cada nivel   =>   //PENDIENTE

            
            arrayNivel.forEach((element,index)=>{
                document.getElementById("selectFiltro2").innerHTML+=`
                <fieldset class="cargoBorde" id="cargoBorde${index}">
                    <legend>${element}</legend>
                    <div class="rowFiltro" id=filtro${element.replaceAll(' ','_')}>
                    </div>
                    <button onclick='windowFiltrarCargo("${element}")'>Filtrar</button>
                </fieldset>
                `;  

                let tratado=element.replaceAll(' ','_');
                agregarCargo(tratado);


            })



            document.getElementById("btnAplicarFiltros").disabled=false;
            
            localStorage.setItem('arrayNivel',JSON.stringify(arrayNivel));
            break;

    
        case 2:
            selectCargo="";

            arrayCargo.splice(id,1);//elimina el elemento del array
            document.getElementById("selectFiltro"+num).innerHTML="";
            
            arrayCargo.forEach((element,index)=>{
                document.getElementById("selectFiltro"+num).innerHTML+=`
                
                <div class="rowFiltro">
                    <text>${arrayCargo[index]}</text>
                    <button onclick="sacar(2,${index})">X</button>
                </div>
                    
            `;
            })

            document.getElementById("btnAplicarFiltros").disabled=false;

            localStorage.setItem('arrayCargo',JSON.stringify(arrayCargo));

            break;
            
    
    }
}

function recorrerArreglos(num,entrada){
    
    coincidecias=0;
    switch (num) {
        case 0://arreglo de distritos

        for (let index = 0; index < distritos.length; index++) {//distritos es traido desde un js que hay almacenado
      
            if(distritos[index].includes(entrada)){
            
                    
                document.getElementById("listaEmergente"+num).innerHTML+=`
                
                            <option class=optionEmergente onclick="seleccionar(${index},${num})">${distritos[index]}</option>
                `;
        
                coincidecias++;
        
            if(distritos[index]==entrada){
                document.getElementById("btnF"+num).disabled=true;
            }
            
            };

           
        }
            break;
        case 1://arreglo de niveles

        niveles.forEach((element,index) => {//distritos es traido desde un js que hay almacenado
       
            if(niveles[index].includes(entrada)){
        
                
                document.getElementById("listaEmergente"+num).innerHTML+=`
                
                            <option class=optionEmergente onclick="seleccionar(${index},${num})">${element}</option>
                `;
        
                coincidecias++;
        
                }
            });
            break;

        case 2://cargos

            cargos.forEach((element,index) => {//distritos es traido desde un js que hay almacenado
       
                if(cargos[index].includes(entrada)){
            
                    
                    document.getElementById("listaEmergente"+num).innerHTML+=`
                    
                                <option class=optionEmergente onclick="seleccionar(${index},${num})">${element}</option>
                    `;
            
                    coincidecias++;
            
                    }
                });
            break;
        default:
            break;
    }
}



function cargarFiltros(){

    arrayDistrito.forEach((element,index)=>{
        document.getElementById("selectFiltro0").innerHTML+=`
        
        <div class="rowFiltro">
            <text>${element}</text>
            <button onclick="sacar(0,${(index)})">X</button>
        </div>    
        
        `;
    })


    arrayNivel.forEach((element,index)=>{
        
        document.getElementById("selectFiltro1").innerHTML+=`
        
        <div class="rowFiltro">
            <text>${element}</text>
            <button onclick="sacar(1,${(index)})">X</button>
        </div>    

        `;

            //dentro de la función se remplaza " " por %20
        listaCargos(element);//trae la losta de cargos de la modalidad seleccionada

//esto va adentro de cada filtro=> PENDIENTE crear "sacarFiltro(nivel,id)"
        // <div class="rowFiltro">
        //     <text>${element}</text>
        //     <button onclick="sacar(1,${(index)})">X</button>
        // </div>  

        document.getElementById("selectFiltro2").innerHTML+=`
        <fieldset class="cargoBorde" id="cargoBorde${index}">
            <legend>${element}</legend>
            <div class="columFiltro" id=filtro${element.replaceAll(' ','_')}>

            </div>
            <button onclick='windowFiltrarCargo("${element}")'>Filtrar</button>
        </fieldset>
        
        `;  


        //el for anidado que carga los "cargos" en cada uno de los "filtros" 
        agregarCargo(element.replaceAll(' ','_'));

    })


    // arrayCargo.forEach((element,index)=>{

    //     document.getElementById("selectFiltro2").innerHTML+=`
        
    //     <div class="rowFiltro">
    //         <text>${element}</text>
    //         <button onclick="sacar(2,${(index)})">X</button>
    //     </div>    
        
    //     `;

    // })
}