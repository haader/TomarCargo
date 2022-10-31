//la tabla que contiene los horarios y es clickeable es
//id=   cuerpoCalendario


var Semana=["LUNES","MARTES","MIERCOLES","JUEVES","VIERNES","SABADO"];
var horarios=["1ra","2da","3ra","4ta"];

//primer numero es el *--día--* (0=LUNES,1=MARTES,2=MIERCOLES,3=JUEVES,4=VIERNES,5=SABADO)
//segund numero es el *--turno--*    (0: mañana     1:tarde      2:noche)
//tercer numero 0123   <== la posición 


//comprobamos si existen datos en LocalStorage
if(localStorage.getItem('calendarioLocal')==null){
	var misHorarios=`{
		"0": {
			"0": ["-------", "-------", "-------", "-------"],
			"1": ["-------", "-------", "-------", "-------"],
			"2": ["-------", "-------", "-------", "-------"]
		},
		"1": {
			"0": ["-------", "-------", "-------", "-------"],
			"1": ["-------", "-------", "-------", "-------"],
			"2": ["-------", "-------", "-------", "-------"]
		},
	  "2": {
			"0": ["-------", "-------", "-------", "-------"],
			"1": ["-------", "-------", "-------", "-------"],
			"2": ["-------", "-------", "-------", "-------"]
		},
	  "3": {
			"0": ["-------", "-------", "-------", "-------"],
			"1": ["-------", "-------", "-------", "-------"],
			"2": ["-------", "-------", "-------", "-------"]
		},
	  "4": {
			"0": ["-------", "-------", "-------", "-------"],
			"1": ["-------", "-------", "-------", "-------"],
			"2": ["-------", "-------", "-------", "-------"]
		},
	  "5": {
			"0": ["-------", "-------", "-------", "-------"],
			"1": ["-------", "-------", "-------", "-------"],
			"2": ["-------", "-------", "-------", "-------"]
		},
	  "6": {
			"0": ["-------", "-------", "-------", "-------"],
			"1": ["-------", "-------", "-------", "-------"],
			"2": ["-------", "-------", "-------", "-------"]
		}
	}`
}else{
	var misHorarios=localStorage.getItem('calendarioLocal');
}

//parceamos
var calendario=JSON.parse(misHorarios);



//renderizamos todos el calendario 
renderizarCalendarioAll();
function renderizarCalendarioAll(){
        let cuerpo=document.getElementById('cuerpoCalendario');//cuerpoCalendario es el cuerpo del calendario
        
		//forhech de turno

//console.log(calendario[diaNum][0][0]);			//asi se lee
let cont=0;
cuerpo.innerHTML="";
let color="turnoMN";
let btnEstado="btnOff";
for (let turno = 0; turno < 3; turno++) {
				
				for (let hora = 0; hora < 4; hora++) {

					
					if(turno==1){
						color="turnoT";	
					}else{
						color="turnoMN";	
					}
					cuerpo.innerHTML+=`<tr class="${color}" id="${cont}"></tr>`;
						
						Semana.forEach((dia,diaNum)=>{

							if(calendario[diaNum][turno][hora]=="Ocupado"){
								btnEstado="btnOn";
							}else{
								btnEstado="btnOff";
							}

							document.getElementById(cont).innerHTML+=`
									<td><button class=${btnEstado} id="id${diaNum}_${turno}_${hora}" onclick="action(${diaNum},${turno},${hora})">${calendario[diaNum][turno][hora]}</button></td>
									`;
						})

					cuerpo.innerHTML+=`</tr>`;
					cont++;
					
				}
			}
			cont=0;
}

//función para guardar datos en el array CALENDARIO
function action(diaNum,turno,hora){

	//primero lee los datos del array CALENDARIO
	//si el valor es "OCUPADO" guarda "-------"
	//luego renderiza
	if(calendario[diaNum][turno][hora]=="Ocupado"){

		calendario[diaNum][turno][hora]='-------';
		renderizarCalendarioOne(diaNum,turno,hora);
		document.getElementById("id"+diaNum+"_"+turno+"_"+hora).setAttribute("class","btnOff");		
		//document.getElementById("id"+diaNum+"_"+turno+"_"+hora).style.backgroundColor='rgb(56, 200, 168)';
		guardarDatos(calendario);
	}else{

		calendario[diaNum][turno][hora]='Ocupado';
		renderizarCalendarioOne(diaNum,turno,hora);
		document.getElementById("id"+diaNum+"_"+turno+"_"+hora).setAttribute("class","btnOn");
		
		//document.getElementById("id"+diaNum+"_"+turno+"_"+hora).style.backgroundColor='rgb(176, 64, 168)';
		guardarDatos(calendario);
	}
	
}
		
function renderizarCalendarioOne(diaNum,turno,hora){
	document.getElementById("id"+diaNum+"_"+turno+"_"+hora).innerHTML=`

	${calendario[diaNum][turno][hora]}


	`;
}
	

//pushHorario
function pushHorario(){

}

//deleteHorario
function deleteHorario(){

}

function guardarDatos(dato){
	localStorage.setItem("calendarioLocal",JSON.stringify(dato));
}