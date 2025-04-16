import axios from "axios"

export function getSunriseSunset(lat,lon){
    //https://api.sunrisesunset.io/json?lat=38.907192&lng=-77.036873
    return axios.get(
        "https://api.sunrisesunset.io/json?",{
            params:{
                lat:lat,
                lng:lon
            }
        }
    )
}