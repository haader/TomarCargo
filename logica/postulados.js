
function postulados(ige,id){
    let url="";
    const consulta=new XMLHttpRequest();
    consulta.open('GET','https://servicios3.abc.gob.ar/valoracion.docente/api/apd.oferta.postulante/select?fq=idoferta%3A1219995&q=idoferta%3A'+ige+'&rows=2&json.nl=map&sort=estadopostulacion%20asc%2C%20orden%20asc%2C%20puntaje%20desc&wt=json&json.wrf=');

    consulta.send();

    consulta.onreadystatechange=()=>{
        if(consulta.status==200&&consulta.readyState==4){

            let txt=consulta.responseText;
            console.warn("****LISTA POSTULADOS");
            
//            console.log(txt);
            let txt2=txt.slice(1,-2);
  //          console.log(txt2);
            let json=JSON.parse(txt2);
            console.log(json);

            if(json.response.numFound!=0){

            document.getElementById("bodyTablaPostulados"+id).innerHTML+=`
                        
                        <tr>
                            <td>${json.response.docs[0].nombres}</td>
                            <td>${json.response.docs[0].puntaje}</td>
                            <td>${json.response.docs[0].listadoorigen}</td>
                            <td>${json.response.docs[0].prioridad}</td>
                        </tr>
                        <tr>
                            <td>${json.response.docs[1].nombres}</td>
                            <td>${json.response.docs[1].puntaje}</td>
                            <td>${json.response.docs[1].listadoorigen}</td>
                            <td>${json.response.docs[1].prioridad}</td>
                        </tr>
                
            `;
            }else{
                document.getElementById("postulados"+id).innerHTML=`
                        <p>
                            No hay Postulados
                        </p>
                `;
            }
        }
    }
}