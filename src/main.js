//git subtree push --prefix dist origin gh-pages
//git push -u origin main

import "./style.css"
import {getweather} from "./weather.js"
import {ICON_MAP} from "./iconmap.js"
import { getSunriseSunset } from "./sunriseSunsetTime.js";
navigator.geolocation.getCurrentPosition(positionSuccess, positionError)
function positionSuccess(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timezone;
    getSunriseSunset(position.coords.latitude,position.coords.longitude).then(renderSunriseSunset)
    getweather(lat,long,timezone).then(renderWeather).catch(e => {
        console.error(e);
        alert(e);
    })
}
function positionError(){
    alert("we couldn't find you")
}

function renderWeather({current,daily,hourly}) {
    renderCurrentWeather(current),
    renderDailyWeather(daily),
    renderHourlyWeather(hourly),
    changePageHue(current),
    document.body.classList.remove("blurred")
}

function setValue(selector, value, {parent = document} = {}){
    parent.querySelector(`[data-${selector}]`).textContent = value
}

function renderSunriseSunset(ssdata){
    setValue("day-sunrise", ssdata.data.results.sunrise.slice(0,-6) + " " + ssdata.data.results.sunrise.slice(-2));
    setValue("day-sunset", ssdata.data.results.sunset.slice(0,-6) + " " + ssdata.data.results.sunset.slice(-2));
}

function getIconUrl(iconcode){
    return `${import.meta.env.BASE_URL}/icons/${ICON_MAP.get(iconcode)}.svg`
}

function setUVrgb (r,g,b){
    document.documentElement.style.setProperty('--uvR', r);
    document.documentElement.style.setProperty('--uvG', g);
    document.documentElement.style.setProperty('--uvB', b);
}

const currentIcon = document.querySelector("[data-current-icon]")
function renderCurrentWeather(current){
    let add = 0;
    const DATE = new Date();
    const USER_TIME = DATE.getHours();
    if((USER_TIME >=21 || USER_TIME <=5) && (current.iconCode <=3)) add = 1000;
    currentIcon.src = getIconUrl(current.iconCode+add)
    setValue("current-temp", current.currentTemp)
    setValue("current-high", current.highTemp)
    setValue("current-low", current.lowTemp)
    setValue("current-fl-high", current.highFeelsLike)
    setValue("current-fl-low", current.lowFeelsLike)
    setValue("current-wind", current.windSpeed)
    setValue("current-precipitation", current.precip)
    setValue("current-cloud-cover",current.cloudCover)
    setValue("current-humidity",current.humidity)
    setValue("current-pressure",current.pressure)
    setValue("current-uv",current.uv)
    const UV = Math.round(current.uv);
    console.log(UV)
    if(UV>=1 && UV <=2){
        setUVrgb(131,200,139)
    }
    else if(UV>=3 && UV <=5){
        setUVrgb(255,220,1)
    }
    else if(UV>=6 && UV <=7){
        setUVrgb(248,156,28)
    }
    else if(UV>=8 && UV <=10){
        setUVrgb(238,29,35)
    }
    else{
        setUVrgb(216,52,132)
    }
}

const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, {weekday: "long"})
const dailySection = document.querySelector("[data-day-section]")
const dayCardTemplate = document.getElementById("day-card-template")
function renderDailyWeather(daily){
    dailySection.innerHTML = ""
    daily.forEach(day => {
        const element = dayCardTemplate.content.cloneNode(true)
        setValue("temp", day.maxTemp, {parent: element})
        setValue("day", DAY_FORMATTER.format(day.timestamp), {parent: element})
        setValue("precip", day.precipitation, {parent: element})
        element.querySelector("[data-icon]").src = getIconUrl(day.iconCode)
        dailySection.append(element)
    })
}

const HOUR_FORMATTER = new Intl.DateTimeFormat(undefined, {hour: "numeric", hour12: true})
const HOUR_FORMATTER_24 = new Intl.DateTimeFormat(undefined, {hour: "numeric", hour12: false})
const hourlySection = document.querySelector("[data-hour-section]")
const hourRowTemplate = document.getElementById("hour-row-template")
function renderHourlyWeather(hourly){
    hourlySection.innerHTML = ""
    hourly.forEach(hour => {
        const element = hourRowTemplate.content.cloneNode(true)
        setValue("temp", hour.temp, {parent: element})
        setValue("fl-temp", hour.feelsLike, {parent: element})
        setValue("wind", hour.windSpeed, {parent: element})
        setValue("precip", hour.precip, {parent: element})
        setValue("precip-chance", hour.precip_chance, {parent: element})
        setValue("day", DAY_FORMATTER.format(hour.timestamp), {parent: element})
        setValue("time", HOUR_FORMATTER.format(hour.timestamp), {parent: element})
        let add = 0;
        const USER_TIME = HOUR_FORMATTER_24.format(hour.timestamp);
        if((USER_TIME >=21 || USER_TIME <=5) && (hour.iconCode <=3)) add = 1000;
        element.querySelector("[data-icon]").src = getIconUrl(hour.iconCode+add)
        hourlySection.append(element)
    })
}

function changePageHue(current){
    let hue;
    const currentDate = new Date();
    let iconCode = current.iconCode;
    if(iconCode == 0 || iconCode == 1 || iconCode == 2) hue = 40;
    else hue = 200;
    document.documentElement.style.setProperty('--pageHue', hue);
    document.documentElement.style.setProperty('--iconHue', `${(360-200)+hue}deg`);
    return hue;
}