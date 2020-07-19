(function(){
    ('use strict');

    console.log(autos[0])


var marca = []
    for(var i = 0; i < autos.length; i++){
    marca.push(autos[i].make)
}

var anio = []
    for (var i = 0; i < autos.length; i++) {
        anio.push(autos[i].year)
    }

var caja = []
    for (var i = 0; i < autos.length; i++) {
        caja.push(autos[i].transmission)
    }

var precio = []
    for (var i = 0; i < autos.length; i++) {
        precio.push(autos[i].price)
    }


var searchForm = []

document.getElementById("button").onclick = function () {
    var getBrand = document.getElementById("brand-form").value;
    console.log(getBrand)
    var getYear = document.getElementById("year-form").value;
    console.log(getYear)
    var getTrans = document.getElementById("trans-form").value;
    console.log(getTrans)
    var getPrice = document.getElementById("price-form").value
    console.log(getPrice)
}



if(marca && anio && caja && precio === 1){

}else{

}

})()