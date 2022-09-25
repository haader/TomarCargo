
console.log("add a('clave','valor')")
function a(clave,valor) {
    
    console.log("se ejecuto la función addMongo()")

    const xmladd=new XMLHttpRequest();

  xmladd.open("POST",'https://abccors.herokuapp.com/https://data.mongodb-api.com/app/data-fwjec/endpoint/data/v1/action/insertOne');
  
  xmladd.setRequestHeader('Content-Type','application/json');
  //xmladd.setRequestHeader('Access-Control-Request-Headers','*');
  xmladd.setRequestHeader('api-key','TGLYt3zO8G1cWOSZK2xwaeIdeAkpoyLbspBQsbFgS3MyasIhTthH3g3sZdmeZaTd');
  //'Content-Type:application/json'
  let tt=`{
    "dataSource": "Cluster0",
    "database": "prueba",
    "collection": "hola",
    "document": {
        "${clave}": "${valor}"
      }
      }`;

      console.log(tt);
  
  xmladd.send(tt);

    xmladd.onreadystatechange= ()=>{
        if (xmladd.readyState==4&&xmladd.status==200) {
            console.log("RESPUESTA DEL ADD")
            console.log(xmladd.responseText)
        }else if(xmladd.readyState==4&&xmladd.status==400){
            console.log("RESPUESTA DEL ADD BAD")
            console.log(xmladd.responseText)
        }
    }
}
  