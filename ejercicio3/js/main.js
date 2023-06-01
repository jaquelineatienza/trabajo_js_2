let but=document.getElementById("boton")

but.addEventListener("click",()=>{
    let Operacion=document.getElementById("operacion").value;
    let valor1=document.getElementById("numero1").value;
    let valor2=document.getElementById("numero2").value;
    let resultado=0;
   if(Operacion==1){
    document.getElementById('resultado').innerHTML=parseInt(valor1)+parseInt(valor2);
   }else if(Operacion==2){
  document.getElementById('resultado').innerHTML=parseInt(valor1)-parseInt(valor2);
   }else if(Operacion==3) {
    document.getElementById('resultado').innerHTML=parseInt(valor1)*parseInt(valor2);
   }else{
    document.getElementById('resultado').innerHTML=parseInt(valor1)/parseInt(valor2);
   }

 





})