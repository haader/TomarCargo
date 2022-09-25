console.log("update p()");
console.log("**************");

function p(){


const xmlup=new XMLHttpRequest();
xmlup.open('POST','https://abccors.herokuapp.com/https://data.mongodb-api.com/app/data-fwjec/endpoint/data/v1/action/updateOne');
xmlup.setRequestHeader('Content-Type','application/ejson');
xmlup.setRequestHeader('api-key','TGLYt3zO8G1cWOSZK2xwaeIdeAkpoyLbspBQsbFgS3MyasIhTthH3g3sZdmeZaTd')
xmlup.send(`
            {
        "dataSource":"Cluster0",
        "database":"prueba",
        "collection":"hola",
        "filter":{"name":"susana"},
        "update":{
            "$set":{"name":"my susana"}
        }
    }
`);
/*
 "filter": { "greeting": "Hello, world!" },
     "update": {
         "$set": { "greeting": "Hello, universe!" }
     }

 */

xmlup.onreadystatechange=()=>{
    if(xmlup.readyState==4&&xmlup.status==200){
        console.log("GOOD UP, se actualizaron los datos!!");
        console.log(xmlup.responseText);

    }else if(xmlup.readyState==4&&xmlup.status==400){
        console.log("BAD UP");
        console.log(xmlup.responseText);
    }
}

}