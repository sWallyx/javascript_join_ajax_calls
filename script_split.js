window.onload = function(){
    var lista_pokemons = ['ivysaur', 'sandshrew', 'raichu'];
    crearLlamadas(lista_pokemons);
}

function crearLlamadas(pokemons){
    llamadas = [];
    for(i = 0; i < pokemons.length; i++){
        llamadas.push(miLlamada(pokemons[i]));
    }
    gestionar_respuestas(llamadas);  
}

function gestionar_respuestas(llamadas){
    console.log("Soy split")
    $.when.apply($, llamadas).then(function() {
        console.log(resultados);
    });
}

function miLlamada(pokemon){
    resultados = [];
    llamadaPokemon = $.ajax('https://pokeapi.co/api/v2/pokemon/' + pokemon ,{
        complete: function (result){
            resultados.push(result.status)
        }
    });

    return llamadaPokemon;
}