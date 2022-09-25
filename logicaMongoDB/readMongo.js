console.log("read f()");

function f(){
    const filterXML=new XMLHttpRequest();
    filterXML.open("POST",'https://abccors.herokuapp.com/https://data.mongodb-api.com/app/data-fwjec/endpoint/data/v1/action/find');
    filterXML.setRequestHeader('Content-Type','json/application');
    filterXML.setRequestHeader('api-key','TGLYt3zO8G1cWOSZK2xwaeIdeAkpoyLbspBQsbFgS3MyasIhTthH3g3sZdmeZaTd');
    filterXML.setRequestHeader('Accept','application/json');
    filterXML.send(`{
        "dataSource":"Cluster0",
        "database":"prueba",
        "collection":"hola",
        "filter": { 
           
         }
        }`);

        //IMPORTANTE LA URL debe decir "find" no "findOne"
        ////filtrando por ID
        /*

        "filter": { 
            "_id": { "$oid": "63155bfec463c8884e9b8bd8" }
         }

         //filtrando por clave valor!!

         "filter": { 
            "name":"susana"
         }

        */


    filterXML.onreadystatechange=()=>{
        if (filterXML.readyState==4&&filterXML.status==200) {
            
            console.log("good response buscar");
            console.log(filterXML.responseText);
            let arreglo=JSON.parse(filterXML.responseText);
            //console.log(arreglo.documents[2].name);
            console.log(arreglo);

        }else if(filterXML.readyState==4&&filterXML.status==400){
            console.log("bad response buscar");
            console.log(filterXML.responseText);
        }
    }
}