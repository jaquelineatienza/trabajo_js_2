document.addEventListener('DOMContentLoaded',function(){
    const parrafo= document.getElementById('lorem');
    const boton= document.getElementById('boton');

 boton.addEventListener('click',function(){
    if (parrafo.classList.contains('purple')){
        parrafo.classList.remove('purple');
        parrafo.classList.add('orange')
    }else{
        parrafo.classList.remove('orange');
        parrafo.classList.add('purple');
  }
  });
});
