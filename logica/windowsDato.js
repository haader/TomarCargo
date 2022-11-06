function irConfDato(){
    
    //estado CALENDARIO
    if(!localStorage.getItem("calendarioLocal")){
        var estadoHorarioDB="NO HAY Datos Guardados";
    }else{
        var estadoHorarioDB="HAY Datos Guardados";
    }

    //estdo FILTRO
    if(!localStorage.getItem("objetoSeleccionCargos")){
        var estadoFiltroDB="NO HAY Datos Guardados";
    }else{
        var estadoFiltroDB="HAY Datos Guardados";
    }

    //estado arrayDistrito
    if(!localStorage.getItem("arrayDistrito")){
        var estadoDistritoDB="NO HAY Datos Guardados";
    }else{
        var estadoDistritoDB="HAY Datos Guardados";
    }

    //estado arrayNivel
    if(!localStorage.getItem("arrayNivel")){
        var estadoNivelDB="NO HAY Datos Guardados";
    }else{
        var estadoNivelDB="HAY Datos Guardados";
    }

    document.getElementById("cuerpo").innerHTML+=`
    
    <div id="windowFiltro" class="windowFiltro">

            <button class="exite" onclick="exite()"><ion-icon name="close-circle-outline"></ion-icon></button>

            <div class="divFiltro" id="IDHorarioDB">
                <text><strong>Horarios:</strong></text>
                <p>${estadoHorarioDB}</p>
                <button  onclick="deleteDBHorario()">Borrar Datos</button>    
            </div>


            <div class="divFiltro" id="IDFiltroDB">
            <text><strong>Filtros:</strong></text>
                <p>${estadoFiltroDB}</p>
                <button  onclick="deleteDBfiltro()">Borrar Datos</button>    
            </div>

            <div class="divFiltro" id="IDFiltroDB">
            <text><strong>Distritos:</strong></text>
                <p>${estadoDistritoDB}</p>
                <button onclick="deleteDBdistrito()">Borrar Datos</button>     
            </div>

            <div class="divFiltro" id="IDFiltroDB">
            <text><strong>Niveles:</strong></text>
                <p>${estadoNivelDB}</p>
                <button  onclick="deleteDBnivel()">Borrar Datos</button>    
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
    <button  onclick="deleteDBHorario()">Borrar Datos</button>    
    `;
}

function deleteDBfiltro(){
    localStorage.removeItem("objetoSeleccionCargos");
    estadoFiltroDB="Los datos fueron borrados";
    document.getElementById("IDFiltroDB").innerHTML=`
    
                                                <text><strong>Filtros:</strong></text>
                                                <p>${estadoFiltroDB}</p>
                                                <button  onclick="deleteDBfiltro()">Borrar Datos</button>   
                                                
                                                `

}


function deleteDBdistrito(){
    localStorage.removeItem("arrayDistrito");
    estadoDistritoDB="Los datos fueron borrados";
    document.getElementById("IDDistritoDB").innerHTML=`
    
                    <text><strong>Distrito:</strong></text>
                    <p>${estadoDistritoDB}</p>
                    <button onclick="deleteDBdistrito()">Borrar Datos</button>   
                    `
}

function deleteDBnivel(){
    localStorage.removeItem("arrayNivel");
    estadoNivelDB="Los datos fueron borrados";
    document.getElementById("IDNivelDB").innerHTML=`
    
                    <text><strong>Nivel:</strong></text>
                    <p>${estadoNivelDB}</p>
                    <button  onclick="deleteDBnivel()">Borrar Datos</button>   
                    `
}

