console.log("delete d('clave','valor')");

function d(){

    const deleteXML=new XMLHttpRequest();
    deleteXML.open('POST','https://abccors.herokuapp.com/https://data.mongodb-api.com/app/data-fwjec/endpoint/data/v1/action/deleteOne');
    deleteXML.setRequestHeader('Content-Type','application/json');
    deleteXML.setRequestHeader('api-key','TGLYt3zO8G1cWOSZK2xwaeIdeAkpoyLbspBQsbFgS3MyasIhTthH3g3sZdmeZaTd')
    deleteXML.send(`
    {
        "dataSource": "Cluster0",
        "database": "prueba",
        "collection": "hola",
        "filter":{ "user": {
            "name": "adrián",
            "age": "29"
          } }
        
    }`);
    //"filter": {"${buscar}":"${valor}"}
    deleteXML.onreadystatechange=()=>{
        if (deleteXML.readyState==4&&deleteXML.status==200) {
            console.log("good transacción");
            console.log(deleteXML.responseText);
        }else if(deleteXML.readyState==4&&deleteXML.status==400){
            console.log("bad conection");
            console.log(deleteXML.responseText);
        }
    }
        
    
}