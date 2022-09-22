var contador=1;
function agregar()
{
  var nuevoelemento=document.createElement("p"); 
  var nuevotexto=document.createTextNode("Economia " + contador + " - ");
  contador++;
  nuevoelemento.appendChild(nuevotexto);
  var puntero=document.getElementById("parrafos");
  puntero.appendChild(nuevoelemento);
}
