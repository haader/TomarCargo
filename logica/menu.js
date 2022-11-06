//
document.getElementById("idListDesplegableCel").style.display="none";
document.getElementById("IDicon").addEventListener("click",()=>{
    
    
    
    if(document.getElementById("idListDesplegableCel").style.display=="none"){
        
        document.getElementById("idListDesplegableCel").style.display="flex";

        document.getElementById("IDhorarioContenedor").style.marginTop="7.5rem";
    }else{
        
        document.getElementById("idListDesplegableCel").style.display="none";
        document.getElementById("IDhorarioContenedor").style.marginTop="0";
    }
});