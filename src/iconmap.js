export const ICON_MAP = new Map()

addMapping([0], "sun")
addMapping([1,2], "cloud-sun")
addMapping([3], "cloud")
addMapping([45,48], "smog")
addMapping([51,53,55,56,57,61,63,65,66,67,80,81,82], "cloud-showers-heavy")
addMapping([71,73,75], "snowflake")
addMapping([95,96,99], "cloud-bolt");
addMapping([1000],"moon-clear");
addMapping([1001,1002,1003],"moon-cloud")

function addMapping(values,icon){
    values.forEach(value =>{
        ICON_MAP.set(value,icon)
    })
}