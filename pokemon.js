
$(document).ready(function(){
    
    $("#getpoke").on("click", function(){
    let name = $("#poke").val();
    
        $.ajax({
        
            url: "https://pokeapi.co/api/v2/pokemon/"+ name + "/",
             

            success: function(data){
                console.log(data)
                
                const pic = data.sprites.front_default
                const character = data.name
                const height = data.height
                const weight = data.weight
                let power = data.abilities
                for (let i = 0; i < power.length; i++) {
                     ability= power[i].ability.name;
                    
                }

                
                $("#name").html(character)
                $("#pic").attr("src", pic)
                $("#ability").html("Powers:" + " " + ability)
                $("#height").html("Height:" + " " + height)
                $("#width").html("Weight:" + " " + weight)
                

            }

        })
    })

})