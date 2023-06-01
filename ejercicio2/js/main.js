const tarjetas=[
    {
        titulo:"javascript",
        img:"./css/imagenes/javaescript.jpg",
        descripcion:"JavaScript es un lenguaje de programación de alto nivel, dinámico e interpretado"
    },
    {
        titulo:"html",
        img:"./css/imagenes/html.jpg",
        descripcion:"El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos."
    },
    {
        titulo:"CSS",
        img:"./css/imagenes/css.png",
        descripcion:"Las hojas de estilo en cascada (CSS, cascading style sheets) permiten crear páginas web atractivas"
    },
    {
        titulo:"Python",
        img:"./css/imagenes/python.png",
        descripcion:"Python es un lenguaje de programación de propósito general, multiparadigma y multiplatamafor"
    }

]
let cards = document.getElementById("cardcontenedor");
tarjetas.map((x)=>{
    cards.innerHTML += `<div class="col">
    <div class="card shadow-sm">
    <h4>${x.titulo}</h4>
    <img src="${x.img}" alt="">
      <div class="card-body">
        <p class="card-text">${x.descripcion}</p>
        </div>
    </div>`;
});