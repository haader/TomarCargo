function irConfDato(){
    
    if(!localStorage.getItem("calendarioLocal")){
        var estadoHorarioDB="NO HAY Datos Guardados";
    }else{
        var estadoHorarioDB="HAY Datos Guardados";
    }

    if(!localStorage.getItem("objetoSeleccionCargos")){
        var estadoFiltroDB="NO HAY Datos Guardados";
    }else{
        var estadoFiltroDB="HAY Datos Guardados";
    }

    document.getElementById("cuerpo").innerHTML+=`
    
    <div id="windowFiltro" class="windowFiltro">

            <button class="exite" onclick="exite()"><ion-icon name="close-circle-outline"></ion-icon></button>

            <div class="divFiltro" id="IDHorarioDB">
                <text><strong>Horarios:</strong></text>
                <p>${estadoHorarioDB}</p>
                <button  id="btnDBHorario" onclick="deleteDBHorario()">Borrar Datos</button>    
            </div>


            <div class="divFiltro" id="IDFiltroDB">
            <text><strong>Filtros:</strong></text>
                <p>${estadoFiltroDB}</p>
                <button  id="btnDBFiltro" onclick="deleteDBfiltro()">Borrar Datos</button>    

            </div>
    </div>
    <div id="blackID" class="black">
    </div>
    `;
}

function deleteDBHorario(){
    localStorage.removeItem("calendarioLocal");
    
    estadoHorarioDB="Los datos fueron borrados";

    document.getElementById("IDHorarioDB").innerHTML=`
    
    <text><strong>Horarios:</strong></text>
    <p>${estadoHorarioDB}</p>
    <button  id="btnDBHorario" onclick="deleteDBHorario()">Borrar Datos</button>    
    `;
}

function deleteDBfiltro(){
    localStorage.removeItem("objetoSeleccionCargos");
    estadoFiltroDB="Los datos fueron borrados";
    document.getElementById("IDFiltroDB").innerHTML=`
    
                                                <text><strong>Filtros:</strong></text>
                                                <p>${estadoFiltroDB}</p>
                                                <button  id="btnDBFiltro" onclick="deleteDBfiltro()">Borrar Datos</button>   
                                                
                                                `

    
    
}
