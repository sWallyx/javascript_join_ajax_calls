window.onload = function(){
    var lista_pokemons = ['ivysaur', 'sandshrew', 'raichu'];
    crearLlamadas(lista_pokemons);
}

function crearLlamadas(pokemons){
    resultados = [];
    llamadas = [];
    for(i = 0; i < pokemons.length; i++){
        llamadaPokemon = $.ajax('https://pokeapi.co/api/v2/pokemon/' + pokemons[i] ,{
            complete: function (result){
                resultados.push(result.status)
            }
        });
        llamadas.push(llamadaPokemon);
    }

    $.when.apply($, llamadas).then(function() {
        console.log(resultados);
        for(i = 0; i < resultados.length; i++){
            if(resultados[i] == 27){
                console.log("Lo tenemos")
            }
        }
    });
}