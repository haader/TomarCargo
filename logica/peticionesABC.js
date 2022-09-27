
//%20 es la forma de indicar separación
//fisico%20-%20quimica%20(fqa)
//secundaria
//almirante%20brown


function tratamientoParametros(paramA,paramB,paramC){

 let param1=paramA.replaceAll(" ","%20");
 let param2=paramB.replaceAll(" ","%20");
 let param3=paramC.replaceAll(" ","%20");   

//esta url devuelve los datos de la escuela
/*
https://servicios3.abc.gob.ar/valoracion.docente/api/apd.oferta.encabezado/select?q=*%3A*&rows=6&sort=finoferta%20desc&json.nl=map&fq=descdistrito%3A%22almirante%20brown%22&fq=cargo%3A%22fisico%20-%20quimica%20(fqa)%22&fq=estado%3Apublicada&wt=json&json.wrf=jQuery35107200735611126483_1662678486449&_=1662678486468
*/
let url2='https://servicios3.abc.gob.ar/valoracion.docente/api/apd.oferta.encabezado/select?q=*%3A*&rows=6&sort=finoferta%20desc&json.nl=map&fq=descdistrito%3A%22'+param1+'%22&fq=descnivelmodalidad%3A'+param2+'&fq=cargo%3A%22'+param3+'%22&fq=estado%3Apublicada&wt=json&json.wrf=';



return url2;
}
async function PeticionABC(URL){

    // Creamos la instancia del objeto XHR
const client = new XMLHttpRequest();
// Preparamos la petición y la enviamos
client.open("GET", "https://abccors.herokuapp.com/"+URL);
//client.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
client.overrideMimeType('text/xml; charset=iso-8859-1');




client.send();
// Consultamos la propiedad que almacena el contenido
client.onreadystatechange= ()=>{
   if (client.readyState == 4 && client.status == 200) {
  let txt=client.responseText
  
 
  let txtReplace=txt.replace(/[()]/g,'');
  //console.log(txtReplace)    
  txtJSON=txtReplace;

  
  renderizarOfertas(txtJSON);
  
}


}
//return txtJSON; 
}

function renderizarOfertas(texto){

    //parceamos  el texto ya cortado
   var Data =  JSON.parse(texto);
  
   console.log(Data);

   let {responseHeader,response}=  Data;
   let {numFound,start,docs}=  response;
    let ofer=JSON.parse(JSON.stringify(docs));
    console.log("ofertas "+ofer);

    if(ofer==""){
        document.getElementById("ofertas").innerHTML=" <h3>No hay Resultados</h3>";
    }
    ofer.forEach((element,i)=>{

        //transformamos los horarios en formatos facil para leer

        //creamos una variable que cuenta la cantidad de dias
        let numDay=0;
      
        //RENDERIZAMOS EL CONTENIDO
        document.getElementById("ofertas").innerHTML+=`
    
        <div class="tarjeta">
        <div class="estado">
            <p>PUBLICADA</p>
            <span class="btn" onclick="VerDetalleCargo(${ofer[i].ige})"><ion-icon name="list-outline"></ion-icon></span>
        </div>
        <div class="cargo">
            
            <span class="detalleNegro">${ofer[i].escuela} <a href="https://mapaescolar.abc.gob.ar/mapaescolar/" target="_blank"><button class="btnAccionar"><ion-icon name="navigate-circle-outline"></ion-icon>Ver Escuela</button></a></span>    
            <p>${ofer[i].cargo}</p>
            
        </div>
        <div class="data">

            <div class="column"><span class="detalleGris">IGE:</span><div class="row">  <span class="detalleNro" id="ige${i}">${ofer[i].ige}</span>    <button class="btnAccionar" onclick='copiar("ige${i}")'><ion-icon name="copy-outline"></ion-icon> Copiar</button></div></div>
            <div class="column"><span class="detalleGris">AREA:</span><span class="detalleNro">(${ofer[i].areaincumbencia})</span></div>
            <div class="column"><span class="detalleGris">NIVEL O MODALIDAD:</span><span class="detalleNro">${ofer[i].descnivelmodalidad}</span></div>
            
            
        </div>


        <div class="tarjetaBody">
    
        
        <div class="ordenCuerpo"><p><ion-icon name="home-outline"></ion-icon><b> Domicilio: </b> <span id="domicilio${i}">${ofer[i].domiciliodesempeno}</span></p> <button class="btnAccionar" onclick='copiar("domicilio${i}")'><ion-icon name="copy-outline"></ion-icon> Copiar</button>  <button class="btnAccionar"><ion-icon name="navigate-circle-outline"></ion-icon>Ir Mapa</button></div>
        
        <div class="ordenCuerpo"><p><ion-icon name="briefcase-outline"></ion-icon><b> Curso/División: </b>${ofer[i].cursodivision} AÑOS</p></div>
        <div class="ordenCuerpo"><p><ion-icon name="briefcase-outline"></ion-icon><b> Turno: </b>${ofer[i].turno}</p></div>
        <div class="ordenCuerpo"><p><ion-icon name="briefcase-outline"></ion-icon><b> Jornada: </b>${ofer[i].jornada}</p></div>
        <div class="ordenCuerpo"><p><ion-icon name="briefcase-outline"></ion-icon><b> Revista: </b>${ofer[i].supl_revista}</p></div>
    
        <div class="ordenCuerpo"><p><ion-icon name="time-outline"></ion-icon><b> Toma de Posesión: </b>${transformarFechas(ofer[i].tomaposesion)}</p></div>

        <div class="ordenCuerpo"><p><ion-icon name="calendar-number-outline"></ion-icon><b> Inicio Oferta: </b>${transformarFechas(ofer[i].iniciooferta)}</p></div>
        <div class="ordenCuerpo"><p><ion-icon name="calendar-number-outline"></ion-icon><b> Fin Oferta: </b>${transformarFechas(ofer[i].finoferta)}</p></div>

        <div class="ordenCuerpo"><p><ion-icon name="calendar-outline"></ion-icon><b> Desde: </b>${transformarFechas(ofer[i].supl_desde)}</p></div>
        <div class="ordenCuerpo"><p><ion-icon name="calendar-outline"></ion-icon><b> Hasta: </b>${transformarFechas(ofer[i].supl_hasta)}</p></div>

      

        <div class="ordenCuerpo"><p><ion-icon name="search-outline"></ion-icon><b> Observaciones: </b> ${ofer[i].observaciones} </p></div></div>
        <br>

        <div class="ordenCuerpo"><p><ion-icon name="calendar-outline"></ion-icon><b> Horarios: </b></p></div>
        <div class="divHorarios" id="d2${i}"></div>

        <br>

        <div class="estado" id="postulados${i}">
            <table>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Listado de Origen</td>
                        <td>Puntaje</td>
                        <td>Prioridad</td>
                    </tr>
                </thead>
                <tbody id="bodyTablaPostulados${i}">

                </tbody>
            </table>           
        </div>
        
        </div>
    
    </div>`;
    
    

// si el valor del horario NO esta vacio se renderiza en la tarjeta
    if(ofer[i].lunes!=""){
        document.getElementById("d2"+i).innerHTML+=`
        <div class="ordenCuerpo" id="d1${i}"><p><ion-icon name="time-outline"></ion-icon><b> Lunes: ${ofer[i].lunes}</p> </div>
            
        `;
        
    }
    if(ofer[i].martes!=""){
        document.getElementById("d2"+i).innerHTML+=`
        <div class="ordenCuerpo" id="d1${i}"> <p><ion-icon name="time-outline"></ion-icon><b> martes: ${ofer[i].martes}</p> </div>
        `;
        
    }
    if(ofer[i].miercoles!=""){
        document.getElementById("d2"+i).innerHTML+=`
        <div class="ordenCuerpo" id="d1${i}"> <p><ion-icon name="time-outline"></ion-icon><b> Miercoles: ${ofer[i].miercoles}</p> </div>
        `;
        
    }
    if(ofer[i].jueves!=""){
        document.getElementById("d2"+i).innerHTML+=`
        <div class="ordenCuerpo" id="d1${i}"> <p><ion-icon name="time-outline"></ion-icon><b> Jueves: ${ofer[i].jueves}</p> </div>
        `;
        
    }
    if(ofer[i].viernes!=""){
        document.getElementById("d2"+i).innerHTML+=`
        <div class="ordenCuerpo" id="d1${i}"> <p><ion-icon name="time-outline"></ion-icon><b> Viernes: ${ofer[i].viernes}</p> </div>
        `;
        
    }
    if(ofer[i].sabado!=""){
        document.getElementById("d2"+i).innerHTML+=`
        <div class="ordenCuerpo" id="d1${i}"> <p><ion-icon name="time-outline"></ion-icon><b> Sabado: ${ofer[i].sabado}</p> </div>
        `;
        
    }


    postulados(ofer[i].ige,i);
    //***************************--------====-------********************************
   
        
    
    
  
   
  
    
    /*
    
            
            <li><span class="txt">mastes: ${ofer[i].martes}</span></li>
            <li><span class="txt">miercoles: ${ofer[i].miercoles}</span></li>
            <li><span class="txt">jueves: ${ofer[i].jueves}</span></li>
            <li><span class="txt">viernes: ${ofer[i].viernes}</span></li>
            <li><span class="txt">sabado: ${ofer[i].sabado}</span></li>
    */
    });
   
    //tomamos el id donde colocaremos las ofertas

   
}

//funcion para ver el detalle de las postulaciones
function VerDetalleCargo(ige){
    alert("el IGE del cargo es "+ige)
}

//funcion para ver copiar el ige, el domicilio ect
function copiar(elemento){
    
    var content = document.getElementById(elemento);
    
    //content.select();
    navigator.clipboard.writeText(content.innerText).then(
        ()=>{
            alert("copiado a portapapeles: "+content.innerText);
        }
    )

    

}




//let myfecha="2022-09-05T00:00:00Z";

//alert(transformarFechas(myfecha));

function transformarFechas(fecha){

    //saca los elementos:
let Year=new RegExp(/[0-9][0-9][0-9][0-9]/gi);
let Month=new RegExp(/-[0-9][0-9]-/gi);
let Day=new RegExp(/-[0-9][0-9][A-Z]/gi);

let dia=fecha.match(Day);
let dias=dia[0].replace('-','').replace('T','');
let mes=fecha.match(Month);
let meses=mes[0].replaceAll('-','');
let year=fecha.match(Year);

return [dias+"/"+meses+"/"+year];
}

function transformarFechaWithHora(fecha){

    //saca los elementos:
let Year=new RegExp(/[0-9][0-9][0-9][0-9]/gi);
let Month=new RegExp(/-[0-9][0-9]-/gi);
let Day=new RegExp(/-[0-9][0-9][A-Z]/gi);
let Hour=new RegExp(/[A-Z][0-9][0-9]:[0-9][0-9]/gi);

let dia=fecha.match(Day);
let dias=dia[0].replace('-','').replace('T','');

let mes=fecha.match(Month);
let meses=mes[0].replaceAll('-','');

let year=fecha.match(Year);

let hora=fecha.match(Hour);
let horas=hora[0].replace('T','');

return [dias+"/"+meses+"/"+year+" "+horas];
}


//se aplicara a cada filtro, esun numero que indicara
//el tamaño de la respuesta  ejemplo:"Ver(10)"
function ObtenerNumFound(valor1,valor2,valor3,idspan){
    /*
        valor 1: distrito
        valor 2: nivel
        valor 3 cargo
        IMPORTANTE: la url tiene ROW=0
    */
//realizamos un tratamiento a los parametros
let d=valor1.replaceAll(' ','%20');
let n=valor2.replaceAll(' ','%20');
let c=valor3.replaceAll(' ','%20');

//agregamos los parametros tratados a la url
let thisurl='https://servicios3.abc.gob.ar/valoracion.docente/api/apd.oferta.encabezado/select?q=*%3A*&rows=0&sort=finoferta%20desc&json.nl=map&fq=descdistrito%3A%22'+d+'%22&fq=descnivelmodalidad%3A'+n+'&fq=cargo%3A%22'+c+'%22&fq=estado%3Apublicada&wt=json&json.wrf=';
//realizamos la petición al servidor
let xml=new XMLHttpRequest();

xml.open("GET", "https://abccors.herokuapp.com/"+thisurl);
xml.send();

xml.onreadystatechange= ()=>{
    if (xml.readyState == 4 && xml.status == 200) {
   let txt=xml.responseText
   let reg=new RegExp(/"numFound":[0-9]*/gi)
   let numero=txt.match(reg);
//    if(numero[0]==null){

//    }else{
    var soloNumero=numero[0].replace('"numFound":','');
   //}
   document.getElementById("span"+idspan).innerText="("+soloNumero+")";
   
  // console.warn("respuesta de Obtenernumfund():")
   console.log('coincidencias con "'+valor3+'": '+soloNumero); 

//   console.log(txt);
  
 }

 
 
 
 }

 
//obtenemos el datos de NUMFOUND leyendo los string sin tranformarlos en objetos

//retornamos los datos (string)

}
