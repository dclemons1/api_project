$(document).ready(function(){
    console.log("ready")
    
    $("#find").on("click", function(){
        let ayat = $("#ayat").val();
        let surah = $("#surah").val();
        

        $.ajax({
            url: "http://api.alquran.cloud/search/" + ayat + "/" + surah + "/en.pickthall",
            success: function(code){
                console.log(code.data.matches)
                let match = code.data.matches
            for (let i = 0; i < match.length; i++) {
                console.log("working")
                results = " Surah " + match[i].surah.englishName + "<br>" + "Ayat #" + match[i].numberInSurah + "<li>" + match[i].text + "<br>" + "<br>";
                $("body").append(results).css("color","white");

            
                
            }     
        
            }
            
        })    

    })
    $("#times").on("click", function(){
        let key = "24af18c3d6a134768de00b18c7277a6b";
        let month = "11"
        let year = "2018"
        let day = "25"

    $.ajax({
        
        url: "http://api.ipstack.com/check?access_key=" + key,


        success: function(data){
            console.log(data)
            let a = data.city
            let b = data.country_name

            $.ajax({
                url: "http://api.aladhan.com/v1/timingsByCity?city=" +a+ "&country=" +b+"&method=8",
        
                success: function(code){
                    console.log(code.data)
                    let pray = code.data.timings;
                    
                    salatarray = Object.values(pray)
                    for(i=0;i<salatarray.length;i++){
                        fajr = " Fajr - " + salatarray[0] + "<br>",
                         sunrise=" Sunrise - " + salatarray[1] + "<br>",
                        dhuhr= " Dhuhr - " + salatarray[2] + "<br>",
                        asr = " Asr - " + salatarray[3] + "<br>",
                        maghrib = " Maghrib - " + salatarray[4] + "<br>",
                        isha = " Isha - " + salatarray[6] + "<br>"


                        
                    }
                    $("body").append("PRAYER TIMES" + "<br>" + fajr,sunrise,dhuhr,asr,maghrib,isha).css("color", "red");

                    }
            

                
            })
        }

    })
    
    

    })
    
    
})