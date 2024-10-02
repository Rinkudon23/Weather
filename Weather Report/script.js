


let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let location = document.getElementById("text").value


    let fetchweather = async()=>{
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=928a7cb70137f89a92dd56cdaa1add00`)
        let finaldata = await data.json()
        // console.log(finaldata)

        let descriptionvalue =(finaldata.weather[0].main).toUpperCase()
        // console.log(descriptionvalue)
        let tempvalue =Math.floor((finaldata.main.temp - 273))
        let humidvalue =(finaldata.main.humidity)


        let desc = document.querySelector("#secondcontainer>p")

        desc.innerHTML = descriptionvalue.toUpperCase()



        let temp = document.querySelector("#temperature>h1")
        temp.innerHTML= `${tempvalue} <sup>0</sup>`
        
        
        let humid = document.querySelector("#humidity>h1")
        humid.innerHTML= humidvalue



        let img = document.getElementById("img")
        // console.log(img)
        let bgc = document.getElementById("maincontainer")

        switch (descriptionvalue) {
            case "CLEAR":
                 img.src = "./sunny-day.png";
                 bgc.style.backgroundImage = "url(./clearWeather.gif)";
                 break;

             case "CLOUDS":
                 img.src = "./clouds.png";
                 bgc.style.backgroundImage = "url(./cloudsWeather.gif)";
                 break;

             case "MIST":
                 img.src = "./mist.png";
                 bgc.style.backgroundImage = "url(./mistWeather.gif)";
                 break;

             case "HAZE":
                 img.src = "./haze.png";
                 bgc.style.backgroundImage = "url(./haze.gif)";
                 break;
            
             
            case "RAIN":
                 img.src = "./raining.png";
                 bgc.style.backgroundImage = "url(./raining.gif)";
                 break;     


            case "SNOW":
                 img.src = "./snow.png";
                 bgc.style.backgroundImage = "url(./snowWeather.gif)";
                 break;     


            case "DUST":
                 img.src = "./sandstrom.png";
                 bgc.style.backgroundImage = "url(./dust.gif)";
                 break;     

            default:
                 img.src = "./sunny-day.png";
                 bgc.style.backgroundImage = "url(./raining.gif)";
                
        

        }



        



    }

    fetchweather()

})