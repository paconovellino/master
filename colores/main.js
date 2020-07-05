(function () {
  ("use strict");

  // se pone la combinacion de todas las letras y los digitos de hex
  // para que las tome como fondo
  var letters = "0123456789abcdef";

  //  se le pone el signo de # para que lo lea como hex
  var color = "#";

  //  genera el codigo hex aleatoriamente
  // que contiene 6 digitos/letras
  for (var i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];

  // establece el color de fondo de body en el html
  document.body.style.backgroundColor = color;

  //imrpime el colo en la consola para probar que sirve
  console.log(color);

  // en el html tengo el id respuesta que lo tengo que poner en correcto pero tengo un alert por el momento
  var respuesta = document.getElementById("answer");
  respuesta.innerHTML = "";

  //al darle clic al boton se crea una funcion que tiene una variable getText con la que se obtien
  //el valor que se ingresa en la caja de texto con el id de name
  //el seultado se manda a un id demo dentro del html para probar que se esté mandando
  document.getElementById("button").onclick = function () {
    
    var getText = document.getElementById("name").value;
    // document.getElementById("demo").innerHTML = getText;
    // en el if pongo que si es igual a #+la funcion getText me crea la alerta de
    // bien hecho o la de error si no son iguales
    if (color === "#" + getText) {
        document.getElementById("answer").innerHTML = "Lo lograste!"
     // alert("Bien hecho. Adivinastes");
    } else {
      //alert("Error!");
      document.getElementById("answer").innerHTML = "Sigue intentando";
    }

  };
})();
