//
document.getElementById("idListDesplegableCel").style.display="none";
document.getElementById("IDicon").addEventListener("click",()=>{
    
    
    
    if(document.getElementById("idListDesplegableCel").style.display=="none"){
        
        document.getElementById("idListDesplegableCel").style.display="flex";
    }else{
        
        document.getElementById("idListDesplegableCel").style.display="none";
    }
});