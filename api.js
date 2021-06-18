const axios = require("axios");
const url = "https://api.openweathermap.org/data/2.5/weather";
const key = "955cc27669d64bdc2f4aeca844697c51";

//Function returns a dictionary that contains the tempertures from an specific city searched in Open weather api
function getApiCityTemp(city) {
    
    const link  = `${url}?q=${city}&appid=${key}`
    try {
        const apiData = axios.get(link)
        .then((res) => {
            const data = {"act": Number((res.data.main.temp-273.15).toFixed(2)),
                          "max": Number((res.data.main.temp_max-273.15).toFixed(2)),
                          "min": Number((res.data.main.temp_min-273.15).toFixed(2))};
             return data;
        })
        .catch((err) =>
            "City not found"
        )
        return apiData;
        }

        catch (error) {
            null;
        }
}

async function print(city){
    p=await getApiCityTemp(city);
    console.log(p);
}

//print("Hola")

module.exports={
    getApiCityTemp
}