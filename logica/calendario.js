//la tabla que contiene los horarios y es clickeable es
//id=   cuerpoCalendario


var Semana=["LUNES","MARTES","MIERCOLES","JUEVES","VIERNES","SABADO"];
var horarios=["1ra","2da","3ra","4ta"];

//primer numero es el día 
//segund numero es el turno 0: mañana 1:tarde 2:noche
let misHorarios=`{
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

//parceamos
var calendario=JSON.parse(misHorarios);



//renderizarCalendario
renderizarCalendarioAll();
function renderizarCalendarioAll(){
        let cuerpo=document.getElementById('cuerpoCalendario');//cuerpoCalendario es el cuerpo del calendario
        
		//forhech de turno

//console.log(calendario[diaNum][0][0]);			//asi se lee
let cont=0;
cuerpo.innerHTML="";
let color="turnoMN";
for (let turno = 0; turno < 3; turno++) {
				
				for (let hora = 0; hora < 4; hora++) {

					
					if(turno==1){
						color="turnoT";	
					}else{
						color="turnoMN";	
					}
					cuerpo.innerHTML+=`<tr class="${color}" id="${cont}"></tr>`;
						
						Semana.forEach((dia,diaNum)=>{
							document.getElementById(cont).innerHTML+=`
									<td><button class="btnOff" id="id${diaNum}_${turno}_${hora}" onclick="action(${diaNum},${turno},${hora})">${calendario[diaNum][turno][hora]}</button></td>
									`;
						})

					cuerpo.innerHTML+=`</tr>`;
					cont++;
					
				}
			}
			cont=0;
}

function action(diaNum,turno,hora){

	if(calendario[diaNum][turno][hora]=="Ocupado"){

		calendario[diaNum][turno][hora]='-------';
		renderizarCalendarioOne(diaNum,turno,hora);
		document.getElementById("id"+diaNum+"_"+turno+"_"+hora).setAttribute("class","btnOff");		
		//document.getElementById("id"+diaNum+"_"+turno+"_"+hora).style.backgroundColor='rgb(56, 200, 168)';

	}else{

		calendario[diaNum][turno][hora]='Ocupado';
		renderizarCalendarioOne(diaNum,turno,hora);
		document.getElementById("id"+diaNum+"_"+turno+"_"+hora).setAttribute("class","btnOn");
		
		//document.getElementById("id"+diaNum+"_"+turno+"_"+hora).style.backgroundColor='rgb(176, 64, 168)';

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
