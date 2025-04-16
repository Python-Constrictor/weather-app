export const ICON_MAP = new Map()

addMapping([0,1], "sun")
addMapping([2], "cloud-sun")
addMapping([3], "cloud")
addMapping([28,40,41,42,43,44,45,46,47,48,49], "smog")
addMapping([20,21,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,64,65,66,67,68,69], "cloud-showers-heavy")
addMapping([22,31,32,33,34,35,36,37,38,39,71,72,73,74,75,76,77,78,79], "snowflake")
addMapping([29,95,96,97,98,99], "cloud-bolt");
addMapping([1000,1001],"moon-clear");
addMapping([1002,1003],"moon-cloud")

function addMapping(values,icon){
    values.forEach(value =>{
        ICON_MAP.set(value,icon)
    })
}