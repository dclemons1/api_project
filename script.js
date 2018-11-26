$(document).ready(function (){
    console.log("ready")
    $.ajax({
        url: "http://api.icndb.com/jokes/random/3",

        success: function(data){
            console.log(data)
            const jokeone = data.value[0].joke
            const joketwo = data.value[1].joke
            const jokethree = data.value[2].joke

            $("#jokeonetext").html(jokeone)
            $("#joketwotext").html(joketwo)
            $("#jokethreetext").html(jokethree)

        },
        error: function(request, error){
            console.log(error)
            console.log(request)

        }
    })
})