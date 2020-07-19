(function(){
    ('use strict');
    var myButton = document.getElementById("button-search");
    var carsContainer= document.getElementById("card-container");
    
    myButton.addEventListener("click", function funcButton(){
        // Aquí se jalan los datos del usuario
        var userMake= document.getElementById("form-make");
        var selectedMake= userMake.options[userMake.selectedIndex].text;
        var userYear= document.getElementById("form-year");
        var selectedYear= userYear.options[userYear.selectedIndex].text;
        var userVelo= document.getElementById("form-speed");
        var selectedVelo= userVelo.options[userVelo.selectedIndex].text;
        var userCash= document.getElementById("form-budget").value;
        // Se crea el array que contendrá los autos que han pasado el filtro
        var cotizador = [];
        //Se crea variables que convierte el valor "Automático" en auto && "Manual" en manual
        if(selectedVelo == "Automático"){
            var finalVelo = "auto";
        };
    
        if(selectedVelo == "Manual"){
            var finalVelo = "manual";
        };
        // El for recorre la BD 
        for(var i=0; i<autos.length; i++){
            // Se jalan los datos de la base de datos uno por uno
            var makeBD = autos[i].make;
            var yearBD = autos[i].year;
            var veloBD = autos[i].transmision;
            var cashBD = autos[i].price;
            // Se hace el cálculo del 20% del precio total de los autos
            var porcentPrice = cashBD*(0.20);
            // Busca coincidencias entre los datos
            if(selectedMake==makeBD && yearBD==selectedYear && finalVelo==veloBD && porcentPrice<=userCash){
                // Introduce los autos que cumplen los parámetros
                cotizador.push(autos[i])
            }
        }

        // Aquí se comparan las marcas para meter la imagen que coincide
        var imgMake= ""
            if (selectedMake=="Nissan"){
                imgMake = "./assetts/nissan.png";
            }
            if (selectedMake=="Chevrolet"){
                imgMake = "./assetts/chevrolet.png";
            }
            if (selectedMake=="Ford"){
                imgMake = "./assetts/ford.png";
            }
    
        for(var i=0; i<cotizador.length;i++){
            // Se meten los autos en el html
            var div = document.createElement('div');
            div.id = 'carsOutput';
            div.className= 'col-4';
            var cBody = document.createElement('div');
            cBody.className='card-body';
            var fMakeimg = document.createElement('img');
            fMakeimg.className="img-card";
            fMakeimg.setAttribute('src',imgMake);
            var fMake = document.createElement('p');
            fMake.innerHTML= cotizador[i].model;
            fMake.className="card-title";
            var fModel = document.createElement('p')
            fModel.innerHTML = "Tipo de auto: " + cotizador[i].body_styles;
            var fColors = document.createElement('p')
            fColors.innerHTML = "Colores disponibles: " + cotizador[i].colors;
            var fPrice = document.createElement('p')
            fPrice.innerHTML = "$ " + cotizador[i].price;
            fPrice.className="card-title";
            carsContainer.appendChild(div);
            div.appendChild(cBody);
            cBody.appendChild(fMakeimg);
            cBody.appendChild(fMake);
            cBody.appendChild(fModel);
            cBody.appendChild(fColors);
            cBody.appendChild(fPrice);
        }
    })
    

})()