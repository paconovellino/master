(function(){
'use strict'
// borro lo que hay en el id contianer del HTML
    var x = document.querySelector('.row')
    x.innerHTML = ''

    console.log(pokemons) // imprime la info del archivo pokedex.js pero tiene que tener el orden correcto en el archivo html para que sea lo primero que saca
    // // console.log(pokemons[1]) //impirmo el 5 para ver que funciones
    
    
    // primero creo las variables para obtener la info del objeto
    var pokemonPic = []
    for (var i = 1; i < pokemons.length; i++) {
        var pokemonId = i;
        var stringUrl = 'https://pokeres.bastionbot.org/images/pokemon/' + pokemonId + '.png'
        pokemonPic.push(stringUrl)
    }

    var pokemonNumber = []
        for(var i = 0; i < pokemons.length; i++){
        pokemonNumber.push(pokemons[i].id)
        } 

    var pokemonName = []
        for (var i = 0; i < pokemons.length; i++) {
            pokemonName.push(pokemons[i].name.english)
        }
    var pokemonType = []
        for (var i = 0; i < pokemons.length; i++) {
            pokemonType.push(pokemons[i].type[0])
        }
    var pokemonType2 = []
        for (var i = 0; i < pokemons.length; i++){
            pokemonType2.push(pokemons[i].type[1])
        }

    var pokemonAttack = []
        for (var i = 0; i < pokemons.length; i++) {
            pokemonAttack.push(pokemons[i].base.Attack)
        }

// creo la información dom para que funcione como bootstrap
    for (var j = 0; j < 24; j++){
        
        var div = document.createElement('div')
        div.setAttribute('class', 'row row-cols-1 row-cols-md-3')

        var col = document.createElement('div')
        col.setAttribute('class', 'col mb-4')

        var card = document.createElement('div')
        card.setAttribute('class', 'card')

        var img = document.createElement('IMG')
        img.setAttribute('src', pokemonPic[j])
        img.setAttribute('class', 'card-img-top')

        var cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body')

        var title = document.createElement('h3')
        title.setAttribute('class', 'card-title')
        var pokeNombre = document.createTextNode(pokemonName[j])
        title.appendChild(pokeNombre)

        var paragraph = document.createElement('h5')
        paragraph.setAttribute('class', 'card-text')
        var pokeDesc = document.createTextNode('Type: '+ pokemonType[j] + ', ' + pokemonType2[j])
        paragraph.appendChild(pokeDesc)

        var paragraphAttack = document.createElement('h5')
        paragraphAttack.setAttribute('class', 'card-text')
        var pokeAtac = document.createTextNode('Attack: '+ pokemonAttack[j])
        paragraphAttack.appendChild(pokeAtac)

        //console.log(pokeNombre)

        x.appendChild(div)
        div.appendChild(col)
        col.appendChild(card)
        card.appendChild(img)
        card.appendChild(cardBody)
        card.appendChild(title)
        card.appendChild(paragraph)
        card.appendChild(paragraphAttack)


    }
    
    // le paso la información que cree al div id container para que ceer los cards


})()