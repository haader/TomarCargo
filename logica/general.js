

/*
var horariosM=["07:30 A 09:30","9:30 A 10:30","09:30 A 11:40","10 A 12"];
var horariosT=["12:00 A 13:00","12:00 A 14:00","13:00 A 15:00","13 A 17","15:45 A 17:45 "];
var horariosN=[]
*/
var Semana=["LUNES","MARTES","MIERCOLES","JUEVES","VIERNES","SABADO"];
var horarios=["1ra","2da","3ra","4ta"];
var DiaLista=document.getElementById("Dia").value;

var misCargos=`{
	"Lunes": {
		"mañana": ["---", "---", "---", "---"],
		"tarde": ["---", "---", "---", "---"],
		"noche": ["---", "---", "---", "---"]
	},
	"Martes": {
		"mañana": ["---", "---", "---", "---"],
		"tarde": ["---", "---", "---", "---"],
		"noche": ["---", "---", "---", "---"]
	},
	"Miercoles": {
		"mañana": ["---", "---", "---", "---"],
		"tarde": ["---", "---", "---", "---"],
		"noche": ["---", "---", "---", "---"]
	},
	"Jueves": {
		"mañana": ["---", "---", "---", "---"],
		"tarde": ["---", "---", "---", "---"],
		"noche": ["---", "---", "---", "---"]
	},
	"Viernes": {
		"mañana": ["---", "---", "---", "---"],
		"tarde": ["---", "---", "---", "---"],
		"noche": ["---", "---", "---", "---"]
	},
	"Sabado": {
		"mañana": ["---", "---", "---", "---"],
		"tarde": ["---", "---", "---", "---"],
		"noche": ["---", "---", "---", "---"]
	}
}`;

//agregamos los valores de las "LIST" (día de la semana)
        Semana.forEach((element,index)=> {
            
            document.getElementById("Dia").innerHTML+=`
            <option id="${index}">${element}</option>
            `;
            });    

//parseamos y obtenemos el JSON
let jsonMisCargos=JSON.parse(misCargos);

//renderizarHorarios();//es el panel de los CHECKBOX
renderizarHorarios("LUNES")

//FUNCION PARA OBTENER EL VALOR DEL DIA CADA VEZ QUE HACEMOS CLICK
document.getElementById("Dia").addEventListener("click",()=>{//
    
    //cada vez que cambie la LIST se debe renderizar los CHECKBOX teniendo en cuenta el JSON
    DiaLista=document.getElementById("Dia").value;
    renderizarHorarios(DiaLista);


})

//add("MARTES","noche",3,"siii");


renderizarCalendario();//renderizamos el CALENDARIO




    
function renderizarCalendario(){


for (let index = 0; index < 4; index++) {
    
    document.getElementById("cuerpoCalendario").innerHTML+=`

    <tr id="rowMañana${index}" class="rowMañana">

        <td>${jsonMisCargos.Lunes.mañana[index]}</td>
        <td>${jsonMisCargos.Martes.mañana[index]}</td>
        <td>${jsonMisCargos.Miercoles.mañana[index]}</td>
        <td>${jsonMisCargos.Jueves.mañana[index]}</td>
        <td>${jsonMisCargos.Viernes.mañana[index]}</td>
        <td>${jsonMisCargos.Sabado.mañana[index]}</td>

    </tr>
    `;
}



for (let index = 0; index < 4; index++) {
    
    document.getElementById("cuerpoCalendario").innerHTML+=`

    <tr id="rowTarde${index}" class="rowTarde">

        <td>${jsonMisCargos.Lunes.tarde[index]}</td>
        <td>${jsonMisCargos.Martes.tarde[index]}</td>
        <td>${jsonMisCargos.Miercoles.tarde[index]}</td>
        <td>${jsonMisCargos.Jueves.tarde[index]}</td>
        <td>${jsonMisCargos.Viernes.tarde[index]}</td>
        <td>${jsonMisCargos.Sabado.tarde[index]}</td>
    
    </tr>

        `;
}


for (let index = 0; index < 4; index++) {
    
    document.getElementById("cuerpoCalendario").innerHTML+=`


    <tr id="rowNoche${index}" class="rowNoche">

        <td>${jsonMisCargos.Lunes.noche[index]}</td>
        <td>${jsonMisCargos.Martes.noche[index]}</td>
        <td>${jsonMisCargos.Miercoles.noche[index]}</td>
        <td>${jsonMisCargos.Jueves.noche[index]}</td>
        <td>${jsonMisCargos.Viernes.noche[index]}</td>
        <td>${jsonMisCargos.Sabado.noche[index]}</td>

    </tr>
    
    `;
}
    
}

function add(DIA,turno,hora,estado){

    switch(DIA){
        case "LUNES":
            switch(turno){
                case "mañana":
                    jsonMisCargos.Lunes.mañana[hora]=estado;
                    break;
                case "tarde":
                    jsonMisCargos.Lunes.tarde[hora]=estado;
                     break;
                case "noche":
                    jsonMisCargos.Lunes.noche[hora]=estado;
                    break;
            }
            break;
        case "MARTES":
            switch(turno){
                case "mañana":
                    jsonMisCargos.Martes.mañana[hora]=estado;
                    break;
                case "tarde":
                    jsonMisCargos.Martes.tarde[hora]=estado;
                     break;
                case "noche":
                    jsonMisCargos.Martes.noche[hora]=estado;
                    break;
            }
            break;
        case "MIERCOLES":
            switch(turno){
                case "mañana":
                    jsonMisCargos.Miercoles.mañana[hora]=estado;
                    break;
                case "tarde":
                    jsonMisCargos.Miercoles.tarde[hora]=estado;
                     break;
                case "noche":
                    jsonMisCargos.Miercoles.noche[hora]=estado;
                    break;
            }
            break;
        case "JUEVES":
            switch(turno){
                case "mañana":
                    jsonMisCargos.Jueves.mañana[hora]=estado;
                    break;
                case "tarde":
                    jsonMisCargos.Jueves.tarde[hora]=estado;
                     break;
                case "noche":
                    jsonMisCargos.Jueves.noche[hora]=estado;
                    break;
            }
            break;
        case "VIERNES":
            switch(turno){
                case "mañana":
                    jsonMisCargos.Viernes.mañana[hora]=estado;
                    break;
                case "tarde":
                    jsonMisCargos.Viernes.tarde[hora]=estado;
                     break;
                case "noche":
                    jsonMisCargos.Viernes.noche[hora]=estado;
                    break;
            }
            break;
        case "SABADO":
            switch(turno){
                case "mañana":
                    jsonMisCargos.Sabado.mañana[hora]=estado;
                    break;
                case "tarde":
                    jsonMisCargos.Sabado.tarde[hora]=estado;
                     break;
                case "noche":
                    jsonMisCargos.Sabado.noche[hora]=estado;
                    break;
            }
            break;
    }
    
}


//boton agregar
function btnAgregar(){
//vaciamos la tabla
document.getElementById("cuerpoCalendario").innerHTML="";

//tomamos el valor de la DIALIST
let DiaLista=document.getElementById("Dia").value;

//tomamos los valores de los "checkbox", si son true se ejecuta la funcion "add"
horarios.forEach((element,index)=>{

    if (document.getElementById("M"+index).checked==true) {
        console.log(element+" es true")
        add(DiaLista,"mañana",index,"Ocupado");
    }else{
        console.log(element+" es false")
        add(DiaLista,"mañana",index,"---");
    }
    
});

horarios.forEach((element,index)=>{

    if (document.getElementById("T"+index).checked==true) {
        console.log(element+" es true")
        add(DiaLista,"tarde",index,"Ocupado");
    }else{
        console.log(element+" es false");
        add(DiaLista,"tarde",index,"---");
    }
    
});

horarios.forEach((element,index)=>{

    if (document.getElementById("N"+index).checked==true) {
        console.log(element+" es true");
        add(DiaLista,"noche",index,"Ocupado");
    }else{
        console.log(element+" es false");
        add(DiaLista,"noche",index,"---");
    }
    
});



//add(DIA,turno,hora,estado)



//luego de realizar los cambios renderizamos el calendario
renderizarCalendario();


}

function btnLimpiar(){

    document.getElementById("checkM").innerHTML="";
    document.getElementById("checkT").innerHTML="";
    document.getElementById("checkN").innerHTML="";

    horarios.forEach((element,index)=>{
        document.getElementById("checkM").innerHTML+=`
        <td><input id="M${index}" type="checkbox">${element}</input></td>
        `;
    
    })
    horarios.forEach((element,index)=>{
        document.getElementById("checkT").innerHTML+=`
        <td><input id="T${index}" type="checkbox">${element}</input></td>
        `;
    
    })
    horarios.forEach((element,index)=>{
        document.getElementById("checkN").innerHTML+=`
        <td><input id="N${index}" type="checkbox">${element}</input></td>
        `;
    
    })
}




function renderizarHorarios(day){

    document.getElementById("checkM").innerHTML="";
    document.getElementById("checkT").innerHTML="";
    document.getElementById("checkN").innerHTML="";


    switch (day) {
        case "LUNES":
            

            horarios.forEach((element,index)=> {
                //turno MAÑANA
            
                    if(jsonMisCargos.Lunes.mañana[index]=="---"){
            
                        document.getElementById("checkM").innerHTML+=`
                        <td><input id="M${index}" type="checkbox">${element}</input></td>
                        `;
                    
            
                    }else{
                        //agregamos el "CHECKED" si elcontenido el el JSON es diferente a "---"
                        document.getElementById("checkM").innerHTML+=`
                        <td><input id="M${index}" type="checkbox" checked>${element}</input></td>
                        `;
                    
            
                    }


                    //turno TARDE
            
                    if(jsonMisCargos.Lunes.tarde[index]=="---"){
            
                        document.getElementById("checkT").innerHTML+=`
                        <td><input id="T${index}" type="checkbox">${element}</input></td>
                        `;
                    
            
                    }else{
                        //agregamos el "CHECKED" si elcontenido el el JSON es diferente a "---"
                        document.getElementById("checkT").innerHTML+=`
                        <td><input id="T${index}" type="checkbox" checked>${element}</input></td>
                        `;
                    
            
                    }


                    //turno NOCHE
            
                    if(jsonMisCargos.Lunes.noche[index]=="---"){
            
                        document.getElementById("checkN").innerHTML+=`
                        <td><input id="N${index}" type="checkbox">${element}</input></td>
                        `;
                    
            
                    }else{
                        //agregamos el "CHECKED" si elcontenido el el JSON es diferente a "---"
                        document.getElementById("checkN").innerHTML+=`
                        <td><input id="N${index}" type="checkbox" checked>${element}</input></td>
                        `;
                    
            
                    }
                    
                })


            break;
        case "MARTES":
           
            horarios.forEach((element,index)=> {
                //turno MAÑANA
            
                    if(jsonMisCargos.Martes.mañana[index]=="---"){
            
                        document.getElementById("checkM").innerHTML+=`
                        <td><input id="M${index}" type="checkbox">${element}</input></td>
                        `;
                    
            
                    }else{
                        //agregamos el "CHECKED" si elcontenido el el JSON es diferente a "---"
                        document.getElementById("checkM").innerHTML+=`
                        <td><input id="M${index}" type="checkbox" checked>${element}</input></td>
                        `;
                    
            
                    }


                    //turno TARDE
            
                    if(jsonMisCargos.Martes.tarde[index]=="---"){
            
                        document.getElementById("checkT").innerHTML+=`
                        <td><input id="T${index}" type="checkbox">${element}</input></td>
                        `;
                    
            
                    }else{
                        //agregamos el "CHECKED" si elcontenido el el JSON es diferente a "---"
                        document.getElementById("checkT").innerHTML+=`
                        <td><input id="T${index}" type="checkbox" checked>${element}</input></td>
                        `;
                    
            
                    }


                    //turno NOCHE
            
                    if(jsonMisCargos.Martes.noche[index]=="---"){
            
                        document.getElementById("checkN").innerHTML+=`
                        <td><input id="N${index}" type="checkbox">${element}</input></td>
                        `;
                    
            
                    }else{
                        //agregamos el "CHECKED" si elcontenido el el JSON es diferente a "---"
                        document.getElementById("checkN").innerHTML+=`
                        <td><input id="N${index}" type="checkbox" checked>${element}</input></td>
                        `;
                    
            
                    }
                    
                })

                break;
        case "MIERCOLES":
            

            horarios.forEach((element,index)=> {
                //turno MAÑANA
            
                    if(jsonMisCargos.Miercoles.mañana[index]=="---"){
            
                        document.getElementById("checkM").innerHTML+=`
                        <td><input id="M${index}" type="checkbox">${element}</input></td>
                        `;
                    
            
                    }else{
                        //agregamos el "CHECKED" si elcontenido el el JSON es diferente a "---"
                        document.getElementById("checkM").innerHTML+=`
                        <td><input id="M${index}" type="checkbox" checked>${element}</input></td>
                        `;
                    
            
                    }


                    //turno TARDE
            
                    if(jsonMisCargos.Miercoles.tarde[index]=="---"){
            
                        document.getElementById("checkT").innerHTML+=`
                        <td><input id="T${index}" type="checkbox">${element}</input></td>
                        `;
                    
            
                    }else{
                        //agregamos el "CHECKED" si elcontenido el el JSON es diferente a "---"
                        document.getElementById("checkT").innerHTML+=`
                        <td><input id="T${index}" type="checkbox" checked>${element}</input></td>
                        `;
                    
            
                    }


                    //turno NOCHE
            
                    if(jsonMisCargos.Miercoles.noche[index]=="---"){
            
                        document.getElementById("checkN").innerHTML+=`
                        <td><input id="N${index}" type="checkbox">${element}</input></td>
                        `;
                    
            
                    }else{
                        //agregamos el "CHECKED" si elcontenido el el JSON es diferente a "---"
                        document.getElementById("checkN").innerHTML+=`
                        <td><input id="N${index}" type="checkbox" checked>${element}</input></td>
                        `;
                    
            
                    }
                    
                })



            break;
        case "JUEVES":
           

            horarios.forEach((element,index)=> {
                //turno MAÑANA
            
                    if(jsonMisCargos.Jueves.mañana[index]=="---"){
            
                        document.getElementById("checkM").innerHTML+=`
                        <td><input id="M${index}" type="checkbox">${element}</input></td>
                        `;
                    
            
                    }else{
                        //agregamos el "CHECKED" si elcontenido el el JSON es diferente a "---"
                        document.getElementById("checkM").innerHTML+=`
                        <td><input id="M${index}" type="checkbox" checked>${element}</input></td>
                        `;
                    
            
                    }


                    //turno TARDE
            
                    if(jsonMisCargos.Jueves.tarde[index]=="---"){
            
                        document.getElementById("checkT").innerHTML+=`
                        <td><input id="T${index}" type="checkbox">${element}</input></td>
                        `;
                    
            
                    }else{
                        //agregamos el "CHECKED" si elcontenido el el JSON es diferente a "---"
                        document.getElementById("checkT").innerHTML+=`
                        <td><input id="T${index}" type="checkbox" checked>${element}</input></td>
                        `;
                    
            
                    }


                    //turno NOCHE
            
                    if(jsonMisCargos.Jueves.noche[index]=="---"){
            
                        document.getElementById("checkN").innerHTML+=`
                        <td><input id="N${index}" type="checkbox">${element}</input></td>
                        `;
                    
            
                    }else{
                        //agregamos el "CHECKED" si elcontenido el el JSON es diferente a "---"
                        document.getElementById("checkN").innerHTML+=`
                        <td><input id="N${index}" type="checkbox" checked>${element}</input></td>
                        `;
                    
            
                    }
                    
                })


            break;
        case "VIERNES":
            

            horarios.forEach((element,index)=> {
                //turno MAÑANA
            
                    if(jsonMisCargos.Viernes.mañana[index]=="---"){
            
                        document.getElementById("checkM").innerHTML+=`
                        <td><input id="M${index}" type="checkbox">${element}</input></td>
                        `;
                    
            
                    }else{
                        //agregamos el "CHECKED" si elcontenido el el JSON es diferente a "---"
                        document.getElementById("checkM").innerHTML+=`
                        <td><input id="M${index}" type="checkbox" checked>${element}</input></td>
                        `;
                    
            
                    }


                    //turno TARDE
            
                    if(jsonMisCargos.Viernes.tarde[index]=="---"){
            
                        document.getElementById("checkT").innerHTML+=`
                        <td><input id="T${index}" type="checkbox">${element}</input></td>
                        `;
                    
            
                    }else{
                        //agregamos el "CHECKED" si elcontenido el el JSON es diferente a "---"
                        document.getElementById("checkT").innerHTML+=`
                        <td><input id="T${index}" type="checkbox" checked>${element}</input></td>
                        `;
                    
            
                    }


                    //turno NOCHE
            
                    if(jsonMisCargos.Viernes.noche[index]=="---"){
            
                        document.getElementById("checkN").innerHTML+=`
                        <td><input id="N${index}" type="checkbox">${element}</input></td>
                        `;
                    
            
                    }else{
                        //agregamos el "CHECKED" si elcontenido el el JSON es diferente a "---"
                        document.getElementById("checkN").innerHTML+=`
                        <td><input id="N${index}" type="checkbox" checked>${element}</input></td>
                        `;
                    
            
                    }
                    
                })


            break;
        case "SABADO":
            

            horarios.forEach((element,index)=> {
                //turno MAÑANA
            
                    if(jsonMisCargos.Sabado.mañana[index]=="---"){
            
                        document.getElementById("checkM").innerHTML+=`
                        <td><input id="M${index}" type="checkbox">${element}</input></td>
                        `;
                    
            
                    }else{
                        //agregamos el "CHECKED" si elcontenido el el JSON es diferente a "---"
                        document.getElementById("checkM").innerHTML+=`
                        <td><input id="M${index}" type="checkbox" checked>${element}</input></td>
                        `;
                    
            
                    }


                    //turno TARDE
            
                    if(jsonMisCargos.Sabado.tarde[index]=="---"){
            
                        document.getElementById("checkT").innerHTML+=`
                        <td><input id="T${index}" type="checkbox">${element}</input></td>
                        `;
                    
            
                    }else{
                        //agregamos el "CHECKED" si elcontenido el el JSON es diferente a "---"
                        document.getElementById("checkT").innerHTML+=`
                        <td><input id="T${index}" type="checkbox" checked>${element}</input></td>
                        `;
                    
            
                    }


                    //turno NOCHE
            
                    if(jsonMisCargos.Sabado.noche[index]=="---"){
            
                        document.getElementById("checkN").innerHTML+=`
                        <td><input id="N${index}" type="checkbox">${element}</input></td>
                        `;
                    
            
                    }else{
                        //agregamos el "CHECKED" si elcontenido el el JSON es diferente a "---"
                        document.getElementById("checkN").innerHTML+=`
                        <td><input id="N${index}" type="checkbox" checked>${element}</input></td>
                        `;
                    
            
                    }
                    
                })


                    break;
            }
    }
